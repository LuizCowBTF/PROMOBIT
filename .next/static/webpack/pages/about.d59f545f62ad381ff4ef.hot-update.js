webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);





var _jsxFileName = "C:\\PROJETOS\\react-next-movie-app\\pages\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var About = /*#__PURE__*/function (_React$Component) {
  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(About, _React$Component);

  var _super = _createSuper(About);

  function About(props) {
    var _this;

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    _this = _super.call(this, props);
    _this.state = {
      email: "luizcowbtf@gmail.com",
      subject: "Innovvatio",
      message: "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Nextflix,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.",
      tags: ["nextjs", "react", "nodejs", "express", "axios", "vercel", "movies"],
      emailLink: "",
      changelog: "",
      version: ""
    };
    return _this;
  }

  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        emailLink: "mailto:".concat(this.state.email, "?subject=").concat(this.state.subject, "&body=").concat(this.state.message)
      });

      if (process && process.env && process.env.VERCEL_GITHUB_COMMIT_REF) {
        console.log(process.env.VERCEL_URL);
        console.log(process.env.VERCEL_GITHUB_DEPLOYMENT);
        console.log(process.env.VERCEL_GITHUB_ORG);
        console.log(process.env.VERCEL_GITHUB_REPO);
        console.log(process.env.VERCEL_GITHUB_COMMIT_ORG);
        console.log(process.env.VERCEL_GITHUB_COMMIT_REPO);
        console.log(process.env.VERCEL_GITHUB_COMMIT_REF);
        console.log(process.env.VERCEL_GITHUB_COMMIT_SHA);
        console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN);
        console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_NAME);
        this.setState({
          changelog: process.env.VERCEL_GITHUB_COMMIT_REF
        });
      }

      if (_package_json__WEBPACK_IMPORTED_MODULE_6__ && _package_json__WEBPACK_IMPORTED_MODULE_6__.version) {
        this.setState({
          version: _package_json__WEBPACK_IMPORTED_MODULE_6__.version
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jumbotron",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "display-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, "Innovvatio"), __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, "Innovvatio \xE9 Luiz Claudio Dias Gomes"), __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, "C.N.P.J: 40.18.756/0001-05"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, "Pequeno aplicativo web desenvolvido para teste de Front End."), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, "Version: ", this.state.version || "1.0.0"), __jsx("div", {
        className: "list-group-horizontal-sm mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, this.state.tags.map(function (tag) {
        return __jsx("span", {
          key: tag,
          className: "badge badge-pill badge-dark mr-1 mt-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }
        }, tag);
      }))), __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }), __jsx("p", {
        className: "font-weight-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, "Desenvolvido por Innovvatio"), __jsx("address", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "font-italic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, "Envie e-mail:", __jsx("a", {
        className: "badge badge-pill badge-dark ml-1",
        href: this.state.emailLink,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 19
        }
      }, this.state.email))), this.state.changelog && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }
      }), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, "Changelog:")), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, this.state.changelog))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInRhZ3MiLCJlbWFpbExpbmsiLCJjaGFuZ2Vsb2ciLCJ2ZXJzaW9uIiwic2V0U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGIiwiY29uc29sZSIsImxvZyIsIlZFUkNFTF9VUkwiLCJWRVJDRUxfR0lUSFVCX0RFUExPWU1FTlQiLCJWRVJDRUxfR0lUSFVCX09SRyIsIlZFUkNFTF9HSVRIVUJfUkVQTyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX09SRyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFUE8iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9TSEEiLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTE9HSU4iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTkFNRSIsInBhY2thZ2VKc29uIiwibWFwIiwidGFnIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsc0JBREk7QUFFWEMsYUFBTyxFQUFFLFlBRkU7QUFHWEMsYUFBTyxFQUNMLCtHQUpTO0FBS1hDLFVBQUksRUFBRSxDQUNKLFFBREksRUFFSixPQUZJLEVBR0osUUFISSxFQUlKLFNBSkksRUFLSixPQUxJLEVBTUosUUFOSSxFQU9KLFFBUEksQ0FMSztBQWNYQyxlQUFTLEVBQUUsRUFkQTtBQWVYQyxlQUFTLEVBQUUsRUFmQTtBQWdCWEMsYUFBTyxFQUFFO0FBaEJFLEtBQWI7QUFGaUI7QUFvQmxCOzs7O3dDQUVt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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZDU5ZjU0NWY2MmFkMzgxZmY0ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiBcImx1aXpjb3didGZAZ21haWwuY29tXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwiSW5ub3Z2YXRpb1wiLFxyXG4gICAgICBtZXNzYWdlOlxyXG4gICAgICAgIFwiSGVsbG8hJTBEJTBBJTBEJTBBU2F3JTIweW91JTIwd2ViJTIwYXBwJTIwTmV4dGZsaXgsJTIwYW5kJTIwd2FudGVkJTIwdG8lMjB0YWxrJTIwdG8lMjB5b3UuJTBEJTBBJTBEJTBBVGhhbmtzLlwiLFxyXG4gICAgICB0YWdzOiBbXHJcbiAgICAgICAgXCJuZXh0anNcIixcclxuICAgICAgICBcInJlYWN0XCIsXHJcbiAgICAgICAgXCJub2RlanNcIixcclxuICAgICAgICBcImV4cHJlc3NcIixcclxuICAgICAgICBcImF4aW9zXCIsXHJcbiAgICAgICAgXCJ2ZXJjZWxcIixcclxuICAgICAgICBcIm1vdmllc1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBlbWFpbExpbms6IFwiXCIsXHJcbiAgICAgIGNoYW5nZWxvZzogXCJcIixcclxuICAgICAgdmVyc2lvbjogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbExpbms6IGBtYWlsdG86JHt0aGlzLnN0YXRlLmVtYWlsfT9zdWJqZWN0PSR7dGhpcy5zdGF0ZS5zdWJqZWN0fSZib2R5PSR7dGhpcy5zdGF0ZS5tZXNzYWdlfWAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9SRUYpIHtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfREVQTE9ZTUVOVCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfT1JHKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9SRVBPKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfT1JHKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVQTyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFRik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1NIQSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX0FVVEhPUl9MT0dJTik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX0FVVEhPUl9OQU1FKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2hhbmdlbG9nOiBwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9SRUYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhY2thZ2VKc29uICYmIHBhY2thZ2VKc29uLnZlcnNpb24pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdmVyc2lvbjogcGFja2FnZUpzb24udmVyc2lvbixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPklubm92dmF0aW88L2gxPlxyXG4gICAgICAgICAgICAgIDxoMz5Jbm5vdnZhdGlvIMOpIEx1aXogQ2xhdWRpbyBEaWFzIEdvbWVzPC9oMz5cclxuICAgICAgICAgICAgICA8aDQ+Qy5OLlAuSjogNDAuMTguNzU2LzAwMDEtMDU8L2g0PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgYy1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICBQZXF1ZW5vIGFwbGljYXRpdm8gd2ViIGRlc2Vudm9sdmlkbyBwYXJhIHRlc3RlIGRlIEZyb250IEVuZC5cclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGg0PlZlcnNpb246IHt0aGlzLnN0YXRlLnZlcnNpb24gfHwgXCIxLjAuMFwifTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaG9yaXpvbnRhbC1zbSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhcmsgbXItMSBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWxpZ2h0XCI+RGVzZW52b2x2aWRvIHBvciBJbm5vdnZhdGlvPC9wPlxyXG4gICAgICAgICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgRW52aWUgZS1tYWlsOlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFyayBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnN0YXRlLmVtYWlsTGlua31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoYW5nZWxvZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkNoYW5nZWxvZzo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgYy1kYXJrXCI+e3RoaXMuc3RhdGUuY2hhbmdlbG9nfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==