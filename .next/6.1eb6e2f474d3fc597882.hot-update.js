webpackHotUpdate(6,{

/***/ "./components/Table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("./node_modules/react-materialize/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Table.js";


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
            console.log("---mybracket is:", bracket);
            incomeTax = Math.floor((bracket.baseTax + bracket.taxRate * (income - bracket.startingAt)) / 12);
            console.log("---mybracket is:", bracket);
            console.log("---mytax is:", incomeTax);
          }

          if (bracket.startingAt >= 180001) {
            console.log("over 180001");
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
        var Supr = gross * suprRate;
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
          lineNumber: 56
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _this2.renderName(context.state.fn, context.state.ln)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _this2.renderDate(new Date(context.state.PeriodStart)), "- ", _this2.renderDate(context.state.PeriodEnd)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "Annual Salary:  "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "$", context.state.AnnualSalary)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, "Gross Income (monthly):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, "$", _this2.renderGross(context.state.AnnualSalary), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "Income Tax (monthly):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "$", _this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, "Net Income (monthly): "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, "$", _this2.renderNetIncome(_this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), _this2.renderGross(context.state.AnnualSalary)), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, "Super (", context.state.Super, "% monthly):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, "$", _this2.renderSuper(_this2.renderGross(context.state.AnnualSalary), context.state.Super)))))));
      });
    }
  }]);

  return Slip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Slip);

/***/ })

})
//# sourceMappingURL=6.1eb6e2f474d3fc597882.hot-update.js.map