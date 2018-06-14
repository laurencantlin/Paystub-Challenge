webpackHotUpdate(4,{

/***/ "./components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
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


 // import 'antd/lib/form/style/css';        // for css

var FormItem = __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Form */].Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
}

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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = EmployeeForm.__proto__ || Object.getPrototypeOf(EmployeeForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    }), _temp));
  }

  _createClass(EmployeeForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // To disabled submit button at the beginning.
      this.props.form.validateFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsError = _props$form.getFieldsError,
          getFieldError = _props$form.getFieldError,
          isFieldTouched = _props$form.isFieldTouched; // Only show error after a field is touched.

      var userNameError = isFieldTouched('userName') && getFieldError('userName');
      var passwordError = isFieldTouched('password') && getFieldError('password');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Form */], {
        layout: "inline",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        className: "field ",
        validateStatus: userNameError ? 'error' : '',
        help: userNameError || '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, getFieldDecorator('userName', {
        rules: [{
          required: true,
          message: 'Please input your username!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Input */], {
        prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Icon */], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }),
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        validateStatus: passwordError ? 'error' : '',
        help: passwordError || '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your Password!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["d" /* Input */], {
        prefix: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["c" /* Icon */], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Button */], {
        type: "primary",
        htmlType: "submit",
        disabled: hasErrors(getFieldsError()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Log in")));
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

var WrappedHorizontalLoginForm = __WEBPACK_IMPORTED_MODULE_2_antd__["b" /* Form */].create()(EmployeeForm); // ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

var _default = WrappedHorizontalLoginForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormItem, "FormItem", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  reactHotLoader.register(hasErrors, "hasErrors", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  reactHotLoader.register(EmployeeForm, "EmployeeForm", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  reactHotLoader.register(WrappedHorizontalLoginForm, "WrappedHorizontalLoginForm", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  reactHotLoader.register(_default, "default", "/Users/laurencantlin/Desktop/Code/Paystub-Challenge/components/Form.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.40708201723cf6874719.hot-update.js.map