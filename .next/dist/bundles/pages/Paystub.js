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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var EmployeeForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmployeeForm, _React$Component);

  function EmployeeForm() {
    _classCallCheck(this, EmployeeForm);

    return _possibleConstructorReturn(this, (EmployeeForm.__proto__ || Object.getPrototypeOf(EmployeeForm)).apply(this, arguments));
  }

  _createClass(EmployeeForm, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Row"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
        placeholder: "John",
        s: 12,
        label: "First Name",
        onChange: this.props.FN
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
        placeholder: "Smith",
        s: 12,
        label: "Last Name"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
        s: 12,
        label: "Annual Salary",
        placeholder: "$"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
        type: "number",
        label: "Super Rate",
        s: 12,
        placeholder: "%"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Input"], {
        placeholder: "Pick Date",
        type: "date",
        label: "Pay Period Start Date",
        s: 12,
        onChange: function onChange(e, value) {}
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_materialize__["Button"], {
        waves: "light"
      }, "Submit"));
    }
  }]);

  return EmployeeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


/* harmony default export */ __webpack_exports__["a"] = (EmployeeForm);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(3);


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
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
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
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Hero.js
var Hero = __webpack_require__(5);

// EXTERNAL MODULE: external "react-materialize"
var external__react_materialize_ = __webpack_require__(2);
var external__react_materialize__default = /*#__PURE__*/__webpack_require__.n(external__react_materialize_);

// CONCATENATED MODULE: ./components/Table.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Table_Slip =
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
      return external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement(external__react_materialize_["Table"], null, external__react__default.a.createElement("thead", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("th", {
        "data-field": "id"
      }, "Employee Name"), external__react__default.a.createElement("th", {
        "data-field": "Pay Period",
        className: "has-text-right"
      }, "Pay Period"))), external__react__default.a.createElement("tbody", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null)), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Gross Income:"), external__react__default.a.createElement("td", {
        className: "has-text-right"
      }, "$3.76")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Income Tax:"), external__react__default.a.createElement("td", {
        className: "has-text-right"
      }, "$7.00")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Net Income:"), external__react__default.a.createElement("td", {
        className: "has-text-right"
      }, "$7.00")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, "Super:"), external__react__default.a.createElement("td", {
        className: "has-text-right"
      }, "$7.00")))));
    }
  }]);

  return Slip;
}(external__react__default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);
// const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


/* harmony default export */ var Table = (Table_Slip);
// CONCATENATED MODULE: ./pages/Paystub.js
function Paystub__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Paystub__typeof = function _typeof(obj) { return typeof obj; }; } else { Paystub__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Paystub__typeof(obj); }

function Paystub__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Paystub__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Paystub__createClass(Constructor, protoProps, staticProps) { if (protoProps) Paystub__defineProperties(Constructor.prototype, protoProps); if (staticProps) Paystub__defineProperties(Constructor, staticProps); return Constructor; }

function Paystub__possibleConstructorReturn(self, call) { if (call && (Paystub__typeof(call) === "object" || typeof call === "function")) { return call; } return Paystub__assertThisInitialized(self); }

function Paystub__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Paystub__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Paystub_Paystub =
/*#__PURE__*/
function (_Component) {
  Paystub__inherits(Paystub, _Component);

  function Paystub() {
    Paystub__classCallCheck(this, Paystub);

    return Paystub__possibleConstructorReturn(this, (Paystub.__proto__ || Object.getPrototypeOf(Paystub)).apply(this, arguments));
  }

  Paystub__createClass(Paystub, [{
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
      }, external__react__default.a.createElement(Table, null))))), external__react__default.a.createElement("div", {
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