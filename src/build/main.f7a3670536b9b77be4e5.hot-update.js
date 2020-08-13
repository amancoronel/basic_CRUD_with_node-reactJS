webpackHotUpdate("main",{

/***/ "./src/js/crudForm.js":
/*!****************************!*\
  !*** ./src/js/crudForm.js ***!
  \****************************/
/*! exports provided: crudForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crudForm\", function() { return crudForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar crudForm = /*#__PURE__*/function (_Component) {\n  _inherits(crudForm, _Component);\n\n  var _super = _createSuper(crudForm);\n\n  function crudForm() {\n    var _this;\n\n    _classCallCheck(this, crudForm);\n\n    _this = _super.call(this);\n    _this.state = {\n      playerlist: [],\n      modalOpen: false,\n      action: 0,\n      activeData: '',\n      newPlayer: {\n        name: ''\n      }\n    };\n    _this.addNewPlayer = _this.addNewPlayer.bind(_assertThisInitialized(_this));\n    _this.editPlayer = _this.editPlayer.bind(_assertThisInitialized(_this));\n    _this.deletePlayer = _this.deletePlayer.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(crudForm, [{\n    key: \"addNewPlayer\",\n    value: function addNewPlayer() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"POST\",\n        url: \"addPlayers\",\n        data: {\n          content: this.state.newPlayer.name\n        }\n      }).then(function (response) {\n        return _this2.setState({\n          playerlist: response.data\n        });\n      });\n    }\n  }, {\n    key: \"editPlayer\",\n    value: function editPlayer(data) {\n      var _this3 = this;\n\n      console.log(\"***\", data);\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"PUT\",\n        url: \"/updatePlayers\",\n        data: data\n      }).then(function (response) {\n        return _this3.setState({\n          playerlist: response.data\n        });\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n      this.changeAction(0, '');\n    }\n  }, {\n    key: \"deletePlayer\",\n    value: function deletePlayer() {\n      var _this4 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"DELETE\",\n        url: \"/deletePlayers\",\n        data: {\n          id: this.state.activeData.id\n        }\n      }).then(function (response) {\n        return _this4.setState({\n          playerlist: response.data\n        });\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n      this.openModal('');\n    }\n  }, {\n    key: \"changeAction\",\n    value: function changeAction(action, data) {\n      var activeData = _objectSpread({}, data);\n\n      this.setState({\n        action: action,\n        activeData: activeData\n      });\n    }\n  }, {\n    key: \"openModal\",\n    value: function openModal(activeData) {\n      var modalOpen = !this.state.modalOpen;\n      this.setState({\n        modalOpen: modalOpen,\n        activeData: activeData\n      });\n    }\n  }, {\n    key: \"handleOnchange\",\n    value: function handleOnchange(e) {\n      this.state[e.target.name].name = e.target.value;\n      this.setState(_defineProperty({}, e.target.name, this.state[e.target.name]));\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this5 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"GET\",\n        url: \"/getPlayers\"\n      }).then(function (response) {\n        return _this5.setState({\n          playerlist: response.data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this6 = this,\n          _this$state$playerlis;\n\n      var title = this.state.action === 1 ? \"Edit Player\" : \"Add Player\";\n      var property = this.state.action === 1 ? this.state.activeData.name : this.state.newPlayer.name;\n      var name = this.state.action === 1 ? \"activeData\" : \"newPlayer\";\n      var actionButton = this.state.action == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"primary\",\n        onClick: function onClick(e) {\n          return _this6.editPlayer(_this6.state.activeData);\n        }\n      }, \"Save Changes\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        variant: \"success\",\n        onClick: function onClick(e) {\n          return _this6.addNewPlayer();\n        }\n      }, \"Add\");\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        show: this.state.modalOpen,\n        openModal: function openModal(e) {\n          return _this6.openModal.bind(_this6);\n        },\n        deletePlayer: function deletePlayer(e) {\n          return _this6.deletePlayer.bind(_this6);\n        },\n        data: this.state.activeData\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"box-shadow\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        body: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Title, {\n        className: \"text-center\"\n      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Nameee : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        value: property,\n        name: name,\n        onChange: function onChange(e) {\n          return _this6.handleOnchange(e);\n        }\n      }), '', actionButton)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"box-shadow\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        body: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Title, {\n        className: \"text-center\"\n      }, \"Players List\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        responsive: true,\n        bordered: true,\n        striped: true,\n        hover: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"ID\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Nameeee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Actions\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, (_this$state$playerlis = this.state.playerlist) === null || _this$state$playerlis === void 0 ? void 0 : _this$state$playerlis.map(function (player) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          key: player.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, player.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, player.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          variant: \"primary\",\n          onClick: function onClick(e) {\n            return _this6.changeAction(1, player);\n          }\n        }, \"Edit\"), \" \", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          variant: \"danger\",\n          onClick: function onClick(e) {\n            return _this6.openModal(player);\n          }\n        }, \"Delete\"), \" \", ' '));\n      })))))));\n    }\n  }]);\n\n  return crudForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (crudForm);\n\n//# sourceURL=webpack:///./src/js/crudForm.js?");

/***/ })

})