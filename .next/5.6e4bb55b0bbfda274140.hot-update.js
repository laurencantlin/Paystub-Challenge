webpackHotUpdate(5,{

/***/ "./components/Form.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js";


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







var EmployeeForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmployeeForm, _React$Component);

  function EmployeeForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, EmployeeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = EmployeeForm.__proto__ || Object.getPrototypeOf(EmployeeForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        name: null,
        fn: null,
        ln: null,
        AnnualSalary: null,
        Super: null,
        PeriodStart: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _value, setName) {
        event.preventDefault();

        if (_this.state.fn && _this.state.ln && _this.state.AnnualSalary && _this.state.Super && _this.state.PeriodStart) {
          console.log(_this.state, "sub");
          event.preventDefault();
          __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/Paystub');
        }

        alert("fill out all fields");
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handlefnChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value2, setFN) {
        // console.log(e.target.value)
        _this.setState({
          fn: _value2
        }, function () {
          return setFN(_this.state.fn);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handlelnChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value3, setLN) {
        // console.log(e.target.value)
        _this.setState({
          ln: _value3
        }, function () {
          return setLN(_this.state.ln);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleAnnualSalaryChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value4, setAnnualSalary) {
        // console.log(e.target.value)
        _this.setState({
          AnnualSalary: _value4
        }, function () {
          return setAnnualSalary(_this.state.AnnualSalary);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSuperChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value5, setSuper) {
        // console.log(e.target.value)
        _this.setState({
          Super: _value5
        }, function () {
          return setSuper(_this.state.Super);
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handlePeriodStartChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value6, setPeriodStart) {
        // console.log(e.target.value)
        _this.setState({
          PeriodStart: _value6
        }, function () {
          return setPeriodStart(_this.state.PeriodStart);
        });
      }
    }), _temp));
  }

  _createClass(EmployeeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log("form component mounted")
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("Form component updated:", this.state); // this.calculatePaystub()
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          onSubmit: _this2.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "John",
          required: true,
          s: 12,
          onChange: function onChange(event) {
            return _this2.handlefnChange(event.target.value, context.methods.setFN);
          },
          label: "First Name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "Smith",
          required: true,
          s: 12,
          label: "Last Name",
          onChange: function onChange(event) {
            return _this2.handlelnChange(event.target.value, context.methods.setLN);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          required: true,
          s: 12,
          type: "number",
          label: "Annual Salary",
          placeholder: "$",
          onChange: function onChange(event) {
            return _this2.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          required: true,
          label: "Super Rate",
          type: "number",
          s: 12,
          min: "0",
          max: "100",
          placeholder: "%",
          step: "1",
          onChange: function onChange(event) {
            return _this2.handleSuperChange(event.target.value, context.methods.setSuper);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          required: true,
          placeholder: "Pick Date",
          type: "date",
          label: "Pay Period Start Date",
          s: 12,
          onChange: function onChange(event) {
            return _this2.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Button"], {
          onClick: function onClick(event) {
            return _this2.handleSubmit(event, event.target.value, context.methods.setName);
          },
          waves: "light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, "Submit")))));
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

  return EmployeeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = EmployeeForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmployeeForm, "EmployeeForm", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  reactHotLoader.register(_default, "default", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.6e4bb55b0bbfda274140.hot-update.js.map