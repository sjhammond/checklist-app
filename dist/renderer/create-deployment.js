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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/create-deployment.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renderer/create-deployment.ts":
/*!*******************************************!*\
  !*** ./src/renderer/create-deployment.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/db */ \"./src/renderer/data/db.ts\");\n/* harmony import */ var _models_product_tier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/product-tier */ \"./src/renderer/models/product-tier.ts\");\n\n\nvar _this = undefined;\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#essential-icon\").load(\"./rsc/svg/essential.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#express-icon\").load(\"./rsc/svg/express.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#professional-icon\").load(\"./rsc/svg/professional.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#expert-icon\").load(\"./rsc/svg/expert.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#corporate-icon\").load(\"./rsc/svg/corporate.svg\");\n\nvar createNewDeployment = function createNewDeployment(product, name, integrator) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var _this2 = this;\n\n    var date, productTier, deployment;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            //create deployment template from params\n            date = new Date();\n            productTier = _models_product_tier__WEBPACK_IMPORTED_MODULE_3__[\"ProductTier\"][parseInt(product)];\n            deployment = {\n              dateCreated: date,\n              dateModified: date,\n              name: name,\n              currentPhaseId: 1,\n              integrator: integrator,\n              productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_3__[\"ProductTier\"][productTier]\n            }; // get the db\n\n            Object(_data_db__WEBPACK_IMPORTED_MODULE_2__[\"dbPromise\"])().then(function (db) {\n              return __awaiter(_this2, void 0, void 0,\n              /*#__PURE__*/\n              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n                var tx, store, cursor, id;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        // create a transaction, open obj store, add deployment, and return an open cursor\n                        tx = db.transaction(['deployments'], 'readwrite');\n                        store = tx.objectStore('deployments');\n                        _context.next = 4;\n                        return store.add(deployment);\n\n                      case 4:\n                        _context.next = 6;\n                        return store.openCursor();\n\n                      case 6:\n                        cursor = _context.sent;\n                        id = cursor.value.id;\n                        _context.next = 10;\n                        return tx.done;\n\n                      case 10:\n                        return _context.abrupt(\"return\", id);\n\n                      case 11:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n            }).then(function (id) {\n              // then go to the checklist and pass the id through the url\n              var href = \"./checklist.html?id=\".concat(id);\n              window.location.href = href;\n            });\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n}; // On click, create a new deployment using the params from the html form\n\n\ndocument.getElementById('newDeploymentBtn').onclick = function () {\n  var product = document.querySelector('input[name=\"radio\"]:checked');\n  var name = document.getElementById('deploymentName');\n  var integrator = document.getElementById('integratorName');\n\n  if (product == null || name.value == null || integrator.value == null) {\n    return;\n  }\n\n  createNewDeployment(product.value, name.value, integrator.value);\n};\n\n//# sourceURL=webpack:///./src/renderer/create-deployment.ts?");

/***/ }),

/***/ "./src/renderer/data/db.ts":
/*!*********************************!*\
  !*** ./src/renderer/data/db.ts ***!
  \*********************************/
/*! exports provided: dbPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbPromise\", function() { return dbPromise; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ \"idb\");\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_phases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/phases */ \"./src/renderer/data/phases.ts\");\n/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/tasks */ \"./src/renderer/data/tasks.ts\");\n/* harmony import */ var _data_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/steps */ \"./src/renderer/data/steps.ts\");\n\n\nvar _this = undefined;\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n}; //use idb to wrap asynchronous db requests in promises to support sequential operations\n\n\n\n\n\n //open appDB database\n\nvar dbPromise = function dbPromise() {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {\n    var _this2 = this;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            return _context7.abrupt(\"return\", Object(idb__WEBPACK_IMPORTED_MODULE_1__[\"openDB\"])('appDB', 1, {\n              upgrade: function upgrade(appDB) {\n                return __awaiter(this, void 0, void 0,\n                /*#__PURE__*/\n                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n                  var objectStoreNames;\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          console.log(\"\".concat(appDB.name, \" upgrade required. Upgrading to version \").concat(appDB.version, \"...\"));\n                          objectStoreNames = Array.from(appDB.objectStoreNames);\n\n                          if (objectStoreNames.every(function (x) {\n                            return x !== 'deployments';\n                          })) {\n                            appDB.createObjectStore('deployments', {\n                              keyPath: 'id',\n                              autoIncrement: true\n                            }).createIndex('dateModified', 'dateModified', {\n                              unique: false\n                            });\n                          }\n\n                          if (objectStoreNames.every(function (x) {\n                            return x !== 'phases';\n                          })) {\n                            appDB.createObjectStore('phases', {\n                              keyPath: 'id',\n                              autoIncrement: true\n                            }).createIndex('title', 'title', {\n                              unique: true\n                            });\n                          }\n\n                          if (objectStoreNames.every(function (x) {\n                            return x !== 'tasks';\n                          })) {\n                            appDB.createObjectStore('tasks', {\n                              keyPath: 'id',\n                              autoIncrement: true\n                            }).createIndex('phaseId', 'phaseId', {\n                              unique: false\n                            });\n                          }\n\n                          if (objectStoreNames.every(function (x) {\n                            return x !== 'steps';\n                          })) {\n                            appDB.createObjectStore('steps', {\n                              keyPath: 'id',\n                              autoIncrement: true\n                            }).createIndex('taskId', 'taskId', {\n                              unique: false\n                            });\n                          }\n\n                        case 6:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n              }\n            }).then(function (appDB) {\n              return __awaiter(_this2, void 0, void 0,\n              /*#__PURE__*/\n              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n                var _this3 = this;\n\n                var phases, tasks, steps;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n                  while (1) {\n                    switch (_context5.prev = _context5.next) {\n                      case 0:\n                        phases = appDB.transaction('phases', 'readwrite');\n                        _context5.next = 3;\n                        return phases.store.count();\n\n                      case 3:\n                        _context5.t0 = _context5.sent;\n\n                        if (!(_context5.t0 === 0)) {\n                          _context5.next = 7;\n                          break;\n                        }\n\n                        _context5.next = 7;\n                        return Promise.all(_data_phases__WEBPACK_IMPORTED_MODULE_2__[\"Phases\"].map(function (phase) {\n                          return __awaiter(_this3, void 0, void 0,\n                          /*#__PURE__*/\n                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n                              while (1) {\n                                switch (_context2.prev = _context2.next) {\n                                  case 0:\n                                    _context2.next = 2;\n                                    return phases.store.put(phase);\n\n                                  case 2:\n                                    return _context2.abrupt(\"return\", _context2.sent);\n\n                                  case 3:\n                                  case \"end\":\n                                    return _context2.stop();\n                                }\n                              }\n                            }, _callee2);\n                          }));\n                        }));\n\n                      case 7:\n                        _context5.next = 9;\n                        return phases.done;\n\n                      case 9:\n                        tasks = appDB.transaction('tasks', 'readwrite');\n                        _context5.next = 12;\n                        return tasks.store.count();\n\n                      case 12:\n                        _context5.t1 = _context5.sent;\n\n                        if (!(_context5.t1 === 0)) {\n                          _context5.next = 16;\n                          break;\n                        }\n\n                        _context5.next = 16;\n                        return Promise.all(_data_tasks__WEBPACK_IMPORTED_MODULE_3__[\"Tasks\"].map(function (task) {\n                          return __awaiter(_this3, void 0, void 0,\n                          /*#__PURE__*/\n                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                              while (1) {\n                                switch (_context3.prev = _context3.next) {\n                                  case 0:\n                                    _context3.next = 2;\n                                    return tasks.store.put(task);\n\n                                  case 2:\n                                    return _context3.abrupt(\"return\", _context3.sent);\n\n                                  case 3:\n                                  case \"end\":\n                                    return _context3.stop();\n                                }\n                              }\n                            }, _callee3);\n                          }));\n                        }));\n\n                      case 16:\n                        _context5.next = 18;\n                        return tasks.done;\n\n                      case 18:\n                        steps = appDB.transaction('steps', 'readwrite');\n                        _context5.next = 21;\n                        return steps.store.count();\n\n                      case 21:\n                        _context5.t2 = _context5.sent;\n\n                        if (!(_context5.t2 === 0)) {\n                          _context5.next = 25;\n                          break;\n                        }\n\n                        _context5.next = 25;\n                        return Promise.all(_data_steps__WEBPACK_IMPORTED_MODULE_4__[\"Steps\"].map(function (step) {\n                          return __awaiter(_this3, void 0, void 0,\n                          /*#__PURE__*/\n                          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n                              while (1) {\n                                switch (_context4.prev = _context4.next) {\n                                  case 0:\n                                    _context4.next = 2;\n                                    return steps.store.put(step);\n\n                                  case 2:\n                                    return _context4.abrupt(\"return\", _context4.sent);\n\n                                  case 3:\n                                  case \"end\":\n                                    return _context4.stop();\n                                }\n                              }\n                            }, _callee4);\n                          }));\n                        }));\n\n                      case 25:\n                        _context5.next = 27;\n                        return steps.done;\n\n                      case 27:\n                        return _context5.abrupt(\"return\", appDB);\n\n                      case 28:\n                      case \"end\":\n                        return _context5.stop();\n                    }\n                  }\n                }, _callee5);\n              }));\n            }).then(function (appDB) {\n              return __awaiter(_this2, void 0, void 0,\n              /*#__PURE__*/\n              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n                  while (1) {\n                    switch (_context6.prev = _context6.next) {\n                      case 0:\n                        console.log(\"\".concat(appDB.name, \" version \").concat(appDB.version, \" open.\"));\n                        return _context6.abrupt(\"return\", appDB);\n\n                      case 2:\n                      case \"end\":\n                        return _context6.stop();\n                    }\n                  }\n                }, _callee6);\n              }));\n            }));\n\n          case 1:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n};\n\n//# sourceURL=webpack:///./src/renderer/data/db.ts?");

/***/ }),

/***/ "./src/renderer/data/phases.ts":
/*!*************************************!*\
  !*** ./src/renderer/data/phases.ts ***!
  \*************************************/
/*! exports provided: Phases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Phases\", function() { return Phases; });\nvar Phases = [{\n  id: 1,\n  title: 'Preparing and Installing'\n}, {\n  id: 2,\n  title: 'Configuring and Organizing'\n}, {\n  id: 3,\n  title: 'Defining and Monitoring'\n}, {\n  id: 4,\n  title: 'Extending and Maintaining'\n}];\n\n//# sourceURL=webpack:///./src/renderer/data/phases.ts?");

/***/ }),

/***/ "./src/renderer/data/steps.ts":
/*!************************************!*\
  !*** ./src/renderer/data/steps.ts ***!
  \************************************/
/*! exports provided: Steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Steps\", function() { return Steps; });\n/* harmony import */ var _models_product_tier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product-tier */ \"./src/renderer/models/product-tier.ts\");\n\nvar Steps = [{\n  id: 1,\n  taskId: 1,\n  title: \"Confirm passwords and settings on existing network and server equipment\",\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: \"../renderer/info_content/document.htm\"\n}, {\n  id: 2,\n  taskId: 1,\n  title: 'Check switches',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 3,\n  taskId: 1,\n  title: 'Determine IP Address Ranges',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 4,\n  taskId: 1,\n  title: 'Configure the Network',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 5,\n  taskId: 1,\n  title: 'Test the Network',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 6,\n  taskId: 1,\n  title: 'Check Network Time Protocol (NTP) Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 7,\n  taskId: 1,\n  title: 'Check Access to Microsoft Active Directory',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 8,\n  taskId: 1,\n  title: 'Verify Microsoft SQL server access and permissions',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Professional,\n  infoPath: ''\n}, {\n  id: 9,\n  taskId: 1,\n  title: 'Verify access to remote XProtect VMS systems that will be interconnected',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Corporate,\n  infoPath: ''\n}, {\n  id: 10,\n  taskId: 2,\n  title: 'Set a static IP address or configure DHCP and hostname',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 11,\n  taskId: 2,\n  title: 'Set administrator account credentials',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 12,\n  taskId: 2,\n  title: 'Verify firmware version with Milestone Supported Devices list',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 13,\n  taskId: 2,\n  title: 'Mount cameras and other IP hardware devices',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 14,\n  taskId: 2,\n  title: 'Configure additional device settings',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 15,\n  taskId: 2,\n  title: 'Install Milestone Screen recorder',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 16,\n  taskId: 3,\n  title: 'Install operating system environment',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 17,\n  taskId: 3,\n  title: 'Set and verify network settings',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 18,\n  taskId: 3,\n  title: 'Check server access',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 19,\n  taskId: 3,\n  title: 'Add and verify user accounts and passwords',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 20,\n  taskId: 3,\n  title: 'Enable remote management, such as Windows Remote Desktop',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 21,\n  taskId: 3,\n  title: 'Check Server time',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 22,\n  taskId: 3,\n  title: 'Install all important Windows Updates',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 23,\n  taskId: 3,\n  title: 'Check additional server software and settings',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 24,\n  taskId: 3,\n  title: 'Add anti-virus scan exceptions',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 25,\n  taskId: 3,\n  title: 'Enable SNMP traps',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Corporate,\n  infoPath: ''\n}, {\n  id: 26,\n  taskId: 4,\n  title: 'Prepare storage system',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 27,\n  taskId: 4,\n  title: 'Verify access to remote storage',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 28,\n  taskId: 5,\n  title: 'Prepare for installation',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 29,\n  taskId: 5,\n  title: 'Run the Management Server installer',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 30,\n  taskId: 5,\n  title: 'Verify the Management Server is running',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 31,\n  taskId: 6,\n  title: 'Download and run Milestone Mobile server software from the Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Professional,\n  infoPath: ''\n}, {\n  id: 32,\n  taskId: 6,\n  title: 'Specify URL and credentials to connect to the Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Professional,\n  infoPath: ''\n}, {\n  id: 33,\n  taskId: 6,\n  title: 'Verify the Mobile Server is running',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 34,\n  taskId: 7,\n  title: 'Prepare for installation',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Professional,\n  infoPath: ''\n}, {\n  id: 35,\n  taskId: 7,\n  title: 'Download and run the XProtect Recording Server installer from the Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Professional,\n  infoPath: ''\n}, {\n  id: 36,\n  taskId: 7,\n  title: 'Verify the server is running',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 37,\n  taskId: 7,\n  title: 'Install a different device pack',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 38,\n  taskId: 7,\n  title: 'Add anti-virus scan exceptions',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential,\n  infoPath: ''\n}, {\n  id: 39,\n  taskId: 8,\n  title: 'Prepare for installation',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 40,\n  taskId: 8,\n  title: 'Download and run the XProtect Recording Server installer from the Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 41,\n  taskId: 8,\n  title: 'Verify the server is running',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 42,\n  taskId: 8,\n  title: 'Install a different device pack',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 43,\n  taskId: 8,\n  title: 'Add anti-virus scan exceptions',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 44,\n  taskId: 9,\n  title: 'Prepare for installation',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}, {\n  id: 45,\n  taskId: 9,\n  title: 'Download and run the Management Client software from the Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert,\n  infoPath: ''\n}];\n\n//# sourceURL=webpack:///./src/renderer/data/steps.ts?");

/***/ }),

/***/ "./src/renderer/data/tasks.ts":
/*!************************************!*\
  !*** ./src/renderer/data/tasks.ts ***!
  \************************************/
/*! exports provided: Tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tasks\", function() { return Tasks; });\n/* harmony import */ var _models_product_tier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product-tier */ \"./src/renderer/models/product-tier.ts\");\n\nvar Tasks = [{\n  id: 1,\n  phaseId: 1,\n  title: 'Configure the network',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 2,\n  phaseId: 1,\n  title: 'Configure cameras and other IP hardware devices',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 3,\n  phaseId: 1,\n  title: 'Configure Windows servers',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 4,\n  phaseId: 1,\n  title: 'Configure storage',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 5,\n  phaseId: 1,\n  title: 'Install XProtect Management Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 6,\n  phaseId: 1,\n  title: 'Install Milestone Mobile Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 7,\n  phaseId: 1,\n  title: 'Install XProtect Recording Server',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}, {\n  id: 8,\n  phaseId: 1,\n  title: 'Install XProtect Failover Recording Servers',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Expert\n}, {\n  id: 9,\n  phaseId: 1,\n  title: 'Install XProtect Management Clients',\n  productTier: _models_product_tier__WEBPACK_IMPORTED_MODULE_0__[\"ProductTier\"].Essential\n}];\n\n//# sourceURL=webpack:///./src/renderer/data/tasks.ts?");

/***/ }),

/***/ "./src/renderer/models/product-tier.ts":
/*!*********************************************!*\
  !*** ./src/renderer/models/product-tier.ts ***!
  \*********************************************/
/*! exports provided: ProductTier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductTier\", function() { return ProductTier; });\nvar ProductTier;\n\n(function (ProductTier) {\n  ProductTier[ProductTier[\"Essential\"] = 1] = \"Essential\";\n  ProductTier[ProductTier[\"Express\"] = 2] = \"Express\";\n  ProductTier[ProductTier[\"Professional\"] = 3] = \"Professional\";\n  ProductTier[ProductTier[\"Expert\"] = 4] = \"Expert\";\n  ProductTier[ProductTier[\"Corporate\"] = 5] = \"Corporate\";\n})(ProductTier || (ProductTier = {}));\n\n//# sourceURL=webpack:///./src/renderer/models/product-tier.ts?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "idb":
/*!**********************!*\
  !*** external "idb" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"idb\");\n\n//# sourceURL=webpack:///external_%22idb%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");\n\n//# sourceURL=webpack:///external_%22jquery%22?");

/***/ })

/******/ });