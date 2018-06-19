webpackHotUpdate(5,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Slip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slip, _React$Component);

  function Slip() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Slip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Slip.__proto__ || Object.getPrototypeOf(Slip)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderDate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cts) {
        console.log("cts", __WEBPACK_IMPORTED_MODULE_4_moment___default()(cts).format('ll'));
        var formattedDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(cts).format('ll');
        return formattedDate;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(fn, ln) {
        var employeeName = "".concat(fn.charAt(0).toUpperCase()).concat(fn.slice(1), " ").concat(ln.charAt(0).toUpperCase()).concat(ln.slice(1), " ");
        console.log(_this.state);
        return employeeName;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderGross", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(income) {
        console.log(income);
        var Gross = Math.floor(income / 12);
        return Gross;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderIncomeTax", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(income, brackets) {
        var incomeTax;
        var Brackets = brackets.forEach(function (bracket) {
          if (bracket.startingAt < income && income < bracket.upto) {
            console.log("mybracket is", bracket);
            incomeTax = Math.floor((bracket.baseTax + bracket.taxRate * (income - bracket.startingAt)) / 12);
          }
        });
        return incomeTax;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderNetIncome", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(tax, gross) {
        console.log(tax, gross);
        var NetIncome = gross - tax;
        return NetIncome;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderSuper", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(gross, supr) {
        var suprRate = supr / 100;
        console.log(gross, suprRate);
        var Supr = gross * suprRate; // const Gross = income / 12 return Gross

        return Math.floor(Supr);
      }
    }), _temp));
  }

  _createClass(Slip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _this2.renderName(context.state.fn, context.state.ln)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _this2.renderDate(context.state.PeriodStart), "- ", _this2.renderDate(context.state.PeriodEnd)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "Annual Salary:  "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, "$", context.state.AnnualSalary)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "Gross Income (monthly):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "$", _this2.renderGross(context.state.AnnualSalary), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, "Income Tax (monthly):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, "- $", _this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, "Net Income (monthly): "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, "$", _this2.renderNetIncome(_this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), _this2.renderGross(context.state.AnnualSalary)), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, "Super Amount:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, "$", _this2.renderSuper(_this2.renderGross(context.state.AnnualSalary), context.state.Super)))))));
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

/***/ })

})
//# sourceMappingURL=5.e7b487d7c60508183920.hot-update.js.map