module.exports=__NEXT_REGISTER_PAGE("/Paystub",function(){var e=webpackJsonp([0],{239:function(e,t,r){e.exports=r(396)},240:function(e,t,r){"use strict";var n=r(241);var a=r(402);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var i=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&i();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=n(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));a(l,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},241:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var l=r(401);var u=Object.prototype.propertyIsEnumerable;var i=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var y=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!y)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var u=l(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!u)throw new TypeError("Object.keys called on a non-object");var y=c&&o;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(u&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)y&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(i){var m=v(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},242:function(e,t,r){"use strict";var n=r(241);var a=r(243);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(404)();var u=Object;var i=a.call(Function.call,Array.prototype.push);var c=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=u(t);var s,p,y,v,b,d,h;for(s=1;s<arguments.length;++s){p=u(arguments[s]);v=n(p);var m=l&&(Object.getOwnPropertySymbols||f);if(m){b=m(p);for(y=0;y<b.length;++y){h=b[y];c(p,h)&&i(v,h)}}for(y=0;y<v.length;++y){h=v[y];d=p[h];c(p,h)&&(a[h]=d)}}return a}},243:function(e,t,r){"use strict";var n=r(403);e.exports=Function.prototype.bind||n},244:function(e,t,r){"use strict";var n=r(242);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var l in a)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},394:function(e,t,r){e.exports=r(395)},395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var a=r.n(n);var o=r(232);var l=r.n(o);var u=r(238);var i=r(239);var c=r.n(i);var f=r(79);var s=r.n(f);var p=r(78);var y=r(0);var v=r.n(y);function b(e){b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return b(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function m(e,t,r){t&&h(e.prototype,t);r&&h(e,r);return e}function g(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;return O(e)}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){j(t,e);function t(){var e;var r,n;d(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return g(n,(r=n=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(O(n),"renderDate",{configurable:true,enumerable:true,writable:true,value:function e(t){console.log("cts",v()(t).format("ll"));var r=v()(t).format("ll");return r}}),Object.defineProperty(O(n),"renderName",{configurable:true,enumerable:true,writable:true,value:function e(t,r){var a="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," ").concat(r.charAt(0).toUpperCase()).concat(r.slice(1)," ");console.log(n.state);return a}}),Object.defineProperty(O(n),"renderGross",{configurable:true,enumerable:true,writable:true,value:function e(t){console.log(t);var r=Math.floor(t/12);return r}}),Object.defineProperty(O(n),"renderIncomeTax",{configurable:true,enumerable:true,writable:true,value:function e(t,r){var n;var a=r.forEach(function(e){if(e.startingAt<t&&t<e.upto){console.log("mybracket is",e);n=Math.floor((e.baseTax+e.taxRate*(t-e.startingAt))/12)}});return n}}),Object.defineProperty(O(n),"renderNetIncome",{configurable:true,enumerable:true,writable:true,value:function e(t,r){console.log(t,r);var n=r-t;return n}}),Object.defineProperty(O(n),"renderSuper",{configurable:true,enumerable:true,writable:true,value:function e(t,r){var n=r/100;var a=t*n;return Math.floor(a)}}),r))}m(t,[{key:"render",value:function e(){var t=this;return a.a.createElement(p["a"].Consumer,null,function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement(f["Table"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{"data-field":"id"},t.renderName(e.state.fn,e.state.ln)),a.a.createElement("th",{"data-field":"Pay Period",className:"has-text-right"},t.renderDate(new Date(e.state.PeriodStart)),"- ",t.renderDate(e.state.PeriodEnd)))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{"data-field":"id"},"Annual Salary:  "),a.a.createElement("td",{"data-field":"Pay Period",className:"has-text-right"},"$",e.state.AnnualSalary)),a.a.createElement("tr",null,a.a.createElement("td",null,"Gross Income (monthly):"),a.a.createElement("td",{className:"has-text-right"},"$",t.renderGross(e.state.AnnualSalary)," ")),a.a.createElement("tr",null,a.a.createElement("td",null,"Income Tax (monthly):"),a.a.createElement("td",{className:"has-text-right"},"- $",t.renderIncomeTax(e.state.AnnualSalary,e.state.TaxBrackets)," ")),a.a.createElement("tr",null,a.a.createElement("td",null,"Net Income (monthly): "),a.a.createElement("td",{className:"has-text-right"},"$",t.renderNetIncome(t.renderIncomeTax(e.state.AnnualSalary,e.state.TaxBrackets),t.renderGross(e.state.AnnualSalary))," ")),a.a.createElement("tr",null,a.a.createElement("td",null,"Super (",e.state.Super,"% monthly):"),a.a.createElement("td",{className:"has-text-right"},"$",t.renderSuper(t.renderGross(e.state.AnnualSalary),e.state.Super)))))))})}}]);return t}(a.a.Component);var E=w;var S=r(235);function x(e){x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return x(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function k(e,t,r){t&&_(e.prototype,t);r&&_(e,r);return e}function T(e,t){if(t&&("object"===x(t)||"function"===typeof t))return t;return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=function(e){$(t,e);function t(){P(this,t);return T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}k(t,[{key:"render",value:function e(){return a.a.createElement("div",null,this.props.children)}}]);return t}(a.a.Component);var C=N;function I(e){I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return I(e)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function M(e,t,r){t&&D(e.prototype,t);r&&D(e,r);return e}function R(e,t){if(t&&("object"===I(t)||"function"===typeof t))return t;return G(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){U(t,e);function t(){F(this,t);return R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}M(t,[{key:"handleChange",value:function e(t){this.setState({value:t.target.value})}},{key:"render",value:function e(){return a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement("title",null,"Form"),a.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"}),a.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",rel:"stylesheet"}),a.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),a.a.createElement(u["a"],{title:"Employee Paystub",subtitle:"See paystub below."},a.a.createElement("div",{className:"columns is-centered"},a.a.createElement("div",{className:"column is-half "},a.a.createElement("div",{className:"box"},a.a.createElement(C,null,a.a.createElement(E,null)))))),a.a.createElement("div",{className:"container"}),a.a.createElement("script",{src:"https://code.jquery.com/jquery-2.1.1.min.js"}),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"}))}}]);return t}(n["Component"]);var z=t["default"]=q},396:function(e,t,r){"use strict";var n=r(24);var a=r(8);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(74));var l=a(r(397));var u=a(r(28));var i=a(r(11));var c=a(r(12));var f=a(r(29));var s=a(r(30));var p=a(r(108));var y=r(106);var v=n(r(1));var b=a(r(2));var d=a(r(399));var h=n(r(40));var m=r(21);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,i.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!j(a))return;var l=window.location.pathname;a=(0,y.resolve)(l,a);o=o?(0,y.resolve)(l,o):a;t.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var i=this.props.replace;var c=i?"replace":"push";h.default[c](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,y.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,y.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,y.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var a=v.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h._rewriteUrlForNextExport)(o.href));return v.default.cloneElement(a,o)}}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&O("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function j(e){var t=(0,y.parse)(e,false,true);var r=(0,y.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var O=(0,m.execOnce)(m.warn)},397:function(e,t,r){e.exports=r(398)},398:function(e,t,r){var n=r(4);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},399:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(400);var a=c(n);var o=r(406);var l=c(o);var u=r(407);var i=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var y={};function v(e){return(0,a["default"])(e,f({},p,y))}function b(e){return e&&e[p]===y}function d(e){if(!(0,i["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,v(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},400:function(e,t,r){"use strict";var n=r(240);var a=r(242);var o=r(244);var l=r(405);var u=o();n(u,{getPolyfill:o,implementation:a,shim:l});e.exports=u},401:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},402:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var u=0;u<l;u++)a.call(o,t[u],u,t);else for(var i in t)r.call(t,i)&&a.call(o,t[i],i,t)}},403:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(n+r);var u=a.call(arguments,1);var i;var c=function(){if(this instanceof i){var e=r.apply(this,u.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(a.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);i=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var y=function e(){};y.prototype=r.prototype;i.prototype=new y;y.prototype=null}return i}},404:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==a||true!==l.enumerable)return false}return true}},405:function(e,t,r){"use strict";var n=r(240);var a=r(244);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},406:function(e,t,r){"use strict";var n=r(243);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},407:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[394]);return{page:e.default}});