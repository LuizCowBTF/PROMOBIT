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
  name: "Todos"
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
        name: "Todos"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbnZpcm9ubWVudCIsImRldiIsInVybCIsInByb2QiLCJhcGlfa2V5IiwibGFuZ3VhZ2UiLCJDQVRFR09SWV9EQVRBIiwiaWQiLCJuYW1lIiwiZ2V0Q2F0ZWdvcmllcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGVnb3JpZXMiLCJwdXNoIiwiZGF0YSIsImdlbnJlcyIsImVycm9yIiwiY29uc29sZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldE1vdmllcyIsInBhZ2UiLCJyZXN1bHRzIiwiY3JlYXRlTW92aWUiLCJtb3ZpZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInBvc3QiLCJnZXRNb3ZpZUJ5SWQiLCJ1cGRhdGVNb3ZpZSIsInBhdGNoIiwiZGVsZXRlTW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjtBQUVQLElBQU1DLEdBQUcsR0FBRztBQUNWQyxLQUFHLEVBQUU7QUFESyxDQUFaO0FBSUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hELEtBQUcsRUFBRSw4QkFETTtBQUVYO0FBQ0FFLFNBQU8sRUFBRSxrQ0FIRTtBQUlYQyxVQUFRLEVBQUU7QUFKQyxDQUFiO0FBT0EsSUFBTUMsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRG9CLEVBS3BCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTG9CLEVBU3BCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVG9CLEVBYXBCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYm9CLEVBaUJwQjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpCb0IsRUFxQnBCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckJvQixFQXlCcEI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0F6Qm9CLEVBNkJwQjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdCb0IsRUFpQ3BCO0FBQ0VELElBQUUsRUFBRSxLQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakNvQixFQXFDcEI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FyQ29CLEVBeUNwQjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpDb0IsRUE2Q3BCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0NvQixFQWlEcEI7QUFDRUQsSUFBRSxFQUFFLEtBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqRG9CLEVBcURwQjtBQUNFRCxJQUFFLEVBQUUsSUFETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJEb0IsRUF5RHBCO0FBQ0VELElBQUUsRUFBRSxLQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekRvQixFQTZEcEI7QUFDRUQsSUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0E3RG9CLEVBaUVwQjtBQUNFRCxJQUFFLEVBQUUsS0FETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpFb0IsRUFxRXBCO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckVvQixFQXlFcEI7QUFDRUQsSUFBRSxFQUFFLEtBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0F6RW9CLEVBNkVwQjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdFb0IsQ0FBdEI7QUFtRk8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2pDLE1BQUlULFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUMxQixXQUFPVSw0Q0FBSyxDQUNUQyxHQURJLFdBRUFSLElBQUksQ0FBQ0QsR0FGTCx1Q0FFcUNDLElBQUksQ0FBQ0MsT0FGMUMsdUJBRThERCxJQUFJLENBQUNFLFFBRm5FLEdBSUpPLElBSkksQ0FJQyxVQUFDQyxHQUFELEVBQVM7QUFDYixVQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFUCxVQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFJLEVBQUU7QUFBZixPQUFELENBQW5CO0FBQ0FNLGdCQUFVLENBQUNDLElBQVgsT0FBQUQsVUFBVSwySUFBU0QsR0FBRyxDQUFDRyxJQUFKLENBQVNDLE1BQWxCLEVBQVY7QUFDQSxhQUFPSCxVQUFQO0FBQ0QsS0FSSSxXQVNFLFVBQUNJLEtBQUQsRUFBVztBQUNoQkMsYUFBTyxDQUFDRCxLQUFSLENBQWMsZUFBZCxFQUErQkEsS0FBL0I7QUFDRCxLQVhJLENBQVA7QUFZRCxHQWJELE1BYU87QUFDTCxXQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLGdCQUFVLENBQUMsWUFBTTtBQUNmLFlBQUk7QUFDRkYsaUJBQU8sQ0FBQ2YsYUFBRCxDQUFQO0FBQ0QsU0FGRCxDQUVFLE9BQU9ZLEtBQVAsRUFBYztBQUNkSSxnQkFBTSw4QkFBdUJKLEtBQXZCLEVBQU47QUFDRDtBQUNGLE9BTlMsRUFNUCxHQU5PLENBQVY7QUFPRCxLQVJNLENBQVA7QUFTRDtBQUNGLENBekJNO0FBMkJBLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQWM7QUFBQSxNQUFiQyxJQUFhLHVFQUFOLENBQU07O0FBQ3JDLE1BQUl6QixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFDMUIsV0FBT1UsNENBQUssQ0FDVEMsR0FESSxXQUVBUixJQUFJLENBQUNELEdBRkwsb0NBRWtDQyxJQUFJLENBQUNDLE9BRnZDLHVCQUUyREQsSUFBSSxDQUFDRSxRQUZoRSxtQkFFaUZvQixJQUZqRixHQUlKYixJQUpJLENBSUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsVUFBSUEsR0FBRyxDQUFDRyxJQUFKLElBQVlILEdBQUcsQ0FBQ0csSUFBSixDQUFTVSxPQUF6QixFQUFrQyxPQUFPYixHQUFHLENBQUNHLElBQUosQ0FBU1UsT0FBaEIsQ0FBbEMsS0FDSyxPQUFPLEVBQVA7QUFDTixLQVBJLFdBUUUsVUFBQ1IsS0FBRCxFQUFXO0FBQ2hCQyxhQUFPLENBQUNELEtBQVIsQ0FBYyxXQUFkLEVBQTJCQSxLQUEzQjtBQUNBLGFBQU8sRUFBUDtBQUNELEtBWEksQ0FBUDtBQVlELEdBYkQsTUFhTztBQUNMLFdBQU9SLDRDQUFLLENBQUNDLEdBQU4sV0FBYVYsR0FBRyxDQUFDQyxHQUFqQixxQkFBc0NVLElBQXRDLENBQTJDLFVBQUNDLEdBQUQsRUFBUztBQUN6RCxhQUFPQSxHQUFHLENBQUNHLElBQUosQ0FBU1UsT0FBaEI7QUFDRCxLQUZNLENBQVA7QUFHRDtBQUNGLENBbkJNO0FBcUJBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUNwQ0EsT0FBSyxDQUFDckIsRUFBTixHQUFXc0IsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQVg7QUFDQSxTQUFPdEIsNENBQUssQ0FBQ3VCLElBQU4sV0FBY2hDLEdBQUcsQ0FBQ0MsR0FBbEIscUJBQXVDMEIsS0FBdkMsRUFBOENoQixJQUE5QyxDQUFtRCxVQUFDQyxHQUFELEVBQVM7QUFDakUsV0FBT0EsR0FBRyxDQUFDRyxJQUFYO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FMTTtBQU9BLElBQU1rQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDM0IsRUFBRCxFQUFRO0FBQ2xDLE1BQUlQLFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUMxQixXQUFPVSw0Q0FBSyxDQUNUQyxHQURJLFdBRUFSLElBQUksQ0FBQ0QsR0FGTCxvQkFFa0JLLEVBRmxCLHNCQUVnQ0osSUFBSSxDQUFDQyxPQUZyQyx1QkFFeURELElBQUksQ0FBQ0UsUUFGOUQsR0FJSk8sSUFKSSxDQUlDLFVBQUNDLEdBQUQsRUFBUztBQUNiLGFBQU9BLEdBQUcsQ0FBQ0csSUFBWDtBQUNELEtBTkksV0FPRSxVQUFDRSxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjLGNBQWQsRUFBOEJBLEtBQTlCO0FBQ0QsS0FUSSxDQUFQO0FBVUQsR0FYRCxNQVdPO0FBQ0wsV0FBT1IsNENBQUssQ0FBQ0MsR0FBTixXQUFhVixHQUFHLENBQUNDLEdBQWpCLDRCQUFzQ0ssRUFBdEMsR0FBNENLLElBQTVDLENBQWlELFVBQUNDLEdBQUQsRUFBUztBQUMvRCxhQUFPQSxHQUFHLENBQUNHLElBQVg7QUFDRCxLQUZNLENBQVA7QUFHRDtBQUNGLENBakJNO0FBbUJBLElBQU1tQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUCxLQUFELEVBQVc7QUFDcEMsU0FBT2xCLDRDQUFLLENBQ1QwQixLQURJLFdBQ0tuQyxHQUFHLENBQUNDLEdBRFQsNEJBQzhCMEIsS0FBSyxDQUFDckIsRUFEcEMsR0FDMENxQixLQUQxQyxFQUVKaEIsSUFGSSxDQUVDLFVBQUNDLEdBQUQsRUFBUztBQUNiLFdBQU9BLEdBQUcsQ0FBQ0csSUFBWDtBQUNELEdBSkksQ0FBUDtBQUtELENBTk07QUFRQSxJQUFNcUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzlCLEVBQUQsRUFBUTtBQUNqQyxTQUFPRyw0Q0FBSyxVQUFMLFdBQWdCVCxHQUFHLENBQUNDLEdBQXBCLDRCQUF5Q0ssRUFBekMsR0FBK0NLLElBQS9DLENBQW9ELFVBQUNDLEdBQUQsRUFBUztBQUNsRSxXQUFPQSxHQUFHLENBQUNHLElBQVg7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViMzFkZWQxZmY0NTJjOGIxNmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSBcInByb2RcIjtcclxuXHJcbmNvbnN0IGRldiA9IHtcclxuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kID0ge1xyXG4gIHVybDogXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCIsXHJcbiAgLy8gYXBpX2tleTogcHJvY2Vzcy5lbnYuQVBJX0VOVixcclxuICBhcGlfa2V5OiBcImE2ZTNhNjhjM2IxM2ZhNjc5MTZlN2Y0Y2U2NmE4MjkwXCIsXHJcbiAgbGFuZ3VhZ2U6IFwicHQtYnJcIixcclxufTtcclxuXHJcbmNvbnN0IENBVEVHT1JZX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlRvZG9zXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjgsXHJcbiAgICBuYW1lOiBcIkFjdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgbmFtZTogXCJBZHZlbnR1cmVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNixcclxuICAgIG5hbWU6IFwiQW5pbWF0aW9uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMzUsXHJcbiAgICBuYW1lOiBcIkNvbWVkeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDgwLFxyXG4gICAgbmFtZTogXCJDcmltZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDk5LFxyXG4gICAgbmFtZTogXCJEb2N1bWVudGFyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgbmFtZTogXCJEcmFtYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwNzUxLFxyXG4gICAgbmFtZTogXCJGYW1pbHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNCxcclxuICAgIG5hbWU6IFwiRmFudGFzeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM2LFxyXG4gICAgbmFtZTogXCJIaXN0b3J5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjcsXHJcbiAgICBuYW1lOiBcIkhvcnJvclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwNDAyLFxyXG4gICAgbmFtZTogXCJNdXNpY1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDk2NDgsXHJcbiAgICBuYW1lOiBcIk15c3RlcnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMDc0OSxcclxuICAgIG5hbWU6IFwiUm9tYW5jZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDg3OCxcclxuICAgIG5hbWU6IFwiU2NpZW5jZSBGaWN0aW9uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTA3NzAsXHJcbiAgICBuYW1lOiBcIlRWIE1vdmllXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBuYW1lOiBcIlRocmlsbGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTA3NTIsXHJcbiAgICBuYW1lOiBcIldhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDM3LFxyXG4gICAgbmFtZTogXCJXZXN0ZXJuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJwcm9kXCIpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIGAke3Byb2QudXJsfS9nZW5yZS9tb3ZpZS9saXN0P2FwaV9rZXk9JHtwcm9kLmFwaV9rZXl9Jmxhbmd1YWdlPSR7cHJvZC5sYW5ndWFnZX1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbeyBpZDogMCwgbmFtZTogXCJUb2Rvc1wiIH1dO1xyXG4gICAgICAgIGNhdGVnb3JpZXMucHVzaCguLi5yZXMuZGF0YS5nZW5yZXMpO1xyXG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImdldENhdGVnb3JpZXNcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc29sdmUoQ0FURUdPUllfREFUQSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChgQ2Fubm90IGZldGNoIGRhdGE6ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChwYWdlID0gMSkgPT4ge1xyXG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJwcm9kXCIpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIGAke3Byb2QudXJsfS9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtwcm9kLmFwaV9rZXl9Jmxhbmd1YWdlPSR7cHJvZC5sYW5ndWFnZX0mcGFnZT0ke3BhZ2V9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEucmVzdWx0cykgcmV0dXJuIHJlcy5kYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gW107XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0TW92aWVzXCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke2Rldi51cmx9L2FwaS92MS9tb3ZpZXNgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhLnJlc3VsdHM7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTW92aWUgPSAobW92aWUpID0+IHtcclxuICBtb3ZpZS5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA3KTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgJHtkZXYudXJsfS9hcGkvdjEvbW92aWVzYCwgbW92aWUpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllQnlJZCA9IChpZCkgPT4ge1xyXG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJwcm9kXCIpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIGAke3Byb2QudXJsfS9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7cHJvZC5hcGlfa2V5fSZsYW5ndWFnZT0ke3Byb2QubGFuZ3VhZ2V9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0TW92aWVCeUlkXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYCR7ZGV2LnVybH0vYXBpL3YxL21vdmllcy8ke2lkfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWUgPSAobW92aWUpID0+IHtcclxuICByZXR1cm4gYXhpb3NcclxuICAgIC5wYXRjaChgJHtkZXYudXJsfS9hcGkvdjEvbW92aWVzLyR7bW92aWUuaWR9YCwgbW92aWUpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtkZXYudXJsfS9hcGkvdjEvbW92aWVzLyR7aWR9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=