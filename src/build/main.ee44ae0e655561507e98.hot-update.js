webpackHotUpdate("main",{

/***/ "./src/js/class/auth.js":
/*!******************************!*\
  !*** ./src/js/class/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Auth = /*#__PURE__*/function () {\n  function Auth() {\n    _classCallCheck(this, Auth);\n\n    this.authenticated = false;\n  }\n\n  _createClass(Auth, [{\n    key: \"login\",\n    value: function login(cb) {\n      this.authenticated = true;\n      cb();\n    }\n  }, {\n    key: \"logout\",\n    value: function logout(cb) {\n      this.authenticated = false;\n      cb();\n    }\n  }, {\n    key: \"isAuthenticated\",\n    value: function isAuthenticated() {\n      return this.authenticated;\n    }\n  }]);\n\n  return Auth;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Auth());\n\n//# sourceURL=webpack:///./src/js/class/auth.js?");

/***/ })

})