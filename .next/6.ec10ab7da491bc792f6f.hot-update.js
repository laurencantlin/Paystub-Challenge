webpackHotUpdate(6,{

/***/ "./components/Form.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js: Unexpected token (60:25)\n\n  58 |     return (\n  59 |       <MyContext.Consumer>\n> 60 |         {({newPaystub})=>}\n     |                          ^\n  61 |         \n  62 |         {(context) => (\n  63 |           <React.Fragment>\n    at _class.raise (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:3125:20)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseFunctionBody (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:3714:24)\n    at _class.parseArrowExpression (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:3674:10)\n    at _class.parseParenAndDistinguishExpression (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:3290:12)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/laurencantlin/Desktop/Code/Paystub-Challenge/node_modules/babylon/lib/index.js:8086:52)");

/***/ }),

/***/ "./components/Table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("./node_modules/react-materialize/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__ = __webpack_require__("./provider/ContextProvider.js");
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Table.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Slip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slip, _React$Component);

  function Slip() {
    _classCallCheck(this, Slip);

    return _possibleConstructorReturn(this, (Slip.__proto__ || Object.getPrototypeOf(Slip)).apply(this, arguments));
  }

  _createClass(Slip, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, "hello ", context.state.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, context.state.fn, " ", context.state.ln), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, "Pay Period"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, "Gross Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, "$3.76")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, "Income Tax:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "$7.00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "Net Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, "$7.00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, "Super:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, "$7.00"))))));
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Slip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode); const
// WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


var _default = Slip;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Slip, "Slip", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Table.js");
  reactHotLoader.register(_default, "default", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Table.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-materialize/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.Tag = exports.Tabs = exports.Table = exports.Tab = exports.Slider = exports.Slide = exports.SideNavItem = exports.SideNav = exports.Section = exports.SearchForm = exports.Row = exports.ProgressBar = exports.Preloader = exports.Parallax = exports.PaginationButton = exports.Pagination = exports.Navbar = exports.NavItem = exports.Modal = exports.MenuItem = exports.MediaBox = exports.Input = exports.Icon = exports.Footer = exports.Dropdown = exports.Divider = exports.Container = exports.CollectionItem = exports.Collection = exports.CollapsibleItem = exports.Collapsible = exports.Col = exports.Chip = exports.CardTitle = exports.CardPanel = exports.Card = exports.Carousel = exports.Button = exports.Breadcrumb = exports.Badge = exports.Autocomplete = undefined;

var _Autocomplete = __webpack_require__("./node_modules/react-materialize/lib/Autocomplete.js");

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _Badge = __webpack_require__("./node_modules/react-materialize/lib/Badge.js");

var _Badge2 = _interopRequireDefault(_Badge);

var _Breadcrumb = __webpack_require__("./node_modules/react-materialize/lib/Breadcrumb.js");

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = __webpack_require__("./node_modules/react-materialize/lib/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Carousel = __webpack_require__("./node_modules/react-materialize/lib/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Card = __webpack_require__("./node_modules/react-materialize/lib/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardPanel = __webpack_require__("./node_modules/react-materialize/lib/CardPanel.js");

var _CardPanel2 = _interopRequireDefault(_CardPanel);

var _CardTitle = __webpack_require__("./node_modules/react-materialize/lib/CardTitle.js");

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Chip = __webpack_require__("./node_modules/react-materialize/lib/Chip.js");

var _Chip2 = _interopRequireDefault(_Chip);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

var _Collapsible = __webpack_require__("./node_modules/react-materialize/lib/Collapsible.js");

var _Collapsible2 = _interopRequireDefault(_Collapsible);

var _CollapsibleItem = __webpack_require__("./node_modules/react-materialize/lib/CollapsibleItem.js");

var _CollapsibleItem2 = _interopRequireDefault(_CollapsibleItem);

var _Collection = __webpack_require__("./node_modules/react-materialize/lib/Collection.js");

var _Collection2 = _interopRequireDefault(_Collection);

var _CollectionItem = __webpack_require__("./node_modules/react-materialize/lib/CollectionItem.js");

var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

var _Container = __webpack_require__("./node_modules/react-materialize/lib/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Divider = __webpack_require__("./node_modules/react-materialize/lib/Divider.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _Dropdown = __webpack_require__("./node_modules/react-materialize/lib/Dropdown.js");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Footer = __webpack_require__("./node_modules/react-materialize/lib/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = __webpack_require__("./node_modules/react-materialize/lib/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _MediaBox = __webpack_require__("./node_modules/react-materialize/lib/MediaBox.js");

var _MediaBox2 = _interopRequireDefault(_MediaBox);

var _MenuItem = __webpack_require__("./node_modules/react-materialize/lib/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Modal = __webpack_require__("./node_modules/react-materialize/lib/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _NavItem = __webpack_require__("./node_modules/react-materialize/lib/NavItem.js");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Navbar = __webpack_require__("./node_modules/react-materialize/lib/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Pagination = __webpack_require__("./node_modules/react-materialize/lib/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaginationButton = __webpack_require__("./node_modules/react-materialize/lib/PaginationButton.js");

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _Parallax = __webpack_require__("./node_modules/react-materialize/lib/Parallax.js");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _Preloader = __webpack_require__("./node_modules/react-materialize/lib/Preloader.js");

var _Preloader2 = _interopRequireDefault(_Preloader);

var _ProgressBar = __webpack_require__("./node_modules/react-materialize/lib/ProgressBar.js");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Row = __webpack_require__("./node_modules/react-materialize/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _SearchForm = __webpack_require__("./node_modules/react-materialize/lib/SearchForm.js");

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _Section = __webpack_require__("./node_modules/react-materialize/lib/Section.js");

var _Section2 = _interopRequireDefault(_Section);

var _SideNav = __webpack_require__("./node_modules/react-materialize/lib/SideNav.js");

var _SideNav2 = _interopRequireDefault(_SideNav);

var _SideNavItem = __webpack_require__("./node_modules/react-materialize/lib/SideNavItem.js");

var _SideNavItem2 = _interopRequireDefault(_SideNavItem);

var _Slide = __webpack_require__("./node_modules/react-materialize/lib/Slide.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _Slider = __webpack_require__("./node_modules/react-materialize/lib/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

var _Tab = __webpack_require__("./node_modules/react-materialize/lib/Tab.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _Table = __webpack_require__("./node_modules/react-materialize/lib/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Tabs = __webpack_require__("./node_modules/react-materialize/lib/Tabs.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tag = __webpack_require__("./node_modules/react-materialize/lib/Tag.js");

var _Tag2 = _interopRequireDefault(_Tag);

var _Toast = __webpack_require__("./node_modules/react-materialize/lib/Toast.js");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Autocomplete = _Autocomplete2.default;
exports.Badge = _Badge2.default;
exports.Breadcrumb = _Breadcrumb2.default;
exports.Button = _Button2.default;
exports.Carousel = _Carousel2.default;
exports.Card = _Card2.default;
exports.CardPanel = _CardPanel2.default;
exports.CardTitle = _CardTitle2.default;
exports.Chip = _Chip2.default;
exports.Col = _Col2.default;
exports.Collapsible = _Collapsible2.default;
exports.CollapsibleItem = _CollapsibleItem2.default;
exports.Collection = _Collection2.default;
exports.CollectionItem = _CollectionItem2.default;
exports.Container = _Container2.default;
exports.Divider = _Divider2.default;
exports.Dropdown = _Dropdown2.default;
exports.Footer = _Footer2.default;
exports.Icon = _Icon2.default;
exports.Input = _Input2.default;
exports.MediaBox = _MediaBox2.default;
exports.MenuItem = _MenuItem2.default;
exports.Modal = _Modal2.default;
exports.NavItem = _NavItem2.default;
exports.Navbar = _Navbar2.default;
exports.Pagination = _Pagination2.default;
exports.PaginationButton = _PaginationButton2.default;
exports.Parallax = _Parallax2.default;
exports.Preloader = _Preloader2.default;
exports.ProgressBar = _ProgressBar2.default;
exports.Row = _Row2.default;
exports.SearchForm = _SearchForm2.default;
exports.Section = _Section2.default;
exports.SideNav = _SideNav2.default;
exports.SideNavItem = _SideNavItem2.default;
exports.Slide = _Slide2.default;
exports.Slider = _Slider2.default;
exports.Tab = _Tab2.default;
exports.Table = _Table2.default;
exports.Tabs = _Tabs2.default;
exports.Tag = _Tag2.default;
exports.Toast = _Toast2.default;

/***/ })

})
//# sourceMappingURL=6.ec10ab7da491bc792f6f.hot-update.js.map