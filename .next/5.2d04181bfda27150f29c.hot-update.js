webpackHotUpdate(5,{

/***/ "./provider/ContextProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Context__ = __webpack_require__("./config/Context.js");
var _jsxFileName = "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/provider/ContextProvider.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
        addPayslip: _this.addPayslip.bind(_assertThisInitialized(_this))
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
            fn: value
          });
        },
        setPeriodStart: function setPeriodStart(value) {
          return _this.setState({
            fn: value
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
    key: "addPayslip",
    value: function addPayslip(payslip) {
      // Ids are used to optimize the React performance in the views
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MyProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = MyProvider;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyProvider, "MyProvider", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/provider/ContextProvider.js");
  reactHotLoader.register(_default, "default", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/provider/ContextProvider.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.2d04181bfda27150f29c.hot-update.js.map