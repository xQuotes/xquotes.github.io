/*! This file is created by fooying@qq.com */
webpackJsonp([8],{305:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(327);var c=function(t){function n(e){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return l(n,t),a(n,[{key:"render",value:function(){return e.createElement("div",{className:"remote-app"},e.createElement("div",{className:"remote"},e.createElement("div",{className:"remote-header"},e.createElement("h1",{className:"remote-h2"},"远程工作"),e.createElement("h2",null,"Remote")),e.createElement("div",{className:"remote-body"},e.createElement("ul",null,e.createElement("li",null,"Teambition 管理项目"),e.createElement("li",null,"Git 代码管理")),e.createElement("div",null,e.createElement("h3",null,"Git 代码管理"),e.createElement("ul",null,e.createElement("li",null,"code review"),e.createElement("li",null,"test case")))),e.createElement("div",{className:"remote-footer"})))}}]),n}(e.Component);t["default"]=c}).call(t,n(1))},226:function(e,t,n){t=e.exports=n(55)(),t.push([e.id,".remote-app{padding:50px}.remote{width:800px;margin:0 auto;min-height:1000px;background-color:#fff}",""])},327:function(e,t,n){var r=n(226);"string"==typeof r&&(r=[[e.id,r,""]]);var o=n(58)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(226,function(){var t=n(226);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})}});