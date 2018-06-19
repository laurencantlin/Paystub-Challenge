module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([2],{336:function(e,t,r){e.exports=r(337)},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"default",function(){return b});var n=r(338);var a=r.n(n);var u=r(1);var o=r.n(u);var l=r(78);var i=r(0);var c=r.n(i);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function v(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return h(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){y(t,e);function t(){var e;var r,n;f(this,t);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),Object.defineProperty(h(n),"state",{configurable:true,enumerable:true,writable:true,value:{fn:null,ln:null,AnnualSalary:null,Super:null,PeriodStart:null,TaxBrackets:[{startingAt:0,upto:18200,taxRate:0,baseTax:0},{startingAt:18201,upto:37e3,taxRate:.19,baseTax:0},{startingAt:37001,upto:87e3,taxRate:.325,baseTax:3572},{startingAt:87001,upto:18e4,taxRate:.37,baseTax:19822},{startingAt:180001,upto:null,taxRate:.45,baseTax:54232}]}}),Object.defineProperty(h(n),"methods",{configurable:true,enumerable:true,writable:true,value:{setFN:function e(t){return n.setState({fn:t})},setLN:function e(t){return n.setState({ln:t})},setAnnualSalary:function e(t){return n.setState({AnnualSalary:t})},setSuper:function e(t){return n.setState({Super:t})},setPeriodStart:function e(t){var r=t.split(",").join("").split(" ");var a=new Date(r[0]+r[1]+r[2]);var u=new Date(c()(a).add(1,"months").calendar());console.log(a,u);n.setState({PeriodStart:a});n.setState({PeriodEnd:u})},setEmployeeName:function e(){return n.setState({employeeName:"".concat(n.state.fn," ").concat(n.state.ln)})}}}),r))}d(t,[{key:"render",value:function e(){var t=this.props,r=t.Component,a=t.pageProps;return o.a.createElement(n["Container"],null,o.a.createElement(l["a"].Provider,{value:{state:this.state,methods:this.methods}},o.a.createElement(r,a)))}}]);return t}(a.a)},338:function(e,t,r){e.exports=r(339)},339:function(e,t,r){"use strict";var n=r(24);var a=r(8);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=x;t.Container=t.default=void 0;var u=a(r(48));var o=a(r(50));var l=a(r(340));var i=a(r(44));var c=a(r(28));var s=a(r(11));var f=a(r(12));var p=a(r(29));var d=a(r(30));var v=n(r(1));var y=a(r(2));var h=a(r(107));var b=r(21);var m=r(40);var g=function(e){(0,d.default)(t,e);function t(){(0,s.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,a=t.pageProps;var u=x(r);return v.default.createElement(P,null,v.default.createElement(n,(0,l.default)({},a,{url:u})))}}],[{key:"getInitialProps",value:function(){var e=(0,o.default)(u.default.mark(function e(t){var r,n,a,o;return u.default.wrap(function e(u){while(1)switch(u.prev=u.next){case 0:r=t.Component,n=t.router,a=t.ctx;u.next=3;return(0,b.loadGetInitialProps)(r,a);case 3:o=u.sent;return u.abrupt("return",{pageProps:o});case 5:case"end":return u.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(g,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}});var P=function(e){(0,d.default)(t,e);function t(){(0,s.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,h.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return v.default.createElement(v.default.Fragment,null,t)}}]);return t}(v.Component);t.Container=P;Object.defineProperty(P,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:y.default.any}});var _=(0,b.execOnce)(function(){false});function x(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){_();return n},get pathname(){_();return t},get asPath(){_();return r},back:function t(){_();e.back()},push:function t(r,n){_();return e.push(r,n)},pushTo:function t(r,n){_();var a=n?r:null;var u=n||r;return e.push(a,u)},replace:function t(r,n){_();return e.replace(r,n)},replaceTo:function t(r,n){_();var a=n?r:null;var u=n||r;return e.replace(a,u)}}}},340:function(e,t,r){var n=r(77);function a(){e.exports=a=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}e.exports=a}},[336]);return{page:e.default}});