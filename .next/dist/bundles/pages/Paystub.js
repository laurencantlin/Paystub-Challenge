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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // import {createContext} from 'react'

var MyContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
/* harmony default export */ __webpack_exports__["a"] = (MyContext);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);


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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, null, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          onSubmit: _this2.handleSubmit
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Row"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "John",
          required: true,
          s: 12,
          onChange: function onChange(event) {
            return _this2.handlefnChange(event.target.value, context.methods.setFN);
          },
          label: "First Name"
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "Smith",
          required: true,
          s: 12,
          label: "Last Name",
          onChange: function onChange(event) {
            return _this2.handlelnChange(event.target.value, context.methods.setLN);
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          required: true,
          s: 12,
          type: "number",
          label: "Annual Salary",
          placeholder: "$",
          onChange: function onChange(event) {
            return _this2.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary);
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
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          required: true,
          placeholder: "Pick Date",
          type: "date",
          label: "Pay Period Start Date",
          s: 12,
          onChange: function onChange(event) {
            return _this2.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart);
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Button"], {
          onClick: function onClick(event) {
            return _this2.handleSubmit(event, event.target.value, context.methods.setName);
          },
          waves: "light"
        }, "Submit")))));
      });
    }
  }]);

  return EmployeeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (EmployeeForm);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(4);


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
        className: "hero is-fullheight is-primary"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "hero-body has-text-centered is-centered"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "title"
      }, "Employee Details"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "subtitle"
      }, "Please fill out the form below"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), this.props.children)));
    }
  }]);

  return Hero;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(4);


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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return Wrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Wrapper);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);


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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, null, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id"
        }, _this2.renderName(context.state.fn, context.state.ln)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right"
        }, _this2.renderDate(context.state.PeriodStart), "- ", _this2.renderDate(context.state.PeriodEnd)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "id"
        }, "Annual Income:  "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          "data-field": "Pay Period",
          className: "has-text-right"
        }, "$", context.state.AnnualSalary)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Gross Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$", _this2.renderGross(context.state.AnnualSalary), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Income Tax:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "- $", _this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Net Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$", _this2.renderNetIncome(_this2.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets), _this2.renderGross(context.state.AnnualSalary)), " monthly")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Super Amount:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js


var linkStyle = {
  marginRight: 15
};

var Header_Header = function Header() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "Home")), external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "About")), external__react__default.a.createElement("div", {
    className: "field"
  }, external__react__default.a.createElement("label", {
    className: "label"
  }, "Name"), external__react__default.a.createElement("div", {
    className: "control"
  }, external__react__default.a.createElement("input", {
    className: "input",
    type: "text",
    placeholder: "Text input"
  }))));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Hero.js
var Hero = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Table.js
var Table = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Wrapper.js
var Wrapper = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/Paystub.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Paystub_Paystub =
/*#__PURE__*/
function (_Component) {
  _inherits(Paystub, _Component);

  function Paystub() {
    _classCallCheck(this, Paystub);

    return _possibleConstructorReturn(this, (Paystub.__proto__ || Object.getPrototypeOf(Paystub)).apply(this, arguments));
  }

  _createClass(Paystub, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("paytstubpage mounted", this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.state);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Form"), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      }), external__react__default.a.createElement("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css",
        rel: "stylesheet"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), external__react__default.a.createElement(Hero["a" /* default */], null, external__react__default.a.createElement("div", {
        className: "columns is-centered"
      }, external__react__default.a.createElement("div", {
        className: "column is-half "
      }, external__react__default.a.createElement("div", {
        className: "box"
      }, external__react__default.a.createElement(Wrapper["a" /* default */], null, external__react__default.a.createElement(Table["a" /* default */], null)))))), external__react__default.a.createElement("div", {
        className: "container"
      }), external__react__default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-2.1.1.min.js"
      }), external__react__default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"
      }), external__react__default.a.createElement("script", {
        src: "path/to/your/bundle.js"
      }));
    }
  }]);

  return Paystub;
}(external__react_["Component"]);

/* harmony default export */ var pages_Paystub = __webpack_exports__["default"] = (Paystub_Paystub);

/***/ })
/******/ ]);