/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-connect */ \"electron-connect\");\n/* harmony import */ var electron_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_connect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // Keep a global reference of the window object, if you don't, the window will\n// be closed automatically when the JavaScript object is garbage collected.\n\nvar win;\n\nvar createWindow = function createWindow() {\n  // Create the browser window.\n  win = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\n    icon: path__WEBPACK_IMPORTED_MODULE_2__[\"join\"](process.cwd(), 'dist/renderer/icons/win/favicon.ico'),\n    width: 1280,\n    height: 720,\n    minWidth: 800,\n    title: 'Milestone Best Practice Deployment Checklist',\n    titleBarStyle: 'hidden',\n    webPreferences: {\n      nodeIntegration: true\n    }\n  }); //prevent app title from updating\n\n  win.on('page-title-updated', function (evt) {\n    evt.preventDefault();\n  }); //disable the toolbar\n\n  win.setMenu(null); // and load the index.html of the app.\n\n  win.loadURL(url__WEBPACK_IMPORTED_MODULE_3__[\"format\"]({\n    pathname: path__WEBPACK_IMPORTED_MODULE_2__[\"join\"](process.cwd(), 'dist/renderer/deployment-list.html'),\n    protocol: 'file:',\n    slashes: true\n  })); //open devtools for debugging\n\n  win.webContents.openDevTools(); // Emitted when the window is closed.\n\n  win.on('closed', function () {\n    // Dereference the window object, usually you would store windows\n    // in an array if your app supports multi windows, this is the time\n    // when you should delete the corresponding element.\n    win = null;\n  });\n}; // This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', function () {\n  electron_connect__WEBPACK_IMPORTED_MODULE_1__[\"client\"].create(createWindow);\n}); // Quit when all windows are closed.\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', function () {\n  // On macOS it is common for applications and their menu bar\n  // to stay active until the user quits explicitly with Cmd + Q\n  if (process.platform !== 'darwin') electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', function () {\n  // On macOS it's common to re-create a window in the app when the\n  // dock icon is clicked and there are no other windows open.\n  if (win === null) createWindow();\n}); // In this file you can include the rest of your app's specific main process\n// code. You can also put them in separate files and require them here.\n\n//# sourceURL=webpack:///./src/main/index.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "electron-connect":
/*!***********************************!*\
  !*** external "electron-connect" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron-connect\");\n\n//# sourceURL=webpack:///external_%22electron-connect%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });