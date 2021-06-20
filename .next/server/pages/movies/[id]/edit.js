module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZzlS");


/***/ }),

/***/ "HvCo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MovieCreateForm = props => {
  const {
    0: isInitialDataLoaded,
    1: setIsInitialDataLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultData = {
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: ""
  };
  const formData = props.initialData ? _objectSpread({}, props.initialData) : defaultData;
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(formData); //   useEffect(() => {
  //     if (props.initialData) {
  //       setForm(props.initialData);
  //       setIsInitialDataLoaded(true);
  //     }
  //   }, [isInitialDataLoaded]);

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [name]: target.value
    }));
  };

  const handleGenreChange = event => {
    const {
      options
    } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm(_objectSpread(_objectSpread({}, form), {}, {
      genre: value.toString()
    }));
  };

  const submitForm = () => {
    props.handleFormSubmit(_objectSpread({}, form));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "name"
  }, "Nome"), __jsx("input", {
    value: form.name,
    onChange: handleChange,
    name: "name",
    type: "text",
    className: "form-control",
    id: "name",
    "aria-describedby": "emailHelp",
    placeholder: "Star Wars"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "Descri\xE7\xE3o"), __jsx("input", {
    value: form.description,
    onChange: handleChange,
    name: "description",
    type: "text",
    className: "form-control",
    id: "description",
    placeholder: "Em algum em uma gal\xE1xia distante..."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "M\xE9dia"), __jsx("input", {
    value: form.rating,
    onChange: handleChange,
    name: "rating",
    type: "number",
    max: "5",
    min: "0",
    className: "form-control",
    id: "rating",
    placeholder: "3"
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "Max: 5, Min: 0", " ")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "image"
  }, "Image"), __jsx("input", {
    value: form.image,
    onChange: handleChange,
    name: "image",
    type: "text",
    className: "form-control",
    id: "image",
    placeholder: "http://....."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "cover"
  }, "Cover"), __jsx("input", {
    value: form.cover,
    onChange: handleChange,
    name: "cover",
    type: "text",
    className: "form-control",
    id: "cover",
    placeholder: "http://......"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "longDesc"
  }, "Descri\xE7\xE3o completa"), __jsx("textarea", {
    value: form.longDesc,
    onChange: handleChange,
    name: "longDesc",
    className: "form-control",
    id: "longDesc",
    rows: "3"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "genre"
  }, "Genre"), __jsx("select", {
    onChange: handleGenreChange,
    multiple: true,
    className: "form-control",
    id: "genre"
  }, __jsx("option", null, "Drama"), __jsx("option", null, "A\xE7\xE3o"), __jsx("option", null, "Aventura"), __jsx("option", null, "Document\xE1rio"), __jsx("option", null, "M\xFAsical"))), __jsx("button", {
    onClick: submitForm,
    type: "button",
    className: "btn btn-outline-dark"
  }, props.submitButton || "Criar")));
};

/* harmony default export */ __webpack_exports__["a"] = (MovieCreateForm);

/***/ }),

/***/ "ZzlS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_movieCreateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HvCo");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dpnd");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EditMovie extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleUpdateMovie", movie => {
      Object(_actions__WEBPACK_IMPORTED_MODULE_2__[/* updateMovie */ "g"])(movie).then(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/movies/[id]", `/movies/${movie.id}`);
      });
    });
  }

  static async getInitialProps({
    query
  }) {
    const movie = await Object(_actions__WEBPACK_IMPORTED_MODULE_2__[/* getMovieById */ "e"])(query.id);
    return {
      movie
    };
  }

  render() {
    const {
      movie
    } = this.props;
    return __jsx("div", {
      className: "container-fluid"
    }, __jsx("h1", null, "Editar filmes"), __jsx(_components_movieCreateForm__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      submitButton: "Update",
      initialData: movie,
      handleFormSubmit: this.handleUpdateMovie
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditMovie);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dpnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteMovie; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const environment = "prod";
const dev = {
  url: "http://localhost:3000"
};
const prod = {
  url: "https://api.themoviedb.org/3",
  // api_key: process.env.API_ENV,
  api_key: "a6e3a68c3b13fa67916e7f4ce66a8290",
  language: "pt-br"
};
const CATEGORY_DATA = [{
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
  name: "TV"
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
const getCategories = () => {
  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${prod.url}/genre/movie/list?api_key=${prod.api_key}&language=${prod.language}`).then(res => {
      const categories = [{
        id: 0,
        name: "Todos"
      }];
      categories.push(...res.data.genres);
      return categories;
    }).catch(error => {
      console.error("getCategories", error);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(CATEGORY_DATA);
        } catch (error) {
          reject(`Cannot fetch data: ${error}`);
        }
      }, 200);
    });
  }
};
const getMovies = (page = 1) => {
  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${prod.url}/movie/popular?api_key=${prod.api_key}&language=${prod.language}&page=${page}`).then(res => {
      if (res.data && res.data.results) return res.data.results;else return [];
    }).catch(error => {
      console.error("getMovies", error);
      return [];
    });
  } else {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${dev.url}/api/v1/movies`).then(res => {
      return res.data.results;
    });
  }
};
const createMovie = movie => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${dev.url}/api/v1/movies`, movie).then(res => {
    return res.data;
  });
};
const getMovieById = id => {
  if (environment === "prod") {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${prod.url}/movie/${id}?api_key=${prod.api_key}&language=${prod.language}`).then(res => {
      return res.data;
    }).catch(error => {
      console.error("getMovieById", error);
    });
  } else {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${dev.url}/api/v1/movies/${id}`).then(res => {
      return res.data;
    });
  }
};
const updateMovie = movie => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${dev.url}/api/v1/movies/${movie.id}`, movie).then(res => {
    return res.data;
  });
};
const deleteMovie = id => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${dev.url}/api/v1/movies/${id}`).then(res => {
    return res.data;
  });
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });