var webpackRequire=require("././../../webpack-require");webpackRequire("./src/pages/dashboard/index.js",{"./src/pages/dashboard/config.js":
/*!***************************************!*\
  !*** ./src/pages/dashboard/config.js ***!
  \***************************************/
/*! exports provided: default */function(a,e,t){"use strict";t.r(e),e.default={dashboard:{title:"有赞微商城插件示例",content:[{name:"Goods 商品",path:"/pages/dashboard/index?type=goods"},{name:"Groupon 拼团",path:"/pages/dashboard/index?type=groupon"},{name:"Seckill 秒杀",path:"/pages/dashboard/index?type=seckill"},{name:"LimitDiscount 限时折扣",path:"/pages/dashboard/index?type=limitdiscount"},{name:"Goods 商品页",path:"/packages/trade/index?alias=2fp4pt2vockaq&pageType=goods-detail"},{name:"OrderList 订单列表页",path:"/packages/trade/index?type=all&pageType=order"},{name:"OrderDetail 订单详情页",path:"/packages/trade/index?orderNo=E20180813171933000100008&pageType=order-detail"},{name:"ZanAccount 绑定手机号",path:"/packages/trade/zan-account/index"},{name:"Coupon 优惠券",path:"/packages/trade/coupon/index"},{name:"AddCart 加入购物车",path:"/packages/goods/addcart/index"},{name:"Cart 购物车",path:"/packages/cart/cart/index"}]},groupon:{title:"有赞微商城拼团插件",content:[{name:"大图样式",path:"/packages/goods/groupon/big/index"},{name:"小图样式",path:"/packages/goods/groupon/small/index"},{name:"列表样式",path:"/packages/goods/groupon/list/index"}]},goods:{title:"有赞微商城商品插件",content:[{name:"大图样式",path:"/packages/goods/goods/big/index"},{name:"小图样式",path:"/packages/goods/goods/small/index"},{name:"一大两小样式",path:"/packages/goods/goods/big1small2/index"},{name:"列表样式",path:"/packages/goods/goods/list/index"},{name:"一行三个样式",path:"/packages/goods/goods/three/index"},{name:"横向滑动样式",path:"/packages/goods/goods/three-swipe/index"},{name:"加入购物车",path:"/packages/goods/goods/add-cart/index"}]},seckill:{title:"有赞微商城秒杀",content:[{name:"大图样式",path:"/packages/goods/seckill/big/index"},{name:"小图样式",path:"/packages/goods/seckill/small/index"},{name:"一大两小样式",path:"/packages/goods/seckill/hybrid/index"},{name:"列表样式",path:"/packages/goods/seckill/list/index"}]},limitdiscount:{title:"有赞微商城限时折扣",content:[{name:"大图样式",path:"/packages/goods/limitdiscount/big/index"},{name:"小图样式",path:"/packages/goods/limitdiscount/small/index"},{name:"一大两小样式",path:"/packages/goods/limitdiscount/hybrid/index"},{name:"列表样式",path:"/packages/goods/limitdiscount/list/index"}]}}},"./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/*! no exports provided */function(a,e,t){"use strict";t.r(e);var s=t(/*! ./config */"./src/pages/dashboard/config.js"),o=t(/*! ../../utils/args */"./src/utils/args.js"),n=t(/*! ../../utils/mock */"./src/utils/mock.js");Page({data:{curConfig:{}},onLoad:function(a){Object.keys(s.default).forEach(function(a){(s.default[a].content||[]).forEach(function(a){var e=a.path;a.path=o.default.add(e,n.default)})});var e=a.type||"dashboard";this.setData({config:s.default,curConfig:s.default[e]})},onShareAppMessage:function(){return{title:"有赞微商城插件示例",path:"pages/dashboard/index"}}})},"./src/utils/args.js":
/*!***************************!*\
  !*** ./src/utils/args.js ***!
  \***************************/
/*! exports provided: default */function(a,e,t){"use strict";t.r(e);var s=function(a){var e="";for(var t in a)""!==a[t]&&(e+=t.trim()+"="+a[t]+"&");return e?"?"+e.slice(0,e.length-1):""};function o(){var a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[0].split("?"),e={};return a[1]&&a[1].split("&").forEach(function(a){var t=a.split("=");e[t[0]]=t.slice(1).join("=")}),e}e.default={add:function(a,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!a||0===a.length||0===a.trim().indexOf("javascript"))return"";var n=a.split("#"),d=n[0].split("?"),i=o(a);return Object.keys(e).forEach(function(a){i[a.trim()]=t?encodeURIComponent(e[a]):e[a]}),a=d[0]+s(i),n[1]?a+="#"+n[1]:a},getAll:o}},"./src/utils/mock.js":
/*!***************************!*\
  !*** ./src/utils/mock.js ***!
  \***************************/
/*! exports provided: default */function(a,e,t){"use strict";t.r(e),e.default={openId:"oDpvq0N1rr0NjE9FmeFXFDWEH9zs",shopId:45694034,appId:"wxf11c5910cb729a82"}}});