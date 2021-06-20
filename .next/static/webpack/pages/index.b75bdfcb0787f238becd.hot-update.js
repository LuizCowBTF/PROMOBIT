webpackHotUpdate_N_E("pages/index",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: environment, getCategories, getMovies, createMovie, getMovieById, updateMovie, deleteMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMovie", function() { return createMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var environment = "prod";
var dev = {
  url: "http://localhost:3000"
};
var prod = {
  url: "https://api.themoviedb.org/3",
  // api_key: process.env.API_ENV,
  api_key: "a6e3a68c3b13fa67916e7f4ce66a8290",
  language: "pt-br"
};
var CATEGORY_DATA = [{
  id: 0,
  name: "All"
}, {
  id: 28,
  name: "Action"
}, {
  id: 12,
  name: "Adventure"
}, {
  id: 16,
  name: "Animation"
}, {
  id: 35,
  name: "Comedy"
}, {
  id: 80,
  name: "Crime"
}, {
  id: 99,
  name: "Documentary"
}, {
  id: 18,
  name: "Drama"
}, {
  id: 10751,
  name: "Family"
}, {
  id: 14,
  name: "Fantasy"
}, {
  id: 36,
  name: "History"
}, {
  id: 27,
  name: "Horror"
}, {
  id: 10402,
  name: "Music"
}, {
  id: 9648,
  name: "Mystery"
}, {
  id: 10749,
  name: "Romance"
}, {
  id: 878,
  name: "Science Fiction"
}, {
  id: 10770,
  name: "TV Movie"
}, {
  id: 53,
  name: "Thriller"
}, {
  id: 10752,
  name: "War"
}, {
  id: 37,
  name: "Western"
}];
var getCategories = function getCategories() {
  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(prod.url, "/genre/movie/list?api_key=").concat(prod.api_key, "&language=").concat(prod.language)).then(function (res) {
      var categories = [{
        id: 0,
        name: "All"
      }];
      categories.push.apply(categories, Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data.genres));
      return categories;
    })["catch"](function (error) {
      console.error("getCategories", error);
    });
  } else {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          resolve(CATEGORY_DATA);
        } catch (error) {
          reject("Cannot fetch data: ".concat(error));
        }
      }, 200);
    });
  }
};
var getMovies = function getMovies() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(prod.url, "/movie/popular?api_key=").concat(prod.api_key, "&language=").concat(prod.language, "&page=").concat(page)).then(function (res) {
      if (res.data && res.data.results) return res.data.results;else return [];
    })["catch"](function (error) {
      console.error("getMovies", error);
      return [];
    });
  } else {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(dev.url, "/api/v1/movies")).then(function (res) {
      return res.data.results;
    });
  }
};
var createMovie = function createMovie(movie) {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(dev.url, "/api/v1/movies"), movie).then(function (res) {
    return res.data;
  });
};
var getMovieById = function getMovieById(id) {
  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(prod.url, "/movie/").concat(id, "?api_key=").concat(prod.api_key, "&language=").concat(prod.language)).then(function (res) {
      return res.data;
    })["catch"](function (error) {
      console.error("getMovieById", error);
    });
  } else {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(dev.url, "/api/v1/movies/").concat(id)).then(function (res) {
      return res.data;
    });
  }
};
var updateMovie = function updateMovie(movie) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(dev.url, "/api/v1/movies/").concat(movie.id), movie).then(function (res) {
    return res.data;
  });
};
var deleteMovie = function deleteMovie(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("".concat(dev.url, "/api/v1/movies/").concat(id)).then(function (res) {
    return res.data;
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbnZpcm9ubWVudCIsImRldiIsInVybCIsInByb2QiLCJhcGlfa2V5IiwibGFuZ3VhZ2UiLCJDQVRFR09SWV9EQVRBIiwiaWQiLCJuYW1lIiwiZ2V0Q2F0ZWdvcmllcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGVnb3JpZXMiLCJwdXNoIiwiZGF0YSIsImdlbnJlcyIsImVycm9yIiwiY29uc29sZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldE1vdmllcyIsInBhZ2UiLCJyZXN1bHRzIiwiY3JlYXRlTW92aWUiLCJtb3ZpZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInBvc3QiLCJnZXRNb3ZpZUJ5SWQiLCJ1cGRhdGVNb3ZpZSIsInBhdGNoIiwiZGVsZXRlTW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjtBQUVQLElBQU1DLEdBQUcsR0FBRztBQUNWQyxLQUFHLEVBQUU7QUFESyxDQUFaO0FBSUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hELEtBQUcsRUFBRSw4QkFETTtBQUVYO0FBQ0FFLFNBQU8sRUFBRSxrQ0FIRTtBQUlYQyxVQUFRLEVBQUU7QUFKQyxDQUFiO0FBT0EsSUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRG9CLEVBS3BCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTG9CLEVBU3BCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVG9CLEVBYXBCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYm9CLEVBaUJwQjtBQUNFRCxJQUFF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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSBcInByb2RcIjtcclxuXHJcbmNvbnN0IGRldiA9IHtcclxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kID0ge1xyXG4gIHVybDogXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCIsXHJcbiAgLy8gYXBpX2tleTogcHJvY2Vzcy5lbnYuQVBJX0VOVixcclxuICBhcGlfa2V5OiBcImE2ZTNhNjhjM2IxM2ZhNjc5MTZlN2Y0Y2U2NmE4MjkwXCIsXHJcbiAgbGFuZ3VhZ2U6IFwicHQtYnJcIixcclxufTtcclxuXHJcbmNvbnN0IENBVEVHT1JZX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIkFsbFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI4LFxyXG4gICAgbmFtZTogXCJBY3Rpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMixcclxuICAgIG5hbWU6IFwiQWR2ZW50dXJlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBuYW1lOiBcIkFuaW1hdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgbmFtZTogXCJDb21lZHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4MCxcclxuICAgIG5hbWU6IFwiQ3JpbWVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA5OSxcclxuICAgIG5hbWU6IFwiRG9jdW1lbnRhcnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOCxcclxuICAgIG5hbWU6IFwiRHJhbWFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDc1MSxcclxuICAgIG5hbWU6IFwiRmFtaWx5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBuYW1lOiBcIkZhbnRhc3lcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNixcclxuICAgIG5hbWU6IFwiSGlzdG9yeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDI3LFxyXG4gICAgbmFtZTogXCJIb3Jyb3JcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDQwMixcclxuICAgIG5hbWU6IFwiTXVzaWNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA5NjQ4LFxyXG4gICAgbmFtZTogXCJNeXN0ZXJ5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTA3NDksXHJcbiAgICBuYW1lOiBcIlJvbWFuY2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4NzgsXHJcbiAgICBuYW1lOiBcIlNjaWVuY2UgRmljdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwNzcwLFxyXG4gICAgbmFtZTogXCJUViBNb3ZpZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUzLFxyXG4gICAgbmFtZTogXCJUaHJpbGxlclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwNzUyLFxyXG4gICAgbmFtZTogXCJXYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzNyxcclxuICAgIG5hbWU6IFwiV2VzdGVyblwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBpZiAoZW52aXJvbm1lbnQgPT09IFwicHJvZFwiKSB7XHJcbiAgICByZXR1cm4gYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBgJHtwcm9kLnVybH0vZ2VucmUvbW92aWUvbGlzdD9hcGlfa2V5PSR7cHJvZC5hcGlfa2V5fSZsYW5ndWFnZT0ke3Byb2QubGFuZ3VhZ2V9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW3sgaWQ6IDAsIG5hbWU6IFwiQWxsXCIgfV07XHJcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKC4uLnJlcy5kYXRhLmdlbnJlcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0Q2F0ZWdvcmllc1wiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVzb2x2ZShDQVRFR09SWV9EQVRBKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGBDYW5ub3QgZmV0Y2ggZGF0YTogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKHBhZ2UgPSAxKSA9PiB7XHJcbiAgaWYgKGVudmlyb25tZW50ID09PSBcInByb2RcIikge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYCR7cHJvZC51cmx9L21vdmllL3BvcHVsYXI/YXBpX2tleT0ke3Byb2QuYXBpX2tleX0mbGFuZ3VhZ2U9JHtwcm9kLmxhbmd1YWdlfSZwYWdlPSR7cGFnZX1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5yZXN1bHRzKSByZXR1cm4gcmVzLmRhdGEucmVzdWx0cztcclxuICAgICAgICBlbHNlIHJldHVybiBbXTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRNb3ZpZXNcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7ZGV2LnVybH0vYXBpL3YxL21vdmllc2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGEucmVzdWx0cztcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVNb3ZpZSA9IChtb3ZpZSkgPT4ge1xyXG4gIG1vdmllLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDcpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAke2Rldi51cmx9L2FwaS92MS9tb3ZpZXNgLCBtb3ZpZSkudGhlbigocmVzKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVCeUlkID0gKGlkKSA9PiB7XHJcbiAgaWYgKGVudmlyb25tZW50ID09PSBcInByb2RcIikge1xyXG4gICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgYCR7cHJvZC51cmx9L21vdmllLyR7aWR9P2FwaV9rZXk9JHtwcm9kLmFwaV9rZXl9Jmxhbmd1YWdlPSR7cHJvZC5sYW5ndWFnZX1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRNb3ZpZUJ5SWRcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHtkZXYudXJsfS9hcGkvdjEvbW92aWVzLyR7aWR9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IChtb3ZpZSkgPT4ge1xyXG4gIHJldHVybiBheGlvc1xyXG4gICAgLnBhdGNoKGAke2Rldi51cmx9L2FwaS92MS9tb3ZpZXMvJHttb3ZpZS5pZH1gLCBtb3ZpZSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2Rldi51cmx9L2FwaS92MS9tb3ZpZXMvJHtpZH1gKS50aGVuKChyZXMpID0+IHtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==