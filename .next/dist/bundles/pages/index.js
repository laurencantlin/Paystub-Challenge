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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // import {createContext} from 'react'

var MyContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
/* harmony default export */ __webpack_exports__["a"] = (MyContext);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Context__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var MyProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(MyProvider, _Component);

  function MyProvider() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MyProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MyProvider.__proto__ || Object.getPrototypeOf(MyProvider)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        name: 'wes',
        fn: 'fn',
        ln: 'ln',
        AnnualSalary: 0,
        Super: 0,
        PeriodStart: "mmddyyyy",
        age: 100,
        cool: true,
        addPaystub: _this.addPaystub.bind(_assertThisInitialized(_this))
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "methods", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        setFN: function setFN(value) {
          return _this.setState({
            fn: value
          });
        },
        setLN: function setLN(value) {
          return _this.setState({
            ln: value
          });
        },
        setAnnualSalary: function setAnnualSalary(value) {
          return _this.setState({
            AnnualSalary: value
          });
        },
        setSuper: function setSuper(value) {
          return _this.setState({
            Super: value
          });
        },
        setPeriodStart: function setPeriodStart(value) {
          return _this.setState({
            PeriodStart: value
          });
        },
        setName: function setName(value) {
          return _this.setState({
            name: value
          });
        },
        increaseAge: function increaseAge() {
          return _this.setState({
            age: ++_this.state.age
          });
        }
      }
    }), _temp));
  }

  _createClass(MyProvider, [{
    key: "addPaystub",
    value: function addPaystub(paystub) {
      console.log(paystub); // Ids are used to optimize the React performance in the views

      var payslipId = this.state.lastPayslipId + 1;
      var payslips = [_objectSpread({}, payslip, {
        id: payslipId
      })].concat(_toConsumableArray(this.state.payslipsContext.payslips));
      this.setState({
        lastPayslipId: payslipId,
        payslipsContext: _objectSpread({}, this.state.payslipsContext, {
          payslips: payslips
        })
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__config_Context__["a" /* default */].Provider, {
        value: {
          state: this.state,
          methods: this.methods
        }
      }, this.props.children);
    }
  }]);

  return MyProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyProvider);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);


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
        name: 'wes',
        fn: 'fn',
        ln: 'ln',
        AnnualSalary: 0,
        Super: 0,
        PeriodStart: "mmddyyyy",
        age: 100,
        cool: true // state = {
        //   input: this.DEFAULT
        // };

      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _value, setName) {
        console.log(_this.state.MyContext);
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

  _createClass(EmployeeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("form component mounted");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("Form component updated:", this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, null, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "  */}", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          onSubmit: _this2.handleSubmit
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Row"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "John",
          s: 12,
          onChange: function onChange(event) {
            return _this2.handlefnChange(event.target.value, context.methods.setFN);
          },
          label: "First Name"
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          placeholder: "Smith",
          s: 12,
          label: "Last Name",
          onChange: function onChange(event) {
            return _this2.handlelnChange(event.target.value, context.methods.setLN);
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          s: 12,
          type: "number",
          label: "Annual Salary",
          placeholder: "$",
          onChange: function onChange(event) {
            return _this2.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary);
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
          label: "Super Rate",
          s: 12,
          placeholder: "%",
          onChange: function onChange(event) {
            return _this2.handleSuperChange(event.target.value, context.methods.setSuper);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(5);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_ContextProvider__ = __webpack_require__(4);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_Context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_ContextProvider__ = __webpack_require__(4);


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
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, null, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "hello ", context.state.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "container"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Table"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "id"
        }, context.state.fn, " ", context.state.ln), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
          "data-field": "Pay Period",
          className: "has-text-right"
        }, "Pay Period"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Gross Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$3.76")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Income Tax:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$7.00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Net Income:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$7.00")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, "Super:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
          className: "has-text-right"
        }, "$7.00"))))));
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
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Form.js
var Form = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Hero.js
var Hero = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Wrapper.js
var Wrapper = __webpack_require__(9);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./config/Context.js
var Context = __webpack_require__(1);

// EXTERNAL MODULE: ./provider/ContextProvider.js
var ContextProvider = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Table.js
var Table = __webpack_require__(10);

// EXTERNAL MODULE: external "react-materialize"
var external__react_materialize_ = __webpack_require__(3);
var external__react_materialize__default = /*#__PURE__*/__webpack_require__.n(external__react_materialize_);

// CONCATENATED MODULE: ./components/Test.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Test_Test =
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
        router__default.a.push('/Paystub');
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

      return external__react__default.a.createElement(Context["a" /* default */].Consumer, null, function (context) {
        return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("div", null, "fn: ", context.state.fn, ",", external__react__default.a.createElement("br", null), "ln: ", context.state.ln, ",", external__react__default.a.createElement("br", null), "AnnualSalary: ", context.state.AnnualSalary, ",", external__react__default.a.createElement("br", null), "Super: ", context.state.Super, ",", external__react__default.a.createElement("br", null), "PeriodStart: ", context.state.PeriodStart, ",", external__react__default.a.createElement("br", null), "age ", context.state.age, external__react__default.a.createElement(external__react_materialize_["Button"], {
          onClick: context.methods.increaseAge
        }, "\uD83D\uDD3C"), " ", external__react__default.a.createElement("form", {
          onSubmit: _this3.handleSubmit
        }, " ", external__react__default.a.createElement(external__react_materialize_["Row"], null, external__react__default.a.createElement(external__react_materialize_["Input"], {
          placeholder: "John",
          s: 12,
          onChange: function onChange(event) {
            return _this3.handlefnChange(event.target.value, context.methods.setFN);
          },
          label: "First Name"
        }), external__react__default.a.createElement(external__react_materialize_["Input"], {
          placeholder: "Smith",
          s: 12,
          label: "Last Name",
          onChange: function onChange(event) {
            return _this3.handlelnChange(event.target.value, context.methods.setLN);
          }
        }), external__react__default.a.createElement(external__react_materialize_["Input"], {
          s: 12,
          type: "number",
          label: "Annual Salary",
          placeholder: "$",
          onChange: function onChange(event) {
            return _this3.handleAnnualSalaryChange(event.target.value, context.methods.setAnnualSalary);
          }
        }), external__react__default.a.createElement(external__react_materialize_["Input"], {
          label: "Super Rate",
          s: 12,
          placeholder: "%",
          onChange: function onChange(event) {
            return _this3.handleSuperChange(event.target.value, context.methods.setSuper);
          }
        }), external__react__default.a.createElement(external__react_materialize_["Input"], {
          placeholder: "Pick Date",
          type: "date",
          label: "Pay Period Start Date",
          s: 12,
          onChange: function onChange(event) {
            return _this3.handlePeriodStartChange(event.target.value, context.methods.setPeriodStart);
          }
        }), external__react__default.a.createElement(external__react_materialize_["Button"], {
          onClick: function onClick(event) {
            return _this3.handleSubmit(event, event.target.value, context.methods.setName);
          },
          waves: "light"
        }, "Submit"), external__react__default.a.createElement(external__react_materialize_["Input"], {
          type: "text",
          value: _this3.state.input,
          onChange: function onChange(event) {
            return _this3.handleKeyPress(event.target.value, context.methods.setName);
          },
          placeholder: "Change name..."
        })))));
      });
    }
  }]);

  return Test;
}(external__react__default.a.Component);

/* harmony default export */ var components_Test = (Test_Test);
// CONCATENATED MODULE: ./pages/index.js
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index() {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  pages__createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("indexpage mounted", ContextProvider["a" /* default */], Context["a" /* default */]);
    } // componentDidUpdate() {
    //   console.log("indexpage updated:",this.state, )
    // }

  }, {
    key: "render",
    value: function render() {
      // const {Component, pageProps} = this.props;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "index"), external__react__default.a.createElement("link", {
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
      }, external__react__default.a.createElement(Form["a" /* default */], null))))), external__react__default.a.createElement("div", {
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

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);