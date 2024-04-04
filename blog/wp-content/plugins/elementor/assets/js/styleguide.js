/*! elementor - v3.19.0 - 07-02-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/dev/js/editor/components/dynamic-tags/control-behavior.js":
/*!***************************************************************************!*\
  !*** ../assets/dev/js/editor/components/dynamic-tags/control-behavior.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var TagPanelView = __webpack_require__(/*! elementor-dynamic-tags/tag-panel-view */ "../assets/dev/js/editor/components/dynamic-tags/tag-panel-view.js");
module.exports = Marionette.Behavior.extend({
  tagView: null,
  listenerAttached: false,
  initialize: function initialize() {
    if (!this.listenerAttached) {
      this.listenTo(this.view.options.container.settings, 'change:external:__dynamic__', this.onAfterExternalChange);
      this.listenerAttached = true;
    }
  },
  shouldRenderTools: function shouldRenderTools() {
    var hasDefault = this.getOption('dynamicSettings').default;
    if (hasDefault) {
      return false;
    }
    var isFeatureAvalibleToUser = elementor.helpers.hasPro() && !elementor.helpers.hasProAndNotConnected(),
      hasTags = this.getOption('tags').length > 0;
    return !isFeatureAvalibleToUser || hasTags;
  },
  renderTools: function renderTools() {
    var _this = this;
    if (!this.shouldRenderTools()) {
      return;
    }
    var $dynamicSwitcher = jQuery(Marionette.Renderer.render('#tmpl-elementor-control-dynamic-switcher'));
    $dynamicSwitcher.on('click', function (event) {
      return _this.onDynamicSwitcherClick(event);
    });
    this.$el.find('.elementor-control-dynamic-switcher-wrapper').append($dynamicSwitcher);
    this.ui.dynamicSwitcher = $dynamicSwitcher;
    if ('color' === this.view.model.get('type')) {
      if (this.view.colorPicker) {
        this.moveDynamicSwitcherToColorPicker();
      } else {
        setTimeout(function () {
          return _this.moveDynamicSwitcherToColorPicker();
        });
      }
    }

    // Add a Tipsy Tooltip to the Dynamic Switcher
    this.ui.dynamicSwitcher.tipsy({
      title: function title() {
        return this.getAttribute('data-tooltip');
      },
      gravity: 's'
    });
  },
  moveDynamicSwitcherToColorPicker: function moveDynamicSwitcherToColorPicker() {
    var $colorPickerToolsContainer = this.view.colorPicker.$pickerToolsContainer;
    this.ui.dynamicSwitcher.removeClass('elementor-control-unit-1').addClass('e-control-tool');
    var $eyedropper = $colorPickerToolsContainer.find('.elementor-control-element-color-picker');
    if ($eyedropper.length) {
      this.ui.dynamicSwitcher.insertBefore($eyedropper);
    } else {
      $colorPickerToolsContainer.append(this.ui.dynamicSwitcher);
    }
  },
  toggleDynamicClass: function toggleDynamicClass() {
    this.$el.toggleClass('elementor-control-dynamic-value', this.isDynamicMode());
  },
  isDynamicMode: function isDynamicMode() {
    var dynamicSettings = this.view.container.settings.get('__dynamic__');
    return !!(dynamicSettings && dynamicSettings[this.view.model.get('name')]);
  },
  createTagsList: function createTagsList() {
    var tags = _.groupBy(this.getOption('tags'), 'group'),
      groups = elementor.dynamicTags.getConfig('groups'),
      $tagsList = this.ui.tagsList = jQuery('<div>', {
        class: 'elementor-tags-list'
      }),
      $tagsListInner = jQuery('<div>', {
        class: 'elementor-tags-list__inner'
      });
    $tagsList.append($tagsListInner);
    jQuery.each(groups, function (groupName) {
      var groupTags = tags[groupName];
      if (!groupTags) {
        return;
      }
      var group = this,
        $groupTitle = jQuery('<div>', {
          class: 'elementor-tags-list__group-title'
        }).text(group.title);
      $tagsListInner.append($groupTitle);
      groupTags.forEach(function (tag) {
        var $tag = jQuery('<div>', {
          class: 'elementor-tags-list__item'
        });
        $tag.text(tag.title).attr('data-tag-name', tag.name);
        $tagsListInner.append($tag);
      });
    });

    // Create and inject pro dynamic teaser template if Pro is not installed
    if (!elementor.helpers.hasPro() && Object.keys(tags).length) {
      var proTeaser = Marionette.Renderer.render('#tmpl-elementor-dynamic-tags-promo', {
        promotionUrl: elementor.config.dynamicPromotionURL.replace('%s', this.view.model.get('name'))
      });
      $tagsListInner.append(proTeaser);
    }
    $tagsListInner.on('click', '.elementor-tags-list__item', this.onTagsListItemClick.bind(this));
    elementorCommon.elements.$body.append($tagsList);
  },
  getTagsList: function getTagsList() {
    if (!this.ui.tagsList) {
      this.createTagsList();
    }
    return this.ui.tagsList;
  },
  toggleTagsList: function toggleTagsList() {
    var $tagsList = this.getTagsList();
    if ($tagsList.is(':visible')) {
      $tagsList.hide();
      return;
    }
    var direction = elementorCommon.config.isRTL ? 'left' : 'right';
    $tagsList.show().position({
      my: "".concat(direction, " top"),
      at: "".concat(direction, " bottom+5"),
      of: this.ui.dynamicSwitcher
    });
  },
  setTagView: function setTagView(id, name, settings) {
    if (this.tagView) {
      this.tagView.destroy();
    }
    var tagView = this.tagView = new TagPanelView({
        id: id,
        name: name,
        settings: settings,
        controlName: this.view.model.get('name'),
        dynamicSettings: this.getOption('dynamicSettings')
      }),
      elementContainer = this.view.options.container,
      tagViewLabel = elementContainer.controls[tagView.options.controlName].label;
    tagView.options.container = new elementorModules.editor.Container({
      type: 'dynamic',
      id: id,
      model: tagView.model,
      settings: tagView.model,
      view: tagView,
      parent: elementContainer,
      label: elementContainer.label + ' ' + tagViewLabel,
      controls: tagView.model.options.controls,
      renderer: elementContainer
    });
    tagView.render();
    this.$el.find('.elementor-control-tag-area').after(tagView.el);
    this.listenTo(tagView, 'remove', this.onTagViewRemove.bind(this));
  },
  setDefaultTagView: function setDefaultTagView() {
    var tagData = elementor.dynamicTags.tagTextToTagData(this.getDynamicValue());
    this.setTagView(tagData.id, tagData.name, tagData.settings);
  },
  tagViewToTagText: function tagViewToTagText() {
    var tagView = this.tagView;
    return elementor.dynamicTags.tagDataToTagText(tagView.getOption('id'), tagView.getOption('name'), tagView.model);
  },
  getDynamicValue: function getDynamicValue() {
    return this.view.container.dynamic.get(this.view.model.get('name'));
  },
  destroyTagView: function destroyTagView() {
    if (this.tagView) {
      this.tagView.destroy();
      this.tagView = null;
    }
  },
  showPromotion: function showPromotion() {
    var hasProAndNotConnected = elementor.helpers.hasProAndNotConnected(),
      dialogOptions = {
        title: __('Dynamic Content', 'elementor'),
        content: __('Create more personalized and dynamic sites by populating data from various sources with dozens of dynamic tags to choose from.', 'elementor'),
        targetElement: this.ui.dynamicSwitcher,
        position: {
          blockStart: '-10'
        },
        actionButton: {
          url: hasProAndNotConnected ? elementorProEditorConfig.urls.connect : elementor.config.dynamicPromotionURL.replace('%s', this.view.model.get('name')),
          text: hasProAndNotConnected ? __('Connect & Activate', 'elementor') : __('Upgrade', 'elementor')
        }
      };
    elementor.promotion.showDialog(dialogOptions);
  },
  onRender: function onRender() {
    this.$el.addClass('elementor-control-dynamic');
    this.renderTools();
    this.toggleDynamicClass();
    if (this.isDynamicMode()) {
      this.setDefaultTagView();
    }
  },
  onDynamicSwitcherClick: function onDynamicSwitcherClick(event) {
    event.stopPropagation();
    if (this.getOption('tags').length) {
      this.toggleTagsList();
    } else {
      this.showPromotion();
    }
  },
  onTagsListItemClick: function onTagsListItemClick(event) {
    var $tag = jQuery(event.currentTarget);
    this.setTagView(elementorCommon.helpers.getUniqueId(), $tag.data('tagName'), {});

    // If an element has an active global value, disable it before applying the dynamic value.
    if (this.view.getGlobalKey()) {
      this.view.triggerMethod('unset:global:value');
    }
    if (this.isDynamicMode()) {
      $e.run('document/dynamic/settings', {
        container: this.view.options.container,
        settings: (0, _defineProperty2.default)({}, this.view.model.get('name'), this.tagViewToTagText())
      });
    } else {
      $e.run('document/dynamic/enable', {
        container: this.view.options.container,
        settings: (0, _defineProperty2.default)({}, this.view.model.get('name'), this.tagViewToTagText())
      });
    }
    this.toggleDynamicClass();
    this.toggleTagsList();
    if (this.tagView.getTagConfig().settings_required) {
      this.tagView.showSettingsPopup();
    }
  },
  onTagViewRemove: function onTagViewRemove() {
    $e.run('document/dynamic/disable', {
      container: this.view.options.container,
      settings: (0, _defineProperty2.default)({}, this.view.model.get('name'), this.tagViewToTagText())
    });
    this.toggleDynamicClass();
  },
  onAfterExternalChange: function onAfterExternalChange() {
    this.destroyTagView();
    if (this.isDynamicMode()) {
      this.setDefaultTagView();
    }
    this.toggleDynamicClass();
  },
  onDestroy: function onDestroy() {
    this.destroyTagView();
    if (this.ui.tagsList) {
      this.ui.tagsList.remove();
    }
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack-empty.js":
/*!***********************************************************************************!*\
  !*** ../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack-empty.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Marionette.ItemView.extend({
  className: 'elementor-tag-controls-stack-empty',
  template: '#tmpl-elementor-tag-controls-stack-empty'
});

/***/ }),

/***/ "../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack.js":
/*!*****************************************************************************!*\
  !*** ../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var EmptyView = __webpack_require__(/*! elementor-dynamic-tags/tag-controls-stack-empty */ "../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack-empty.js");
module.exports = elementorModules.editor.views.ControlsStack.extend({
  activeTab: 'content',
  template: _.noop,
  emptyView: EmptyView,
  isEmpty: function isEmpty() {
    // Ignore the section control
    return this.collection.length < 2;
  },
  childViewOptions: function childViewOptions() {
    return {
      container: this.options.container
    };
  },
  getNamespaceArray: function getNamespaceArray() {
    var currentPageView = elementor.getPanelView().getCurrentPageView(),
      eventNamespace = currentPageView.getNamespaceArray();
    eventNamespace.push(currentPageView.activeSection);
    eventNamespace.push(this.getOption('controlName'));
    eventNamespace.push(this.getOption('name'));
    return eventNamespace;
  },
  onRenderTemplate: function onRenderTemplate() {
    this.activateFirstSection();
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/components/dynamic-tags/tag-panel-view.js":
/*!*************************************************************************!*\
  !*** ../assets/dev/js/editor/components/dynamic-tags/tag-panel-view.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TagControlsStack = __webpack_require__(/*! elementor-dynamic-tags/tag-controls-stack */ "../assets/dev/js/editor/components/dynamic-tags/tag-controls-stack.js");
module.exports = Marionette.ItemView.extend({
  className: 'elementor-dynamic-cover e-input-style',
  tagControlsStack: null,
  templateHelpers: function templateHelpers() {
    var helpers = {};
    if (this.model) {
      helpers.controls = this.model.options.controls;
    }
    return helpers;
  },
  ui: {
    remove: '.elementor-dynamic-cover__remove'
  },
  events: function events() {
    var events = {
      'click @ui.remove': 'onRemoveClick'
    };
    if (this.hasSettings()) {
      events.click = 'onClick';
    }
    return events;
  },
  getTemplate: function getTemplate() {
    var config = this.getTagConfig(),
      templateFunction = Marionette.TemplateCache.get('#tmpl-elementor-control-dynamic-cover'),
      renderedTemplate = Marionette.Renderer.render(templateFunction, {
        hasSettings: this.hasSettings(),
        isRemovable: !this.getOption('dynamicSettings').default,
        title: config.title,
        content: config.panel_template
      });
    return Marionette.TemplateCache.prototype.compileTemplate(renderedTemplate.trim());
  },
  getTagConfig: function getTagConfig() {
    return elementor.dynamicTags.getConfig('tags.' + this.getOption('name'));
  },
  initSettingsPopup: function initSettingsPopup() {
    var settingsPopupOptions = {
      className: 'elementor-tag-settings-popup',
      position: {
        my: 'left top+5',
        at: 'left bottom',
        of: this.$el,
        autoRefresh: true
      },
      hide: {
        ignore: '.select2-container'
      }
    };
    var settingsPopup = elementorCommon.dialogsManager.createWidget('buttons', settingsPopupOptions);
    this.getSettingsPopup = function () {
      return settingsPopup;
    };
  },
  hasSettings: function hasSettings() {
    return !!Object.values(this.getTagConfig().controls).length;
  },
  showSettingsPopup: function showSettingsPopup() {
    if (!this.tagControlsStack) {
      this.initTagControlsStack();
    }
    var settingsPopup = this.getSettingsPopup();
    if (settingsPopup.isVisible()) {
      return;
    }
    settingsPopup.show();
  },
  initTagControlsStack: function initTagControlsStack() {
    this.tagControlsStack = new TagControlsStack({
      model: this.model,
      controls: this.model.controls,
      name: this.options.name,
      controlName: this.options.controlName,
      container: this.options.container,
      el: this.getSettingsPopup().getElements('message')[0]
    });
    this.tagControlsStack.render();
  },
  initModel: function initModel() {
    this.model = new elementorModules.editor.elements.models.BaseSettings(this.getOption('settings'), {
      controls: this.getTagConfig().controls
    });
  },
  initialize: function initialize() {
    // The `model` should always be available.
    this.initModel();
    if (!this.hasSettings()) {
      return;
    }
    this.initSettingsPopup();
    this.listenTo(this.model, 'change', this.render);
  },
  onClick: function onClick() {
    this.showSettingsPopup();
  },
  onRemoveClick: function onRemoveClick(event) {
    event.stopPropagation();
    this.destroy();
    this.trigger('remove');
  },
  onDestroy: function onDestroy() {
    if (this.hasSettings()) {
      this.getSettingsPopup().destroy();
    }
    if (this.tagControlsStack) {
      this.tagControlsStack.destroy();
    }
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/components/validator/base.js":
/*!************************************************************!*\
  !*** ../assets/dev/js/editor/components/validator/base.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.Module.extend({
  errors: [],
  __construct: function __construct(settings) {
    var customValidationMethod = settings.customValidationMethod;
    if (customValidationMethod) {
      this.validationMethod = customValidationMethod;
    }
  },
  getDefaultSettings: function getDefaultSettings() {
    return {
      validationTerms: {}
    };
  },
  isValid: function isValid() {
    var validationErrors = this.validationMethod.apply(this, arguments);
    if (validationErrors.length) {
      this.errors = validationErrors;
      return false;
    }
    return true;
  },
  validationMethod: function validationMethod(newValue) {
    var validationTerms = this.getSettings('validationTerms'),
      errors = [];
    if (validationTerms.required) {
      if (!('' + newValue).length) {
        errors.push('Required value is empty');
      }
    }
    return errors;
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/components/validator/breakpoint.js":
/*!******************************************************************!*\
  !*** ../assets/dev/js/editor/components/validator/breakpoint.js ***!
  \******************************************************************/
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
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var NumberValidator = __webpack_require__(/*! elementor-validator/number */ "../assets/dev/js/editor/components/validator/number.js");
var BreakpointValidator = /*#__PURE__*/function (_NumberValidator) {
  (0, _inherits2.default)(BreakpointValidator, _NumberValidator);
  var _super = _createSuper(BreakpointValidator);
  function BreakpointValidator() {
    (0, _classCallCheck2.default)(this, BreakpointValidator);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(BreakpointValidator, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        validationTerms: {
          // Max width we allow in general
          max: 5120
        }
      };
    }

    /**
     * Get Panel Active Breakpoints
     *
     * Since the active kit used in the Site Settings panel could be a draft, we need to use the panel's active
     * breakpoints settings and not the elementorFrontend.config values (which come from the DB).
     *
     * @return {*} Object
     */
  }, {
    key: "getPanelActiveBreakpoints",
    value: function getPanelActiveBreakpoints() {
      var panelBreakpoints = elementor.documents.currentDocument.config.settings.settings.active_breakpoints.map(function (breakpointName) {
          return breakpointName.replace('viewport_', '');
        }),
        panelActiveBreakpoints = {};
      panelBreakpoints.forEach(function (breakpointName) {
        panelActiveBreakpoints[breakpointName] = elementorFrontend.config.responsive.breakpoints[breakpointName];
      });
      return panelActiveBreakpoints;
    }
  }, {
    key: "initBreakpointProperties",
    value: function initBreakpointProperties() {
      var _activeBreakpoints$br, _activeBreakpoints$br2;
      var validationTerms = this.getSettings('validationTerms'),
        activeBreakpoints = this.getPanelActiveBreakpoints(),
        breakpointKeys = Object.keys(activeBreakpoints);
      this.breakpointIndex = breakpointKeys.indexOf(validationTerms.breakpointName);
      this.topBreakpoint = (_activeBreakpoints$br = activeBreakpoints[breakpointKeys[this.breakpointIndex + 1]]) === null || _activeBreakpoints$br === void 0 ? void 0 : _activeBreakpoints$br.value;
      this.bottomBreakpoint = (_activeBreakpoints$br2 = activeBreakpoints[breakpointKeys[this.breakpointIndex - 1]]) === null || _activeBreakpoints$br2 === void 0 ? void 0 : _activeBreakpoints$br2.value;
    }
  }, {
    key: "validationMethod",
    value: function validationMethod(newValue) {
      var validationTerms = this.getSettings('validationTerms'),
        errors = NumberValidator.prototype.validationMethod.call(this, newValue);

      // Validate both numeric and empty values, since breakpoints utilize default values when empty.
      if (_.isFinite(newValue) || '' === newValue) {
        if (!this.validateMinMaxForBreakpoint(newValue, validationTerms)) {
          errors.push('Value is not between the breakpoints above or under the edited breakpoint');
        }
      }
      return errors;
    }
  }, {
    key: "validateMinMaxForBreakpoint",
    value: function validateMinMaxForBreakpoint(newValue, validationTerms) {
      var breakpointDefaultValue = elementorFrontend.config.responsive.breakpoints[validationTerms.breakpointName].default_value;
      var isValid = true;
      this.initBreakpointProperties();

      // Since the following comparison is <=, allow usage of the 320px value for the mobile breakpoint.
      if ('mobile' === validationTerms.breakpointName && 320 === this.bottomBreakpoint) {
        this.bottomBreakpoint -= 1;
      }

      // If there is a breakpoint below the currently edited breakpoint
      if (this.bottomBreakpoint) {
        // Check that the new value is not under the bottom breakpoint's value.
        if ('' !== newValue && newValue <= this.bottomBreakpoint) {
          isValid = false;
        }

        // If the new value is empty, check that the default breakpoint value is not below the bottom breakpoint.
        if ('' === newValue && breakpointDefaultValue <= this.bottomBreakpoint) {
          isValid = false;
        }
      }

      // If there is a breakpoint above the currently edited breakpoint.
      if (this.topBreakpoint) {
        // Check that the value is not above the top breakpoint's value.
        if ('' !== newValue && newValue >= this.topBreakpoint) {
          isValid = false;
        }

        // If the new value is empty, check that the default breakpoint value is not above the top breakpoint.
        if ('' === newValue && breakpointDefaultValue >= this.topBreakpoint) {
          isValid = false;
        }
      }
      return isValid;
    }
  }]);
  return BreakpointValidator;
}(NumberValidator);
exports["default"] = BreakpointValidator;

/***/ }),

/***/ "../assets/dev/js/editor/components/validator/number.js":
/*!**************************************************************!*\
  !*** ../assets/dev/js/editor/components/validator/number.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Validator = __webpack_require__(/*! elementor-validator/base */ "../assets/dev/js/editor/components/validator/base.js");
module.exports = Validator.extend({
  validationMethod: function validationMethod(newValue) {
    var validationTerms = this.getSettings('validationTerms'),
      errors = [];
    if (_.isFinite(newValue)) {
      if (undefined !== validationTerms.min && newValue < validationTerms.min) {
        errors.push('Value is less than minimum');
      }
      if (undefined !== validationTerms.max && newValue > validationTerms.max) {
        errors.push('Value is greater than maximum');
      }
    }
    return errors;
  }
});

/***/ }),

/***/ "../assets/dev/js/editor/controls/base-data.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/editor/controls/base-data.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
var _breakpoint = _interopRequireDefault(__webpack_require__(/*! elementor-validator/breakpoint */ "../assets/dev/js/editor/components/validator/breakpoint.js"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ControlBaseView = __webpack_require__(/*! elementor-controls/base */ "../assets/dev/js/editor/controls/base.js"),
  TagsBehavior = __webpack_require__(/*! elementor-dynamic-tags/control-behavior */ "../assets/dev/js/editor/components/dynamic-tags/control-behavior.js"),
  Validator = __webpack_require__(/*! elementor-validator/base */ "../assets/dev/js/editor/components/validator/base.js"),
  NumberValidator = __webpack_require__(/*! elementor-validator/number */ "../assets/dev/js/editor/components/validator/number.js"),
  ControlBaseDataView;
ControlBaseDataView = ControlBaseView.extend({
  validatorTypes: {
    Base: Validator,
    Number: NumberValidator,
    Breakpoint: _breakpoint.default
  },
  ui: function ui() {
    var ui = ControlBaseView.prototype.ui.apply(this, arguments);
    _.extend(ui, {
      input: 'input[data-setting][type!="checkbox"][type!="radio"]',
      checkbox: 'input[data-setting][type="checkbox"]',
      radio: 'input[data-setting][type="radio"]',
      select: 'select[data-setting]',
      textarea: 'textarea[data-setting]',
      responsiveSwitchersSibling: "".concat(ui.controlTitle, "[data-e-responsive-switcher-sibling!=\"false\"]"),
      responsiveSwitchers: '.elementor-responsive-switcher',
      contentEditable: '[contenteditable="true"]'
    });
    return ui;
  },
  templateHelpers: function templateHelpers() {
    var controlData = ControlBaseView.prototype.templateHelpers.apply(this, arguments);
    controlData.data.controlValue = this.getControlValue();
    return controlData;
  },
  events: function events() {
    return {
      'input @ui.input': 'onBaseInputTextChange',
      'change @ui.checkbox': 'onBaseInputChange',
      'change @ui.radio': 'onBaseInputChange',
      'input @ui.textarea': 'onBaseInputTextChange',
      'change @ui.select': 'onBaseInputChange',
      'input @ui.contentEditable': 'onBaseInputTextChange',
      'click @ui.responsiveSwitchers': 'onResponsiveSwitchersClick'
    };
  },
  behaviors: function behaviors() {
    var behaviors = ControlBaseView.prototype.behaviors.apply(this, arguments),
      dynamicSettings = this.options.model.get('dynamic');
    if (dynamicSettings && dynamicSettings.active) {
      var tags = _.filter(elementor.dynamicTags.getConfig('tags'), function (tag) {
        return tag.editable && _.intersection(tag.categories, dynamicSettings.categories).length;
      });
      if (tags.length || elementor.config.user.is_administrator) {
        behaviors.tags = {
          behaviorClass: TagsBehavior,
          tags: tags,
          dynamicSettings: dynamicSettings
        };
      }
    }
    return behaviors;
  },
  initialize: function initialize() {
    ControlBaseView.prototype.initialize.apply(this, arguments);
    this.registerValidators();
    if (this.model.get('responsive')) {
      this.setPlaceholderFromParent();
    }
    if (undefined === this.model.get('inherit_placeholders')) {
      this.model.set('inherit_placeholders', true);
    }

    // TODO: this.elementSettingsModel is deprecated since 2.8.0.
    var settings = this.container ? this.container.settings : this.elementSettingsModel;
    this.listenTo(settings, 'change:external:' + this.model.get('name'), this.onAfterExternalChange);
  },
  getControlValue: function getControlValue() {
    return this.container.settings.get(this.model.get('name'));
  },
  getGlobalKey: function getGlobalKey() {
    return this.container.globals.get(this.model.get('name'));
  },
  getGlobalValue: function getGlobalValue() {
    return this.globalValue;
  },
  getGlobalDefault: function getGlobalDefault() {
    var controlGlobalArgs = this.model.get('global');
    if (controlGlobalArgs !== null && controlGlobalArgs !== void 0 && controlGlobalArgs.default) {
      // If the control is a color/typography control and default colors/typography are disabled, don't return the global value.
      if (!elementor.config.globals.defaults_enabled[this.getGlobalMeta().controlType]) {
        return '';
      }
      var _$e$data$commandExtra = $e.data.commandExtractArgs(controlGlobalArgs.default),
        command = _$e$data$commandExtra.command,
        args = _$e$data$commandExtra.args,
        result = $e.data.getCache($e.components.get('globals'), command, args.query);
      return result === null || result === void 0 ? void 0 : result.value;
    }

    // No global default.
    return '';
  },
  getCurrentValue: function getCurrentValue() {
    if (this.getGlobalKey() && !this.globalValue) {
      return '';
    }
    if (this.globalValue) {
      return this.globalValue;
    }
    var controlValue = this.getControlValue();
    if (controlValue) {
      return controlValue;
    }
    return this.getGlobalDefault();
  },
  isGlobalActive: function isGlobalActive() {
    var _this$options$model$g;
    return (_this$options$model$g = this.options.model.get('global')) === null || _this$options$model$g === void 0 ? void 0 : _this$options$model$g.active;
  },
  setValue: function setValue(value) {
    this.setSettingsModel(value);
  },
  setSettingsModel: function setSettingsModel(value) {
    var key = this.model.get('name');
    $e.run('document/elements/settings', {
      container: this.options.container,
      settings: (0, _defineProperty2.default)({}, key, value)
    });
    this.triggerMethod('settings:change');
  },
  applySavedValue: function applySavedValue() {
    this.setInputValue('[data-setting="' + this.model.get('name') + '"]', this.getControlValue());
  },
  getEditSettings: function getEditSettings(setting) {
    var settings = this.getOption('elementEditSettings').toJSON();
    if (setting) {
      return settings[setting];
    }
    return settings;
  },
  setEditSetting: function setEditSetting(settingKey, settingValue) {
    var settings = this.getOption('elementEditSettings') || this.getOption('container').settings;
    settings.set(settingKey, settingValue);
  },
  /**
   * Get the placeholder for the current control.
   *
   * @return {*} placeholder
   */
  getControlPlaceholder: function getControlPlaceholder() {
    var placeholder = this.model.get('placeholder');
    if (this.model.get('responsive') && this.model.get('inherit_placeholders')) {
      placeholder = placeholder || this.container.placeholders[this.model.get('name')];
    }
    return placeholder;
  },
  /**
   * Get the responsive parent view if exists.
   *
   * @return {ControlBaseDataView|undefined} responsive parent view if exists
   */
  getResponsiveParentView: function getResponsiveParentView() {
    var parent = this.model.get('parent');
    try {
      return parent && this.container.panel.getControlView(parent);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },
  /**
   * Get the responsive children views if exists.
   *
   * @return {ControlBaseDataView|null} responsive children views if exists
   */
  getResponsiveChildrenViews: function getResponsiveChildrenViews() {
    var children = this.model.get('inheritors'),
      views = [];
    try {
      var _iterator = _createForOfIteratorHelper(children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          views.push(this.container.panel.getControlView(child));
        }
        // eslint-disable-next-line no-empty
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } catch (e) {}
    return views;
  },
  /**
   * Get prepared placeholder from the responsive parent, and put it into current
   * control model as placeholder.
   */
  setPlaceholderFromParent: function setPlaceholderFromParent() {
    var parent = this.getResponsiveParentView();
    if (parent) {
      this.container.placeholders[this.model.get('name')] = parent.preparePlaceholderForChildren();
    }
  },
  /**
   * Returns the value of the current control if exists, or the parent value if not,
   * so responsive children can set it as their placeholder. When there are multiple
   * inputs, the inputs which are empty on this control will inherit their values
   * from the responsive parent.
   * For example, if on desktop the padding of all edges is 10, and on tablet only
   * padding right and left is set to 15, the mobile control placeholder will
   * eventually be: { top: 10, right: 15, left: 15, bottom: 10 }, because of the
   * inheritance of multiple values.
   *
   * @return {*} value of the current control if exists, or the parent value if not
   */
  preparePlaceholderForChildren: function preparePlaceholderForChildren() {
    var _this$getResponsivePa;
    var cleanValue = this.getCleanControlValue(),
      parentValue = (_this$getResponsivePa = this.getResponsiveParentView()) === null || _this$getResponsivePa === void 0 ? void 0 : _this$getResponsivePa.preparePlaceholderForChildren();
    if (cleanValue instanceof Object) {
      return Object.assign({}, parentValue, cleanValue);
    }
    return cleanValue || parentValue;
  },
  /**
   * Start the re-rendering recursive chain from the responsive child of this
   * control. It's useful when the current control value is changed and we want
   * to update all responsive children. In this case, the re-rendering is supposed
   * to be applied only from the responsive child of this control and on.
   */
  propagatePlaceholder: function propagatePlaceholder() {
    var children = this.getResponsiveChildrenViews();
    var _iterator2 = _createForOfIteratorHelper(children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        child.renderWithChildren();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  /**
   * Re-render current control and trigger this method on the responsive child.
   * The purpose of those actions is to recursively re-render all responsive
   * children.
   */
  renderWithChildren: function renderWithChildren() {
    this.render();
    this.propagatePlaceholder();
  },
  /**
   * Get control value without empty properties, and without default values.
   *
   * @return {{}} control value without empty properties, and without default values
   */
  getCleanControlValue: function getCleanControlValue() {
    var value = this.getControlValue();
    return value && value !== this.model.get('default') ? value : undefined;
  },
  onAfterChange: function onAfterChange(control) {
    if (Object.keys(control.changed).includes(this.model.get('name'))) {
      this.propagatePlaceholder();
    }
    ControlBaseView.prototype.onAfterChange.apply(this, arguments);
  },
  getInputValue: function getInputValue(input) {
    var $input = this.$(input);
    if ($input.is('[contenteditable="true"]')) {
      return $input.html();
    }
    var inputValue = $input.val(),
      inputType = $input.attr('type');
    if (-1 !== ['radio', 'checkbox'].indexOf(inputType)) {
      return $input.prop('checked') ? inputValue : '';
    }
    if ('number' === inputType && _.isFinite(inputValue)) {
      return +inputValue;
    }

    // Temp fix for jQuery (< 3.0) that return null instead of empty array
    if ('SELECT' === input.tagName && $input.prop('multiple') && null === inputValue) {
      inputValue = [];
    }
    return inputValue;
  },
  setInputValue: function setInputValue(input, value) {
    var $input = this.$(input),
      inputType = $input.attr('type');
    if ('checkbox' === inputType) {
      $input.prop('checked', !!value);
    } else if ('radio' === inputType) {
      $input.filter('[value="' + value + '"]').prop('checked', true);
    } else {
      $input.val(value);
    }
  },
  addValidator: function addValidator(validator) {
    this.validators.push(validator);
  },
  registerValidators: function registerValidators() {
    var _this = this;
    this.validators = [];
    var validationTerms = {};
    if (this.model.get('required')) {
      validationTerms.required = true;
    }
    if (!jQuery.isEmptyObject(validationTerms)) {
      this.addValidator(new this.validatorTypes.Base({
        validationTerms: validationTerms
      }));
    }
    var validators = this.model.get('validators');
    if (validators) {
      Object.entries(validators).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          key = _ref2[0],
          args = _ref2[1];
        _this.addValidator(new _this.validatorTypes[key]({
          validationTerms: args
        }));
      });
    }
  },
  onBeforeRender: function onBeforeRender() {
    this.setPlaceholderFromParent();
  },
  onRender: function onRender() {
    ControlBaseView.prototype.onRender.apply(this, arguments);
    if (this.model.get('responsive')) {
      this.renderResponsiveSwitchers();
    }
    this.applySavedValue();
    this.triggerMethod('ready');
    this.toggleControlVisibility();
    this.addTooltip();
  },
  onBaseInputTextChange: function onBaseInputTextChange(event) {
    this.onBaseInputChange(event);
  },
  onBaseInputChange: function onBaseInputChange(event) {
    clearTimeout(this.correctionTimeout);
    var input = event.currentTarget,
      value = this.getInputValue(input),
      validators = this.validators.slice(0),
      settingsValidators = this.container.settings.validators[this.model.get('name')];
    if (settingsValidators) {
      validators = validators.concat(settingsValidators);
    }
    if (validators) {
      var oldValue = this.getControlValue(input.dataset.setting);
      var isValidValue = validators.every(function (validator) {
        return validator.isValid(value, oldValue);
      });
      if (!isValidValue) {
        this.correctionTimeout = setTimeout(this.setInputValue.bind(this, input, oldValue), 1200);
        return;
      }
    }
    this.updateElementModel(value, input);
    this.triggerMethod('input:change', event);
  },
  onResponsiveSwitchersClick: function onResponsiveSwitchersClick(event) {
    var $switcher = jQuery(event.currentTarget),
      device = $switcher.data('device'),
      $switchersWrapper = this.ui.responsiveSwitchersWrapper,
      selectedOption = $switcher.index();
    $switchersWrapper.toggleClass('elementor-responsive-switchers-open');
    $switchersWrapper[0].style.setProperty('--selected-option', selectedOption);
    this.triggerMethod('responsive:switcher:click', device);
    elementor.changeDeviceMode(device);
  },
  renderResponsiveSwitchers: function renderResponsiveSwitchers() {
    var templateHtml = Marionette.Renderer.render('#tmpl-elementor-control-responsive-switchers', this.model.attributes);
    this.ui.responsiveSwitchersSibling.after(templateHtml);
    this.ui.responsiveSwitchersWrapper = this.$el.find('.elementor-control-responsive-switchers');
  },
  onAfterExternalChange: function onAfterExternalChange() {
    this.hideTooltip();
    this.applySavedValue();
  },
  addTooltip: function addTooltip() {
    this.ui.tooltipTargets = this.$el.find('.tooltip-target');
    if (!this.ui.tooltipTargets.length) {
      return;
    }

    // Create tooltip on controls
    this.ui.tooltipTargets.tipsy({
      gravity: function gravity() {
        // `n` for down, `s` for up
        var gravity = jQuery(this).data('tooltip-pos');
        if (undefined !== gravity) {
          return gravity;
        }
        return 's';
      },
      title: function title() {
        return this.getAttribute('data-tooltip');
      }
    });
  },
  hideTooltip: function hideTooltip() {
    if (this.ui.tooltipTargets.length) {
      this.ui.tooltipTargets.tipsy('hide');
    }
  },
  updateElementModel: function updateElementModel(value) {
    this.setValue(value);
  }
}, {
  // Static methods
  getStyleValue: function getStyleValue(placeholder, controlValue, controlData) {
    if ('DEFAULT' === placeholder) {
      return controlData.default;
    }
    return controlValue;
  },
  onPasteStyle: function onPasteStyle() {
    return true;
  }
});
module.exports = ControlBaseDataView;

/***/ }),

/***/ "../assets/dev/js/editor/controls/base.js":
/*!************************************************!*\
  !*** ../assets/dev/js/editor/controls/base.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ControlBaseView;
ControlBaseView = Marionette.CompositeView.extend({
  ui: function ui() {
    return {
      controlTitle: '.elementor-control-title'
    };
  },
  behaviors: function behaviors() {
    var behaviors = {};
    return elementor.hooks.applyFilters('controls/base/behaviors', behaviors, this);
  },
  getBehavior: function getBehavior(name) {
    return this._behaviors[Object.keys(this.behaviors()).indexOf(name)];
  },
  className: function className() {
    // TODO: Any better classes for that?
    var classes = 'elementor-control elementor-control-' + this.model.get('name') + ' elementor-control-type-' + this.model.get('type'),
      modelClasses = this.model.get('classes'),
      responsive = this.model.get('responsive');
    if (!_.isEmpty(modelClasses)) {
      classes += ' ' + modelClasses;
    }
    if (!_.isEmpty(responsive)) {
      var responsiveControlName = responsive.max || responsive.min;
      classes += ' elementor-control-responsive-' + responsiveControlName;
    }
    return classes;
  },
  templateHelpers: function templateHelpers() {
    var controlData = {
      _cid: this.model.cid
    };
    return {
      view: this,
      data: _.extend({}, this.model.toJSON(), controlData)
    };
  },
  getTemplate: function getTemplate() {
    return Marionette.TemplateCache.get('#tmpl-elementor-control-' + this.model.get('type') + '-content');
  },
  initialize: function initialize(options) {
    var label = this.model.get('label');

    // TODO: Temp backwards compatibility. since 2.8.0.
    Object.defineProperty(this, 'container', {
      get: function get() {
        if (!options.container) {
          var settingsModel = options.elementSettingsModel,
            view = $e.components.get('document').utils.findViewById(settingsModel.id);

          // Element control.
          if (view && view.getContainer) {
            options.container = view.getContainer();
          } else {
            if (!settingsModel.id) {
              settingsModel.id = 'bc-' + elementorCommon.helpers.getUniqueId();
            }

            // Document/General/Other control.
            options.container = new elementorModules.editor.Container({
              type: 'bc-container',
              id: settingsModel.id,
              model: settingsModel,
              settings: settingsModel,
              label: label,
              view: false,
              parent: false,
              renderer: false,
              controls: settingsModel.options.controls
            });
          }
        }
        return options.container;
      }
    });

    // Use `defineProperty` because `get elementSettingsModel()` fails during the `Marionette.CompositeView.extend`.
    Object.defineProperty(this, 'elementSettingsModel', {
      get: function get() {
        elementorDevTools.deprecation.deprecated('elementSettingsModel', '2.8.0', 'container.settings');
        return options.container ? options.container.settings : options.elementSettingsModel;
      }
    });
    var controlType = this.model.get('type'),
      controlSettings = jQuery.extend(true, {}, elementor.config.controls[controlType], this.model.attributes);
    this.model.set(controlSettings);

    // TODO: this.elementSettingsModel is deprecated since 2.8.0.
    var settings = this.container ? this.container.settings : this.elementSettingsModel;
    this.listenTo(settings, 'change', this.onAfterChange);
    if (this.model.attributes.responsive) {
      this.onDeviceModeChange = this.onDeviceModeChange.bind(this);
      elementor.listenTo(elementor.channels.deviceMode, 'change', this.onDeviceModeChange);
    }
  },
  onDestroy: function onDestroy() {
    elementor.stopListening(elementor.channels.deviceMode, 'change', this.onDeviceModeChange);
  },
  onDeviceModeChange: function onDeviceModeChange() {
    this.toggleControlVisibility();
  },
  onAfterChange: function onAfterChange() {
    this.toggleControlVisibility();
  },
  toggleControlVisibility: function toggleControlVisibility() {
    // TODO: this.elementSettingsModel is deprecated since 2.8.0.
    var settings = this.container ? this.container.settings : this.elementSettingsModel;
    var isVisible = elementor.helpers.isActiveControl(this.model, settings.attributes, settings.controls);
    this.$el.toggleClass('elementor-hidden-control', !isVisible);
    elementor.getPanelView().updateScrollbar();
  },
  onRender: function onRender() {
    var layoutType = this.model.get('label_block') ? 'block' : 'inline',
      showLabel = this.model.get('show_label'),
      elClasses = 'elementor-label-' + layoutType;
    elClasses += ' elementor-control-separator-' + this.model.get('separator');
    if (!showLabel) {
      elClasses += ' elementor-control-hidden-label';
    }
    this.$el.addClass(elClasses);
    this.toggleControlVisibility();
  },
  reRoute: function reRoute(controlActive) {
    $e.route($e.routes.getCurrent('panel'), this.getControlInRouteArgs(controlActive ? this.getControlPath() : ''), {
      history: false
    });
  },
  getControlInRouteArgs: function getControlInRouteArgs(path) {
    return _objectSpread(_objectSpread({}, $e.routes.getCurrentArgs('panel')), {}, {
      activeControl: path
    });
  },
  getControlPath: function getControlPath() {
    var controlPath = this.model.get('name'),
      parent = this._parent;
    while (!parent.$el.hasClass('elementor-controls-stack')) {
      var parentName = parent.model.get('name') || parent.model.get('_id');
      controlPath = parentName + '/' + controlPath;
      parent = parent._parent;
    }
    return controlPath;
  }
});
module.exports = ControlBaseView;

/***/ }),

/***/ "../assets/dev/js/editor/controls/switcher.js":
/*!****************************************************!*\
  !*** ../assets/dev/js/editor/controls/switcher.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ControlBaseDataView = __webpack_require__(/*! elementor-controls/base-data */ "../assets/dev/js/editor/controls/base-data.js");
module.exports = ControlBaseDataView.extend({
  setInputValue: function setInputValue(input, value) {
    this.$(input).prop('checked', this.model.get('return_value') === value);
  }
}, {
  onPasteStyle: function onPasteStyle(control, clipboardValue) {
    return !clipboardValue || clipboardValue === control.return_value;
  }
});

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/enable.js":
/*!**********************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/enable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Enable = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Enable = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(Enable, _$e$modules$CommandBa);
  var _super = _createSuper(Enable);
  function Enable() {
    (0, _classCallCheck2.default)(this, Enable);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Enable, [{
    key: "apply",
    value: function apply(args) {
      $e.components.get('preview/styleguide').enableStyleguidePreview(args);
    }
  }]);
  return Enable;
}($e.modules.CommandBase);
exports.Enable = Enable;
var _default = Enable;
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/global-colors.js":
/*!*****************************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/global-colors.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalColors = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GlobalColors = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(GlobalColors, _$e$modules$CommandBa);
  var _super = _createSuper(GlobalColors);
  function GlobalColors() {
    (0, _classCallCheck2.default)(this, GlobalColors);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(GlobalColors, [{
    key: "apply",
    value: function apply() {
      $e.components.get('preview/styleguide').showStyleguidePreview();
    }
  }]);
  return GlobalColors;
}($e.modules.CommandBase);
exports.GlobalColors = GlobalColors;
var _default = GlobalColors;
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/global-typography.js":
/*!*********************************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/global-typography.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GlobalTypography = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GlobalTypography = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(GlobalTypography, _$e$modules$CommandBa);
  var _super = _createSuper(GlobalTypography);
  function GlobalTypography() {
    (0, _classCallCheck2.default)(this, GlobalTypography);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(GlobalTypography, [{
    key: "apply",
    value: function apply() {
      $e.components.get('preview/styleguide').showStyleguidePreview();
    }
  }]);
  return GlobalTypography;
}($e.modules.CommandBase);
exports.GlobalTypography = GlobalTypography;
var _default = GlobalTypography;
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/hide.js":
/*!********************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/hide.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Hide = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Hide = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(Hide, _$e$modules$CommandBa);
  var _super = _createSuper(Hide);
  function Hide() {
    (0, _classCallCheck2.default)(this, Hide);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Hide, [{
    key: "apply",
    value: function apply() {
      $e.components.get('preview/styleguide').hideStyleguidePreview();
    }
  }]);
  return Hide;
}($e.modules.CommandBase);
exports.Hide = Hide;
var _default = Hide;
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/index.js":
/*!*********************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Enable", ({
  enumerable: true,
  get: function get() {
    return _enable.Enable;
  }
}));
Object.defineProperty(exports, "GlobalColors", ({
  enumerable: true,
  get: function get() {
    return _globalColors.GlobalColors;
  }
}));
Object.defineProperty(exports, "GlobalTypography", ({
  enumerable: true,
  get: function get() {
    return _globalTypography.GlobalTypography;
  }
}));
Object.defineProperty(exports, "Hide", ({
  enumerable: true,
  get: function get() {
    return _hide.Hide;
  }
}));
Object.defineProperty(exports, "SwitcherChange", ({
  enumerable: true,
  get: function get() {
    return _switcherChange.SwitcherChange;
  }
}));
var _enable = __webpack_require__(/*! ./enable */ "../modules/styleguide/assets/js/commands/enable.js");
var _globalColors = __webpack_require__(/*! ./global-colors */ "../modules/styleguide/assets/js/commands/global-colors.js");
var _globalTypography = __webpack_require__(/*! ./global-typography */ "../modules/styleguide/assets/js/commands/global-typography.js");
var _hide = __webpack_require__(/*! ./hide */ "../modules/styleguide/assets/js/commands/hide.js");
var _switcherChange = __webpack_require__(/*! ./switcher-change */ "../modules/styleguide/assets/js/commands/switcher-change.js");

/***/ }),

/***/ "../modules/styleguide/assets/js/commands/switcher-change.js":
/*!*******************************************************************!*\
  !*** ../modules/styleguide/assets/js/commands/switcher-change.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SwitcherChange = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SwitcherChange = /*#__PURE__*/function (_$e$modules$CommandBa) {
  (0, _inherits2.default)(SwitcherChange, _$e$modules$CommandBa);
  var _super = _createSuper(SwitcherChange);
  function SwitcherChange() {
    (0, _classCallCheck2.default)(this, SwitcherChange);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(SwitcherChange, [{
    key: "validateArgs",
    value: function validateArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.requireArgumentType('name', 'string', args);
      this.requireArgumentType('value', 'string', args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (args.name.includes('enable_styleguide_preview')) {
        $e.components.get('preview/styleguide').enableStyleguidePreview({
          value: args.value
        });
      }
    }
  }]);
  return SwitcherChange;
}($e.modules.CommandBase);
exports.SwitcherChange = SwitcherChange;
var _default = SwitcherChange;
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/controls/switcher.js":
/*!************************************************************!*\
  !*** ../modules/styleguide/assets/js/controls/switcher.js ***!
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
var _get3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "../node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _switcher = _interopRequireDefault(__webpack_require__(/*! elementor-assets-js/editor/controls/switcher */ "../assets/dev/js/editor/controls/switcher.js"));
var _baseData = _interopRequireDefault(__webpack_require__(/*! elementor-controls/base-data */ "../assets/dev/js/editor/controls/base-data.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _default = /*#__PURE__*/function (_Switcher) {
  (0, _inherits2.default)(_default, _Switcher);
  var _super = _createSuper(_default);
  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(_default, [{
    key: "initialize",
    value: function initialize() {
      _baseData.default.prototype.initialize.apply(this, arguments);
      this.$el.addClass('elementor-control-type-switcher');
    }
  }, {
    key: "onBeforeRender",
    value: function onBeforeRender() {
      var _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(_default.prototype), "onBeforeRender", this)).call.apply(_get2, [this].concat(args));
      var actualValue = elementor.getPreferences('enable_styleguide_preview');
      if (actualValue !== this.getCurrentValue()) {
        this.setValue(actualValue);
      }
    }
  }, {
    key: "onBaseInputChange",
    value: function onBaseInputChange(event) {
      _baseData.default.prototype.onBaseInputChange.apply(this, arguments);
      var input = event.currentTarget,
        value = this.getInputValue(input);
      if (this.model.get('on_change_command')) {
        this.runCommand(value);
      }
      this.model.set('return_value', null);
    }
  }, {
    key: "runCommand",
    value: function runCommand(value) {
      $e.run('preview/styleguide/switcher-change', {
        name: this.model.get('name'),
        value: value
      });
    }
  }]);
  return _default;
}(_switcher.default);
exports["default"] = _default;

/***/ }),

/***/ "../modules/styleguide/assets/js/e-component.js":
/*!******************************************************!*\
  !*** ../modules/styleguide/assets/js/e-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var commands = _interopRequireWildcard(__webpack_require__(/*! ./commands */ "../modules/styleguide/assets/js/commands/index.js"));
var _switcher = _interopRequireDefault(__webpack_require__(/*! ./controls/switcher */ "../modules/styleguide/assets/js/controls/switcher.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _default = /*#__PURE__*/function (_$e$modules$Component) {
  (0, _inherits2.default)(_default, _$e$modules$Component);
  var _super = _createSuper(_default);
  function _default(args) {
    var _this;
    (0, _classCallCheck2.default)(this, _default);
    _this = _super.call(this, args);
    elementor.addControlView('global-style-switcher', _switcher.default);
    _this.registerStyleguideDialogType();
    elementor.once('preview:loaded', function () {
      _this.initModal();
    });
    return _this;
  }
  (0, _createClass2.default)(_default, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'preview/styleguide';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "registerStyleguideDialogType",
    value: function registerStyleguideDialogType() {
      DialogsManager.addWidgetType('styleguide', DialogsManager.getWidgetType('lightbox').extend('alert', {
        buildWidget: function buildWidget() {
          DialogsManager.getWidgetType('lightbox').prototype.buildWidget.apply(this, arguments);
          var $widgetContent = this.addElement('widgetContent'),
            elements = this.getElements();
          $widgetContent.append(elements.message);
          elements.widget.html($widgetContent);
        }
      }));
    }
  }, {
    key: "initModal",
    value: function initModal() {
      var modal;
      this.getModal = function () {
        if (modal) {
          return modal;
        }
        modal = elementorCommon.dialogsManager.createWidget('styleguide', {
          id: 'e-styleguide-preview-dialog',
          message: "<div class=\"e-styleguide-preview-root\"></div>",
          position: {
            my: 'center center',
            at: 'center center'
          },
          hide: {
            onOutsideClick: false,
            onEscKeyPress: false,
            onClick: false,
            onBackgroundClick: false
          },
          container: elementor.$previewContents.find('body')
        });
        return modal;
      };
    }

    /**
     * Show the Styleguide Preview.
     * If skipPreferences is true, it will not check the User Preferences before showing the dialog.
     *
     * @param {boolean} skipPreferencesCheck
     */
  }, {
    key: "showStyleguidePreview",
    value: function showStyleguidePreview() {
      var skipPreferencesCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.getModal().isVisible() || !skipPreferencesCheck && !elementor.getPreferences('enable_styleguide_preview')) {
        return;
      }
      this.getPreviewFrame().postMessage({
        name: 'elementor/styleguide/preview/show'
      }, '*');
      this.getModal().show();
    }

    /**
     * Hide the Styleguide Preview.
     */
  }, {
    key: "hideStyleguidePreview",
    value: function hideStyleguidePreview() {
      this.getPreviewFrame().postMessage({
        name: 'elementor/styleguide/preview/hide'
      }, '*');
      this.getModal().hide();
    }

    /**
     * Update the User Preferences to enable/disable the Style Guide Preview.
     * Triggered on switcher change at Global Colors / Global Typography panels.
     *
     * @param {Array} options
     */
  }, {
    key: "enableStyleguidePreview",
    value: function enableStyleguidePreview(options) {
      if (options.value) {
        this.showStyleguidePreview(true);
      } else {
        this.hideStyleguidePreview();
      }
      $e.run('document/elements/settings', {
        container: elementor.settings.editorPreferences.getEditedView().getContainer(),
        settings: {
          enable_styleguide_preview: options.value
        },
        options: {
          external: true
        }
      });
    }

    /**
     * Check if the current script context is the Editor.
     *
     * @return {boolean}
     */
  }, {
    key: "isInEditor",
    value: function isInEditor() {
      return !!window.elementor;
    }

    /**
     * Get the Preview Frame.
     *
     * @return {Window}
     */
  }, {
    key: "getPreviewFrame",
    value: function getPreviewFrame() {
      return this.isInEditor() ? elementor.$preview[0].contentWindow : window;
    }
  }]);
  return _default;
}($e.modules.ComponentBase);
exports["default"] = _default;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

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
/*!*****************************************************!*\
  !*** ../modules/styleguide/assets/js/styleguide.js ***!
  \*****************************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _eComponent = _interopRequireDefault(__webpack_require__(/*! ./e-component */ "../modules/styleguide/assets/js/e-component.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Styleguide = /*#__PURE__*/function (_elementorModules$edi) {
  (0, _inherits2.default)(Styleguide, _elementorModules$edi);
  var _super = _createSuper(Styleguide);
  function Styleguide() {
    (0, _classCallCheck2.default)(this, Styleguide);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Styleguide, [{
    key: "onInit",
    value: function onInit() {
      $e.components.register(new _eComponent.default());
      this.addHooks();
    }
  }, {
    key: "getGlobalRoutes",
    value: function getGlobalRoutes() {
      return {
        'global-colors': 'panel/global/global-colors',
        'global-typography': 'panel/global/global-typography'
      };
    }
  }, {
    key: "addHooks",
    value: function addHooks() {
      elementor.hooks.addAction('panel/global/tab/before-show', this.show.bind(this));
      elementor.hooks.addAction('panel/global/tab/before-destroy', this.hide.bind(this));
    }

    /**
     * Function show() triggered before showing a new tab at the Globals panel.
     *
     * @param {Object} args
     */
  }, {
    key: "show",
    value: function show(args) {
      if (!args.id || !(args.id in this.getGlobalRoutes())) {
        return;
      }
      $e.run("preview/styleguide/".concat(args.id));
    }

    /**
     * Function hide() triggered before hiding a tab at the Globals panel.
     *
     * @param {Object} args
     */
  }, {
    key: "hide",
    value: function hide(args) {
      if (!args.id || !(args.id in this.getGlobalRoutes())) {
        return;
      }
      var isGlobalsRoute = Object.values(this.getGlobalRoutes()).some(function (route) {
        return $e.routes.current.panel === route;
      });
      if (isGlobalsRoute) {
        return;
      }
      $e.run('preview/styleguide/hide');
    }
  }]);
  return Styleguide;
}(elementorModules.editor.utils.Module);
new Styleguide();
})();

/******/ })()
;
//# sourceMappingURL=styleguide.js.map