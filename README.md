



###  :sparkles: 开源不易，给个star吧~  问题反馈交流：648050824

 

[官方地址： http://shopro.top](http://shopro.top)

[码云仓库： https://gitee.com/itmonkey-cn/shopro.git](https://gitee.com/itmonkey-cn/shopro.git)

[github仓库：https://github.com/ITmonkey-cn/shopro.git](https://github.com/ITmonkey-cn/shopro.git)


# 部分页面展示
![1](https://images.gitee.com/uploads/images/2020/0710/162852_71fb79d2_2264724.jpeg "b1.jpg")

# Shopro使用说明

1. 首次安装需要 npm i 加载相关依赖 

2. 基于uni-app，需要下载hbuilderX进行编译

3. manifest.json中配置相关信息

    

# Shopro演示站

| ![微信小程序码](https://shopro-1253949872.cos.ap-beijing.myqcloud.com/dcloud/wx_code.jpg "微信小程序码") | ![H5](https://shopro-1253949872.cos.ap-beijing.myqcloud.com/dcloud/h5new.png "H5.png") | ![apk](https://www.fastadmin.net/addons/qrcode/index/build?text=https://www.fastadmin.net/app/shopro.html&logo=android "apk_code.png") |
|------------------------------------------------- | ---------------------------------------- | ---------------------------------- |
| 微信小程序                                        | H5二维码                                 |  安卓apk (暂未更新)                                  |




# 更新日志

## V1.3.7(2021-10-18)
1. 新增 商品订单申请开具发票功能
2. 修复 用户协议，隐私协议，门店申请协议，自提协议等富文本跳转
3. 修复 小程序端弹窗图片，非https协议无法保存的问题
4. 修复 用户信息页面刷新时数据丢失问题
5. 修复 用户信息页面修改密码点击无效问题
6. 修复 客服页面刷新，切换为默认客服问题
7. 修复 客服中，商品和订单，多次打开时列表内容重复问题
8. 修复 登录、注册、找回密码，获取验证码按钮未显示问题
9. 修复 轮播图组件参数
10. 优化 小程序端自提商品二维码不稳定问题
11. 优化 商家中心，订单金额的统计规则
12. 优化 钱包提现规则
13. 优化 商品列表搜索内容，存入搜索历史记录
14. 优化 商品详情优惠券 显示已领取状态


## V1.3.6(2021-8-30)
1. 优化 小程序性能问题，更换router底层依赖版本，精简店铺装修组件
2. 修复 登录卡片隐藏后，需要点击两次才能调起的问题
3. 修复 微信小程序，进入直播内容页面，跳转商品详情后，无法返回上一级的问题
4. 修复搜索页跳转商品列表，商品卡片偶尔重复问题
5. 修复门店中心的订单详情，下单时间NaN问题
6. 修复微信小程序真机测试时，自提商品核销码生成不稳定的问题
7. 修复微信小程序，登录错误，显示The given payload报错的问题。
8. 修复ios部分机型，首页装修优惠券背景空白问题
9. 重构 入口文件和shopro启动流程
10. 重构 vuex相关代码，拆分精简数据。
11. 优化 优惠券相关逻辑和样式
12. 修复 门店禁用后，前台还展示的问题
13. 优化 购物车逻辑
14. 优化 瀑布流排版不稳定（左右排列错误）
15. 优化 日历无法快速切换年份
16. 优化 选择商品规格组件
17. 优化 分享海报

## V1.3.2(2021-6-30)
1. 修复秒杀卡片百分比改为件数，统一百分比计算 
2. 修复门店地址信息过长会被遮盖
3. 修复苹果6s小程序端，分销中心弹窗不出来
4. 修复门店订单详情，单笔商品数量过多，底部发货按钮顶起
5. 修复商品卡片，添加添加购物车库存无限制问题
6. 修复小程序端秒杀卡片，跳转详情问题
7. 优化小程序端，确认订单优惠金额样式异常问题
8. 优化海报，首页banner裁剪方式 
9. 优化地址定位问题，改为选择位置
10. 优化确认订单，配送自提点的默认手机号问题
11. 优化购物车失效商品拦截，
12. 优化确认订单配送商品无经纬度等错误异常
13. 优化门店申请，位置选择
14. 优化瀑布流左右偶发不均问题


## V1.3.1(2021-6-17)
1. 优化自提点协议勾选检测。
2. 修复无自提门店，选择自提方式报错
3. 修复商品规格滑动问题
4. 修复一级分类，快速购买，持续loading问题
5. 修复分销中心分享链接，无法复制问题
6. 修复确认订单商品计数问题
7. 优化app端底部安全区域问题
8. 新增app端苹果登录
9. 更多细节体验优化，可扫码体验~

## V1.3.0(2021-6-8)
1. 重构所有页面，重新设计了样式，全面使用uview替换color-ui，感谢uview团队！
2. 优化页面加载速度，重写初始化流程，兼容H5的hash模式与history模式
3. 重写登录注册模块，自动登录注册、绑定/解绑 第三方授权登录信息，更新微信小程序最新的getUserProfile接口
4. 重构分享逻辑，分享信息使用状态管理，解决重复冗余加载，使用spm参数构造，支持添加自定义参数，精确的分享链路追踪（分享人、分享方式、页面、分享平台、受邀请人平台）解决了因小程序码参数苏的位数限制导致无法支持长页面和大用户ID被截断的问题。（之前的海报和分享卡片将作废）
5. 添加多提现方式（包含支付宝、微信企业付款、银行卡）
6. 重写海报模块
7. 更新了路由拦截和请求拦截器。
8. 重构App权限请求和加载速度
9. 默认使用原生底部导航，可修改代码实现自定义底部导航和后端对接
10. 更多重构细节体验优化，可扫码体验~


## V1.2.0(2021-1-12)
1. 新增官方客服
2. 新增分销中心,搭配后台强大的分销功能
3. 新增全局静态资源的服务地址
4. 新增uView UI 部分组件（特别鸣谢）
5. 优化IOS APP的网络权限验证流程
6. 优化海报的头像位置，适应小屏机型
7. 优化多选项卡切换的数据抖动问题
8. 优化H5微信支付的回调逻辑
7. 修复IOS App的webview内核，防止被Appstore审核被拒
8. 更多细节优化，可扫码体验~
## 更新功能部分截图
![V1.2.0功能](https://images.gitee.com/uploads/images/2021/0112/182440_a691a92b_2264724.png "some.png")


## V1.1.2(2020-10-15)
1. 新增：分享到朋友圈
2. 优化：商品详情页体验
3. 优化：分类页体验
4. 修复：商品购买计数器相关bug
5. 修复：小程序分享后空白页（适配新规则）
6. 修复：小程序自动更新版本报错
7. 其他：相关优化，问题修复。


## V1.0.7（2020-09-29）
1. 新增：多配送方式（到店自提、商家配送、自动发货）和对应详情列表页面
2. 新增：用户商家中心，门店切换，输码扫码核销，门店信息查看，发货，交易信息统计。
3. 新增：物流信息，对接快递鸟物流查询，多包裹列表。
4. 新增：商品售后，完善商品售后流程，服务单详情，售后进度查询和通知。
5. 新增：全局优惠券，优化优惠券领取使用相关。
6. 新增：部分页面下拉刷新，优化体验
7. 新增：第三方客服，跟进购物闭环。
8. 新增：微信，公众号地址导入。
9. 新增：多分类灵活配置，支持立即购买（类外卖）
10. 新增：app端，隐私协议相关。
11. 优化：海报升级体验
12. 优化: 富文本相关
14. 优化：小程序登录提示
15. 优化：首页推荐商品加载更多
16. 修复：低版本tabbar首次不渲染。
17. 修复：iphonX底部安全区域问题。
18. 修复：直播列表瀑布流排序问题
## 更新功能部分截图
![v1.0.7功能](https://images.gitee.com/uploads/images/2020/0929/161907_1de1deff_2264724.png "04.png")



## V1.0.6（2020-07-16）
1. 新增：底部导航购物车角标
2. 新增：单规格商品选择
3. 新增: 分享海报权限控制，必须得登录
4. 修复：自定义底部导航，带参报错
5. 修复：拼团商品数量选择限制
6. 修复：头部搜索为空查询。
7. 优化：我的拼团下拉刷新
8. 优化：商品下架，详情提醒
9. 以及后台相关修改优化。


## V1.0.5（2020-07-10）
1. 新增：自定义底部导航。后台返回底部导航数据，跳转任意页面，如果没有默认使用原生导航。
2. 新增：悬浮工具按钮。后台控制按钮显示页面， 工具按钮可以是弹窗，也可跳转页面。
3. 新增: 广告弹窗。后台控制弹窗显示页面，单次或者多次。
4. 新增：小程序分包。优化了不能开发模式不能预览，相应速度。
5. 新增: easycom组件引入。减少繁琐的组件引入（控制台提示的分包建议并不合理，可以忽略）
6. 修复：支付宝部分退款问题
7. 修复：小程序用户登录，无感登录支付
8. 修复：商品分类优化
9. 修复：小程序端授权登录session_key时效问题
10. 优化部分UI界面性能体验，更多后台新增功能可去官网体验~

## V1.0.4（2020-06-09）
1.首次开源发布




