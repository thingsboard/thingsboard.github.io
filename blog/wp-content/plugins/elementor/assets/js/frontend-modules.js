/*! elementor - v3.19.0 - 07-02-2024 */
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([["frontend-modules"],{

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
/**
 * Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
 * object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
 * check whether it's instanceof by using the objects constructor and prototype names.
 *
 * @param  object
 * @param  constructors
 * @return {boolean}
 */
var _default = (object, constructors) => {
  constructors = Array.isArray(constructors) ? constructors : [constructors];
  for (const constructor of constructors) {
    if (object.constructor.name === constructor.prototype[Symbol.toStringTag]) {
      return true;
    }
  }
  return false;
};
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/frontend/document.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/frontend/document.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class _default extends elementorModules.ViewModule {
  getDefaultSettings() {
    return {
      selectors: {
        elements: '.elementor-element',
        nestedDocumentElements: '.elementor .elementor-element'
      },
      classes: {
        editMode: 'elementor-edit-mode'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $elements: this.$element.find(selectors.elements).not(this.$element.find(selectors.nestedDocumentElements))
    };
  }
  getDocumentSettings(setting) {
    let elementSettings;
    if (this.isEdit) {
      elementSettings = {};
      const settings = elementor.settings.page.model;
      jQuery.each(settings.getActiveControls(), controlKey => {
        elementSettings[controlKey] = settings.attributes[controlKey];
      });
    } else {
      elementSettings = this.$element.data('elementor-settings') || {};
    }
    return this.getItems(elementSettings, setting);
  }
  runElementsHandlers() {
    this.elements.$elements.each((index, element) => setTimeout(() => elementorFrontend.elementsHandler.runReadyTrigger(element)));
  }
  onInit() {
    this.$element = this.getSettings('$element');
    super.onInit();
    this.isEdit = this.$element.hasClass(this.getSettings('classes.editMode'));
    if (this.isEdit) {
      elementor.on('document:loaded', () => {
        elementor.settings.page.model.on('change', this.onSettingsChange.bind(this));
      });
    } else {
      this.runElementsHandlers();
    }
  }
  onSettingsChange() {}
}
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js":
/*!*****************************************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ../base */ "../assets/dev/js/frontend/handlers/base.js"));
class NestedTitleKeyboardHandler extends _base.default {
  __construct(settings) {
    super.__construct(settings);
    this.directionNext = 'next';
    this.directionPrevious = 'previous';
    this.focusableElementSelector = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])';
  }
  getDefaultSettings() {
    return {
      selectors: {
        itemTitle: '.e-n-tab-title',
        itemContainer: '.e-n-tabs-content > .e-con'
      },
      ariaAttributes: {
        titleStateAttribute: 'aria-selected',
        activeTitleSelector: '[aria-selected="true"]'
      },
      datasets: {
        titleIndex: 'data-tab-index'
      },
      keyDirection: {
        ArrowLeft: elementorFrontendConfig.is_rtl ? this.directionNext : this.directionPrevious,
        ArrowUp: this.directionPrevious,
        ArrowRight: elementorFrontendConfig.is_rtl ? this.directionPrevious : this.directionNext,
        ArrowDown: this.directionNext
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $itemTitles: this.findElement(selectors.itemTitle),
      $itemContainers: this.findElement(selectors.itemContainer),
      $focusableContainerElements: this.getFocusableElements(this.findElement(selectors.itemContainer))
    };
  }
  getFocusableElements($elements) {
    return $elements.find(this.focusableElementSelector).not('[disabled], [inert]');
  }
  getKeyDirectionValue(event) {
    const direction = this.getSettings('keyDirection')[event.key];
    return this.directionNext === direction ? 1 : -1;
  }

  /**
   * @param {HTMLElement} itemTitleElement
   *
   * @return {string}
   */
  getTitleIndex(itemTitleElement) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return itemTitleElement.getAttribute(indexAttribute);
  }

  /**
   * @param {string|number} titleIndex
   *
   * @return {string}
   */
  getTitleFilterSelector(titleIndex) {
    const {
      titleIndex: indexAttribute
    } = this.getSettings('datasets');
    return `[${indexAttribute}="${titleIndex}"]`;
  }
  getActiveTitleElement() {
    const activeTitleFilter = this.getSettings('ariaAttributes').activeTitleSelector;
    return this.elements.$itemTitles.filter(activeTitleFilter);
  }
  onInit() {
    super.onInit(...arguments);
  }
  bindEvents() {
    this.elements.$itemTitles.on(this.getTitleEvents());
    this.elements.$focusableContainerElements.on(this.getContentElementEvents());
  }
  unbindEvents() {
    this.elements.$itemTitles.off();
    this.elements.$itemContainers.children().off();
  }
  getTitleEvents() {
    return {
      keydown: this.handleTitleKeyboardNavigation.bind(this)
    };
  }
  getContentElementEvents() {
    return {
      keydown: this.handleContentElementKeyboardNavigation.bind(this)
    };
  }
  isDirectionKey(event) {
    const directionKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    return directionKeys.includes(event.key);
  }
  isActivationKey(event) {
    const activationKeys = ['Enter', ' '];
    return activationKeys.includes(event.key);
  }
  handleTitleKeyboardNavigation(event) {
    if (this.isDirectionKey(event)) {
      event.preventDefault();
      const currentTitleIndex = parseInt(this.getTitleIndex(event.currentTarget)) || 1,
        numberOfTitles = this.elements.$itemTitles.length,
        titleIndexUpdated = this.getTitleIndexFocusUpdated(event, currentTitleIndex, numberOfTitles);
      this.changeTitleFocus(titleIndexUpdated);
      event.stopPropagation();
    } else if (this.isActivationKey(event)) {
      event.preventDefault();
      if (this.handeTitleLinkEnterOrSpaceEvent(event)) {
        return;
      }
      const titleIndex = this.getTitleIndex(event.currentTarget);
      elementorFrontend.elements.$window.trigger('elementor/nested-elements/activate-by-keyboard', {
        widgetId: this.getID(),
        titleIndex
      });
    } else if ('Escape' === event.key) {
      this.handleTitleEscapeKeyEvents(event);
    }
  }
  handeTitleLinkEnterOrSpaceEvent(event) {
    const isLinkElement = 'a' === event?.currentTarget?.tagName?.toLowerCase();
    if (!elementorFrontend.isEditMode() && isLinkElement) {
      event?.currentTarget?.click();
      event.stopPropagation();
    }
    return isLinkElement;
  }
  getTitleIndexFocusUpdated(event, currentTitleIndex, numberOfTitles) {
    let titleIndexUpdated = 0;
    switch (event.key) {
      case 'Home':
        titleIndexUpdated = 1;
        break;
      case 'End':
        titleIndexUpdated = numberOfTitles;
        break;
      default:
        const directionValue = this.getKeyDirectionValue(event),
          isEndReached = numberOfTitles < currentTitleIndex + directionValue,
          isStartReached = 0 === currentTitleIndex + directionValue;
        if (isEndReached) {
          titleIndexUpdated = 1;
        } else if (isStartReached) {
          titleIndexUpdated = numberOfTitles;
        } else {
          titleIndexUpdated = currentTitleIndex + directionValue;
        }
    }
    return titleIndexUpdated;
  }
  changeTitleFocus(titleIndexUpdated) {
    const $newTitle = this.elements.$itemTitles.filter(this.getTitleFilterSelector(titleIndexUpdated));
    this.setTitleTabindex(titleIndexUpdated);
    $newTitle.trigger('focus');
  }
  setTitleTabindex(titleIndex) {
    this.elements.$itemTitles.attr('tabindex', '-1');
    const $newTitle = this.elements.$itemTitles.filter(this.getTitleFilterSelector(titleIndex));
    $newTitle.attr('tabindex', '0');
  }
  handleTitleEscapeKeyEvents() {}
  handleContentElementKeyboardNavigation(event) {
    if ('Tab' === event.key && !event.shiftKey) {
      this.handleContentElementTabEvents(event);
    } else if ('Escape' === event.key) {
      event.preventDefault();
      event.stopPropagation();
      this.handleContentElementEscapeEvents(event);
    }
  }
  handleContentElementEscapeEvents() {
    this.getActiveTitleElement().trigger('focus');
  }
  handleContentElementTabEvents() {}
}
exports["default"] = NestedTitleKeyboardHandler;

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/base-carousel.js":
/*!***********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base-carousel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _baseSwiper = _interopRequireDefault(__webpack_require__(/*! ./base-swiper */ "../assets/dev/js/frontend/handlers/base-swiper.js"));
class CarouselHandlerBase extends _baseSwiper.default {
  getDefaultSettings() {
    return {
      selectors: {
        carousel: `.${elementorFrontend.config.swiperClass}`,
        swiperWrapper: '.swiper-wrapper',
        slideContent: '.swiper-slide',
        swiperArrow: '.elementor-swiper-button',
        paginationWrapper: '.swiper-pagination',
        paginationBullet: '.swiper-pagination-bullet',
        paginationBulletWrapper: '.swiper-pagination-bullets'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors'),
      elements = {
        $swiperContainer: this.$element.find(selectors.carousel),
        $swiperWrapper: this.$element.find(selectors.swiperWrapper),
        $swiperArrows: this.$element.find(selectors.swiperArrow),
        $paginationWrapper: this.$element.find(selectors.paginationWrapper),
        $paginationBullets: this.$element.find(selectors.paginationBullet),
        $paginationBulletWrapper: this.$element.find(selectors.paginationBulletWrapper)
      };
    elements.$slides = elements.$swiperContainer.find(selectors.slideContent);
    return elements;
  }
  getSwiperSettings() {
    const elementSettings = this.getElementSettings(),
      slidesToShow = +elementSettings.slides_to_show || 3,
      isSingleSlide = 1 === slidesToShow,
      elementorBreakpoints = elementorFrontend.config.responsive.activeBreakpoints,
      defaultSlidesToShowMap = {
        mobile: 1,
        tablet: isSingleSlide ? 1 : 2
      };
    const swiperOptions = {
      slidesPerView: slidesToShow,
      loop: 'yes' === elementSettings.infinite,
      speed: elementSettings.speed,
      handleElementorBreakpoints: true
    };
    swiperOptions.breakpoints = {};
    let lastBreakpointSlidesToShowValue = slidesToShow;
    Object.keys(elementorBreakpoints).reverse().forEach(breakpointName => {
      // Tablet has a specific default `slides_to_show`.
      const defaultSlidesToShow = defaultSlidesToShowMap[breakpointName] ? defaultSlidesToShowMap[breakpointName] : lastBreakpointSlidesToShowValue;
      swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value] = {
        slidesPerView: +elementSettings['slides_to_show_' + breakpointName] || defaultSlidesToShow,
        slidesPerGroup: +elementSettings['slides_to_scroll_' + breakpointName] || 1
      };
      if (elementSettings.image_spacing_custom) {
        swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value].spaceBetween = this.getSpaceBetween(breakpointName);
      }
      lastBreakpointSlidesToShowValue = +elementSettings['slides_to_show_' + breakpointName] || defaultSlidesToShow;
    });
    if ('yes' === elementSettings.autoplay) {
      swiperOptions.autoplay = {
        delay: elementSettings.autoplay_speed,
        disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
      };
    }
    if (isSingleSlide) {
      swiperOptions.effect = elementSettings.effect;
      if ('fade' === elementSettings.effect) {
        swiperOptions.fadeEffect = {
          crossFade: true
        };
      }
    } else {
      swiperOptions.slidesPerGroup = +elementSettings.slides_to_scroll || 1;
    }
    if (elementSettings.image_spacing_custom) {
      swiperOptions.spaceBetween = this.getSpaceBetween();
    }
    const showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
      showPagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation || elementSettings.pagination;
    if (showArrows) {
      swiperOptions.navigation = {
        prevEl: '.elementor-swiper-button-prev',
        nextEl: '.elementor-swiper-button-next'
      };
    }
    if (showPagination) {
      swiperOptions.pagination = {
        el: `.elementor-element-${this.getID()} .swiper-pagination`,
        type: !!elementSettings.pagination ? elementSettings.pagination : 'bullets',
        clickable: true,
        renderBullet: (index, classname) => {
          return `<span class="${classname}" data-bullet-index="${index}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${index + 1}"></span>`;
        }
      };
    }
    if ('yes' === elementSettings.lazyload) {
      swiperOptions.lazy = {
        loadPrevNext: true,
        loadPrevNextAmount: 1
      };
    }
    swiperOptions.a11y = {
      enabled: true,
      prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
      nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
      firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
      lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
    };
    swiperOptions.on = {
      slideChangeTransitionEnd: () => {
        this.a11ySetSlideAriaHidden();
      },
      slideChange: () => {
        this.a11ySetPaginationTabindex();
        this.handleElementHandlers();
      },
      init: () => {
        this.a11ySetWidgetAriaDetails();
        this.a11ySetPaginationTabindex();
        this.a11ySetSlideAriaHidden('initialisation');
      }
    };
    this.applyOffsetSettings(elementSettings, swiperOptions, slidesToShow);
    return swiperOptions;
  }
  getOffsetWidth() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'offset_width', 'size', currentDevice) || 0;
  }
  applyOffsetSettings(elementSettings, swiperOptions, slidesToShow) {
    const offsetSide = elementSettings.offset_sides,
      isNestedCarouselInEditMode = elementorFrontend.isEditMode() && 'NestedCarousel' === this.constructor.name;
    if (isNestedCarouselInEditMode || !offsetSide || 'none' === offsetSide) {
      return;
    }
    const offset = this.getOffsetWidth();
    switch (offsetSide) {
      case 'right':
        this.forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow);
        this.addClassToSwiperContainer('offset-right');
        break;
      case 'left':
        this.addClassToSwiperContainer('offset-left');
        break;
      case 'both':
        this.forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow);
        this.addClassToSwiperContainer('offset-both');
        break;
    }
  }
  forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow) {
    swiperOptions.slidesPerView = slidesToShow + 0.001;
  }
  addClassToSwiperContainer(className) {
    this.getDefaultElements().$swiperContainer[0].classList.add(className);
  }
  async onInit() {
    super.onInit(...arguments);
    if (!this.elements.$swiperContainer.length || 2 > this.elements.$slides.length) {
      return;
    }
    const Swiper = elementorFrontend.utils.swiper;
    this.swiper = await new Swiper(this.elements.$swiperContainer, this.getSwiperSettings());

    // Expose the swiper instance in the frontend
    this.elements.$swiperContainer.data('swiper', this.swiper);
    const elementSettings = this.getElementSettings();
    if ('yes' === elementSettings.pause_on_hover) {
      this.togglePauseOnHover(true);
    }
  }
  bindEvents() {
    this.elements.$swiperArrows.on('keydown', this.onDirectionArrowKeydown.bind(this));
    this.elements.$paginationWrapper.on('keydown', '.swiper-pagination-bullet', this.onDirectionArrowKeydown.bind(this));
    this.elements.$swiperContainer.on('keydown', '.swiper-slide', this.onDirectionArrowKeydown.bind(this));
    this.$element.find(':focusable').on('focus', this.onFocusDisableAutoplay.bind(this));
    elementorFrontend.elements.$window.on('resize', this.getSwiperSettings.bind(this));
  }
  unbindEvents() {
    this.elements.$swiperArrows.off();
    this.elements.$paginationWrapper.off();
    this.elements.$swiperContainer.off();
    this.$element.find(':focusable').off();
    elementorFrontend.elements.$window.off('resize');
  }
  onDirectionArrowKeydown(event) {
    const isRTL = elementorFrontend.config.is_rtl,
      inlineDirectionArrows = ['ArrowLeft', 'ArrowRight'],
      currentKeydown = event.originalEvent.code,
      isDirectionInlineKeydown = -1 !== inlineDirectionArrows.indexOf(currentKeydown),
      directionStart = isRTL ? 'ArrowRight' : 'ArrowLeft',
      directionEnd = isRTL ? 'ArrowLeft' : 'ArrowRight';
    if (!isDirectionInlineKeydown) {
      return true;
    } else if (directionStart === currentKeydown) {
      this.swiper.slidePrev();
    } else if (directionEnd === currentKeydown) {
      this.swiper.slideNext();
    }
  }
  onFocusDisableAutoplay() {
    this.swiper.autoplay.stop();
  }
  updateSwiperOption(propertyName) {
    const elementSettings = this.getElementSettings(),
      newSettingValue = elementSettings[propertyName],
      params = this.swiper.params;

    // Handle special cases where the value to update is not the value that the Swiper library accepts.
    switch (propertyName) {
      case 'autoplay_speed':
        params.autoplay.delay = newSettingValue;
        break;
      case 'speed':
        params.speed = newSettingValue;
        break;
    }
    this.swiper.update();
  }
  getChangeableProperties() {
    return {
      pause_on_hover: 'pauseOnHover',
      autoplay_speed: 'delay',
      speed: 'speed',
      arrows_position: 'arrows_position' // Not a Swiper setting.
    };
  }

  onElementChange(propertyName) {
    if (0 === propertyName.indexOf('image_spacing_custom')) {
      this.updateSpaceBetween(propertyName);
      return;
    }
    const changeableProperties = this.getChangeableProperties();
    if (changeableProperties[propertyName]) {
      // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library.
      if ('pause_on_hover' === propertyName) {
        const newSettingValue = this.getElementSettings('pause_on_hover');
        this.togglePauseOnHover('yes' === newSettingValue);
      } else {
        this.updateSwiperOption(propertyName);
      }
    }
  }
  onEditSettingsChange(propertyName) {
    if ('activeItemIndex' === propertyName) {
      this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
    }
  }
  getSpaceBetween() {
    let device = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'image_spacing_custom', 'size', device) || 0;
  }
  updateSpaceBetween(propertyName) {
    const deviceMatch = propertyName.match('image_spacing_custom_(.*)'),
      device = deviceMatch ? deviceMatch[1] : 'desktop',
      newSpaceBetween = this.getSpaceBetween(device);
    if ('desktop' !== device) {
      this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[device].value].spaceBetween = newSpaceBetween;
    }
    this.swiper.params.spaceBetween = newSpaceBetween;
    this.swiper.update();
  }
  getPaginationBullets() {
    let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'array';
    const paginationBullets = this.$element.find(this.getSettings('selectors').paginationBullet);
    return 'array' === type ? Array.from(paginationBullets) : paginationBullets;
  }
  a11ySetWidgetAriaDetails() {
    const $widget = this.$element;
    $widget.attr('aria-roledescription', 'carousel');
    $widget.attr('aria-label', elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel);
  }
  a11ySetPaginationTabindex() {
    const bulletClass = this.swiper?.params.pagination.bulletClass,
      activeBulletClass = this.swiper?.params.pagination.bulletActiveClass;
    this.getPaginationBullets().forEach(bullet => {
      if (!bullet.classList?.contains(activeBulletClass)) {
        bullet.removeAttribute('tabindex');
      }
    });
    const isDirectionInlineArrowKey = 'ArrowLeft' === event?.code || 'ArrowRight' === event?.code;
    if (event?.target?.classList?.contains(bulletClass) && isDirectionInlineArrowKey) {
      this.$element.find(`.${activeBulletClass}`).trigger('focus');
    }
  }
  getSwiperWrapperTranformXValue() {
    let transformValue = this.elements.$swiperWrapper[0]?.style.transform;
    transformValue = transformValue.replace('translate3d(', '');
    transformValue = transformValue.split(',');
    transformValue = parseInt(transformValue[0].replace('px', ''));
    return !!transformValue ? transformValue : 0;
  }
  a11ySetSlideAriaHidden() {
    let status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    const currentIndex = 'initialisation' === status ? 0 : this.swiper?.activeIndex;
    if ('number' !== typeof currentIndex) {
      return;
    }
    const swiperWrapperTransformXValue = this.getSwiperWrapperTranformXValue(),
      swiperWrapperWidth = this.elements.$swiperWrapper[0].clientWidth,
      $slides = this.elements.$swiperContainer.find(this.getSettings('selectors').slideContent);
    $slides.each((index, slide) => {
      const isSlideInsideWrapper = 0 <= slide.offsetLeft + swiperWrapperTransformXValue && swiperWrapperWidth > slide.offsetLeft + swiperWrapperTransformXValue;
      if (!isSlideInsideWrapper) {
        slide.setAttribute('aria-hidden', true);
        slide.setAttribute('inert', '');
      } else {
        slide.removeAttribute('aria-hidden');
        slide.removeAttribute('inert');
      }
    });
  }

  // Empty method which can be overwritten by child methods.
  handleElementHandlers() {}
}
exports["default"] = CarouselHandlerBase;

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/base-swiper.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base-swiper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../assets/dev/js/frontend/handlers/base.js"));
class SwiperHandlerBase extends _base.default {
  getInitialSlide() {
    const editSettings = this.getEditSettings();
    return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
  }
  getSlidesCount() {
    return this.elements.$slides.length;
  }

  // This method live-handles the 'Pause On Hover' control's value being changed in the Editor Panel
  togglePauseOnHover(toggleOn) {
    if (toggleOn) {
      this.elements.$swiperContainer.on({
        mouseenter: () => {
          this.swiper.autoplay.stop();
        },
        mouseleave: () => {
          this.swiper.autoplay.start();
        }
      });
    } else {
      this.elements.$swiperContainer.off('mouseenter mouseleave');
    }
  }
  handleKenBurns() {
    const settings = this.getSettings();
    if (this.$activeImageBg) {
      this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);
    }
    this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide();
    if (this.swiper) {
      this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children('.' + settings.classes.slideBackground);
    } else {
      this.$activeImageBg = jQuery(this.elements.$slides[0]).children('.' + settings.classes.slideBackground);
    }
    this.$activeImageBg.addClass(settings.classes.kenBurnsActive);
  }
}
exports["default"] = SwiperHandlerBase;

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/base.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/base.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.ViewModule.extend({
  $element: null,
  editorListeners: null,
  onElementChange: null,
  onEditSettingsChange: null,
  onPageSettingsChange: null,
  isEdit: null,
  __construct(settings) {
    if (!this.isActive(settings)) {
      return;
    }
    this.$element = settings.$element;
    this.isEdit = this.$element.hasClass('elementor-element-edit-mode');
    if (this.isEdit) {
      this.addEditorListeners();
    }
  },
  isActive() {
    return true;
  },
  isElementInTheCurrentDocument() {
    if (!elementorFrontend.isEditMode()) {
      return false;
    }
    return elementor.documents.currentDocument.id.toString() === this.$element[0].closest('.elementor').dataset.elementorId;
  },
  findElement(selector) {
    var $mainElement = this.$element;
    return $mainElement.find(selector).filter(function () {
      // Start `closest` from parent since self can be `.elementor-element`.
      return jQuery(this).parent().closest('.elementor-element').is($mainElement);
    });
  },
  getUniqueHandlerID(cid, $element) {
    if (!cid) {
      cid = this.getModelCID();
    }
    if (!$element) {
      $element = this.$element;
    }
    return cid + $element.attr('data-element_type') + this.getConstructorID();
  },
  initEditorListeners() {
    var self = this;
    self.editorListeners = [{
      event: 'element:destroy',
      to: elementor.channels.data,
      callback(removedModel) {
        if (removedModel.cid !== self.getModelCID()) {
          return;
        }
        self.onDestroy();
      }
    }];
    if (self.onElementChange) {
      const elementType = self.getWidgetType() || self.getElementType();
      let eventName = 'change';
      if ('global' !== elementType) {
        eventName += ':' + elementType;
      }
      self.editorListeners.push({
        event: eventName,
        to: elementor.channels.editor,
        callback(controlView, elementView) {
          var elementViewHandlerID = self.getUniqueHandlerID(elementView.model.cid, elementView.$el);
          if (elementViewHandlerID !== self.getUniqueHandlerID()) {
            return;
          }
          self.onElementChange(controlView.model.get('name'), controlView, elementView);
        }
      });
    }
    if (self.onEditSettingsChange) {
      self.editorListeners.push({
        event: 'change:editSettings',
        to: elementor.channels.editor,
        callback(changedModel, view) {
          if (view.model.cid !== self.getModelCID()) {
            return;
          }
          const propName = Object.keys(changedModel.changed)[0];
          self.onEditSettingsChange(propName, changedModel.changed[propName]);
        }
      });
    }
    ['page'].forEach(function (settingsType) {
      var listenerMethodName = 'on' + settingsType[0].toUpperCase() + settingsType.slice(1) + 'SettingsChange';
      if (self[listenerMethodName]) {
        self.editorListeners.push({
          event: 'change',
          to: elementor.settings[settingsType].model,
          callback(model) {
            self[listenerMethodName](model.changed);
          }
        });
      }
    });
  },
  getEditorListeners() {
    if (!this.editorListeners) {
      this.initEditorListeners();
    }
    return this.editorListeners;
  },
  addEditorListeners() {
    var uniqueHandlerID = this.getUniqueHandlerID();
    this.getEditorListeners().forEach(function (listener) {
      elementorFrontend.addListenerOnce(uniqueHandlerID, listener.event, listener.callback, listener.to);
    });
  },
  removeEditorListeners() {
    var uniqueHandlerID = this.getUniqueHandlerID();
    this.getEditorListeners().forEach(function (listener) {
      elementorFrontend.removeListeners(uniqueHandlerID, listener.event, null, listener.to);
    });
  },
  getElementType() {
    return this.$element.data('element_type');
  },
  getWidgetType() {
    const widgetType = this.$element.data('widget_type');
    if (!widgetType) {
      return;
    }
    return widgetType.split('.')[0];
  },
  getID() {
    return this.$element.data('id');
  },
  getModelCID() {
    return this.$element.data('model-cid');
  },
  getElementSettings(setting) {
    let elementSettings = {};
    const modelCID = this.getModelCID();
    if (this.isEdit && modelCID) {
      const settings = elementorFrontend.config.elements.data[modelCID],
        attributes = settings.attributes;
      let type = attributes.widgetType || attributes.elType;
      if (attributes.isInner) {
        type = 'inner-' + type;
      }
      let settingsKeys = elementorFrontend.config.elements.keys[type];
      if (!settingsKeys) {
        settingsKeys = elementorFrontend.config.elements.keys[type] = [];
        jQuery.each(settings.controls, (name, control) => {
          if (control.frontend_available) {
            settingsKeys.push(name);
          }
        });
      }
      jQuery.each(settings.getActiveControls(), function (controlKey) {
        if (-1 !== settingsKeys.indexOf(controlKey)) {
          let value = attributes[controlKey];
          if (value.toJSON) {
            value = value.toJSON();
          }
          elementSettings[controlKey] = value;
        }
      });
    } else {
      elementSettings = this.$element.data('settings') || {};
    }
    return this.getItems(elementSettings, setting);
  },
  getEditSettings(setting) {
    var attributes = {};
    if (this.isEdit) {
      attributes = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;
    }
    return this.getItems(attributes, setting);
  },
  getCurrentDeviceSetting(settingKey) {
    return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), settingKey);
  },
  onInit() {
    if (this.isActive(this.getSettings())) {
      elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
    }
  },
  onDestroy() {
    if (this.isEdit) {
      this.removeEditorListeners();
    }
    if (this.unbindEvents) {
      this.unbindEvents();
    }
  }
});

/***/ }),

/***/ "../assets/dev/js/frontend/handlers/stretched-element.js":
/*!***************************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/stretched-element.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ "../assets/dev/js/frontend/handlers/base.js"));
class StretchedElement extends _base.default {
  getStretchedClass() {
    return 'e-stretched';
  }
  getStretchSettingName() {
    return 'stretch_element';
  }
  getStretchActiveValue() {
    return 'yes';
  }
  bindEvents() {
    const handlerID = this.getUniqueHandlerID();
    elementorFrontend.addListenerOnce(handlerID, 'resize', this.stretch);
    elementorFrontend.addListenerOnce(handlerID, 'sticky:stick', this.stretch, this.$element);
    elementorFrontend.addListenerOnce(handlerID, 'sticky:unstick', this.stretch, this.$element);
    if (elementorFrontend.isEditMode()) {
      this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this);
      elementor.channels.editor.on('kit:change:stretchContainer', this.onKitChangeStretchContainerChange);
    }
  }
  unbindEvents() {
    elementorFrontend.removeListeners(this.getUniqueHandlerID(), 'resize', this.stretch);
    if (elementorFrontend.isEditMode()) {
      elementor.channels.editor.off('kit:change:stretchContainer', this.onKitChangeStretchContainerChange);
    }
  }
  isActive(settings) {
    return elementorFrontend.isEditMode() || settings.$element.hasClass(this.getStretchedClass());
  }
  getStretchElementForConfig() {
    let childSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (childSelector) {
      return this.$element.find(childSelector);
    }
    return this.$element;
  }
  getStretchElementConfig() {
    return {
      element: this.getStretchElementForConfig(),
      selectors: {
        container: this.getStretchContainer()
      },
      considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
    };
  }
  initStretch() {
    this.stretch = this.stretch.bind(this);
    this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig());
  }
  getStretchContainer() {
    return elementorFrontend.getKitSettings('stretched_section_container') || window;
  }
  isStretchSettingEnabled() {
    return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue();
  }
  stretch() {
    if (!this.isStretchSettingEnabled()) {
      return;
    }
    this.stretchElement.stretch();
  }
  onInit() {
    if (!this.isActive(this.getSettings())) {
      return;
    }
    this.initStretch();
    super.onInit(...arguments);
    this.stretch();
  }
  onElementChange(propertyName) {
    const stretchSettingName = this.getStretchSettingName();
    if (stretchSettingName === propertyName) {
      if (this.isStretchSettingEnabled()) {
        this.stretch();
      } else {
        this.stretchElement.reset();
      }
    }
  }
  onKitChangeStretchContainerChange() {
    this.stretchElement.setSettings('selectors.container', this.getStretchContainer());
    this.stretch();
  }
}
exports["default"] = StretchedElement;

/***/ }),

/***/ "../assets/dev/js/frontend/modules.js":
/*!********************************************!*\
  !*** ../assets/dev/js/frontend/modules.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _modules = _interopRequireDefault(__webpack_require__(/*! ../modules/modules */ "../assets/dev/js/modules/modules.js"));
var _document = _interopRequireDefault(__webpack_require__(/*! ./document */ "../assets/dev/js/frontend/document.js"));
var _stretchElement = _interopRequireDefault(__webpack_require__(/*! ./tools/stretch-element */ "../assets/dev/js/frontend/tools/stretch-element.js"));
var _stretchedElement = _interopRequireDefault(__webpack_require__(/*! ./handlers/stretched-element */ "../assets/dev/js/frontend/handlers/stretched-element.js"));
var _base = _interopRequireDefault(__webpack_require__(/*! ./handlers/base */ "../assets/dev/js/frontend/handlers/base.js"));
var _baseSwiper = _interopRequireDefault(__webpack_require__(/*! ./handlers/base-swiper */ "../assets/dev/js/frontend/handlers/base-swiper.js"));
var _baseCarousel = _interopRequireDefault(__webpack_require__(/*! ./handlers/base-carousel */ "../assets/dev/js/frontend/handlers/base-carousel.js"));
var _nestedTabs = _interopRequireDefault(__webpack_require__(/*! elementor/modules/nested-tabs/assets/js/frontend/handlers/nested-tabs */ "../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js"));
var _nestedAccordion = _interopRequireDefault(__webpack_require__(/*! elementor/modules/nested-accordion/assets/js/frontend/handlers/nested-accordion */ "../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js"));
var _nestedTitleKeyboardHandler = _interopRequireDefault(__webpack_require__(/*! ./handlers/accessibility/nested-title-keyboard-handler */ "../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js"));
_modules.default.frontend = {
  Document: _document.default,
  tools: {
    StretchElement: _stretchElement.default
  },
  handlers: {
    Base: _base.default,
    StretchedElement: _stretchedElement.default,
    SwiperBase: _baseSwiper.default,
    CarouselBase: _baseCarousel.default,
    NestedTabs: _nestedTabs.default,
    NestedAccordion: _nestedAccordion.default,
    NestedTitleKeyboardHandler: _nestedTitleKeyboardHandler.default
  }
};

/***/ }),

/***/ "../assets/dev/js/frontend/tools/stretch-element.js":
/*!**********************************************************!*\
  !*** ../assets/dev/js/frontend/tools/stretch-element.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = elementorModules.ViewModule.extend({
  getDefaultSettings() {
    return {
      element: null,
      direction: elementorFrontend.config.is_rtl ? 'right' : 'left',
      selectors: {
        container: window
      },
      considerScrollbar: false,
      cssOutput: 'inline'
    };
  },
  getDefaultElements() {
    return {
      $element: jQuery(this.getSettings('element'))
    };
  },
  stretch() {
    const settings = this.getSettings();
    let $container;
    try {
      $container = jQuery(settings.selectors.container);
      // eslint-disable-next-line no-empty
    } catch (e) {}
    if (!$container || !$container.length) {
      $container = jQuery(this.getDefaultSettings().selectors.container);
    }
    this.reset();
    var $element = this.elements.$element,
      containerWidth = $container.innerWidth(),
      elementOffset = $element.offset().left,
      isFixed = 'fixed' === $element.css('position'),
      correctOffset = isFixed ? 0 : elementOffset,
      isContainerFullScreen = window === $container[0];
    if (!isContainerFullScreen) {
      var containerOffset = $container.offset().left;
      if (isFixed) {
        correctOffset = containerOffset;
      }
      if (elementOffset > containerOffset) {
        correctOffset = elementOffset - containerOffset;
      }
    }
    if (settings.considerScrollbar && isContainerFullScreen) {
      const scrollbarWidth = window.innerWidth - containerWidth;
      correctOffset -= scrollbarWidth;
    }
    if (!isFixed) {
      if (elementorFrontend.config.is_rtl) {
        correctOffset = containerWidth - ($element.outerWidth() + correctOffset);
      }
      correctOffset = -correctOffset;
    }

    // Consider margin
    if (settings.margin) {
      correctOffset += settings.margin;
    }
    var css = {};
    let width = containerWidth;
    if (settings.margin) {
      width -= settings.margin * 2;
    }
    css.width = width + 'px';
    css[settings.direction] = correctOffset + 'px';
    if ('variables' === settings.cssOutput) {
      this.applyCssVariables($element, css);
      return;
    }
    $element.css(css);
  },
  reset() {
    const css = {},
      settings = this.getSettings(),
      $element = this.elements.$element;
    if ('variables' === settings.cssOutput) {
      this.resetCssVariables($element);
      return;
    }
    css.width = '';
    css[settings.direction] = '';
    $element.css(css);
  },
  applyCssVariables($element, css) {
    $element.css('--stretch-width', css.width);
    if (!!css.left) {
      $element.css('--stretch-left', css.left);
    } else {
      $element.css('--stretch-right', css.right);
    }
  },
  resetCssVariables($element) {
    $element.css({
      '--stretch-width': '',
      '--stretch-left': '',
      '--stretch-right': ''
    });
  }
});

/***/ }),

/***/ "../assets/dev/js/frontend/utils/flex-horizontal-scroll.js":
/*!*****************************************************************!*\
  !*** ../assets/dev/js/frontend/utils/flex-horizontal-scroll.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changeScrollStatus = changeScrollStatus;
exports.setHorizontalScrollAlignment = setHorizontalScrollAlignment;
exports.setHorizontalTitleScrollValues = setHorizontalTitleScrollValues;
function changeScrollStatus(element, event) {
  if ('mousedown' === event.type) {
    element.classList.add('e-scroll');
    element.dataset.pageX = event.pageX;
  } else {
    element.classList.remove('e-scroll', 'e-scroll-active');
    element.dataset.pageX = '';
  }
}

// This function was written using this example https://codepen.io/thenutz/pen/VwYeYEE.
function setHorizontalTitleScrollValues(element, horizontalScrollStatus, event) {
  const isActiveScroll = element.classList.contains('e-scroll'),
    isHorizontalScrollActive = 'enable' === horizontalScrollStatus,
    headingContentIsWiderThanWrapper = element.scrollWidth > element.clientWidth;
  if (!isActiveScroll || !isHorizontalScrollActive || !headingContentIsWiderThanWrapper) {
    return;
  }
  event.preventDefault();
  const previousPositionX = parseFloat(element.dataset.pageX),
    mouseMoveX = event.pageX - previousPositionX,
    maximumScrollValue = 5,
    stepLimit = 20;
  let toScrollDistanceX = 0;
  if (stepLimit < mouseMoveX) {
    toScrollDistanceX = maximumScrollValue;
  } else if (stepLimit * -1 > mouseMoveX) {
    toScrollDistanceX = -1 * maximumScrollValue;
  } else {
    toScrollDistanceX = mouseMoveX;
  }
  element.scrollLeft = element.scrollLeft - toScrollDistanceX;
  element.classList.add('e-scroll-active');
}
function setHorizontalScrollAlignment(_ref) {
  let {
    element,
    direction,
    justifyCSSVariable,
    horizontalScrollStatus
  } = _ref;
  if (!element) {
    return;
  }
  if (isHorizontalScroll(element, horizontalScrollStatus)) {
    initialScrollPosition(element, direction, justifyCSSVariable);
  } else {
    element.style.setProperty(justifyCSSVariable, '');
  }
}
function isHorizontalScroll(element, horizontalScrollStatus) {
  return element.clientWidth < getChildrenWidth(element.children) && 'enable' === horizontalScrollStatus;
}
function getChildrenWidth(children) {
  let totalWidth = 0;
  const parentContainer = children[0].parentNode,
    computedStyles = getComputedStyle(parentContainer),
    gap = parseFloat(computedStyles.gap) || 0; // Get the gap value or default to 0 if it's not specified

  for (let i = 0; i < children.length; i++) {
    totalWidth += children[i].offsetWidth + gap;
  }
  return totalWidth;
}
function initialScrollPosition(element, direction, justifyCSSVariable) {
  const isRTL = elementorFrontend.config.is_rtl;
  switch (direction) {
    case 'end':
      element.style.setProperty(justifyCSSVariable, 'start');
      element.scrollLeft = isRTL ? -1 * getChildrenWidth(element.children) : getChildrenWidth(element.children);
      break;
    default:
      element.style.setProperty(justifyCSSVariable, 'start');
      element.scrollLeft = 0;
  }
}

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
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "../node_modules/core-js/modules/es.error.cause.js");
var _instanceType = _interopRequireDefault(__webpack_require__(/*! ./instance-type */ "../assets/dev/js/modules/imports/instance-type.js"));
var _isInstanceof = _interopRequireDefault(__webpack_require__(/*! ../../editor/utils/is-instanceof */ "../assets/dev/js/editor/utils/is-instanceof.js"));
class ArgsObject extends _instanceType.default {
  static getInstanceType() {
    return 'ArgsObject';
  }

  /**
   * Function constructor().
   *
   * Create ArgsObject.
   *
   * @param {{}} args
   */
  constructor(args) {
    super();
    this.args = args;
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
  requireArgument(property) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.args;
    if (!Object.prototype.hasOwnProperty.call(args, property)) {
      throw Error(`${property} is required.`);
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
  requireArgumentType(property, type) {
    let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
    this.requireArgument(property, args);
    if (typeof args[property] !== type) {
      throw Error(`${property} invalid type: ${type}.`);
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
  requireArgumentInstance(property, instance) {
    let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
    this.requireArgument(property, args);
    if (!(args[property] instanceof instance) && !(0, _isInstanceof.default)(args[property], instance)) {
      throw Error(`${property} invalid instance.`);
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
  requireArgumentConstructor(property, type) {
    let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
    this.requireArgument(property, args);

    // Note: Converting the constructor to string in order to avoid equation issues
    // due to different memory addresses between iframes (window.Object !== window.top.Object).
    if (args[property].constructor.toString() !== type.prototype.constructor.toString()) {
      throw Error(`${property} invalid constructor type.`);
    }
  }
}
exports["default"] = ArgsObject;

/***/ }),

/***/ "../assets/dev/js/modules/imports/force-method-implementation.js":
/*!***********************************************************************!*\
  !*** ../assets/dev/js/modules/imports/force-method-implementation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ForceMethodImplementation = void 0;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "../node_modules/core-js/modules/es.error.cause.js");
// TODO: Wrong location used as `elementorModules.ForceMethodImplementation(); should be` `elementorUtils.forceMethodImplementation()`;

class ForceMethodImplementation extends Error {
  constructor() {
    let info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(`${info.isStatic ? 'static ' : ''}${info.fullName}() should be implemented, please provide '${info.functionName || info.fullName}' functionality.`, args);

    // Allow to pass custom properties to the error.
    if (Object.keys(args).length) {
      // eslint-disable-next-line no-console
      console.error(args);
    }
    Error.captureStackTrace(this, ForceMethodImplementation);
  }
}
exports.ForceMethodImplementation = ForceMethodImplementation;
var _default = args => {
  const stack = Error().stack,
    caller = stack.split('\n')[2].trim(),
    callerName = caller.startsWith('at new') ? 'constructor' : caller.split(' ')[1],
    info = {};
  info.functionName = callerName;
  info.fullName = callerName;
  if (info.functionName.includes('.')) {
    const parts = info.functionName.split('.');
    info.className = parts[0];
    info.functionName = parts[1];
  } else {
    info.isStatic = true;
  }
  throw new ForceMethodImplementation(info, args);
};
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/modules/imports/instance-type.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/modules/imports/instance-type.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class InstanceType {
  static [Symbol.hasInstance](target) {
    /**
     * This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
     * its give's opportunity to mange capabilities of instanceOf operator.
     * saving current class each time will give option later to handle instanceOf manually.
     */
    let result = super[Symbol.hasInstance](target);

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
        const name = this.getInstanceType === InstanceType.getInstanceType ? 'BaseInstanceType' : this.getInstanceType();
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
  static getInstanceType() {
    elementorModules.ForceMethodImplementation();
  }
  constructor() {
    // Since anonymous classes sometimes do not get validated by babel, do it manually.
    let target = new.target;
    const prototypes = [];
    while (target.__proto__ && target.__proto__.name) {
      prototypes.push(target.__proto__);
      target = target.__proto__;
    }
    prototypes.reverse().forEach(proto => this instanceof proto);
  }
}
exports["default"] = InstanceType;

/***/ }),

/***/ "../assets/dev/js/modules/imports/module.js":
/*!**************************************************!*\
  !*** ../assets/dev/js/modules/imports/module.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "../node_modules/core-js/modules/es.error.cause.js");
const Module = function () {
  const $ = jQuery,
    instanceParams = arguments,
    self = this,
    events = {};
  let settings;
  const ensureClosureMethods = function () {
    $.each(self, function (methodName) {
      const oldMethod = self[methodName];
      if ('function' !== typeof oldMethod) {
        return;
      }
      self[methodName] = function () {
        return oldMethod.apply(self, arguments);
      };
    });
  };
  const initSettings = function () {
    settings = self.getDefaultSettings();
    const instanceSettings = instanceParams[0];
    if (instanceSettings) {
      $.extend(true, settings, instanceSettings);
    }
  };
  const init = function () {
    self.__construct.apply(self, instanceParams);
    ensureClosureMethods();
    initSettings();
    self.trigger('init');
  };
  this.getItems = function (items, itemKey) {
    if (itemKey) {
      const keyStack = itemKey.split('.'),
        currentKey = keyStack.splice(0, 1);
      if (!keyStack.length) {
        return items[currentKey];
      }
      if (!items[currentKey]) {
        return;
      }
      return this.getItems(items[currentKey], keyStack.join('.'));
    }
    return items;
  };
  this.getSettings = function (setting) {
    return this.getItems(settings, setting);
  };
  this.setSettings = function (settingKey, value, settingsContainer) {
    if (!settingsContainer) {
      settingsContainer = settings;
    }
    if ('object' === typeof settingKey) {
      $.extend(settingsContainer, settingKey);
      return self;
    }
    const keyStack = settingKey.split('.'),
      currentKey = keyStack.splice(0, 1);
    if (!keyStack.length) {
      settingsContainer[currentKey] = value;
      return self;
    }
    if (!settingsContainer[currentKey]) {
      settingsContainer[currentKey] = {};
    }
    return self.setSettings(keyStack.join('.'), value, settingsContainer[currentKey]);
  };
  this.getErrorMessage = function (type, functionName) {
    let message;
    switch (type) {
      case 'forceMethodImplementation':
        message = `The method '${functionName}' must to be implemented in the inheritor child.`;
        break;
      default:
        message = 'An error occurs';
    }
    return message;
  };

  // TODO: This function should be deleted ?.
  this.forceMethodImplementation = function (functionName) {
    throw new Error(this.getErrorMessage('forceMethodImplementation', functionName));
  };
  this.on = function (eventName, callback) {
    if ('object' === typeof eventName) {
      $.each(eventName, function (singleEventName) {
        self.on(singleEventName, this);
      });
      return self;
    }
    const eventNames = eventName.split(' ');
    eventNames.forEach(function (singleEventName) {
      if (!events[singleEventName]) {
        events[singleEventName] = [];
      }
      events[singleEventName].push(callback);
    });
    return self;
  };
  this.off = function (eventName, callback) {
    if (!events[eventName]) {
      return self;
    }
    if (!callback) {
      delete events[eventName];
      return self;
    }
    const callbackIndex = events[eventName].indexOf(callback);
    if (-1 !== callbackIndex) {
      delete events[eventName][callbackIndex];

      // Reset array index (for next off on same event).
      events[eventName] = events[eventName].filter(val => val);
    }
    return self;
  };
  this.trigger = function (eventName) {
    const methodName = 'on' + eventName[0].toUpperCase() + eventName.slice(1),
      params = Array.prototype.slice.call(arguments, 1);
    if (self[methodName]) {
      self[methodName].apply(self, params);
    }
    const callbacks = events[eventName];
    if (!callbacks) {
      return self;
    }
    $.each(callbacks, function (index, callback) {
      callback.apply(self, params);
    });
    return self;
  };
  init();
};
Module.prototype.__construct = function () {};
Module.prototype.getDefaultSettings = function () {
  return {};
};
Module.prototype.getConstructorID = function () {
  return this.constructor.name;
};
Module.extend = function (properties) {
  const $ = jQuery,
    parent = this;
  const child = function () {
    return parent.apply(this, arguments);
  };
  $.extend(child, parent);
  child.prototype = Object.create($.extend({}, parent.prototype, properties));
  child.prototype.constructor = child;
  child.__super__ = parent.prototype;
  return child;
};
module.exports = Module;

/***/ }),

/***/ "../assets/dev/js/modules/imports/utils/masonry.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/modules/imports/utils/masonry.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _viewModule = _interopRequireDefault(__webpack_require__(/*! ../view-module */ "../assets/dev/js/modules/imports/view-module.js"));
var _default = _viewModule.default.extend({
  getDefaultSettings() {
    return {
      container: null,
      items: null,
      columnsCount: 3,
      verticalSpaceBetween: 30
    };
  },
  getDefaultElements() {
    return {
      $container: jQuery(this.getSettings('container')),
      $items: jQuery(this.getSettings('items'))
    };
  },
  run() {
    var heights = [],
      distanceFromTop = this.elements.$container.position().top,
      settings = this.getSettings(),
      columnsCount = settings.columnsCount;
    distanceFromTop += parseInt(this.elements.$container.css('margin-top'), 10);
    this.elements.$items.each(function (index) {
      var row = Math.floor(index / columnsCount),
        $item = jQuery(this),
        itemHeight = $item[0].getBoundingClientRect().height + settings.verticalSpaceBetween;
      if (row) {
        var itemPosition = $item.position(),
          indexAtRow = index % columnsCount,
          pullHeight = itemPosition.top - distanceFromTop - heights[indexAtRow];
        pullHeight -= parseInt($item.css('margin-top'), 10);
        pullHeight *= -1;
        $item.css('margin-top', pullHeight + 'px');
        heights[indexAtRow] += itemHeight;
      } else {
        heights.push(itemHeight);
      }
    });
  }
});
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/modules/imports/utils/scroll.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/modules/imports/utils/scroll.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// Moved from elementor pro: 'assets/dev/js/frontend/utils'
class Scroll {
  /**
   * @param {Object}      obj
   * @param {number}      obj.sensitivity - Value between 0-100 - Will determine the intersection trigger points on the element
   * @param {Function}    obj.callback    - Will be triggered on each intersection point between the element and the viewport top/bottom
   * @param {string}      obj.offset      - Offset between the element intersection points and the viewport, written like in CSS: '-50% 0 -25%'
   * @param {HTMLElement} obj.root        - The element that the events will be relative to, if 'null' will be relative to the viewport
   */
  static scrollObserver(obj) {
    let lastScrollY = 0;

    // Generating threshholds points along the animation height
    // More threshholds points = more trigger points of the callback
    const buildThreshholds = function () {
      let sensitivityPercentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      const threshholds = [];
      if (sensitivityPercentage > 0 && sensitivityPercentage <= 100) {
        const increment = 100 / sensitivityPercentage;
        for (let i = 0; i <= 100; i += increment) {
          threshholds.push(i / 100);
        }
      } else {
        threshholds.push(0);
      }
      return threshholds;
    };
    const options = {
      root: obj.root || null,
      rootMargin: obj.offset || '0px',
      threshold: buildThreshholds(obj.sensitivity)
    };
    function handleIntersect(entries) {
      const currentScrollY = entries[0].boundingClientRect.y,
        isInViewport = entries[0].isIntersecting,
        intersectionScrollDirection = currentScrollY < lastScrollY ? 'down' : 'up',
        scrollPercentage = Math.abs(parseFloat((entries[0].intersectionRatio * 100).toFixed(2)));
      obj.callback({
        sensitivity: obj.sensitivity,
        isInViewport,
        scrollPercentage,
        intersectionScrollDirection
      });
      lastScrollY = currentScrollY;
    }
    return new IntersectionObserver(handleIntersect, options);
  }

  /**
   * @param {jQuery.Element} $element
   * @param {Object}         offsetObj
   * @param {number}         offsetObj.start - Offset start value in percentages
   * @param {number}         offsetObj.end   - Offset end value in percentages
   */
  static getElementViewportPercentage($element) {
    let offsetObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const elementOffset = $element[0].getBoundingClientRect(),
      offsetStart = offsetObj.start || 0,
      offsetEnd = offsetObj.end || 0,
      windowStartOffset = window.innerHeight * offsetStart / 100,
      windowEndOffset = window.innerHeight * offsetEnd / 100,
      y1 = elementOffset.top - window.innerHeight,
      y2 = elementOffset.top + windowStartOffset + $element.height(),
      startPosition = 0 - y1 + windowStartOffset,
      endPosition = y2 - y1 + windowEndOffset,
      percent = Math.max(0, Math.min(startPosition / endPosition, 1));
    return parseFloat((percent * 100).toFixed(2));
  }

  /**
   * @param {Object} offsetObj
   * @param {number} offsetObj.start - Offset start value in percentages
   * @param {number} offsetObj.end   - Offset end value in percentages
   * @param {number} limitPageHeight - Will limit the page height calculation
   */
  static getPageScrollPercentage() {
    let offsetObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let limitPageHeight = arguments.length > 1 ? arguments[1] : undefined;
    const offsetStart = offsetObj.start || 0,
      offsetEnd = offsetObj.end || 0,
      initialPageHeight = limitPageHeight || document.documentElement.scrollHeight - document.documentElement.clientHeight,
      heightOffset = initialPageHeight * offsetStart / 100,
      pageRange = initialPageHeight + heightOffset + initialPageHeight * offsetEnd / 100,
      scrollPos = document.documentElement.scrollTop + document.body.scrollTop + heightOffset;
    return scrollPos / pageRange * 100;
  }
}
exports["default"] = Scroll;

/***/ }),

/***/ "../assets/dev/js/modules/imports/view-module.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/modules/imports/view-module.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _module = _interopRequireDefault(__webpack_require__(/*! ./module */ "../assets/dev/js/modules/imports/module.js"));
var _default = _module.default.extend({
  elements: null,
  getDefaultElements() {
    return {};
  },
  bindEvents() {},
  onInit() {
    this.initElements();
    this.bindEvents();
  },
  initElements() {
    this.elements = this.getDefaultElements();
  }
});
exports["default"] = _default;

/***/ }),

/***/ "../assets/dev/js/modules/modules.js":
/*!*******************************************!*\
  !*** ../assets/dev/js/modules/modules.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _module = _interopRequireDefault(__webpack_require__(/*! ./imports/module */ "../assets/dev/js/modules/imports/module.js"));
var _viewModule = _interopRequireDefault(__webpack_require__(/*! ./imports/view-module */ "../assets/dev/js/modules/imports/view-module.js"));
var _argsObject = _interopRequireDefault(__webpack_require__(/*! ./imports/args-object */ "../assets/dev/js/modules/imports/args-object.js"));
var _masonry = _interopRequireDefault(__webpack_require__(/*! ./imports/utils/masonry */ "../assets/dev/js/modules/imports/utils/masonry.js"));
var _scroll = _interopRequireDefault(__webpack_require__(/*! ./imports/utils/scroll */ "../assets/dev/js/modules/imports/utils/scroll.js"));
var _forceMethodImplementation = _interopRequireDefault(__webpack_require__(/*! ./imports/force-method-implementation */ "../assets/dev/js/modules/imports/force-method-implementation.js"));
var _default = window.elementorModules = {
  Module: _module.default,
  ViewModule: _viewModule.default,
  ArgsObject: _argsObject.default,
  ForceMethodImplementation: _forceMethodImplementation.default,
  utils: {
    Masonry: _masonry.default,
    Scroll: _scroll.default
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js":
/*!**********************************************************************************************************!*\
  !*** ../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _nestedTitleKeyboardHandler = _interopRequireDefault(__webpack_require__(/*! elementor-assets-js/frontend/handlers/accessibility/nested-title-keyboard-handler */ "../assets/dev/js/frontend/handlers/accessibility/nested-title-keyboard-handler.js"));
class NestedAccordionTitleKeyboardHandler extends _nestedTitleKeyboardHandler.default {
  __construct() {
    super.__construct(...arguments);
    const config = arguments.length <= 0 ? undefined : arguments[0];
    this.toggleTitle = config.toggleTitle;
  }
  getDefaultSettings() {
    const parentSettings = super.getDefaultSettings();
    return {
      ...parentSettings,
      selectors: {
        itemTitle: '.e-n-accordion-item-title',
        itemContainer: '.e-n-accordion-item > .e-con'
      },
      ariaAttributes: {
        titleStateAttribute: 'aria-expanded',
        activeTitleSelector: '[aria-expanded="true"]'
      },
      datasets: {
        titleIndex: 'data-accordion-index'
      }
    };
  }
  handeTitleLinkEnterOrSpaceEvent(event) {
    this.toggleTitle(event);
  }
  handleContentElementEscapeEvents(event) {
    this.getActiveTitleElement().trigger('focus');
    this.toggleTitle(event);
  }
  handleTitleEscapeKeyEvents(event) {
    const detailsNode = event?.currentTarget?.parentElement,
      isOpen = detailsNode?.open;
    if (isOpen) {
      this.toggleTitle(event);
    }
  }
}
exports["default"] = NestedAccordionTitleKeyboardHandler;

/***/ }),

/***/ "../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js":
/*!***********************************************************************************!*\
  !*** ../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../assets/dev/js/frontend/handlers/base.js"));
var _nestedAccordionTitleKeyboardHandler = _interopRequireDefault(__webpack_require__(/*! ./nested-accordion-title-keyboard-handler */ "../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion-title-keyboard-handler.js"));
class NestedAccordion extends _base.default {
  constructor() {
    super(...arguments);
    this.animations = new Map();
  }
  getDefaultSettings() {
    return {
      selectors: {
        accordion: '.e-n-accordion',
        accordionContentContainers: '.e-n-accordion > .e-con',
        accordionItems: '.e-n-accordion-item',
        accordionItemTitles: '.e-n-accordion-item-title',
        accordionContent: '.e-n-accordion-item > .e-con',
        accordionWrapper: '.e-n-accordion-item'
      },
      default_state: 'expanded'
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $accordion: this.findElement(selectors.accordion),
      $contentContainers: this.findElement(selectors.accordionContentContainers),
      $accordionItems: this.findElement(selectors.accordionItems),
      $accordionTitles: this.findElement(selectors.accordionItemTitles),
      $accordionContent: this.findElement(selectors.accordionContent)
    };
  }
  onInit() {
    super.onInit(...arguments);
    if (elementorFrontend.isEditMode()) {
      this.interlaceContainers();
    }
    this.injectKeyboardHandler();
  }
  injectKeyboardHandler() {
    if ('nested-accordion.default' === this.getSettings('elementName')) {
      new _nestedAccordionTitleKeyboardHandler.default({
        $element: this.$element,
        toggleTitle: this.clickListener.bind(this)
      });
    }
  }
  interlaceContainers() {
    const {
      $contentContainers,
      $accordionItems
    } = this.getDefaultElements();
    $contentContainers.each((index, element) => {
      $accordionItems[index].appendChild(element);
    });
  }
  bindEvents() {
    this.elements.$accordionTitles.on('click', this.clickListener.bind(this));
  }
  unbindEvents() {
    this.elements.$accordionTitles.off();
  }
  clickListener(event) {
    event.preventDefault();
    const settings = this.getSettings(),
      accordionItem = event?.currentTarget?.closest(settings.selectors.accordionWrapper),
      itemSummary = accordionItem.querySelector(settings.selectors.accordionItemTitles),
      accordionContent = accordionItem.querySelector(settings.selectors.accordionContent),
      {
        max_items_expended: maxItemsExpended
      } = this.getElementSettings(),
      {
        $accordionTitles,
        $accordionItems
      } = this.elements;
    if ('one' === maxItemsExpended) {
      this.closeAllItems($accordionItems, $accordionTitles);
    }
    if (!accordionItem.open) {
      this.prepareOpenAnimation(accordionItem, itemSummary, accordionContent);
    } else {
      this.closeAccordionItem(accordionItem, itemSummary);
    }
  }
  animateItem(accordionItem, startHeight, endHeight, isOpen) {
    accordionItem.style.overflow = 'hidden';
    let animation = this.animations.get(accordionItem);
    if (animation) {
      animation.cancel();
    }
    animation = accordionItem.animate({
      height: [startHeight, endHeight]
    }, {
      duration: this.getAnimationDuration()
    });
    animation.onfinish = () => this.onAnimationFinish(accordionItem, isOpen);
    this.animations.set(accordionItem, animation);
    accordionItem.querySelector('summary')?.setAttribute('aria-expanded', isOpen);
  }
  closeAccordionItem(accordionItem, accordionItemTitle) {
    const startHeight = `${accordionItem.offsetHeight}px`,
      endHeight = `${accordionItemTitle.offsetHeight}px`;
    this.animateItem(accordionItem, startHeight, endHeight, false);
  }
  prepareOpenAnimation(accordionItem, accordionItemTitle, accordionItemContent) {
    accordionItem.style.overflow = 'hidden';
    accordionItem.style.height = `${accordionItem.offsetHeight}px`;
    accordionItem.open = true;
    window.requestAnimationFrame(() => this.openAccordionItem(accordionItem, accordionItemTitle, accordionItemContent));
  }
  openAccordionItem(accordionItem, accordionItemTitle, accordionItemContent) {
    const startHeight = `${accordionItem.offsetHeight}px`,
      endHeight = `${accordionItemTitle.offsetHeight + accordionItemContent.offsetHeight}px`;
    this.animateItem(accordionItem, startHeight, endHeight, true);
  }
  onAnimationFinish(accordionItem, isOpen) {
    accordionItem.open = isOpen;
    this.animations.set(accordionItem, null);
    accordionItem.style.height = accordionItem.style.overflow = '';
  }
  closeAllItems($items, $titles) {
    $titles.each((index, title) => {
      this.closeAccordionItem($items[index], title);
    });
  }
  getAnimationDuration() {
    const {
      size,
      unit
    } = this.getElementSettings('n_accordion_animation_duration');
    return size * ('ms' === unit ? 1 : 1000);
  }
}
exports["default"] = NestedAccordion;

/***/ }),

/***/ "../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js":
/*!*************************************************************************!*\
  !*** ../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! elementor-frontend/handlers/base */ "../assets/dev/js/frontend/handlers/base.js"));
var _flexHorizontalScroll = __webpack_require__(/*! elementor-frontend-utils/flex-horizontal-scroll */ "../assets/dev/js/frontend/utils/flex-horizontal-scroll.js");
class NestedTabs extends _base.default {
  constructor() {
    super(...arguments);
    this.resizeListenerNestedTabs = null;
  }

  /**
   * @param {string|number} tabIndex
   *
   * @return {string}
   */
  getTabTitleFilterSelector(tabIndex) {
    return `[data-tab-index="${tabIndex}"]`;
  }

  /**
   * @param {string|number} tabIndex
   *
   * @return {string}
   */
  getTabContentFilterSelector(tabIndex) {
    return `*:nth-child(${tabIndex})`;
  }

  /**
   * @param {HTMLElement} tabTitleElement
   *
   * @return {string}
   */
  getTabIndex(tabTitleElement) {
    return tabTitleElement.getAttribute('data-tab-index');
  }
  getDefaultSettings() {
    return {
      selectors: {
        widgetContainer: '.e-n-tabs',
        tabTitle: '.e-n-tab-title',
        tabContent: '.e-n-tabs-content > .e-con',
        headingContainer: '.e-n-tabs-heading',
        activeTabContentContainers: '.e-con.e-active'
      },
      classes: {
        active: 'e-active'
      },
      ariaAttributes: {
        titleStateAttribute: 'aria-selected',
        activeTitleSelector: '[aria-selected="true"]'
      },
      showTabFn: 'show',
      hideTabFn: 'hide',
      toggleSelf: false,
      hidePrevious: true,
      autoExpand: true
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $tabTitles: this.findElement(selectors.tabTitle),
      $tabContents: this.findElement(selectors.tabContent),
      $headingContainer: this.findElement(selectors.headingContainer)
    };
  }
  getKeyboardNavigationSettings() {
    return this.getSettings();
  }
  activateDefaultTab() {
    const settings = this.getSettings();
    const defaultActiveTab = this.getEditSettings('activeItemIndex') || 1,
      originalToggleMethods = {
        showTabFn: settings.showTabFn,
        hideTabFn: settings.hideTabFn
      };

    // Toggle tabs without animation to avoid jumping
    this.setSettings({
      showTabFn: 'show',
      hideTabFn: 'hide'
    });
    this.changeActiveTab(defaultActiveTab);

    // Return back original toggle effects
    this.setSettings(originalToggleMethods);
  }
  deactivateActiveTab(newTabIndex) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      activeTitleFilter = settings.ariaAttributes.activeTitleSelector,
      activeContentFilter = '.' + activeClass,
      $activeTitle = this.elements.$tabTitles.filter(activeTitleFilter),
      $activeContent = this.elements.$tabContents.filter(activeContentFilter);
    this.setTabDeactivationAttributes($activeTitle, newTabIndex);
    $activeContent.removeClass(activeClass);
    $activeContent[settings.hideTabFn](0, () => this.onHideTabContent($activeContent));
    return $activeContent;
  }
  getTitleActivationAttributes() {
    const titleStateAttribute = this.getSettings('ariaAttributes').titleStateAttribute;
    return {
      tabindex: '0',
      [titleStateAttribute]: 'true'
    };
  }
  setTabDeactivationAttributes($activeTitle) {
    const titleStateAttribute = this.getSettings('ariaAttributes').titleStateAttribute;
    $activeTitle.attr({
      tabindex: '-1',
      [titleStateAttribute]: 'false'
    });
  }
  onHideTabContent() {}
  activateTab(tabIndex) {
    const settings = this.getSettings(),
      activeClass = settings.classes.active,
      animationDuration = 'show' === settings.showTabFn ? 0 : 400;
    let $requestedTitle = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex)),
      $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(tabIndex));

    // Check if the tabIndex exists.
    if (!$requestedTitle.length) {
      // Activate the previous tab and ensure that the tab index is not less than 1.
      const previousTabIndex = Math.max(tabIndex - 1, 1);
      $requestedTitle = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(previousTabIndex));
      $requestedContent = this.elements.$tabContents.filter(this.getTabContentFilterSelector(previousTabIndex));
    }
    $requestedTitle.attr(this.getTitleActivationAttributes());
    $requestedContent.addClass(activeClass);
    $requestedContent[settings.showTabFn](animationDuration, () => this.onShowTabContent($requestedContent));
  }
  onShowTabContent($requestedContent) {
    elementorFrontend.elements.$window.trigger('elementor-pro/motion-fx/recalc');
    elementorFrontend.elements.$window.trigger('elementor/nested-tabs/activate', $requestedContent);
    elementorFrontend.elements.$window.trigger('elementor/bg-video/recalc');
  }
  isActiveTab(tabIndex) {
    return 'true' === this.elements.$tabTitles.filter('[data-tab-index="' + tabIndex + '"]').attr(this.getSettings('ariaAttributes').titleStateAttribute);
  }
  onTabClick(event) {
    event.preventDefault();
    this.changeActiveTab(event.currentTarget?.getAttribute('data-tab-index'), true);
  }
  getTabEvents() {
    return {
      click: this.onTabClick.bind(this)
    };
  }
  getHeadingEvents() {
    const navigationWrapper = this.elements.$headingContainer[0];
    return {
      mousedown: _flexHorizontalScroll.changeScrollStatus.bind(this, navigationWrapper),
      mouseup: _flexHorizontalScroll.changeScrollStatus.bind(this, navigationWrapper),
      mouseleave: _flexHorizontalScroll.changeScrollStatus.bind(this, navigationWrapper),
      mousemove: _flexHorizontalScroll.setHorizontalTitleScrollValues.bind(this, navigationWrapper, this.getHorizontalScrollSetting())
    };
  }
  bindEvents() {
    this.elements.$tabTitles.on(this.getTabEvents());
    this.elements.$headingContainer.on(this.getHeadingEvents());
    const settingsObject = {
      element: this.elements.$headingContainer[0],
      direction: this.getTabsDirection(),
      justifyCSSVariable: '--n-tabs-heading-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
    this.resizeListenerNestedTabs = _flexHorizontalScroll.setHorizontalScrollAlignment.bind(this, settingsObject);
    elementorFrontend.elements.$window.on('resize', this.resizeListenerNestedTabs);
    elementorFrontend.elements.$window.on('resize', this.setTouchMode.bind(this));
    elementorFrontend.elements.$window.on('elementor/nested-tabs/activate', this.reInitSwipers);
    elementorFrontend.elements.$window.on('elementor/nested-elements/activate-by-keyboard', this.changeActiveTabByKeyboard.bind(this));
  }
  unbindEvents() {
    this.elements.$tabTitles.off();
    this.elements.$headingContainer.off();
    this.elements.$tabContents.children().off();
    elementorFrontend.elements.$window.off('resize');
    elementorFrontend.elements.$window.off('elementor/nested-tabs/activate');
  }

  /**
   * Fixes issues where Swipers that have been initialized while a tab is not visible are not properly rendered
   * and when switching to the tab the swiper will not respect any of the chosen `autoplay` related settings.
   *
   * This is triggered when switching to a nested tab, looks for Swipers in the tab content and reinitializes them.
   *
   * @param {Object} event   - Incoming event.
   * @param {Object} content - Active nested tab dom element.
   */
  reInitSwipers(event, content) {
    const swiperElements = content.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
    for (const element of swiperElements) {
      if (!element.swiper) {
        return;
      }
      element.swiper.initialized = false;
      element.swiper.init();
    }
  }
  onInit() {
    super.onInit(...arguments);
    if (this.getSettings('autoExpand')) {
      this.activateDefaultTab();
    }
    const settingsObject = {
      element: this.elements.$headingContainer[0],
      direction: this.getTabsDirection(),
      justifyCSSVariable: '--n-tabs-heading-justify-content',
      horizontalScrollStatus: this.getHorizontalScrollSetting()
    };
    (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);
    this.setTouchMode();
    if ('nested-tabs.default' === this.getSettings('elementName')) {
      new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings());
    }
  }
  onEditSettingsChange(propertyName, value) {
    if ('activeItemIndex' === propertyName) {
      this.changeActiveTab(value, false);
    }
  }
  onElementChange(propertyName) {
    if (this.checkSliderPropsToWatch(propertyName)) {
      const settingsObject = {
        element: this.elements.$headingContainer[0],
        direction: this.getTabsDirection(),
        justifyCSSVariable: '--n-tabs-heading-justify-content',
        horizontalScrollStatus: this.getHorizontalScrollSetting()
      };
      (0, _flexHorizontalScroll.setHorizontalScrollAlignment)(settingsObject);
    }
  }
  checkSliderPropsToWatch(propertyName) {
    return 0 === propertyName.indexOf('horizontal_scroll') || 'breakpoint_selector' === propertyName || 0 === propertyName.indexOf('tabs_justify_horizontal') || 0 === propertyName.indexOf('tabs_title_space_between');
  }

  /**
   * @param {string}  tabIndex
   * @param {boolean} fromUser - Whether the call is caused by the user or internal.
   */
  changeActiveTab(tabIndex) {
    let fromUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    // `document/repeater/select` is used only in the editor, only when the element
    // is in the currently-edited document, and only when its not internal call,
    if (fromUser && this.isEdit && this.isElementInTheCurrentDocument()) {
      return window.top.$e.run('document/repeater/select', {
        container: elementor.getContainer(this.$element.attr('data-id')),
        index: parseInt(tabIndex)
      });
    }
    const isActiveTab = this.isActiveTab(tabIndex),
      settings = this.getSettings();
    if ((settings.toggleSelf || !isActiveTab) && settings.hidePrevious) {
      this.deactivateActiveTab(tabIndex);
    }
    if (!settings.hidePrevious && isActiveTab) {
      this.deactivateActiveTab(tabIndex);
    }
    if (!isActiveTab) {
      if (this.isAccordionVersion()) {
        this.activateMobileTab(tabIndex);
        return;
      }
      this.activateTab(tabIndex);
    }
  }
  changeActiveTabByKeyboard(event, settings) {
    if (settings.widgetId.toString() !== this.getID().toString()) {
      return;
    }
    this.changeActiveTab(settings.titleIndex, true);
  }
  activateMobileTab(tabIndex) {
    // Timeout time added to ensure that opening of the active tab starts after closing the other tab on Apple devices.
    setTimeout(() => {
      this.activateTab(tabIndex);
      this.forceActiveTabToBeInViewport(tabIndex);
    }, 10);
  }
  forceActiveTabToBeInViewport(tabIndex) {
    if (!elementorFrontend.isEditMode()) {
      return;
    }
    const $activeTabTitle = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(tabIndex));
    if (!elementor.helpers.isInViewport($activeTabTitle[0])) {
      $activeTabTitle[0].scrollIntoView({
        block: 'center'
      });
    }
  }
  getActiveClass() {
    const settings = this.getSettings();
    return settings.classes.active;
  }
  getTabsDirection() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'tabs_justify_horizontal', '', currentDevice);
  }
  getHorizontalScrollSetting() {
    const currentDevice = elementorFrontend.getCurrentDeviceMode();
    return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), 'horizontal_scroll', '', currentDevice);
  }
  isAccordionVersion() {
    return 'contents' === this.elements.$headingContainer.css('display');
  }
  setTouchMode() {
    const widgetSelector = this.getSettings('selectors').widgetContainer;
    if (elementorFrontend.isEditMode() || 'resize' === event?.type) {
      const responsiveDevices = ['mobile', 'mobile_extra', 'tablet', 'tablet_extra'],
        currentDevice = elementorFrontend.getCurrentDeviceMode();
      if (-1 !== responsiveDevices.indexOf(currentDevice)) {
        this.$element.find(widgetSelector).attr('data-touch-mode', 'true');
        return;
      }
    } else if ('ontouchstart' in window) {
      this.$element.find(widgetSelector).attr('data-touch-mode', 'true');
      return;
    }
    this.$element.find(widgetSelector).attr('data-touch-mode', 'false');
  }
}
exports["default"] = NestedTabs;

/***/ }),

/***/ "../node_modules/core-js/internals/a-callable.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-built-in.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "../node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-global-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-clear.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-clear.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-install.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-install.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var clearErrorStack = __webpack_require__(/*! ../internals/error-stack-clear */ "../node_modules/core-js/internals/error-stack-clear.js");
var ERROR_STACK_INSTALLABLE = __webpack_require__(/*! ../internals/error-stack-installable */ "../node_modules/core-js/internals/error-stack-installable.js");

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/error-stack-installable.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/error-stack-installable.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-apply.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/function-apply.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-native.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-call.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-name.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-method.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ "../node_modules/core-js/internals/has-own-property.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/install-error-cause.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/install-error-cause.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "../node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-callable.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-null-or-undefined.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/length-of-array-like.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/make-built-in.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "../node_modules/core-js/internals/math-trunc.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "../node_modules/core-js/internals/normalize-string-argument.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/normalize-string-argument.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-is-prototype-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ "../node_modules/core-js/internals/function-uncurry-this-accessor.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/proxy-accessor.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/proxy-accessor.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../node_modules/core-js/internals/symbol-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "../node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../node_modules/core-js/internals/to-string.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-string.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/try-to-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "../node_modules/core-js/internals/weak-map-basic-detection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/internals/wrap-error-constructor-with-cause.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var proxyAccessor = __webpack_require__(/*! ../internals/proxy-accessor */ "../node_modules/core-js/internals/proxy-accessor.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../node_modules/core-js/internals/inherit-if-required.js");
var normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ "../node_modules/core-js/internals/normalize-string-argument.js");
var installErrorCause = __webpack_require__(/*! ../internals/install-error-cause */ "../node_modules/core-js/internals/install-error-cause.js");
var installErrorStack = __webpack_require__(/*! ../internals/error-stack-install */ "../node_modules/core-js/internals/error-stack-install.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.error.cause.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.error.cause.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "../node_modules/core-js/internals/function-apply.js");
var wrapErrorConstructorWithCause = __webpack_require__(/*! ../internals/wrap-error-constructor-with-cause */ "../node_modules/core-js/internals/wrap-error-constructor-with-cause.js");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("../assets/dev/js/frontend/modules.js"));
/******/ }
]);
//# sourceMappingURL=frontend-modules.js.map