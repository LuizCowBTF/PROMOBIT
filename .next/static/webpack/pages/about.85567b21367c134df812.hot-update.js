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
      }, "Innovvatio Filmes"), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, "Version: ", this.state.version || "1.0.0"), __jsx("div", {
        className: "list-group-horizontal-sm mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, this.state.tags.map(function (tag) {
        return __jsx("span", {
          key: tag,
          className: "badge badge-pill badge-dark mr-1 mt-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }
        }, tag);
      }))), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }
      }, "Pequeno aplicativo web desenvolvido para teste de Front End."), __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }), __jsx("p", {
        className: "font-weight-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, "Desenvolvido por Innovvatio"), __jsx("address", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "font-italic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "Envie e-mail:", __jsx("a", {
        className: "badge badge-pill badge-dark ml-1",
        href: this.state.emailLink,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 19
        }
      }, this.state.email))), this.state.changelog && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }, __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 19
        }
      }), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      }, "Changelog:")), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInRhZ3MiLCJlbWFpbExpbmsiLCJjaGFuZ2Vsb2ciLCJ2ZXJzaW9uIiwic2V0U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGIiwiY29uc29sZSIsImxvZyIsIlZFUkNFTF9VUkwiLCJWRVJDRUxfR0lUSFVCX0RFUExPWU1FTlQiLCJWRVJDRUxfR0lUSFVCX09SRyIsIlZFUkNFTF9HSVRIVUJfUkVQTyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX09SRyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFUE8iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9TSEEiLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTE9HSU4iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTkFNRSIsInBhY2thZ2VKc29uIiwibWFwIiwidGFnIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsc0JBREk7QUFFWEMsYUFBTyxFQUFFLFlBRkU7QUFHWEMsYUFBTyxFQUNMLCtHQUpTO0FBS1hDLFVBQUksRUFBRSxDQUNKLFFBREksRUFFSixPQUZJLEVBR0osUUFISSxFQUlKLFNBSkksRUFLSixPQUxJLEVBTUosUUFOSSxFQU9KLFFBUEksQ0FMSztBQWNYQyxlQUFTLEVBQUUsRUFkQTtBQWVYQyxlQUFTLEVBQUUsRUFmQTtBQWdCWEMsYUFBTyxFQUFFO0FBaEJFLEtBQWI7QUFGaUI7QUFvQmxCOzs7O3dDQUVt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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxCRixFQW1CRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FuQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRUU7QUFDRSxpQkFBUyxFQUFDLGtDQURaO0FBRUUsWUFBSSxFQUFFLEtBQUt6QixLQUFMLENBQVdLLFNBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRyxLQUFLTCxLQUFMLENBQVdDLEtBSmQsQ0FGRixDQURGLENBcEJGLEVBK0JHLEtBQUtELEtBQUwsQ0FBV00sU0FBWCxJQUNDLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQUZGLEVBS0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE0QixLQUFLTixLQUFMLENBQVdNLFNBQXZDLENBTEYsQ0FoQ0osQ0FERixDQURGLENBREYsQ0FERjtBQWlERDs7OztFQXBHaUJvQiw0Q0FBSyxDQUFDQyxTOztBQXVHWDdCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0Ljg1NTY3YjIxMzY3YzEzNGRmODEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogXCJsdWl6Y293YnRmQGdtYWlsLmNvbVwiLFxyXG4gICAgICBzdWJqZWN0OiBcIklubm92dmF0aW9cIixcclxuICAgICAgbWVzc2FnZTpcclxuICAgICAgICBcIkhlbGxvISUwRCUwQSUwRCUwQVNhdyUyMHlvdSUyMHdlYiUyMGFwcCUyME5leHRmbGl4LCUyMGFuZCUyMHdhbnRlZCUyMHRvJTIwdGFsayUyMHRvJTIweW91LiUwRCUwQSUwRCUwQVRoYW5rcy5cIixcclxuICAgICAgdGFnczogW1xyXG4gICAgICAgIFwibmV4dGpzXCIsXHJcbiAgICAgICAgXCJyZWFjdFwiLFxyXG4gICAgICAgIFwibm9kZWpzXCIsXHJcbiAgICAgICAgXCJleHByZXNzXCIsXHJcbiAgICAgICAgXCJheGlvc1wiLFxyXG4gICAgICAgIFwidmVyY2VsXCIsXHJcbiAgICAgICAgXCJtb3ZpZXNcIixcclxuICAgICAgXSxcclxuICAgICAgZW1haWxMaW5rOiBcIlwiLFxyXG4gICAgICBjaGFuZ2Vsb2c6IFwiXCIsXHJcbiAgICAgIHZlcnNpb246IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWxMaW5rOiBgbWFpbHRvOiR7dGhpcy5zdGF0ZS5lbWFpbH0/c3ViamVjdD0ke3RoaXMuc3RhdGUuc3ViamVjdH0mYm9keT0ke3RoaXMuc3RhdGUubWVzc2FnZX1gLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0RFUExPWU1FTlQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX09SRyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfUkVQTyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX09SRyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFUE8pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9SRUYpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9TSEEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTE9HSU4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTkFNRSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNoYW5nZWxvZzogcHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChwYWNrYWdlSnNvbiAmJiBwYWNrYWdlSnNvbi52ZXJzaW9uKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Jbm5vdnZhdGlvIEZpbG1lczwvaDE+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8aDQ+VmVyc2lvbjoge3RoaXMuc3RhdGUudmVyc2lvbiB8fCBcIjEuMC4wXCJ9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1ob3Jpem9udGFsLXNtIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFyayBtci0xIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIGMtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgUGVxdWVubyBhcGxpY2F0aXZvIHdlYiBkZXNlbnZvbHZpZG8gcGFyYSB0ZXN0ZSBkZSBGcm9udCBFbmQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1saWdodFwiPkRlc2Vudm9sdmlkbyBwb3IgSW5ub3Z2YXRpbzwvcD5cclxuICAgICAgICAgICAgICA8YWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVudmllIGUtbWFpbDpcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhcmsgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5lbWFpbExpbmt9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFuZ2Vsb2cgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5DaGFuZ2Vsb2c6PC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIGMtZGFya1wiPnt0aGlzLnN0YXRlLmNoYW5nZWxvZ308L3A+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=