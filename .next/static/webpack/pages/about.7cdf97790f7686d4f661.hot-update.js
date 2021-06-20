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
        className: "display-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, "Innovvatio \xE9 Luiz Claudio Dias Gomes"), __jsx("h4", {
        className: "display-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, "C.N.P.J: 40.18.756/0001-05"), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, "Version: ", this.state.version || "1.0.0"), __jsx("div", {
        className: "list-group-horizontal-sm mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, this.state.tags.map(function (tag) {
        return __jsx("span", {
          key: tag,
          className: "badge badge-pill badge-dark mr-1 mt-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }
        }, tag);
      }))), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "Pequeno aplicativo web desenvolvido para teste de Front End."), __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }), __jsx("p", {
        className: "font-weight-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, "Desenvolvido por Innovvatio"), __jsx("address", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, __jsx("p", {
        className: "font-italic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }
      }, "Envie e-mail:", __jsx("a", {
        className: "badge badge-pill badge-dark ml-1",
        href: this.state.emailLink,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, this.state.email))), this.state.changelog && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      }, __jsx("hr", {
        className: "my-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 19
        }
      }), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 19
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, "Changelog:")), __jsx("p", {
        className: "lead c-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInRhZ3MiLCJlbWFpbExpbmsiLCJjaGFuZ2Vsb2ciLCJ2ZXJzaW9uIiwic2V0U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGIiwiY29uc29sZSIsImxvZyIsIlZFUkNFTF9VUkwiLCJWRVJDRUxfR0lUSFVCX0RFUExPWU1FTlQiLCJWRVJDRUxfR0lUSFVCX09SRyIsIlZFUkNFTF9HSVRIVUJfUkVQTyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX09SRyIsIlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFUE8iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9TSEEiLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTE9HSU4iLCJWRVJDRUxfR0lUSFVCX0NPTU1JVF9BVVRIT1JfTkFNRSIsInBhY2thZ2VKc29uIiwibWFwIiwidGFnIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsc0JBREk7QUFFWEMsYUFBTyxFQUFFLFlBRkU7QUFHWEMsYUFBTyxFQUNMLCtHQUpTO0FBS1hDLFVBQUksRUFBRSxDQUNKLFFBREksRUFFSixPQUZJLEVBR0osUUFISSxFQUlKLFNBSkksRUFLSixPQUxJLEVBTUosUUFOSSxFQU9KLFFBUEksQ0FMSztBQWNYQyxlQUFTLEVBQUUsRUFkQTtBQWVYQyxlQUFTLEVBQUUsRUFmQTtBQWdCWEMsYUFBTyxFQUFFO0FBaEJFLEtBQWI7QUFGaUI7QUFvQmxCOzs7O3dDQUVt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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC43Y2RmOTc3OTBmNzY4NmQ0ZjY2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6IFwibHVpemNvd2J0ZkBnbWFpbC5jb21cIixcclxuICAgICAgc3ViamVjdDogXCJJbm5vdnZhdGlvXCIsXHJcbiAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgXCJIZWxsbyElMEQlMEElMEQlMEFTYXclMjB5b3UlMjB3ZWIlMjBhcHAlMjBOZXh0ZmxpeCwlMjBhbmQlMjB3YW50ZWQlMjB0byUyMHRhbGslMjB0byUyMHlvdS4lMEQlMEElMEQlMEFUaGFua3MuXCIsXHJcbiAgICAgIHRhZ3M6IFtcclxuICAgICAgICBcIm5leHRqc1wiLFxyXG4gICAgICAgIFwicmVhY3RcIixcclxuICAgICAgICBcIm5vZGVqc1wiLFxyXG4gICAgICAgIFwiZXhwcmVzc1wiLFxyXG4gICAgICAgIFwiYXhpb3NcIixcclxuICAgICAgICBcInZlcmNlbFwiLFxyXG4gICAgICAgIFwibW92aWVzXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIGVtYWlsTGluazogXCJcIixcclxuICAgICAgY2hhbmdlbG9nOiBcIlwiLFxyXG4gICAgICB2ZXJzaW9uOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsTGluazogYG1haWx0bzoke3RoaXMuc3RhdGUuZW1haWx9P3N1YmplY3Q9JHt0aGlzLnN0YXRlLnN1YmplY3R9JmJvZHk9JHt0aGlzLnN0YXRlLm1lc3NhZ2V9YCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFRikge1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfVVJMKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9ERVBMT1lNRU5UKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9PUkcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX1JFUE8pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9PUkcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5WRVJDRUxfR0lUSFVCX0NPTU1JVF9SRVBPKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfUkVGKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfU0hBKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfQVVUSE9SX0xPR0lOKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVkVSQ0VMX0dJVEhVQl9DT01NSVRfQVVUSE9SX05BTUUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjaGFuZ2Vsb2c6IHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1JFRixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFja2FnZUpzb24gJiYgcGFja2FnZUpzb24udmVyc2lvbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB2ZXJzaW9uOiBwYWNrYWdlSnNvbi52ZXJzaW9uLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+SW5ub3Z2YXRpbzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPklubm92dmF0aW8gw6kgTHVpeiBDbGF1ZGlvIERpYXMgR29tZXM8L2gzPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5DLk4uUC5KOiA0MC4xOC43NTYvMDAwMS0wNTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8aDQ+VmVyc2lvbjoge3RoaXMuc3RhdGUudmVyc2lvbiB8fCBcIjEuMC4wXCJ9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1ob3Jpem9udGFsLXNtIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGFyayBtci0xIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIGMtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgUGVxdWVubyBhcGxpY2F0aXZvIHdlYiBkZXNlbnZvbHZpZG8gcGFyYSB0ZXN0ZSBkZSBGcm9udCBFbmQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1saWdodFwiPkRlc2Vudm9sdmlkbyBwb3IgSW5ub3Z2YXRpbzwvcD5cclxuICAgICAgICAgICAgICA8YWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVudmllIGUtbWFpbDpcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRhcmsgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5lbWFpbExpbmt9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFuZ2Vsb2cgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5DaGFuZ2Vsb2c6PC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIGMtZGFya1wiPnt0aGlzLnN0YXRlLmNoYW5nZWxvZ308L3A+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=