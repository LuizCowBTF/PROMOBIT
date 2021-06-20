webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\PROJETOS\\react-next-movie-app\\components\\modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// const Modal = (props) => {
//   let closeButton = null;
//   const submitModal = () => {
//     alert("sub");
//     closeButton.click();
//   };
//   return (
//     <React.Fragment>
//       <button
//         type="button"
//         className="btn btn-outline-dark"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Create Movie
//       </button>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Create Movie
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 ref={(ele) => (closeButton = ele)}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   onClick={submitModal}
//                   type="button"
//                   className="btn btn-outline-dark"
//                 >
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Modal;


var Modal = /*#__PURE__*/function (_React$Component) {
  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    _this = _super.call(this, props);

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submitModal", function () {
      _this.closeModal();
    });

    _this.closeButton = null;
    return _this;
  }

  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "closeModal",
    value: function closeModal() {
      this.closeButton.click();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 7
        }
      }, this.props.environment === "dev" && __jsx("button", {
        type: "button",
        className: "btn btn-outline-dark",
        "data-toggle": "modal",
        "data-target": "#exampleModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, "Create Movie"), __jsx("div", {
        className: "modal fade",
        id: "exampleModal",
        tabIndex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, "Criar Filme"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 19
        }
      }, "\xD7"))), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 15
        }
      }, this.props.children), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }, __jsx("button", {
        ref: function ref(ele) {
          return _this2.closeButton = ele;
        },
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }
      }, "Fechar"), this.props.hasSubmit && __jsx("button", {
        onClick: this.submitModal,
        type: "button",
        className: "btn btn-outline-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, "Savar alter\xE7\xF5es"))))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwiY2xvc2VNb2RhbCIsImNsb3NlQnV0dG9uIiwiY2xpY2siLCJlbnZpcm9ubWVudCIsImNoaWxkcmVuIiwiZWxlIiwiaGFzU3VibWl0Iiwic3VibWl0TW9kYWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsOFNBU0wsWUFBTTtBQUNsQixZQUFLQyxVQUFMO0FBQ0QsS0FYa0I7O0FBR2pCLFVBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFIaUI7QUFJbEI7Ozs7aUNBRVk7QUFDWCxXQUFLQSxXQUFMLENBQWlCQyxLQUFqQjtBQUNEOzs7NkJBS1E7QUFBQTs7QUFDUCxhQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLSCxLQUFMLENBQVdJLFdBQVgsS0FBMkIsS0FBM0IsSUFDQztBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxzQkFGWjtBQUdFLHVCQUFZLE9BSGQ7QUFJRSx1QkFBWSxlQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosRUFZRTtBQUNFLGlCQUFTLEVBQUMsWUFEWjtBQUVFLFVBQUUsRUFBQyxjQUZMO0FBR0UsZ0JBQVEsRUFBQyxJQUhYO0FBSUUsMkJBQWdCLG1CQUpsQjtBQUtFLHVCQUFZLE1BTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxhQUFkO0FBQTRCLFVBQUUsRUFBQyxtQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBUyxFQUFDLE9BRlo7QUFHRSx3QkFBYSxPQUhmO0FBSUUsc0JBQVcsT0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUU7QUFBTSx1QkFBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLENBSkYsQ0FERixFQWNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkIsS0FBS0osS0FBTCxDQUFXSyxRQUF4QyxDQWRGLEVBZUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsV0FBRyxFQUFFLGFBQUNDLEdBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNKLFdBQUwsR0FBbUJJLEdBQTdCO0FBQUEsU0FEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsRUFBQyxtQkFIWjtBQUlFLHdCQUFhLE9BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQVNHLEtBQUtOLEtBQUwsQ0FBV08sU0FBWCxJQUNDO0FBQ0UsZUFBTyxFQUFFLEtBQUtDLFdBRGhCO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxpQkFBUyxFQUFDLHNCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVkosQ0FmRixDQURGLENBUEYsQ0FaRixDQURGO0FBNEREOzs7O0VBM0VpQkMsNENBQUssQ0FBQ0MsUzs7QUE4RVhYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1OTRmZmExMTExYmE0NGU4ZTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4vLyAgIGxldCBjbG9zZUJ1dHRvbiA9IG51bGw7XHJcblxyXG4vLyAgIGNvbnN0IHN1Ym1pdE1vZGFsID0gKCkgPT4ge1xyXG4vLyAgICAgYWxlcnQoXCJzdWJcIik7XHJcbi8vICAgICBjbG9zZUJ1dHRvbi5jbGljaygpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbi8vICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuLy8gICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbi8vICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbi8vICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgICAgIENyZWF0ZSBNb3ZpZVxyXG4vLyAgICAgICA8L2J1dHRvbj5cclxuXHJcbi8vICAgICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuLy8gICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbi8vICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbi8vICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4vLyAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbi8vICAgICAgID5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgQ3JlYXRlIE1vdmllXHJcbi8vICAgICAgICAgICAgICAgPC9oNT5cclxuLy8gICAgICAgICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuLy8gICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuLy8gICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbi8vICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuLy8gICAgICAgICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICByZWY9eyhlbGUpID0+IChjbG9zZUJ1dHRvbiA9IGVsZSl9XHJcbi8vICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuLy8gICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICBDbG9zZVxyXG4vLyAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIHtwcm9wcy5oYXNTdWJtaXQgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRNb2RhbH1cclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbi8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuLy8gICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgU2F2ZSBjaGFuZ2VzXHJcbi8vICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5jbGljaygpO1xyXG4gIH1cclxuICBzdWJtaXRNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7dGhpcy5wcm9wcy5lbnZpcm9ubWVudCA9PT0gXCJkZXZcIiAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgTW92aWVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyaWFyIEZpbG1lXHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICByZWY9eyhlbGUpID0+ICh0aGlzLmNsb3NlQnV0dG9uID0gZWxlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGZWNoYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGFzU3VibWl0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2YXIgYWx0ZXLDp8O1ZXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9