webpackHotUpdate(2,{

/***/ "./config/Context.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/next/app.js":
false,

/***/ "./node_modules/next/dist/lib/app.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import App, {Container} from 'next/app'
// import React from 'react';
// import MyContext from '../config/Context';
// export default class MyApp extends App {
//   state = {
//     employeeDetails: {},
//     employeePaystub: {
//       paystub: {},
//       newPaystub: this
//         .newPaystub
//         .bind(this)
//     }
//   };
//   newPaystub(paystub){
//     this.setState({
//         employeePaystub:{paystub}
//     })
//   }
//   render()
//   {
//     const {Component, pageProps} = this.props;
//     return (
//       <Container>
//         <MyContext.Provider value={this.state.MyContext}>
//           <Component {...pageProps}/>
//         </MyContext.Provider>
//       </Container>
//     );
//   }
// }
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  

/***/ })

})
//# sourceMappingURL=2.595451b5ac4087f3623d.hot-update.js.map