module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("kiQV", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "luizcowbtf@gmail.com",
      subject: "Innovvatio",
      message: "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Nextflix,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.",
      tags: ["nextjs", "react", "nodejs", "express", "axios", "vercel", "movies"],
      emailLink: "",
      changelog: "",
      version: ""
    };
  }

  componentDidMount() {
    this.setState({
      emailLink: `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.message}`
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

    if (_package_json__WEBPACK_IMPORTED_MODULE_1__ && _package_json__WEBPACK_IMPORTED_MODULE_1__.version) {
      this.setState({
        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version
      });
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "jumbotron"
    }, __jsx("h1", {
      className: "display-4"
    }, "Innovvatio"), __jsx("h3", null, "Innovvatio \xE9 Luiz Claudio Dias Gomes"), __jsx("h4", null, "C.N.P.J: 40.18.756/0001-05"), __jsx("br", null), __jsx("p", {
      className: "lead c-dark"
    }, "Pequeno aplicativo web desenvolvido para teste de Front End."), __jsx("hr", {
      className: "my-4"
    }), __jsx("section", null, __jsx("h4", null, "Version: ", this.state.version || "1.0.0"), __jsx("div", {
      className: "list-group-horizontal-sm mb-4"
    }, this.state.tags.map(tag => __jsx("span", {
      key: tag,
      className: "badge badge-pill badge-dark mr-1 mt-1"
    }, tag)))), __jsx("p", {
      className: "font-weight-light"
    }, "Desenvolvido por Innovvatio"), __jsx("address", null, __jsx("p", {
      className: "font-italic"
    }, "Envie e-mail:", __jsx("a", {
      className: "badge badge-pill badge-dark ml-1",
      href: this.state.emailLink
    }, this.state.email))), this.state.changelog && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
      className: "my-4"
    }), __jsx("section", null, __jsx("h4", null, "Changelog:")), __jsx("p", {
      className: "lead c-dark"
    }, this.state.changelog))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"innovvatio\",\"version\":\"1.0.0\",\"private\":true,\"scripts\":{\"dev\":\"node server/index.js\",\"build\":\"next build\",\"start\":\"next start\"},\"dependencies\":{\"@zeit/next-css\":\"^1.0.1\",\"@zeit/next-sass\":\"^1.0.1\",\"axios\":\"^0.21.1\",\"body-parser\":\"^1.19.0\",\"express\":\"^4.17.1\",\"next\":\"^10.2.3\",\"node-sass\":\"^4.14.1\",\"react\":\"16.13.1\",\"react-dom\":\"16.13.1\"}}");

/***/ })

/******/ });