module.exports=__NEXT_REGISTER_PAGE("/Paystub",function(){return{page:webpackJsonp([0],{239:function(e,t,r){e.exports=r(400)},240:function(e,t,r){"use strict";var n=r(241),o=r(406),a="function"==typeof Symbol&&"symbol"==typeof Symbol(),l=Object.prototype.toString,c=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),i=function(e,t,r,n){var o;t in e&&("function"!=typeof(o=n)||"[object Function]"!==l.call(o)||!n())||(c?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},u=function(e,t){var r=arguments.length>2?arguments[2]:{},l=n(t);a&&(l=l.concat(Object.getOwnPropertySymbols(t))),o(l,function(n){i(e,n,t[n],r[n])})};u.supportsDescriptors=!!c,e.exports=u},241:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Array.prototype.slice,l=r(405),c=Object.prototype.propertyIsEnumerable,i=!c.call({toString:null},"toString"),u=c.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),b=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),a=l(e),c=t&&"[object String]"===o.call(e),p=[];if(!t&&!r&&!a)throw new TypeError("Object.keys called on a non-object");var b=u&&r;if(c&&e.length>0&&!n.call(e,0))for(var d=0;d<e.length;++d)p.push(String(d));if(a&&e.length>0)for(var h=0;h<e.length;++h)p.push(String(h));else for(var m in e)b&&"prototype"===m||!n.call(e,m)||p.push(String(m));if(i)for(var v=function(e){if("undefined"==typeof window||!y)return f(e);try{return f(e)}catch(e){return!1}}(e),g=0;g<s.length;++g)v&&"constructor"===s[g]||!n.call(e,s[g])||p.push(s[g]);return p};b.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return l(t)?e(a.call(t)):e(t)}}}else Object.keys=b;return Object.keys||b},e.exports=b},242:function(e,t,r){"use strict";var n=r(241),o=r(243),a=r(408)(),l=Object,c=o.call(Function.call,Array.prototype.push),i=o.call(Function.call,Object.prototype.propertyIsEnumerable),u=a?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,o,s,f,p,y,b,d,h=l(e);for(o=1;o<arguments.length;++o){s=l(arguments[o]),p=n(s);var m=a&&(Object.getOwnPropertySymbols||u);if(m)for(y=m(s),f=0;f<y.length;++f)d=y[f],i(s,d)&&c(p,d);for(f=0;f<p.length;++f)b=s[d=p[f]],i(s,d)&&(h[d]=b)}return h}},243:function(e,t,r){"use strict";var n=r(407);e.exports=Function.prototype.bind||n},244:function(e,t,r){"use strict";var n=r(242);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),a="";for(var l in o)a+=l;return e!==a}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?n:Object.assign:n}},398:function(e,t,r){e.exports=r(399)},399:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r.n(n),a=r(232),l=r.n(a),c=r(238),i=(r(239),r(80)),u=r(79),s=r(0),f=r.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return b(n,(r=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(d(n),"renderDate",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return console.log("cts",f()(e).format("ll")),f()(e).format("ll")}}),Object.defineProperty(d(n),"renderName",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){var r="".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," ").concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," ");return console.log(n.state),r}}),Object.defineProperty(d(n),"renderGross",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return console.log(e),Math.floor(e/12)}}),Object.defineProperty(d(n),"renderIncomeTax",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){var r;t.forEach(function(t){t.startingAt<e&&(console.log("---mybracket is:",t),r=Math.floor((t.baseTax+t.taxRate*(e-t.startingAt))/12),console.log("---mybracket is:",t),console.log("---mytax is:",r))});return r}}),Object.defineProperty(d(n),"renderNetIncome",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){return console.log(e,t),t-e}}),Object.defineProperty(d(n),"renderSuper",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){var r=e*(t/100);return Math.floor(r)}}),r))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this;return o.a.createElement(u.a.Consumer,null,function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement(i.Table,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{"data-field":"id"},e.renderName(t.state.fn,t.state.ln)),o.a.createElement("th",{"data-field":"Pay Period",className:"has-text-right"},e.renderDate(new Date(t.state.PeriodStart)),"- ",e.renderDate(t.state.PeriodEnd)))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{"data-field":"id"},"Annual Salary:  "),o.a.createElement("td",{"data-field":"Pay Period",className:"has-text-right"},"$",t.state.AnnualSalary)),o.a.createElement("tr",null,o.a.createElement("td",null,"Gross Income (monthly):"),o.a.createElement("td",{className:"has-text-right"},"$",e.renderGross(t.state.AnnualSalary)," ")),o.a.createElement("tr",null,o.a.createElement("td",null,"Income Tax (monthly):"),o.a.createElement("td",{className:"has-text-right"},"$",e.renderIncomeTax(t.state.AnnualSalary,t.state.TaxBrackets)," ")),o.a.createElement("tr",null,o.a.createElement("td",null,"Net Income (monthly): "),o.a.createElement("td",{className:"has-text-right"},"$",e.renderNetIncome(e.renderIncomeTax(t.state.AnnualSalary,t.state.TaxBrackets),e.renderGross(t.state.AnnualSalary))," ")),o.a.createElement("tr",null,o.a.createElement("td",null,"Super (",t.state.Super,"% monthly):"),o.a.createElement("td",{className:"has-text-right"},"$",e.renderSuper(e.renderGross(t.state.AnnualSalary),t.state.Super)))))))})}}])&&y(r.prototype,n),a&&y(r,a),t}();r(235);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){return o.a.createElement("div",null,this.props.children)}}])&&v(r.prototype,n),a&&v(r,a),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,"Form"),o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"}),o.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",rel:"stylesheet"}),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),o.a.createElement(c.a,{title:"Employee Paystub",subtitle:"See paystub below."},o.a.createElement("div",{className:"columns is-centered"},o.a.createElement("div",{className:"column is-half "},o.a.createElement("div",{className:"box"},o.a.createElement(j,null,o.a.createElement(h,null)))))),o.a.createElement("div",{className:"container"}),o.a.createElement("script",{src:"https://code.jquery.com/jquery-2.1.1.min.js"}),o.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"}))}}])&&w(r.prototype,a),i&&w(r,i),t}();t.default=S},400:function(e,t,r){"use strict";var n=r(18),o=r(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(51)),l=o(r(401)),c=o(r(23)),i=o(r(9)),u=o(r(10)),s=o(r(24)),f=o(r(25)),p=o(r(78)),y=r(107),b=n(r(1)),d=o(r(2)),h=o(r(403)),m=n(r(41)),v=r(22),g=function(e){function t(e){var r,n;(0,i.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),l=1;l<o;l++)a[l-1]=arguments[l];return(n=(0,s.default)(this,(r=t.__proto__||(0,c.default)(t)).call.apply(r,[this,e].concat(a)))).linkClicked=n.linkClicked.bind((0,p.default)(n)),n.formatUrls(e),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,o=this.as;if(function(e){var t=(0,y.parse)(e,!1,!0),r=(0,y.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var a=window.location.pathname;n=(0,y.resolve)(a,n),o=o?(0,y.resolve)(a,o):n,e.preventDefault();var l=this.props.scroll;null==l&&(l=o.indexOf("#")<0);var c=this.props.replace?"replace":"push";m.default[c](n,o,{shallow:r}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,y.resolve)(e,this.href);m.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,l.default)(this.props.href)!==(0,l.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,a.default)(e.href)?(0,y.format)(e.href):e.href,this.as=e.as&&"object"===(0,a.default)(e.as)?(0,y.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,n=this.as;"string"==typeof t&&(t=b.default.createElement("a",null,t));var o=b.Children.only(t),a={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,m._rewriteUrlForNextExport)(a.href)),b.default.cloneElement(o,a)}}]),t}(b.Component);t.default=g,Object.defineProperty(g,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,h.default)({href:d.default.oneOfType([d.default.string,d.default.object]).isRequired,as:d.default.oneOfType([d.default.string,d.default.object]),prefetch:d.default.bool,replace:d.default.bool,shallow:d.default.bool,passHref:d.default.bool,scroll:d.default.bool,children:d.default.oneOfType([d.default.element,function(e,t){return"string"==typeof e[t]&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var j=(0,v.execOnce)(v.warn)},401:function(e,t,r){e.exports=r(402)},402:function(e,t,r){var n=r(4),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},403:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,a.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,i)&&(t=e[i],!t||t[i]!==u))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,c({},i,(r=function(){return function(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}}(),(0,n.default)(r,c({},i,u)))));var r};var n=l(r(404)),o=l(r(410)),a=l(r(411));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i="prop-types-exact: ​",u={};e.exports=t.default},404:function(e,t,r){"use strict";var n=r(240),o=r(242),a=r(244),l=r(409),c=a();n(c,{getPolyfill:a,implementation:o,shim:l}),e.exports=c},405:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},406:function(e,t){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var a=e.length;if(a===+a)for(var l=0;l<a;l++)t.call(o,e[l],l,e);else for(var c in e)r.call(e,c)&&t.call(o,e[c],c,e)}},407:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,a=n.call(arguments,1),l=Math.max(0,t.length-a.length),c=[],i=0;i<l;i++)c.push("$"+i);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=t.apply(this,a.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,a.concat(n.call(arguments)))}),t.prototype){var u=function(){};u.prototype=t.prototype,r.prototype=new u,u.prototype=null}return r}},408:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},409:function(e,t,r){"use strict";var n=r(240),o=r(244);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},410:function(e,t,r){"use strict";var n=r(243);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},411:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default}},[398]).default}});