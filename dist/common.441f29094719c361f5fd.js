/*! This file is created by fooying@qq.com */
webpackJsonp([3],{0:function(e,o,t){t(48),t(28),t(36),e.exports=t(47)},50:function(e,o){function t(e,o){if("string"!=typeof e)throw new TypeError("argument str must be a string");var t={},n=o||{},u=e.split(/; */),a=n.decode||i;return u.forEach(function(e){var o=e.indexOf("=");if(o>=0){var n=e.substr(0,o).trim(),i=e.substr(++o,e.length).trim();'"'==i[0]&&(i=i.slice(1,-1)),void 0==t[n]&&(t[n]=r(i,a))}}),t}function n(e,o,t){var n=t||{},r=n.encode||u;if(!a.test(e))throw new TypeError("argument name is invalid");var i=r(o);if(i&&!a.test(i))throw new TypeError("argument val is invalid");var s=[e+"="+i];if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c))throw Error("maxAge should be a Number");s.push("Max-Age="+c)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");s.push("Domain="+n.domain)}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");s.push("Path="+n.path)}return n.expires&&s.push("Expires="+n.expires.toUTCString()),n.httpOnly&&s.push("HttpOnly"),n.secure&&s.push("Secure"),s.join("; ")}function r(e,o){try{return o(e)}catch(t){return e}}/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
o.parse=t,o.serialize=n;var i=decodeURIComponent,u=encodeURIComponent,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},57:function(e,o,t){function n(){return!!f&&f.headersSent!==!0}function r(e,o){var t="undefined"==typeof document?d:l.parse(document.cookie),n=t&&t[e];if(!o)try{n=JSON.parse(n)}catch(r){}return n}function i(e){var o="undefined"==typeof document?d:l.parse(document.cookie);return o?e?Object.keys(o).reduce(function(t,n){if(!e.test(n))return t;var r={};return r[n]=o[n],Object.assign({},t,r)},{}):o:{}}function u(e,o,t){d[e]=o,"object"==typeof o&&(d[e]=JSON.stringify(o)),"undefined"!=typeof document&&(document.cookie=l.serialize(e,d[e],t)),n()&&f.cookie&&f.cookie(e,o,t)}function a(e,o){delete d[e],o=void 0===o?{}:"string"==typeof o?{path:o}:Object.assign({},o),"undefined"!=typeof document&&(o.expires=new Date(1970,1,1,0,0,1),document.cookie=l.serialize(e,"",o)),n()&&f.clearCookie&&f.clearCookie(e,o)}function s(e){d=e?l.parse(e):{}}function c(e,o){return e.cookie?d=e.cookie:e.cookies?d=e.cookies:e.headers&&e.headers.cookie?s(e.headers.cookie):d={},f=o,function(){f=null,d={}}}var l=t(50);"function"!=typeof Object.assign&&(Object.assign=function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var o=1;arguments.length>o;o++){var t=arguments[o];if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e});var d={},f=void 0,g={load:r,select:i,save:u,remove:a,setRawCookie:s,plugToRequest:c};"undefined"!=typeof window&&(window.reactCookie=g),e.exports=g},36:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t="/api",n={login:t+"/user/login",logout:t+"/user/logout"};o["default"]=n},47:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var r=t(30),i=t(57),u=n(i),a=t(28),s=n(a),c=t(36),l=n(c),d={};d.redirectToLogin=function(e,o){d.loggedIn()||o({pathname:s["default"].register,state:{nextPathname:e.location.pathname}})},d.redirectToIndex=function(e,o){d.loggedIn()&&o(s["default"].index)},d.redirectIndex=function(e,o){o(s["default"].index)},d.remenber=function(e){if(e){if(localStorage.username=e.username||"",localStorage.token=e.token||"",localStorage.user_id=e.id||"",d.loggedIn())return void r.browserHistory.goBack()}else d.logout()},d.login=function(e){if(e){if(sessionStorage.username=e.username||"",sessionStorage.token=e.token||"",sessionStorage.user_id=e.id||"",d.loggedIn())return void r.browserHistory.goBack()}else d.logout()},d.getToken=function(){return localStorage.token||sessionStorage.token},d.getUser=function(){return localStorage.username||sessionStorage.username},d.getUid=function(){return localStorage.user_id||sessionStorage.user_id},d.hasAuth=function(e){return localStorage.user_id==e||sessionStorage.user_id==e},d.logout=function(){delete localStorage.token,delete localStorage.username,delete localStorage.user_id,delete sessionStorage.token,delete sessionStorage.username,delete sessionStorage.user_id,r.browserHistory.goBack()},d.removeAuthCookie=function(e){u["default"].remove(e,{path:"/"})},d.getAuthCookie=function(e){return u["default"].load(e)},d.checkAuthCookie=function(e){var o=location.href;d.getAuthCookie(e)||(location.href=l["default"].login+"?url="+encodeURI(o))},d.loggedIn=function(){return!!localStorage.username||!!sessionStorage.username},o["default"]=d},48:function(e,o){"use strict";function t(e,o){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments[1];return o.hasOwnProperty(n.type)?o[n.type](t,n):t}}Object.defineProperty(o,"__esModule",{value:!0}),o.createReducer=t},28:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=o.admin="a",n={ads:"/",index:"/"+t,login:"/login",logout:"/logout",register:"/register"};o["default"]=n}});