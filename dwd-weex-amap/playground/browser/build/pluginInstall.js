// NOTE: for vue2.0 and platform:web only.

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	if (window.Weex) {
	  Weex.install(__webpack_require__(13));
	} else if (window.weex) {
	  weex.install(__webpack_require__(13));
	}

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	'use strict';

	var DwdWeexAmap = {
	  show: function show() {
	    alert("module DwdWeexAmap is created sucessfully ");
	  }
	};

	var meta = {
	  DwdWeexAmap: [{
	    name: 'show',
	    args: []
	  }]
	};

	if (window.Vue) {
	  weex.registerModule('DwdWeexAmap', DwdWeexAmap);
	}

	function init(weex) {
	  weex.registerApiModule('DwdWeexAmap', DwdWeexAmap, meta);
	}
	module.exports = {
	  init: init
	};

/***/ })

/******/ });