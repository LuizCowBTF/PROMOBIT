webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_sideMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sideMenu */ "./components/sideMenu.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_movieList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/movieList */ "./components/movieList.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/index */ "./actions/index.js");









var _jsxFileName = "C:\\PROJETOS\\react-next-movie-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Home = /*#__PURE__*/function (_React$Component) {
  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeCategory", function (category) {
      _this.setState({
        filter: [category.id, category.name]
      });
    });

    Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "filterMovies", function (movies) {
      if (_this.state.filter[0] === 0) return movies;
      return movies.filter(function (m) {
        return m.genre_ids && m.genre_ids.includes(_this.state.filter[0]);
      });
    });

    _this.state = {
      filter: [0, "Todos"]
    };
    return _this;
  } // wait for the movies on server side before renders on browser


  Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    // // called only on Client (Browser...)
    // componentDidMount() {
    //
    // }
    value: function render() {
      var _this$props = this.props,
          movies = _this$props.movies,
          images = _this$props.images,
          categories = _this$props.categories;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "home-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx(_components_sideMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        changeCategory: this.handleChangeCategory,
        activeCategory: this.state.filter[0],
        appName: "Categories",
        categories: categories || [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "col-lg-9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        images: images || [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }), __jsx("h4", {
        className: "my-4 c-red",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, "Displaying ", this.state.filter[1], " Movies", " "), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }
      }, __jsx(_components_movieList__WEBPACK_IMPORTED_MODULE_12__["default"], {
        movies: this.filterMovies(movies) || [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 19
        }
      })))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var movies, categories, images;
        return C_PROJETOS_react_next_movie_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_actions_index__WEBPACK_IMPORTED_MODULE_13__["getMovies"])();

              case 2:
                movies = _context.sent;
                _context.next = 5;
                return Object(_actions_index__WEBPACK_IMPORTED_MODULE_13__["getCategories"])();

              case 5:
                categories = _context.sent;
                // let movies = [];
                // let categories = [];
                // getMovies()
                //   .then((result) => {
                //     movies = result;
                //   })
                //   .catch((error) => {
                //     console.error(error);
                //   });
                // getCategories()
                //   .then((result) => {
                //     categories = result;
                //   })
                //   .catch((error) => {
                //     console.error(error);
                //   });
                images = movies.map(function (movie) {
                  return {
                    id: "image-".concat(movie.id),
                    backdrop_path: movie.backdrop_path,
                    title: movie.title
                  };
                });
                return _context.abrupt("return", {
                  movies: movies,
                  categories: categories,
                  images: images
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); // Functional component
// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     getMovies().then((movies) => {
//       setMovies(movies);
//     });
//   }, []);
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <link
//           rel="stylesheet"
//           href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//           crossOrigin="anonymous"
//         />
//         <script
//           src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//           integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//           integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//           crossOrigin="anonymous"
//         ></script>
//         <script
//           src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//           integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//           crossOrigin="anonymous"
//         ></script>
//       </Head>
//       <Navbar />
//       <div className="home-page">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-3">
//               <SideMenu appName={"Movie DB"} />
//             </div>
//             <div className="col-lg-9">
//               <Carousel />
//               <div className="row">
//                 <MovieList movies={movies} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <style jsx>{`
//         .home-page {
//           padding-top: 80px;
//         }
//       `}</style>
//     </div>
//   );
// };


/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiY2F0ZWdvcnkiLCJzZXRTdGF0ZSIsImZpbHRlciIsImlkIiwibmFtZSIsIm1vdmllcyIsInN0YXRlIiwibSIsImdlbnJlX2lkcyIsImluY2x1ZGVzIiwiaW1hZ2VzIiwiY2F0ZWdvcmllcyIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiZmlsdGVyTW92aWVzIiwiZ2V0TW92aWVzIiwiZ2V0Q2F0ZWdvcmllcyIsIm1hcCIsIm1vdmllIiwiYmFja2Ryb3BfcGF0aCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1VEFxQ0ksVUFBQ0MsUUFBRCxFQUFjO0FBQ25DLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxjQUFNLEVBQUUsQ0FBQ0YsUUFBUSxDQUFDRyxFQUFWLEVBQWNILFFBQVEsQ0FBQ0ksSUFBdkI7QUFBVixPQUFkO0FBQ0QsS0F2Q2tCOztBQUFBLCtTQXlDSixVQUFDQyxNQUFELEVBQVk7QUFDekIsVUFBSSxNQUFLQyxLQUFMLENBQVdKLE1BQVgsQ0FBa0IsQ0FBbEIsTUFBeUIsQ0FBN0IsRUFBZ0MsT0FBT0csTUFBUDtBQUNoQyxhQUFPQSxNQUFNLENBQUNILE1BQVAsQ0FBYyxVQUFDSyxDQUFELEVBQU87QUFDMUIsZUFBT0EsQ0FBQyxDQUFDQyxTQUFGLElBQWVELENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxRQUFaLENBQXFCLE1BQUtILEtBQUwsQ0FBV0osTUFBWCxDQUFrQixDQUFsQixDQUFyQixDQUF0QjtBQUNELE9BRk0sQ0FBUDtBQUdELEtBOUNrQjs7QUFFakIsVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWV2QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZTg2Y2I4Y2RiNDIzMTAzOGFhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTaWRlTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlTWVudVwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2Fyb3VzZWxcIjtcclxuaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3ZpZUxpc3RcIjtcclxuXHJcbmltcG9ydCB7IGdldE1vdmllcywgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gXCIuLi9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZmlsdGVyOiBbMCwgXCJUb2Rvc1wiXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyB3YWl0IGZvciB0aGUgbW92aWVzIG9uIHNlcnZlciBzaWRlIGJlZm9yZSByZW5kZXJzIG9uIGJyb3dzZXJcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgLy8gbGV0IG1vdmllcyA9IFtdO1xyXG4gICAgLy8gbGV0IGNhdGVnb3JpZXMgPSBbXTtcclxuICAgIC8vIGdldE1vdmllcygpXHJcbiAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBtb3ZpZXMgPSByZXN1bHQ7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyBnZXRDYXRlZ29yaWVzKClcclxuICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGNhdGVnb3JpZXMgPSByZXN1bHQ7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBtb3ZpZXMubWFwKChtb3ZpZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBgaW1hZ2UtJHttb3ZpZS5pZH1gLFxyXG4gICAgICAgIGJhY2tkcm9wX3BhdGg6IG1vdmllLmJhY2tkcm9wX3BhdGgsXHJcbiAgICAgICAgdGl0bGU6IG1vdmllLnRpdGxlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBtb3ZpZXMsIGNhdGVnb3JpZXMsIGltYWdlcyB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IFtjYXRlZ29yeS5pZCwgY2F0ZWdvcnkubmFtZV0gfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVyTW92aWVzID0gKG1vdmllcykgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyWzBdID09PSAwKSByZXR1cm4gbW92aWVzO1xyXG4gICAgcmV0dXJuIG1vdmllcy5maWx0ZXIoKG0pID0+IHtcclxuICAgICAgcmV0dXJuIG0uZ2VucmVfaWRzICYmIG0uZ2VucmVfaWRzLmluY2x1ZGVzKHRoaXMuc3RhdGUuZmlsdGVyWzBdKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIC8vIGNhbGxlZCBvbmx5IG9uIENsaWVudCAoQnJvd3Nlci4uLilcclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvL1xyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBtb3ZpZXMsIGltYWdlcywgY2F0ZWdvcmllcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZU1lbnVcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2F0ZWdvcnk9e3RoaXMuaGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5PXt0aGlzLnN0YXRlLmZpbHRlclswXX1cclxuICAgICAgICAgICAgICAgICAgYXBwTmFtZT17XCJDYXRlZ29yaWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXMgfHwgW119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbWFnZXM9e2ltYWdlcyB8fCBbXX0gLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS00IGMtcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIERpc3BsYXlpbmcge3RoaXMuc3RhdGUuZmlsdGVyWzFdfSBNb3ZpZXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIHtlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuZmlsdGVyTW92aWVzKG1vdmllcykgfHwgW119IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGdW5jdGlvbmFsIGNvbXBvbmVudFxyXG4vLyBjb25zdCBIb21lID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBnZXRNb3ZpZXMoKS50aGVuKChtb3ZpZXMpID0+IHtcclxuLy8gICAgICAgc2V0TW92aWVzKG1vdmllcyk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbi8vICAgICAgICAgPGxpbmtcclxuLy8gICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4vLyAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbi8vICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXHJcbi8vICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgICA8c2NyaXB0XHJcbi8vICAgICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEuc2xpbS5taW4uanNcIlxyXG4vLyAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LXE4aS9YKzk2NUR6TzByVDdhYks0MUpTdFFJQXFWZ1JWenBiem81c21YS3A0WWZSdkgrOGFidFRFMVBpNmppem9cIlxyXG4vLyAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4vLyAgICAgICAgID48L3NjcmlwdD5cclxuLy8gICAgICAgICA8c2NyaXB0XHJcbi8vICAgICAgICAgICBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNC43L3VtZC9wb3BwZXIubWluLmpzXCJcclxuLy8gICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1VTzJlVDBDcEhxZFNKUTZoSnR5NUtWcGh0UGh6V2o5V08xY2xIVE1HYTNKRFp3cm5RcTRzRjg2ZElITkR6MFcxXCJcclxuLy8gICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuLy8gICAgICAgICA+PC9zY3JpcHQ+XHJcbi8vICAgICAgICAgPHNjcmlwdFxyXG4vLyAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiXHJcbi8vICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSmpTbVZneWQwcDNwWEIxclJpYlpVQVlvSUl5Nk9yUTZWcmpJRWFGZi9uSkd6SXhGRHNmNHgweElNK0IwN2pSTVwiXHJcbi8vICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbi8vICAgICAgICAgPjwvc2NyaXB0PlxyXG4vLyAgICAgICA8L0hlYWQ+XHJcbi8vICAgICAgIDxOYXZiYXIgLz5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXBhZ2VcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4vLyAgICAgICAgICAgICAgIDxTaWRlTWVudSBhcHBOYW1lPXtcIk1vdmllIERCXCJ9IC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbi8vICAgICAgICAgICAgICAgPENhcm91c2VsIC8+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IC8+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4vLyAgICAgICA8c3R5bGUganN4PntgXHJcbi8vICAgICAgICAgLmhvbWUtcGFnZSB7XHJcbi8vICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIGB9PC9zdHlsZT5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9