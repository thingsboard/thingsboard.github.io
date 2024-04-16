/*! elementor - v3.19.0 - 07-02-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/dev/js/editor/command-bases/command-container-base.js":
/*!***********************************************************************!*\
  !*** ../assets/dev/js/editor/command-bases/command-container-base.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _commandBase = _interopRequireDefault(__webpack_require__(/*! elementor-api/modules/command-base */ "../modules/web-cli/assets/js/modules/command-base.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @name $e.modules.editor.CommandContainerBase
 */
var CommandContainerBase = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CommandContainerBase, _CommandBase);
  var _super = _createSuper(CommandContainerBase);
  function CommandContainerBase() {
    (0, _classCallCheck2.default)(this, CommandContainerBase);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommandContainerBase, [{
    key: "requireContainer",
    value:
    /**
     * Function requireContainer().
     *
     * Validate `arg.container` & `arg.containers`.
     *
     * @param {{}} args
     *
     * @throws {Error}
     */
    function requireContainer() {
      var _this = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.args;
      if (!args.container && !args.containers) {
        throw Error('container or containers are required.');
      }
      if (args.container && args.containers) {
        throw Error('container and containers cannot go together please select one of them.');
      }
      var containers = args.containers || [args.container];
      containers.forEach(function (container) {
        _this.requireArgumentInstance('container', elementorModules.editor.Container, {
          container: container
        });
      });
    }
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandContainerBase';
    }
  }]);
  return CommandContainerBase;
}(_commandBase.default);
exports["default"] = CommandContainerBase;

/***/ }),

/***/ "../assets/dev/js/editor/command-bases/command-container-internal-base.js":
/*!********************************************************************************!*\
  !*** ../assets/dev/js/editor/command-bases/command-container-internal-base.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _commandContainerBase = _interopRequireDefault(__webpack_require__(/*! ./command-container-base */ "../assets/dev/js/editor/command-bases/command-container-base.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @name $e.modules.editor.CommandContainerInternalBase
 */
var CommandContainerInternalBase = /*#__PURE__*/function (_CommandContainerBase) {
  (0, _inherits2.default)(CommandContainerInternalBase, _CommandContainerBase);
  var _super = _createSuper(CommandContainerInternalBase);
  function CommandContainerInternalBase(args) {
    (0, _classCallCheck2.default)(this, CommandContainerInternalBase);
    return _super.call(this, args, $e.commandsInternal);
  }
  (0, _createClass2.default)(CommandContainerInternalBase, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandContainerInternalBase';
    }
  }]);
  return CommandContainerInternalBase;
}(_commandContainerBase.default);
exports["default"] = CommandContainerInternalBase;

/***/ }),

/***/ "../assets/dev/js/editor/document/command-bases/command-history-base.js":
/*!******************************************************************************!*\
  !*** ../assets/dev/js/editor/document/command-bases/command-history-base.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _commandContainerBase = _interopRequireDefault(__webpack_require__(/*! elementor-editor/command-bases/command-container-base */ "../assets/dev/js/editor/command-bases/command-container-base.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @name $e.modules.editor.document.CommandHistoryBase
 */
var CommandHistoryBase = /*#__PURE__*/function (_CommandContainerBase) {
  (0, _inherits2.default)(CommandHistoryBase, _CommandContainerBase);
  var _super = _createSuper(CommandHistoryBase);
  function CommandHistoryBase() {
    (0, _classCallCheck2.default)(this, CommandHistoryBase);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommandHistoryBase, [{
    key: "initialize",
    value: function initialize() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$options = args.options,
        options = _args$options === void 0 ? {} : _args$options,
        _options$useHistory = options.useHistory,
        useHistory = _options$useHistory === void 0 ? true : _options$useHistory;
      if (useHistory) {
        /**
         * Get History from child command.
         *
         * @type {{}|boolean}
         */
        this.history = this.getHistory(args);

        /**
         * @type {number|boolean}
         */
        this.historyId = false;
      }
    }

    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Function getHistory().
     *
     * Get history object from child, do nothing if it false.
     *
     * @param {*} [args={}]
     *
     * @return {({}|boolean)} history object
     */
  }, {
    key: "getHistory",
    value: function getHistory() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }

    /**
     * Function isHistoryActive().
     *
     * Return `elementor.documents.getCurrent().history.getActive()`.
     *
     * @return {boolean} is history active
     */
  }, {
    key: "isHistoryActive",
    value: function isHistoryActive() {
      return elementor.documents.getCurrent().history.getActive();
    }
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryBase.prototype), "onBeforeRun", this).call(this, args);
      if (this.history && this.isHistoryActive()) {
        this.historyId = $e.internal('document/history/start-log', this.history);
      }
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryBase.prototype), "onAfterRun", this).call(this, args, result);
      if (this.history && this.isHistoryActive()) {
        $e.internal('document/history/end-log', {
          id: this.historyId
        });
      }
    }
  }, {
    key: "onAfterApply",
    value: function onAfterApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryBase.prototype), "onAfterApply", this).call(this, args, result);
      if (this.isDataChanged()) {
        $e.internal('document/save/set-is-modified', {
          status: true
        });
      }
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      // Rollback history on failure.
      if (e instanceof $e.modules.HookBreak && this.historyId) {
        $e.internal('document/history/delete-log', {
          id: this.historyId
        });
      }
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryBase.prototype), "onCatchApply", this).call(this, e);
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      // All the commands who use history are commands that changing the data.
      return true;
    }
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandHistoryBase';
    }
  }]);
  return CommandHistoryBase;
}(_commandContainerBase.default);
exports["default"] = CommandHistoryBase;

/***/ }),

/***/ "../assets/dev/js/editor/document/command-bases/command-history-debounce-base.js":
/*!***************************************************************************************!*\
  !*** ../assets/dev/js/editor/document/command-bases/command-history-debounce-base.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDefaultDebounceDelay = exports["default"] = exports.DEFAULT_DEBOUNCE_DELAY = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _commandHistoryBase = _interopRequireDefault(__webpack_require__(/*! ./command-history-base */ "../assets/dev/js/editor/document/command-bases/command-history-base.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DEFAULT_DEBOUNCE_DELAY = 800;

/**
 * Function getDefaultDebounceDelay().
 *
 * Returns default debounce delay time, if exists in config override.
 *
 * @return {number} default debounce delay time
 */
exports.DEFAULT_DEBOUNCE_DELAY = DEFAULT_DEBOUNCE_DELAY;
var getDefaultDebounceDelay = function getDefaultDebounceDelay() {
  var result = DEFAULT_DEBOUNCE_DELAY;
  if (elementor.config.document && undefined !== elementor.config.document.debounceDelay) {
    result = elementor.config.document.debounceDelay;
  }
  return result;
};

/**
 * @name $e.modules.editor.document.CommandHistoryDebounceBase
 */
exports.getDefaultDebounceDelay = getDefaultDebounceDelay;
var CommandHistoryDebounceBase = /*#__PURE__*/function (_CommandHistoryBase) {
  (0, _inherits2.default)(CommandHistoryDebounceBase, _CommandHistoryBase);
  var _super = _createSuper(CommandHistoryDebounceBase);
  function CommandHistoryDebounceBase() {
    (0, _classCallCheck2.default)(this, CommandHistoryDebounceBase);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommandHistoryDebounceBase, [{
    key: "initialize",
    value: function initialize(args) {
      var _args$options = args.options,
        options = _args$options === void 0 ? {} : _args$options;
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryDebounceBase.prototype), "initialize", this).call(this, args);
      if (!this.constructor.debounce) {
        this.constructor.debounce = _.debounce(function (fn) {
          return fn();
        }, getDefaultDebounceDelay());
      }

      // If its head command, and not called within another command.
      if (1 === $e.commands.currentTrace.length || options.debounce) {
        this.isDebounceRequired = true;
      }
    }
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      $e.modules.CommandBase.prototype.onBeforeRun.call(this, args);
      if (this.history && this.isHistoryActive()) {
        $e.internal('document/history/add-transaction', this.history);
      }
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      $e.modules.CommandBase.prototype.onAfterRun.call(this, args, result);
      if (this.isHistoryActive()) {
        if (this.isDebounceRequired) {
          this.constructor.debounce(function () {
            return $e.internal('document/history/end-transaction');
          });
        } else {
          $e.internal('document/history/end-transaction');
        }
      }
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      $e.modules.CommandBase.prototype.onCatchApply.call(this, e);

      // Rollback history on failure.
      if (e instanceof $e.modules.HookBreak && this.history) {
        if (this.isDebounceRequired) {
          // `clear-transaction` is under debounce, because it should `clear-transaction` after `end-transaction`.
          this.constructor.debounce(function () {
            return $e.internal('document/history/clear-transaction');
          });
        } else {
          $e.internal('document/history/clear-transaction');
        }
      }
    }
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandHistoryDebounceBase';
    }
  }]);
  return CommandHistoryDebounceBase;
}(_commandHistoryBase.default);
exports["default"] = CommandHistoryDebounceBase;
/**
 * Function debounce().
 *
 * Will debounce every function you pass in, at the same debounce flow.
 *
 * @param {Function}
 */
(0, _defineProperty2.default)(CommandHistoryDebounceBase, "debounce", undefined);

/***/ }),

/***/ "../assets/dev/js/editor/utils/is-instanceof.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/editor/utils/is-instanceof.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
 * object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
 * check whether it's instanceof by using the objects constructor and prototype names.
 *
 * @param  object
 * @param  constructors
 * @return {boolean}
 */
var _default = function _default(object, constructors) {
  constructors = Array.isArray(constructors) ? constructors : [constructors];
  var _iterator = _createForOfIteratorHelper(constructors),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _constructor = _step.value;
      if (object.constructor.name === _constructor.prototype[Symbol.toStringTag]) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
};
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/modules/imports/args-object.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/modules/imports/args-object.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _instanceType = _interopRequireDefault(__webpack_require__(/*! ./instance-type */ "../assets/dev/js/modules/imports/instance-type.js"));
var _isInstanceof = _interopRequireDefault(__webpack_require__(/*! ../../editor/utils/is-instanceof */ "../assets/dev/js/editor/utils/is-instanceof.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ArgsObject = /*#__PURE__*/function (_InstanceType) {
  (0, _inherits2.default)(ArgsObject, _InstanceType);
  var _super = _createSuper(ArgsObject);
  /**
   * Function constructor().
   *
   * Create ArgsObject.
   *
   * @param {{}} args
   */
  function ArgsObject(args) {
    var _this;
    (0, _classCallCheck2.default)(this, ArgsObject);
    _this = _super.call(this);
    _this.args = args;
    return _this;
  }

  /**
   * Function requireArgument().
   *
   * Validate property in args.
   *
   * @param {string} property
   * @param {{}}     args
   *
   * @throws {Error}
   *
   */
  (0, _createClass2.default)(ArgsObject, [{
    key: "requireArgument",
    value: function requireArgument(property) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.args;
      if (!Object.prototype.hasOwnProperty.call(args, property)) {
        throw Error("".concat(property, " is required."));
      }
    }

    /**
     * Function requireArgumentType().
     *
     * Validate property in args using `type === typeof(args.whatever)`.
     *
     * @param {string} property
     * @param {string} type
     * @param {{}}     args
     *
     * @throws {Error}
     *
     */
  }, {
    key: "requireArgumentType",
    value: function requireArgumentType(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);
      if ((0, _typeof2.default)(args[property]) !== type) {
        throw Error("".concat(property, " invalid type: ").concat(type, "."));
      }
    }

    /**
     * Function requireArgumentInstance().
     *
     * Validate property in args using `args.whatever instanceof instance`.
     *
     * @param {string} property
     * @param {*}      instance
     * @param {{}}     args
     *
     * @throws {Error}
     *
     */
  }, {
    key: "requireArgumentInstance",
    value: function requireArgumentInstance(property, instance) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);
      if (!(args[property] instanceof instance) && !(0, _isInstanceof.default)(args[property], instance)) {
        throw Error("".concat(property, " invalid instance."));
      }
    }

    /**
     * Function requireArgumentConstructor().
     *
     * Validate property in args using `type === args.whatever.constructor`.
     *
     * @param {string} property
     * @param {*}      type
     * @param {{}}     args
     *
     * @throws {Error}
     *
     */
  }, {
    key: "requireArgumentConstructor",
    value: function requireArgumentConstructor(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      // Note: Converting the constructor to string in order to avoid equation issues
      // due to different memory addresses between iframes (window.Object !== window.top.Object).
      if (args[property].constructor.toString() !== type.prototype.constructor.toString()) {
        throw Error("".concat(property, " invalid constructor type."));
      }
    }
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'ArgsObject';
    }
  }]);
  return ArgsObject;
}(_instanceType.default);
exports["default"] = ArgsObject;

/***/ }),

/***/ "../assets/dev/js/modules/imports/instance-type.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/modules/imports/instance-type.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var InstanceType = /*#__PURE__*/function (_Symbol$hasInstance) {
  function InstanceType() {
    var _this = this;
    (0, _classCallCheck2.default)(this, InstanceType);
    // Since anonymous classes sometimes do not get validated by babel, do it manually.
    var target = this instanceof InstanceType ? this.constructor : void 0;
    var prototypes = [];
    while (target.__proto__ && target.__proto__.name) {
      prototypes.push(target.__proto__);
      target = target.__proto__;
    }
    prototypes.reverse().forEach(function (proto) {
      return _this instanceof proto;
    });
  }
  (0, _createClass2.default)(InstanceType, null, [{
    key: _Symbol$hasInstance,
    value: function value(target) {
      /**
       * This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
       * its give's opportunity to mange capabilities of instanceOf operator.
       * saving current class each time will give option later to handle instanceOf manually.
       */
      var result = (0, _get2.default)((0, _getPrototypeOf2.default)(InstanceType), Symbol.hasInstance, this).call(this, target);

      // Act normal when validate a class, which does not have instance type.
      if (target && !target.constructor.getInstanceType) {
        return result;
      }
      if (target) {
        if (!target.instanceTypes) {
          target.instanceTypes = [];
        }
        if (!result) {
          if (this.getInstanceType() === target.constructor.getInstanceType()) {
            result = true;
          }
        }
        if (result) {
          var name = this.getInstanceType === InstanceType.getInstanceType ? 'BaseInstanceType' : this.getInstanceType();
          if (-1 === target.instanceTypes.indexOf(name)) {
            target.instanceTypes.push(name);
          }
        }
      }
      if (!result && target) {
        // Check if the given 'target', is instance of known types.
        result = target.instanceTypes && Array.isArray(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
      }
      return result;
    }
  }, {
    key: "getInstanceType",
    value: function getInstanceType() {
      elementorModules.ForceMethodImplementation();
    }
  }]);
  return InstanceType;
}(Symbol.hasInstance);
exports["default"] = InstanceType;

/***/ }),

/***/ "../modules/web-cli/assets/js/modules/command-base.js":
/*!************************************************************!*\
  !*** ../modules/web-cli/assets/js/modules/command-base.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _commandInfra = _interopRequireDefault(__webpack_require__(/*! ./command-infra */ "../modules/web-cli/assets/js/modules/command-infra.js"));
var _deprecation = _interopRequireDefault(__webpack_require__(/*! elementor-api/utils/deprecation */ "../modules/web-cli/assets/js/utils/deprecation.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @name $e.modules.CommandBase
 */
var CommandBase = /*#__PURE__*/function (_CommandInfra) {
  (0, _inherits2.default)(CommandBase, _CommandInfra);
  var _super = _createSuper(CommandBase);
  function CommandBase() {
    (0, _classCallCheck2.default)(this, CommandBase);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(CommandBase, [{
    key: "onBeforeRun",
    value: function onBeforeRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      $e.hooks.runUIBefore(this.command, args);
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      $e.hooks.runUIAfter(this.command, args, result);
    }
  }, {
    key: "onBeforeApply",
    value: function onBeforeApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      $e.hooks.runDataDependency(this.command, args);
    }
  }, {
    key: "onAfterApply",
    value: function onAfterApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      $e.hooks.runDataAfter(this.command, args, result);
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      this.runCatchHooks(e);
    }

    /**
     * Run all the catch hooks.
     *
     * @param {Error} e
     */
  }, {
    key: "runCatchHooks",
    value: function runCatchHooks(e) {
      $e.hooks.runDataCatch(this.command, this.args, e);
      $e.hooks.runUICatch(this.command, this.args, e);
    }

    /**
     * TODO - Remove - Backwards compatibility.
     *
     * Function requireContainer().
     *
     * Validate `arg.container` & `arg.containers`.
     *
     * @param {{}} args
     * @deprecated since 3.7.0, extend `$e.modules.editor.CommandContainerBase` or `$e.modules.editor.CommandContainerInternalBase` instead.
     *
     * @throws {Error}
     */
  }, {
    key: "requireContainer",
    value: function requireContainer() {
      var _this = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.args;
      _deprecation.default.deprecated('requireContainer()', '3.7.0', 'Extend `$e.modules.editor.CommandContainerBase` or `$e.modules.editor.CommandContainerInternalBase`');
      if (!args.container && !args.containers) {
        throw Error('container or containers are required.');
      }
      if (args.container && args.containers) {
        throw Error('container and containers cannot go together please select one of them.');
      }
      var containers = args.containers || [args.container];
      containers.forEach(function (container) {
        _this.requireArgumentInstance('container', elementorModules.editor.Container, {
          container: container
        });
      });
    }
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandBase';
    }
  }]);
  return CommandBase;
}(_commandInfra.default);
exports["default"] = CommandBase;

/***/ }),

/***/ "../modules/web-cli/assets/js/modules/command-infra.js":
/*!*************************************************************!*\
  !*** ../modules/web-cli/assets/js/modules/command-infra.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _argsObject = _interopRequireDefault(__webpack_require__(/*! elementor-assets-js/modules/imports/args-object */ "../assets/dev/js/modules/imports/args-object.js"));
var _deprecation = _interopRequireDefault(__webpack_require__(/*! elementor-api/utils/deprecation */ "../modules/web-cli/assets/js/utils/deprecation.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @typedef {import('../modules/component-base')} ComponentBase
 */
var CommandInfra = /*#__PURE__*/function (_ArgsObject) {
  (0, _inherits2.default)(CommandInfra, _ArgsObject);
  var _super = _createSuper(CommandInfra);
  /**
   * Function constructor().
   *
   * Create Commands Base.
   *
   * @param {{}} args
   */
  function CommandInfra() {
    var _this;
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, CommandInfra);
    _this = _super.call(this, args);
    if (!_this.constructor.registerConfig) {
      throw RangeError('Doing it wrong: Each command type should have `registerConfig`.');
    }

    // Acknowledge self about which command it run.
    _this.command = _this.constructor.getCommand();

    // Assign instance of current component.
    _this.component = _this.constructor.getComponent();

    // Who ever need do something before without `super` the constructor can use `initialize` method.
    _this.initialize(args);

    // Refresh args, maybe the changed via `initialize`.
    args = _this.args;

    // Validate args before run.
    _this.validateArgs(args);
    return _this;
  }

  /**
   * Function initialize().
   *
   * Initialize command, called after construction.
   *
   * @param {{}} args
   */
  (0, _createClass2.default)(CommandInfra, [{
    key: "currentCommand",
    get:
    /**
     * @deprecated since 3.7.0, use `this.command` instead.
     */
    function get() {
      _deprecation.default.deprecated('this.currentCommand', '3.7.0', 'this.command');
      return this.command;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function validateArgs().
     *
     * Validate command arguments.
     *
     * @param {{}} args
     */
  }, {
    key: "validateArgs",
    value: function validateArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Function apply().
     *
     * Do the actual command.
     *
     * @param {{}} args
     *
     * @return {*} Command results.
     */
  }, {
    key: "apply",
    value: function apply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }

    /**
     * Function run().
     *
     * Run command with history & hooks.
     *
     * @return {*} Command results.
     */
  }, {
    key: "run",
    value: function run() {
      return this.apply(this.args);
    }

    /**
     * Function onBeforeRun.
     *
     * Called before run().
     *
     * @param {{}} args
     */
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function onAfterRun.
     *
     * Called after run().
     *
     * @param {{}} args
     * @param {*}  result
     */
  }, {
    key: "onAfterRun",
    value: function onAfterRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
    } // eslint-disable-line no-unused-vars

    /**
     * Function onBeforeApply.
     *
     * Called before apply().
     *
     * @param {{}} args
     */
  }, {
    key: "onBeforeApply",
    value: function onBeforeApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function onAfterApply.
     *
     * Called after apply().
     *
     * @param {{}} args
     * @param {*}  result
     */
  }, {
    key: "onAfterApply",
    value: function onAfterApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
    } // eslint-disable-line no-unused-vars

    /**
     * Function onCatchApply.
     *
     * Called after apply() failed.
     *
     * @param {Error} e
     */
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {} // eslint-disable-line no-unused-vars
  }], [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandInfra';
    }

    /**
     * Get info of command.
     *
     * @return {Object} Extra information about the command.
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      return {};
    }

    /**
     * @return {string} Self command name.
     */
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.registerConfig.command;
    }

    /**
     * @return {ComponentBase} Self component
     */
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.registerConfig.component;
    }
  }, {
    key: "setRegisterConfig",
    value: function setRegisterConfig(config) {
      this.registerConfig = Object.freeze(config);
    }
  }]);
  return CommandInfra;
}(_argsObject.default);
exports["default"] = CommandInfra;
/**
 * @type {Object}
 */
(0, _defineProperty2.default)(CommandInfra, "registerConfig", null);

/***/ }),

/***/ "../modules/web-cli/assets/js/utils/console.js":
/*!*****************************************************!*\
  !*** ../modules/web-cli/assets/js/utils/console.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var Console = /*#__PURE__*/function () {
  function Console() {
    (0, _classCallCheck2.default)(this, Console);
  }
  (0, _createClass2.default)(Console, null, [{
    key: "error",
    value: function error(message) {
      // Show an error if devTools is available.
      if ($e.devTools) {
        $e.devTools.log.error(message);
      }

      // If not a 'Hook-Break' then show error.
      if (!(message instanceof $e.modules.HookBreak)) {
        // eslint-disable-next-line no-console
        console.error(message);
      }
    }
  }, {
    key: "warn",
    value: function warn() {
      var _console;
      var style = "font-size: 12px; background-image: url(\"".concat(elementorWebCliConfig.urls.assets, "images/logo-icon.png\"); background-repeat: no-repeat; background-size: contain;");
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.unshift('%c  %c', style, '');
      (_console = console).warn.apply(_console, args); // eslint-disable-line no-console
    }
  }]);
  return Console;
}();
exports["default"] = Console;

/***/ }),

/***/ "../modules/web-cli/assets/js/utils/deprecation.js":
/*!*********************************************************!*\
  !*** ../modules/web-cli/assets/js/utils/deprecation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _console = _interopRequireDefault(__webpack_require__(/*! elementor-api/utils/console */ "../modules/web-cli/assets/js/utils/console.js"));
// Copied from `modules/dev-tools/assets/js/deprecation.js`
/**
 * @typedef {Object} Version
 * @property {number} major1 The first number
 * @property {number} major2 The second number
 * @property {number} minor  The third number
 * @property {string} build  The fourth number
 */
var softDeprecated = function softDeprecated(name, version, replacement) {
  if (elementorWebCliConfig.isDebug) {
    deprecatedMessage('soft', name, version, replacement);
  }
};
var hardDeprecated = function hardDeprecated(name, version, replacement) {
  deprecatedMessage('hard', name, version, replacement);
};
var deprecatedMessage = function deprecatedMessage(type, name, version, replacement) {
  var message = "`".concat(name, "` is ").concat(type, " deprecated since ").concat(version);
  if (replacement) {
    message += " - Use `".concat(replacement, "` instead");
  }
  _console.default.warn(message);
};
var Deprecation = /*#__PURE__*/function () {
  function Deprecation() {
    (0, _classCallCheck2.default)(this, Deprecation);
  }
  (0, _createClass2.default)(Deprecation, null, [{
    key: "deprecated",
    value: function deprecated(name, version, replacement) {
      if (this.isHardDeprecated(version)) {
        hardDeprecated(name, version, replacement);
      } else {
        softDeprecated(name, version, replacement);
      }
    }

    /**
     * @param {string} version
     *
     * @return {Version}
     */
  }, {
    key: "parseVersion",
    value: function parseVersion(version) {
      var versionParts = version.split('.');
      if (versionParts.length < 3 || versionParts.length > 4) {
        throw new RangeError('Invalid Semantic Version string provided');
      }
      var _versionParts = (0, _slicedToArray2.default)(versionParts, 4),
        major1 = _versionParts[0],
        major2 = _versionParts[1],
        minor = _versionParts[2],
        _versionParts$ = _versionParts[3],
        build = _versionParts$ === void 0 ? '' : _versionParts$;
      return {
        major1: parseInt(major1),
        major2: parseInt(major2),
        minor: parseInt(minor),
        build: build
      };
    }

    /**
     * Get total of major.
     *
     * Since `get_total_major` cannot determine how much really versions between 2.9.0 and 3.3.0 if there is 2.10.0 version for example,
     * versions with major2 more then 9 will be added to total.
     *
     * @param {Version} versionObj
     *
     * @return {number}
     */
  }, {
    key: "getTotalMajor",
    value: function getTotalMajor(versionObj) {
      var total = parseInt("".concat(versionObj.major1).concat(versionObj.major2, "0"));
      total = Number((total / 10).toFixed(0));
      if (versionObj.major2 > 9) {
        total = versionObj.major2 - 9;
      }
      return total;
    }

    /**
     * @param {string} version1
     * @param {string} version2
     *
     * @return {number}
     */
  }, {
    key: "compareVersion",
    value: function compareVersion(version1, version2) {
      var _this = this;
      return [this.parseVersion(version1), this.parseVersion(version2)].map(function (versionObj) {
        return _this.getTotalMajor(versionObj);
      }).reduce(function (acc, major) {
        return acc - major;
      });
    }

    /**
     * @param {string} version
     *
     * @return {boolean}
     */
  }, {
    key: "isSoftDeprecated",
    value: function isSoftDeprecated(version) {
      var total = this.compareVersion(version, elementorWebCliConfig.version);
      return total <= 4;
    }

    /**
     * @param {string} version
     * @return {boolean}
     */
  }, {
    key: "isHardDeprecated",
    value: function isHardDeprecated(version) {
      var total = this.compareVersion(version, elementorWebCliConfig.version);
      return total < 0 || total >= 8;
    }
  }]);
  return Deprecation;
}();
exports["default"] = Deprecation;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/get.js":
/*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/get.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "../node_modules/@babel/runtime/helpers/superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/superPropBase.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************************!*\
  !*** ../assets/dev/js/editor/editor-document.js ***!
  \**************************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _commandContainerBase = _interopRequireDefault(__webpack_require__(/*! ./command-bases/command-container-base */ "../assets/dev/js/editor/command-bases/command-container-base.js"));
var _commandContainerInternalBase = _interopRequireDefault(__webpack_require__(/*! ./command-bases/command-container-internal-base */ "../assets/dev/js/editor/command-bases/command-container-internal-base.js"));
var _commandHistoryBase = _interopRequireDefault(__webpack_require__(/*! elementor-document/command-bases/command-history-base */ "../assets/dev/js/editor/document/command-bases/command-history-base.js"));
var _commandHistoryDebounceBase = _interopRequireDefault(__webpack_require__(/*! elementor-document/command-bases/command-history-debounce-base */ "../assets/dev/js/editor/document/command-bases/command-history-debounce-base.js"));
$e.modules.editor = {
  CommandContainerBase: _commandContainerBase.default,
  CommandContainerInternalBase: _commandContainerInternalBase.default,
  document: {
    CommandHistoryBase: _commandHistoryBase.default,
    CommandHistoryDebounceBase: _commandHistoryDebounceBase.default
  }
};

// TODO: Remove, BC.
$e.modules.document = {
  /**
   * @deprecated since 3.7.0, use `$e.modules.editor.document.CommandHistoryBase` instead.
   */
  get CommandHistory() {
    elementorDevTools.deprecation.deprecated('$e.modules.document.CommandHistory', '3.7.0', '$e.modules.editor.document.CommandHistoryBase');
    return $e.modules.editor.document.CommandHistoryBase;
  },
  /**
   * @deprecated since 3.7.0, use `$e.modules.editor.document.CommandHistoryDebounceBase` instead.
   */
  get CommandHistoryDebounce() {
    elementorDevTools.deprecation.deprecated('$e.modules.CommandHistoryDebounce', '3.7.0', '$e.modules.editor.document.CommandHistoryDebounceBase');
    return $e.modules.editor.document.CommandHistoryDebounceBase;
  }
};
})();

/******/ })()
;
//# sourceMappingURL=editor-document.js.map