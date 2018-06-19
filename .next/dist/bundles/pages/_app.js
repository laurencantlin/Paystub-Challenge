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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_Context__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        employeeDetails: {
          fn: 'fn',
          ln: 'ln',
          AnnualSalary: 0,
          Super: 0,
          PeriodStart: "mmddyyyy",
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
        },
        employeePaystub: {
          paystub: {},
          newPaystub: _this.newPaystub.bind(_assertThisInitialized(_this))
        },
        fn: 'fna',
        ln: 'lna',
        AnnualSalary: 0,
        Super: 0,
        PeriodStart: "mmddyyyy"
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

  _createClass(MyApp, [{
    key: "newPaystub",
    value: function newPaystub(paystub) {
      console.log("newpaystub");
      this.setState({
        employeePaystub: {
          paystub: paystub
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("mounted", this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_app__["Container"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__config_Context__["a" /* default */].Provider, {
        value: {
          state: this.state,
          methods: this.methods
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_0_next_app___default.a);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ })
/******/ ]);