/**
 * Wechat v1.0.0
 * @Class Wechat
 * @description shopro-wechat 1.0.0 wehcat第三方登录组件
 * @Author llidongtony
 * @Date 2020-02-19
 * @Email lidongtony@qq.com
 */
import api from '@/common/request/index'
import store from '@/common/store'
import router from '@/common/router'
import {
	API_URL
} from '@/env'

export default class Wechat {

	async login() {
		let token = '';
		if (router.$Route.path.indexOf('public/login') == -1) {
			uni.setStorageSync('fromLogin', router.$Route);
		}
		// #ifdef MP-WEIXIN
		store.commit('FORCE_OAUTH', true);
		// #endif
		// #ifdef H5
		this.wxOfficialAccountLogin();
		// #endif
		// #ifdef APP-PLUS
		token = await this.wxOpenPlatformLogin();
		return token;
		// #endif
	}
	// #ifdef H5

	wxOfficialAccountLogin() {
		let oUrl = window.location.href;
		window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + store.state.init.initData.wechat.appid +
			`&redirect_uri=${API_URL}user/wxOfficialAccountLogin&response_type=code&scope=snsapi_userinfo&state=` +
			oUrl;
		throw 'stop';
	}
	//临时登录获取OpenId 不入库不绑定用户

	wxOfficialAccountBaseLogin() {
		let oUrl = window.location.href;
		//首次进入 没有登录 保存
		window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + store.state.init.initData.wechat.appid +
			`&redirect_uri=${API_URL}user/wxOfficialAccountBaseLogin&response_type=code&scope=snsapi_base&state=` +
			oUrl;
		throw 'stop';
	}
	// #endif

	wxOpenPlatformLogin() {
		let that = this;
		return new Promise((resolve, reject) => {
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					if (loginRes.errMsg === "login:ok") {
						let authResult = loginRes.authResult;
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								if (infoRes.errMsg === "getUserInfo:ok") {
									let userInfo = infoRes.userInfo;
									api('user.wxOpenPlatformLogin', {
										authResult: authResult,
										userInfo: userInfo
									}).then(res => {
										if (res.code === 1) {
											resolve(res.data.token);
										}
									});
								}
							},
							fail: function(res) {
								api('dev.debug', {
									info: res
								})
							}
						});
					}
				},
				fail: function(res) {
					api('dev.debug', {
						info: res
					})
				}
			});
		});
	}

	// #ifdef MP-WEIXIN
	//微信小程序自动登录
	    getWxMiniProgramSessionKey(autoLogin = true) {
	        let that = this;
	        let sessionStatus = false;
	        let session_key = '';
	        return new Promise((resolve, reject) => {
	            uni.checkSession({
	                success(res) {
	                    if (res.errMsg === 'checkSession:ok') sessionStatus = true;
	                },
	                complete() {
	                    if (uni.getStorageSync('session_key') && sessionStatus) {
	                        resolve(uni.getStorageSync('session_key'));
	                    } else {
	                        uni.login({
	                            success: function(info) {
	                                let code = info.code;
	                                api('user.getWxMiniProgramSessionKey', {
	                                    code: code,
	                                    autoLogin: autoLogin
	                                }).then(res => {
	                                    if (res.code === 1) {
	                                        uni.setStorageSync('session_key', res
	                                            .data.session_key);
	                                        if (autoLogin) {
	                                            if (res.data.token) {
	                                                resolve(res.data.token);
	                                            } else {
	                                                resolve(false);
	                                            }
	                                        }
	                                        resolve(res.data.session_key);
	                                    } else {
	                                        reject(res.msg);
	                                    }
	                                });
	                            }
	                        });
	                    }
	                }
	            })
	        });
	    }
	
	    // 微信小程序 获取用户详细信息
	    wxMiniProgramLogin(refresh = false) {
	        let that = this;
	        return new Promise((resolve, reject) => {
	            uni.getUserProfile({ // 必须手动确认触发
	                desc: '完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
	                success: async res => {
	                    if (res.errMsg === "getUserProfile:ok") {
	                        api('user.wxMiniProgramLogin', {
	                            session_key: await that.getWxMiniProgramSessionKey(false),
	                            encryptedData: res.encryptedData,
	                            iv: res.iv,
	                            signature: res.signature,
	                            refresh: refresh
	                        }).then(res => {
	                            if (res.code === 1) {
	                                resolve(res.data.token)
	                            } else {
	                                uni.removeStorageSync('session_key')
	                            }
	                        });
	                    }
	                },
	                fail: res => {
	                    console.log(res)
	                },
	                complete: res => {
	                    console.log(res)
	                }
	            })
	        });
	    }

	// 小程序更新
	checkMiniProgramUpdate() {
		if (uni.canIUse('getUpdateManager')) {
			const updateManager = uni.getUpdateManager()
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function() {
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success: function(res) {
								console.log('success====', res)
								// res: {errMsg: "showModal: ok", cancel: false, confirm: true}
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate()
								}
							}
						})
					})
					updateManager.onUpdateFailed(function() {
						// 新的版本下载失败
						uni.showModal({
							title: '已经有新版本了哟~',
							content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
						})
					})
				}
			})
		}
	}
	// #endif


}