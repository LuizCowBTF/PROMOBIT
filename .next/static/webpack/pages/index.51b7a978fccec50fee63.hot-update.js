webpackHotUpdate_N_E("pages/index",{

/***/ "./components/movieCreateForm.js":
/*!***************************************!*\
  !*** ./components/movieCreateForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\PROJETOS\\react-next-movie-app\\components\\movieCreateForm.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var MovieCreateForm = function MovieCreateForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isInitialDataLoaded = _useState[0],
      setIsInitialDataLoaded = _useState[1];

  var defaultData = {
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: ""
  };
  var formData = props.initialData ? _objectSpread({}, props.initialData) : defaultData;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(formData),
      form = _useState2[0],
      setForm = _useState2[1]; //   useEffect(() => {
  //     if (props.initialData) {
  //       setForm(props.initialData);
  //       setIsInitialDataLoaded(true);
  //     }
  //   }, [isInitialDataLoaded]);


  var handleChange = function handleChange(event) {
    var target = event.target;
    var name = target.name;
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, target.value)));
  };

  var handleGenreChange = function handleGenreChange(event) {
    var options = event.target.options;
    var optionsLength = options.length;
    var value = [];

    for (var i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm(_objectSpread(_objectSpread({}, form), {}, {
      genre: value.toString()
    }));
  };

  var submitForm = function submitForm() {
    props.handleFormSubmit(_objectSpread({}, form));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Nome"), __jsx("input", {
    value: form.name,
    onChange: handleChange,
    name: "name",
    type: "text",
    className: "form-control",
    id: "name",
    "aria-describedby": "emailHelp",
    placeholder: "Star Wars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "Descri\xE7\xE3o"), __jsx("input", {
    value: form.description,
    onChange: handleChange,
    name: "description",
    type: "text",
    className: "form-control",
    id: "description",
    placeholder: "Em algum em uma gal\xE1xia distante...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "M\xE9dia"), __jsx("input", {
    value: form.rating,
    onChange: handleChange,
    name: "rating",
    type: "number",
    max: "5",
    min: "0",
    className: "form-control",
    id: "rating",
    placeholder: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Max: 5, Min: 0", " ")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Image"), __jsx("input", {
    value: form.image,
    onChange: handleChange,
    name: "image",
    type: "text",
    className: "form-control",
    id: "image",
    placeholder: "http://.....",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Cover"), __jsx("input", {
    value: form.cover,
    onChange: handleChange,
    name: "cover",
    type: "text",
    className: "form-control",
    id: "cover",
    placeholder: "http://......",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "longDesc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Descri\xE7\xE3o completa"), __jsx("textarea", {
    value: form.longDesc,
    onChange: handleChange,
    name: "longDesc",
    className: "form-control",
    id: "longDesc",
    rows: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "Genre"), __jsx("select", {
    onChange: handleGenreChange,
    multiple: true,
    className: "form-control",
    id: "genre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Drama"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "A\xE7\xE3o"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "Aventura"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Document\xE1rio"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "M\xFAsical"))), __jsx("button", {
    onClick: submitForm,
    type: "button",
    className: "btn btn-outline-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, props.submitButton || "Criar")));
};

_s(MovieCreateForm, "Hs51/yiw6jGKbpkV77JKqDIGOsY=");

_c = MovieCreateForm;
/* harmony default export */ __webpack_exports__["default"] = (MovieCreateForm);

var _c;

$RefreshReg$(_c, "MovieCreateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZUNyZWF0ZUZvcm0uanMiXSwibmFtZXMiOlsiTW92aWVDcmVhdGVGb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzSW5pdGlhbERhdGFMb2FkZWQiLCJzZXRJc0luaXRpYWxEYXRhTG9hZGVkIiwiZGVmYXVsdERhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyYXRpbmciLCJpbWFnZSIsImNvdmVyIiwibG9uZ0Rlc2MiLCJmb3JtRGF0YSIsImluaXRpYWxEYXRhIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlR2VucmVDaGFuZ2UiLCJvcHRpb25zIiwib3B0aW9uc0xlbmd0aCIsImxlbmd0aCIsImkiLCJzZWxlY3RlZCIsInB1c2giLCJnZW5yZSIsInRvU3RyaW5nIiwic3VibWl0Rm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEtBQUQsQ0FEN0I7QUFBQSxNQUMxQkMsbUJBRDBCO0FBQUEsTUFDTEMsc0JBREs7O0FBRWpDLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMsUUFBSSxFQUFFLEVBRFk7QUFFbEJDLGVBQVcsRUFBRSxFQUZLO0FBR2xCQyxVQUFNLEVBQUUsRUFIVTtBQUlsQkMsU0FBSyxFQUFFLEVBSlc7QUFLbEJDLFNBQUssRUFBRSxFQUxXO0FBTWxCQyxZQUFRLEVBQUU7QUFOUSxHQUFwQjtBQVNBLE1BQU1DLFFBQVEsR0FBR1gsS0FBSyxDQUFDWSxXQUFOLHFCQUF5QlosS0FBSyxDQUFDWSxXQUEvQixJQUErQ1IsV0FBaEU7O0FBWGlDLG1CQVlUSCxzREFBUSxDQUFDVSxR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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHNUIsS0FBSyxDQUFDOEIsWUFBTixJQUFzQixPQUx6QixDQTlGRixDQURGLENBREY7QUEwR0QsQ0E5SkQ7O0dBQU0vQixlOztLQUFBQSxlO0FBZ0tTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWI3YTk3OGZjY2VjNTBmZWU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTW92aWVDcmVhdGVGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzSW5pdGlhbERhdGFMb2FkZWQsIHNldElzSW5pdGlhbERhdGFMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgcmF0aW5nOiBcIlwiLFxyXG4gICAgaW1hZ2U6IFwiXCIsXHJcbiAgICBjb3ZlcjogXCJcIixcclxuICAgIGxvbmdEZXNjOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1EYXRhID0gcHJvcHMuaW5pdGlhbERhdGEgPyB7IC4uLnByb3BzLmluaXRpYWxEYXRhIH0gOiBkZWZhdWx0RGF0YTtcclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZShmb3JtRGF0YSk7XHJcblxyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgaWYgKHByb3BzLmluaXRpYWxEYXRhKSB7XHJcbiAgLy8gICAgICAgc2V0Rm9ybShwcm9wcy5pbml0aWFsRGF0YSk7XHJcbiAgLy8gICAgICAgc2V0SXNJbml0aWFsRGF0YUxvYWRlZCh0cnVlKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSwgW2lzSW5pdGlhbERhdGFMb2FkZWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgc2V0Rm9ybSh7XHJcbiAgICAgIC4uLmZvcm0sXHJcbiAgICAgIFtuYW1lXTogdGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2VucmVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgbGV0IHZhbHVlID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcclxuICAgICAgICB2YWx1ZS5wdXNoKG9wdGlvbnNbaV0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9ybSh7XHJcbiAgICAgIC4uLmZvcm0sXHJcbiAgICAgIGdlbnJlOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9ICgpID0+IHtcclxuICAgIHByb3BzLmhhbmRsZUZvcm1TdWJtaXQoeyAuLi5mb3JtIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkoZm9ybSl9ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXIgV2Fyc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyacOnw6NvPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbSBhbGd1bSBlbSB1bWEgZ2Fsw6F4aWEgZGlzdGFudGUuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5Nw6lkaWE8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLnJhdGluZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cInJhdGluZ1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBtYXg9XCI1XCJcclxuICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwicmF0aW5nXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICBNYXg6IDUsIE1pbjogMHtcIiBcIn1cclxuICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLmltYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly8uLi4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3ZlclwiPkNvdmVyPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb3Zlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cImNvdmVyXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImNvdmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwOi8vLi4uLi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvbmdEZXNjXCI+RGVzY3Jpw6fDo28gY29tcGxldGE8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxvbmdEZXNjfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibG9uZ0Rlc2NcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImxvbmdEZXNjXCJcclxuICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCI+R2VucmU8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlR2VucmVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZ2VucmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uPkRyYW1hPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+QcOnw6NvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+QXZlbnR1cmE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj5Eb2N1bWVudMOhcmlvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+TcO6c2ljYWw8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuc3VibWl0QnV0dG9uIHx8IFwiQ3JpYXJcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVDcmVhdGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9