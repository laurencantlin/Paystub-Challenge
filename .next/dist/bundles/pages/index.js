module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("react-materialize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 // import MyProvider from '../provider/ContextProvider'



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
          __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push('/Paystub');
        } else {
          alert("fill out all fields");
        }
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
  }]);

  return EmployeeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (EmployeeForm);

/***/ }),

/***/ "./components/Hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("react-materialize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__("./components/Form.js");
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Hero.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Hero =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "hero is-fullheight is-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "hero-body has-text-centered is-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Employee Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Please fill out the form below"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), this.props.children)));
    }
  }]);

  return Hero;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "./components/Table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("react-materialize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("moment");
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
        console.log(_this.state); // this.setState({employeeName:employeeName})

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
            console.log(incomeTax);
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

        return Supr;
      }
    }), _temp));
  }

  _createClass(Slip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state);
      this.renderDate();
      this.renderGross();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _this2.renderName(context.state.fn, context.state.ln)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _this2.renderDate(context.state.PeriodStart), "- ", _this2.renderDate(context.state.PeriodEnd)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "Annual Income:  "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "Pay Period",
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, "$", context.state.AnnualSalary)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, "Gross Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, "$", _this2.renderGross(context.state.AnnualSalary), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, "Income Tax:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, "- $", _this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, "Net Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "$", _this2.renderNetIncome(_this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), _this2.renderGross(context.state.AnnualSalary)), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "Super Amount:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, "$", _this2.renderSuper(_this2.renderGross(context.state.AnnualSalary), context.state.Super)))))));
      });
    }
  }]);

  return Slip;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode); const
// WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


/* harmony default export */ __webpack_exports__["a"] = (Slip);

/***/ }),

/***/ "./components/Test.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("react-materialize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__ = __webpack_require__("./provider/ContextProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Test.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Test =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _value, setName) {
        console.log(_this.state);
        event.preventDefault();
        __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/Paystub');
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

  _createClass(Test, [{
    key: "componentDidMount",
    //   state={     name:'wes',     FN: 'fn',     LN: 'ln',     AnnualSalary: 0,
    // SuperRate: 0,     PayPeriodStart: "mmddyyyy",     age: 100,     cool: true }
    // state = {
    //   input: this.DEFAULT
    // };
    value: function componentDidMount() {
      console.log("test component mounted");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("test component updated", this.state);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(value, setName) {
      var _this2 = this;

      this.setState({
        input: value
      }, function () {
        return setName(_this2.state.input);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, "fn: ", context.state.fn, ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }), "ln: ", context.state.ln, ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), "AnnualSalary: ", context.state.AnnualSalary, ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), "Super: ", context.state.Super, ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), "PeriodStart: ", context.state.PeriodStart, ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }), "age ", context.state.age, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Button"], {
          onClick: context.methods.increaseAge,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, "\uD83D\uDD3C"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          onSubmit: _this3.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "John",
          s: 12,
          onChange: function onChange(event) {
            return _this3.handlefnChange(event.target.value, context.methods.setFN);
          },
          label: "First Name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "Smith",
          s: 12,
          label: "Last Name",
          onChange: function onChange(event) {
            return _this3.handlelnChange(event.target.value, context.methods.setLN);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          s: 12,
          type: "number",
          label: "Annual Salary",
          placeholder: "$",
          onChange: function onChange(event) {
            return _this3.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          label: "Super Rate",
          s: 12,
          placeholder: "%",
          onChange: function onChange(event) {
            return _this3.handleSuperChange(event.target.value, context.methods.setSuper);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "Pick Date",
          type: "date",
          label: "Pay Period Start Date",
          s: 12,
          onChange: function onChange(event) {
            return _this3.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Button"], {
          onClick: function onClick(event) {
            return _this3.handleSubmit(event, event.target.value, context.methods.setName);
          },
          waves: "light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, "Submit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          type: "text",
          value: _this3.state.input,
          onChange: function onChange(event) {
            return _this3.handleKeyPress(event.target.value, context.methods.setName);
          },
          placeholder: "Change name...",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        })))));
      });
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Test);

/***/ }),

/***/ "./components/Wrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__("react-materialize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form__ = __webpack_require__("./components/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_ContextProvider__ = __webpack_require__("./provider/ContextProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_ContextProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__provider_ContextProvider__);
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Wrapper.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Wrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.children);
    }
  }]);

  return Wrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Wrapper);

/***/ }),

/***/ "./config/Context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // import {createContext} from 'react'

var MyContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
/* harmony default export */ __webpack_exports__["a"] = (MyContext);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form__ = __webpack_require__("./components/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Hero__ = __webpack_require__("./components/Hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Wrapper__ = __webpack_require__("./components/Wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_Context__ = __webpack_require__("./config/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_ContextProvider__ = __webpack_require__("./provider/ContextProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__provider_ContextProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__provider_ContextProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Table__ = __webpack_require__("./components/Table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Test__ = __webpack_require__("./components/Test.js");
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("indexpage mounted", __WEBPACK_IMPORTED_MODULE_8__provider_ContextProvider___default.a, __WEBPACK_IMPORTED_MODULE_7__config_Context__["a" /* default */]);
    } // componentDidUpdate() {
    //   console.log("indexpage updated:",this.state, )
    // }

  }, {
    key: "render",
    value: function render() {
      // const {Component, pageProps} = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "index"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Hero__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "columns is-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column is-half ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Form__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-2.1.1.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "path/to/your/bundle.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./provider/ContextProvider.js":
/***/ (function(module, exports) {

// import React, {Component} from 'react';
// import MyContext from '../config/Context';
// class MyProvider extends Component {
//   // constructor(){     super()     this.state={         FN:"john",
//   // LN:"smith"     } }
//   state = {
//     name: 'wes',
//     fn: 'fn',
//     ln: 'ln',
//     AnnualSalary: 0,
//     Super: 0,
//     PeriodStart: "mmddyyyy",
//     age: 100,
//     cool: true,
//     addPaystub: this.addPaystub.bind(this)
//   }
//   addPaystub(paystub)
//   {
//     console.log(paystub)
//     // Ids are used to optimize the React performance in the views
//     const payslipId = this.state.lastPayslipId + 1;
//     const payslips = [
//       {...payslip, id: payslipId},
//       ...this.state.payslipsContext.payslips
//     ];
//     this.setState({
//       lastPayslipId: payslipId,
//       payslipsContext: {...this.state.payslipsContext, payslips}
//     });
//   }
//   methods = {
//     setFN: (value) => this.setState({fn: value}),
//     setLN: (value) => this.setState({ln: value}),
//     setAnnualSalary: (value) => this.setState({AnnualSalary: value}),
//     setSuper: (value) => this.setState({Super: value}),
//     setPeriodStart: (value) => this.setState({PeriodStart: value}),
//     setName: (value) => this.setState({ name: value }),
//     increaseAge: () => this.setState({ age: ++this.state.age }),
//   }
//   componentWillMount() {  }
//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//         state: this.state,
//         methods: this.methods
//       }}>
//         {this.props.children}</MyContext.Provider>
//     );
//   }
// }
// export default MyProvider

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-materialize":
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map