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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/checklist.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renderer/checklist.ts":
/*!***********************************!*\
  !*** ./src/renderer/checklist.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/db */ \"./src/renderer/data/db.ts\");\n/* harmony import */ var _helpers_include_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/include-html */ \"./src/renderer/helpers/include-html.ts\");\n/* harmony import */ var _helpers_info_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/info-toggler */ \"./src/renderer/helpers/info-toggler.ts\");\n/* harmony import */ var _helpers_external_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/external-urls */ \"./src/renderer/helpers/external-urls.ts\");\n\n\nvar _this = undefined;\n\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n\n\n\n\n\nvar urlParams = new URLSearchParams(window.location.search);\nvar id = urlParams.get('id');\nvar deployment;\nvar phase;\nvar mainContent = '';\nObject(_helpers_external_urls__WEBPACK_IMPORTED_MODULE_5__[\"transformLinks\"])();\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#back_icon\").load(\"./rsc/svg/backarrow.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#save_icon\").load(\"./rsc/svg/save.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#my-deployments_icon\").load(\"./rsc/svg/mydeployments.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#add-new_icon\").load(\"./rsc/svg/new.svg\");\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#settings_icon\").load(\"./rsc/svg/settings.svg\"); //load the db, open obj store, get the deployment, and render the list for the deployment's current phase\n\nObject(_data_db__WEBPACK_IMPORTED_MODULE_2__[\"dbPromise\"])().then(function (db) {\n  return __awaiter(_this, void 0, void 0,\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var tasks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, task;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return db.transaction('deployments', 'readonly').objectStore('deployments').get(parseInt(id));\n\n          case 2:\n            deployment = _context.sent;\n            _context.next = 5;\n            return db.transaction('phases', 'readonly').objectStore('phases').get(deployment.currentPhaseId);\n\n          case 5:\n            phase = _context.sent;\n            _context.next = 8;\n            return db.transaction('tasks', 'readonly').objectStore('tasks').index('phaseId').getAll(phase.id);\n\n          case 8:\n            tasks = _context.sent;\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context.prev = 12;\n            _iterator = tasks.filter(function (task) {\n              return task.productTier.valueOf() <= deployment.productTier.valueOf();\n            })[Symbol.iterator]();\n\n          case 14:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context.next = 26;\n              break;\n            }\n\n            task = _step.value;\n            _context.t0 = mainContent;\n            _context.t1 = taskTemplate;\n            _context.t2 = task;\n            _context.next = 21;\n            return db.transaction('steps', 'readonly').objectStore('steps').index('taskId').getAll(task.id);\n\n          case 21:\n            _context.t3 = _context.sent;\n            mainContent = _context.t0 += (0, _context.t1)(_context.t2, _context.t3);\n\n          case 23:\n            _iteratorNormalCompletion = true;\n            _context.next = 14;\n            break;\n\n          case 26:\n            _context.next = 32;\n            break;\n\n          case 28:\n            _context.prev = 28;\n            _context.t4 = _context[\"catch\"](12);\n            _didIteratorError = true;\n            _iteratorError = _context.t4;\n\n          case 32:\n            _context.prev = 32;\n            _context.prev = 33;\n\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n\n          case 35:\n            _context.prev = 35;\n\n            if (!_didIteratorError) {\n              _context.next = 38;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 38:\n            return _context.finish(35);\n\n          case 39:\n            return _context.finish(32);\n\n          case 40:\n            return _context.abrupt(\"return\", mainContent);\n\n          case 41:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[12, 28, 32, 40], [33,, 35, 39]]);\n  }));\n}).then(function (mainContent) {\n  document.getElementById('header-title').innerHTML = phase.title;\n  document.getElementById('main-content').innerHTML = mainContent;\n}).then(function () {\n  Object(_helpers_include_html__WEBPACK_IMPORTED_MODULE_3__[\"includeHTML\"])();\n  Object(_helpers_info_toggler__WEBPACK_IMPORTED_MODULE_4__[\"toggleInfo\"])();\n}); //helper function that generates the task-level html for each task in the deployment phase\n//only the tasks whose productTier is equal to or less than the currentProduct are generated\n\nvar taskTemplate = function taskTemplate(task, steps) {\n  return \"\\n    <section class='checklist'>\\n        <h2 class='checklist__title'>\".concat(task.title, \"</h2>\\n        <span class='checklist__title-border'></span><span class='checklist__percentage-border'></span>\").concat(steps.filter(function (step) {\n    return step.productTier.valueOf() <= deployment.productTier.valueOf();\n  }).map(stepTemplate).join(''), \"</section>\\n\");\n}; //helper function that generates the step-level html for each task in the deployment phase\n//only the steps whose productTier is equal to or less than the currentProduct are generated \n\n\nvar stepTemplate = function stepTemplate(step) {\n  return \"\\n    <ul class='checklist-container'>\\n        <li class='checklist-item'>\\n            <input id='\".concat(step.id, \"' type='checkbox'/>\\n            <label for='\").concat(step.id, \"' class='checkbox'></label>\\n            <span class='checklist-item__title'>\").concat(step.title, \"</span>\\n            <button class='checklist-note__expand' aria-label='Toggle Notes' title='Add Note'>\\n                <svg class='svg-note-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 197.99 197.99'>\\n                    <path d='M33.94,96.17,0,198l101.82-33.94,77.29-77.29L111.23,18.88ZM45.42,167,31,152.57,45.8,108,90,152.19Z'/>\\n                    <rect x='149.8' y='-8.16' width='16.69' height='96' transform='translate(18.15 123.5) rotate(-45)'/>\\n                </svg>\\n            </button>\\n            <button class='checklist-item__expand' aria-label='Toggle Info' title='More Information'>\\n                <span class='line'></span>\\n            </button>\\n            <div class='info-container'>\\n                <div class='info' include-html='\").concat(step.infoPath, \"'></div>\\n                <!--info content-->\\n            </div>\\n            <!--info container-->\\n            <div class='note-container'>\\n                <input type='text' id='\").concat(step.id, \"_note' />\\n            </div>\\n            <!--note container-->\\n        </li>\\n    </ul>\\n\");\n};\n\n//# sourceURL=webpack:///./src/renderer/checklist.ts?");

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

/***/ "./src/renderer/helpers/external-urls.ts":
/*!***********************************************!*\
  !*** ./src/renderer/helpers/external-urls.ts ***!
  \***********************************************/
/*! exports provided: transformLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformLinks\", function() { return transformLinks; });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nvar transformLinks = function transformLinks() {\n  //get all anchor tags\n  var links = document.querySelectorAll('a[href]'); //For each link, get the href attribute. If it contains 'http' (i.e. external),\n  //add an event listener to the link, prevent default behavior, and open in a browser\n\n  Array.prototype.forEach.call(links, function (link) {\n    var url = link.getAttribute('href');\n    if (url == null) return;\n\n    if (url.indexOf('http') === 0) {\n      link.addEventListener('click', function (e) {\n        e.preventDefault();\n        electron__WEBPACK_IMPORTED_MODULE_0__[\"shell\"].openExternal(url);\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/renderer/helpers/external-urls.ts?");

/***/ }),

/***/ "./src/renderer/helpers/include-html.ts":
/*!**********************************************!*\
  !*** ./src/renderer/helpers/include-html.ts ***!
  \**********************************************/
/*! exports provided: includeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"includeHTML\", function() { return includeHTML; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n\nvar includeHTML = function includeHTML() {\n  /* Loop through the collection of info divs: */\n  var z = document.getElementsByClassName('info');\n\n  var _loop = function _loop(i) {\n    var elmnt = z[i];\n    /*get the 'include-html' attribute*/\n\n    var file = elmnt.getAttribute('include-html');\n\n    if (file) {\n      /* Make an HTTP request using the 'include-html' attribute value as the file name: */\n      var xhttp = new XMLHttpRequest();\n\n      xhttp.onreadystatechange = function () {\n        if (this.readyState == 4) {\n          if (this.status == 200) {\n            //EDIT THIS BIT TO STRIP META AND REL TAGS FROM FLARE TOPICS\n            elmnt.innerHTML = this.responseText;\n          }\n\n          if (this.status == 404) {\n            elmnt.innerHTML = 'Page not found.';\n          }\n          /* Remove the attribute, and call this function once more: */\n\n\n          elmnt.removeAttribute('include-html');\n          includeHTML();\n        }\n      };\n\n      xhttp.open('GET', file, true);\n      xhttp.send();\n      /* Exit the function: */\n\n      return {\n        v: void 0\n      };\n    }\n  };\n\n  for (var i = 0; i < z.length; i++) {\n    var _ret = _loop(i);\n\n    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === \"object\") return _ret.v;\n  }\n};\n\n//# sourceURL=webpack:///./src/renderer/helpers/include-html.ts?");

/***/ }),

/***/ "./src/renderer/helpers/info-toggler.ts":
/*!**********************************************!*\
  !*** ./src/renderer/helpers/info-toggler.ts ***!
  \**********************************************/
/*! exports provided: toggleInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleInfo\", function() { return toggleInfo; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar toggleInfo = function toggleInfo() {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.info-container').hide();\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.note-container').hide(); //toggle more information when clicking the \"more info\" icon\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.checklist-item__expand', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.info-container').slideToggle('fast');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.line').toggleClass('closed');\n  }); //toggle notes section when clicking the \"note\" icon\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.checklist-note__expand', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.note-container').slideToggle('fast');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.svg-note-icon').toggleClass('closed');\n  }); // add the 'hovering' class to the info-expander on hover \n  // (The hover effect can't be done in pure CSS or JQuery because the\n  // icon is made up of nested items that use pseudo classes.)\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checklist-item__expand').hover(function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.line').toggleClass('hovering');\n    }, function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.line').toggleClass('hovering');\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/renderer/helpers/info-toggler.ts?");

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

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/typeof\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/typeof%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

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