webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_movies_id___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/movies/[id] */ "./pages/movies/[id]/index.js");
var _jsxFileName = "C:\\PROJETOS\\react-next-movie-app\\components\\carousel.js",
    _this = undefined;



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Carousel = function Carousel(props) {
  var images = props.images;
  return __jsx("div", {
    id: "carouselExampleIndicators",
    "data-ride": "carousel",
    className: "jsx-4231805008" + " " + "carousel slide my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("ol", {
    className: "jsx-4231805008" + " " + "carousel-indicators",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, images.map(function (image, index) {
    return __jsx("li", {
      key: image.id,
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": index,
      className: "jsx-4231805008" + " " + ((index === 0 ? "active" : "") || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    });
  })), __jsx("div", {
    role: "listbox",
    className: "jsx-4231805008" + " " + "carousel-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, images.map(function (image, index) {
    return __jsx("div", {
      key: image.id,
      className: "jsx-4231805008" + " " + ((index === 0 ? "carousel-item active" : "carousel-item") || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/original".concat(image.backdrop_path),
      alt: image.title,
      className: "jsx-4231805008" + " " + "d-block img-fluid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }));
  })), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev",
    className: "jsx-4231805008" + " " + "carousel-control-prev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-4231805008" + " " + "carousel-control-prev-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-4231805008" + " " + "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Anterior")), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next",
    className: "jsx-4231805008" + " " + "carousel-control-next",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-4231805008" + " " + "carousel-control-next-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-4231805008" + " " + "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Pr\xF3ximo")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4231805008",
    __self: _this,
    __source: void 0
  }, ".carousel-item.jsx-4231805008{max-height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQUk9KRVRPU1xccmVhY3QtbmV4dC1tb3ZpZS1hcHBcXGNvbXBvbmVudHNcXGNhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEUyxBQUc4QixpQkFDbkIiLCJmaWxlIjoiQzpcXFBST0pFVE9TXFxyZWFjdC1uZXh0LW1vdmllLWFwcFxcY29tcG9uZW50c1xcY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWUgZnJvbSBcIi4uL3BhZ2VzL21vdmllcy9baWRdXCI7XHJcblxyXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZSBteS00XCJcclxuICAgICAgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIlxyXG4gICAgPlxyXG4gICAgICA8b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgZGF0YS1zbGlkZS10bz17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L29sPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCIgcm9sZT1cImxpc3Rib3hcIj5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW1hZ2UuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgOiBcImNhcm91c2VsLWl0ZW1cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7aW1hZ2UuYmFja2Ryb3BfcGF0aH1gfVxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcclxuICAgICAgICBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRhdGEtc2xpZGU9XCJwcmV2XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5BbnRlcmlvcjwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXHJcbiAgICAgICAgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLXNsaWRlPVwibmV4dFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHLDs3hpbW88L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\PROJETOS\\\\react-next-movie-app\\\\components\\\\carousel.js */"));
};

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiaW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImlkIiwiYmFja2Ryb3BfcGF0aCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLE1BRGtCLEdBQ1BELEtBRE8sQ0FDbEJDLE1BRGtCO0FBRTFCLFNBQ0U7QUFDRSxNQUFFLEVBQUMsMkJBREw7QUFHRSxpQkFBVSxVQUhaO0FBQUEsd0NBRVkscUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUEsd0NBQWMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUNWO0FBQ0UsU0FBRyxFQUFFRCxLQUFLLENBQUNFLEVBRGI7QUFFRSxxQkFBWSw0QkFGZDtBQUdFLHVCQUFlRCxLQUhqQjtBQUFBLDRDQUlhQSxLQUFLLEtBQUssQ0FBVixHQUFjLFFBQWQsR0FBeUIsRUFKdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWCxDQURILENBTEYsRUFlRTtBQUFnQyxRQUFJLEVBQUMsU0FBckM7QUFBQSx3Q0FBZSxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQ1Y7QUFDRSxTQUFHLEVBQUVELEtBQUssQ0FBQ0UsRUFEYjtBQUFBLDRDQUVhRCxLQUFLLEtBQUssQ0FBVixHQUFjLHNCQUFkLEdBQXVDLGVBRnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUVFLFNBQUcsK0NBQXdDRCxLQUFLLENBQUNHLGFBQTlDLENBRkw7QUFHRSxTQUFHLEVBQUVILEtBQUssQ0FBQ0ksS0FIYjtBQUFBLDBDQUNZLG1CQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixDQURVO0FBQUEsR0FBWCxDQURILENBZkYsRUE2QkU7QUFFRSxRQUFJLEVBQUMsNEJBRlA7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLGtCQUFXLE1BSmI7QUFBQSx3Q0FDWSx1QkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBNkMsbUJBQVksTUFBekQ7QUFBQSx3Q0FBZ0IsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUEsd0NBQWdCLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsQ0E3QkYsRUFzQ0U7QUFFRSxRQUFJLEVBQUMsNEJBRlA7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLGtCQUFXLE1BSmI7QUFBQSx3Q0FDWSx1QkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBNkMsbUJBQVksTUFBekQ7QUFBQSx3Q0FBZ0IsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUEsd0NBQWdCLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsQ0F0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxvbEdBREY7QUF5REQsQ0EzREQ7O0tBQU1SLFE7QUE2RFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlNzAyN2EwNjExMTUyNjQ1NzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWUgZnJvbSBcIi4uL3BhZ2VzL21vdmllcy9baWRdXCI7XHJcblxyXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZSBteS00XCJcclxuICAgICAgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIlxyXG4gICAgPlxyXG4gICAgICA8b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBrZXk9e2ltYWdlLmlkfVxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgZGF0YS1zbGlkZS10bz17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgID48L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L29sPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCIgcm9sZT1cImxpc3Rib3hcIj5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW1hZ2UuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgOiBcImNhcm91c2VsLWl0ZW1cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7aW1hZ2UuYmFja2Ryb3BfcGF0aH1gfVxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcclxuICAgICAgICBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRhdGEtc2xpZGU9XCJwcmV2XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5BbnRlcmlvcjwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXHJcbiAgICAgICAgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLXNsaWRlPVwibmV4dFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHLDs3hpbW88L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9