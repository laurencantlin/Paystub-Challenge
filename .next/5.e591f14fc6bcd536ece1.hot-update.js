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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_form__ = __webpack_require__("./node_modules/react-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_form__);
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
        input: _this.DEFAULT
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value, setName) {
        console.log("handlesubmit");
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
    }), _temp));
  }

  _createClass(EmployeeForm, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__config_Context__["a" /* default */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, function (_ref2) {
        var addPayslip = _ref2.addPayslip;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_form__["Form"], {
          onSubmit: function (_onSubmit) {
            function onSubmit(_x, _x2, _x3) {
              return _onSubmit.apply(this, arguments);
            }

            onSubmit.toString = function () {
              return _onSubmit.toString();
            };

            return onSubmit;
          }(function (values, event, _ref3) {
            var resetAll = _ref3.resetAll;
            var employee = formValuesToEmployee(values);
            var payslip = calculatePayslip(employee);
            addPayslip(payslip);
            if (onSubmit) onSubmit();
            resetAll();
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, function (_ref4) {
          var submitForm = _ref4.submitForm;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
            className: "employeeForm",
            onSubmit: submitForm,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "employeeForm_grid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_form__["Field"], {
            label: "First name",
            field: "firstName",
            type: "text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "employeeForm_footer",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, "Calculate")));
        });
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
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);


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

/***/ }),

/***/ "./node_modules/react-form/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFieldApi = exports.FieldApi = exports.withRadioGroup = exports.RadioGroup = exports.Checkbox = exports.Select = exports.TextArea = exports.Radio = exports.Text = exports.withNestedField = exports.NestedField = exports.withFormApi = exports.FormApi = exports.withField = exports.Field = exports.Form = undefined;

var _Form = __webpack_require__("./node_modules/react-form/es/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _Field = __webpack_require__("./node_modules/react-form/es/components/Field.js");

var _Field2 = _interopRequireDefault(_Field);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

var _FormApi = __webpack_require__("./node_modules/react-form/es/components/FormApi.js");

var _FormApi2 = _interopRequireDefault(_FormApi);

var _withFormApi = __webpack_require__("./node_modules/react-form/es/components/withFormApi.js");

var _withFormApi2 = _interopRequireDefault(_withFormApi);

var _NestedField = __webpack_require__("./node_modules/react-form/es/components/NestedField.js");

var _NestedField2 = _interopRequireDefault(_NestedField);

var _withNestedField = __webpack_require__("./node_modules/react-form/es/components/withNestedField.js");

var _withNestedField2 = _interopRequireDefault(_withNestedField);

var _FieldApi = __webpack_require__("./node_modules/react-form/es/components/FieldApi.js");

var _FieldApi2 = _interopRequireDefault(_FieldApi);

var _withFieldApi = __webpack_require__("./node_modules/react-form/es/components/withFieldApi.js");

var _withFieldApi2 = _interopRequireDefault(_withFieldApi);

var _Text = __webpack_require__("./node_modules/react-form/es/components/form-fields/Text.js");

var _Text2 = _interopRequireDefault(_Text);

var _Radio = __webpack_require__("./node_modules/react-form/es/components/form-fields/Radio.js");

var _Radio2 = _interopRequireDefault(_Radio);

var _TextArea = __webpack_require__("./node_modules/react-form/es/components/form-fields/TextArea.js");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__("./node_modules/react-form/es/components/form-fields/Select.js");

var _Select2 = _interopRequireDefault(_Select);

var _Checkbox = __webpack_require__("./node_modules/react-form/es/components/form-fields/Checkbox.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RadioGroup = __webpack_require__("./node_modules/react-form/es/components/form-fields/RadioGroup.js");

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _withRadioGroup = __webpack_require__("./node_modules/react-form/es/components/withRadioGroup.js");

var _withRadioGroup2 = _interopRequireDefault(_withRadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These should move to a react-form-styled package
// import StyledText from './components/styled-form-fields/Text'
// import StyledRadio from './components/styled-form-fields/Radio'
// import StyledTextArea from './components/styled-form-fields/TextArea'
// import StyledSelect from './components/styled-form-fields/Select'
// import StyledCheckbox from './components/styled-form-fields/Checkbox'

exports.Form = _Form2.default;
exports.Field = _Field2.default;
exports.withField = _withField2.default;
exports.FormApi = _FormApi2.default;
exports.withFormApi = _withFormApi2.default;
exports.NestedField = _NestedField2.default;
exports.withNestedField = _withNestedField2.default;
exports.Text = _Text2.default;
exports.Radio = _Radio2.default;
exports.TextArea = _TextArea2.default;
exports.Select = _Select2.default;
exports.Checkbox = _Checkbox2.default;
exports.RadioGroup = _RadioGroup2.default;
exports.withRadioGroup = _withRadioGroup2.default;
exports.FieldApi = _FieldApi2.default;
exports.withFieldApi = _withFieldApi2.default;

/***/ })

})
//# sourceMappingURL=5.e591f14fc6bcd536ece1.hot-update.js.map