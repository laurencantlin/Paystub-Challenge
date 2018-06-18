module.exports =

        __NEXT_REGISTER_PAGE('/_document', function() {
          var comp = 
      webpackJsonp([2],{

/***/ "./pages/_document.js":
/***/ (function(module, exports, __webpack_require__) {

// import Document, {Head, Main, NextScript} from 'next/document'
// export default class MyDocument extends Document
// {
//   render()
//   {
//     return (
//       <html>
//         <Head>
//           <meta content="width=device-width, initial-scale=1" name="viewport"/>
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//           <link rel="stylesheet" href="/_next/static/style.css"/>
//         </Head>
//         <body>
//           <Main/>
//           <NextScript/>
//         </body>
//       </html>
//     )
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=_document.js.map