!function(e){var n=wx.__installedModules=wx.__installedModules||{};function t(r){if(n[r])return n[r].exports;var o=wx.__installedModules[r]=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=89)}({89:function(e,n){var t=getApp();Page({data:{alias:"s4ftrie81",nodes:'&lt;zan-account<br><span style="margin-left: 10px;"></span>app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>open-id="wxopenid"<br><span style="margin-left: 10px;"></span>shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>show-login="{{ true }}"<br><span style="margin-left: 10px;"></span>bind:success="handleBindSuccess"<br>/&gt;',extraData:t.globalData.extraData,showLogin:!1},onLoad:function(){},handleShowZanAccount:function(){this.setData({showLogin:!0})},handleBindSuccess:function(e){console.log(e.detail,"mobile")}})}});