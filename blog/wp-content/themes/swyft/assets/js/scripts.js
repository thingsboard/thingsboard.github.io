/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csGetCookie: () => (/* binding */ csGetCookie),
/* harmony export */   csSetCookie: () => (/* binding */ csSetCookie),
/* harmony export */   csco: () => (/* binding */ csco),
/* harmony export */   isInViewport: () => (/* binding */ isInViewport),
/* harmony export */   slideDown: () => (/* binding */ slideDown),
/* harmony export */   slideToggle: () => (/* binding */ slideToggle),
/* harmony export */   slideUp: () => (/* binding */ slideUp)
/* harmony export */ });
// Create csco object.
var csco = {
  addAction: function addAction(x, y, z) {
    return;
  }
};
if ('undefined' !== typeof wp && 'undefined' !== typeof wp.hooks) {
  csco.addAction = wp.hooks.addAction;
}

/**
 * isInViewport
 */

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return rect.top <= windowHeight && rect.top + rect.height >= 0 && rect.left <= windowWidth && rect.left + rect.width >= 0;
}

/**
 * slideDown \ slideUp \ slideToggle
 */

function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 350;
  element.style.display = 'block';
  element.style.overflow = 'hidden';
  var height = element.scrollHeight;
  element.style.height = 0;
  setTimeout(function () {
    element.style.transition = "height ".concat(duration, "ms");
    element.style.height = height + 'px';
    element.addEventListener('transitionend', function te() {
      element.removeEventListener('transitionend', te);
      element.style.removeProperty('height');
      element.style.removeProperty('transition');
      element.style.removeProperty('overflow');
    });
  }, 0);
}
function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 350;
  element.style.height = element.offsetHeight + 'px';
  element.style.overflow = 'hidden';
  setTimeout(function () {
    element.style.transition = "height ".concat(duration, "ms");
    element.style.height = '0';
    element.addEventListener('transitionend', function te() {
      element.removeEventListener('transitionend', te);
      if (element.style.height === '0px') {
        element.style.display = 'none';
      }
      element.style.removeProperty('height');
      element.style.removeProperty('transition');
      element.style.removeProperty('overflow');
    });
  }, 0);
}
function slideToggle(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 350;
  if (window.getComputedStyle(element).display === 'none') {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
}

/**
 * Cookies
 */
function csGetCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function csSetCookie(name, value) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  props = {
    path: '/'
  };
  if (props.expires instanceof Date) {
    props.expires = props.expires.toUTCString();
  }
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (var optionKey in props) {
    updatedCookie += "; " + optionKey;
    var optionValue = props[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Header Scroll Scheme */

document.addEventListener('DOMContentLoaded', function () {
  var transitionTimer;
  document.addEventListener('nav-stick', function (event) {
    if (document.body.classList.contains('cs-display-header-overlay')) {
      var headerSmart = document.querySelector('.cs-navbar-smart-enabled .cs-header, .cs-navbar-sticky-enabled .cs-header');
      var headerAlt = headerSmart.querySelector('.cs-container');
      headerAlt.classList.add("cs-header-elements-no-transition");
      clearTimeout(transitionTimer);
      transitionTimer = setTimeout(function () {
        headerAlt.classList.remove("cs-header-elements-no-transition");
      }, 300);
    }
  });
  document.addEventListener('nav-unstick', function (event) {
    if (document.body.classList.contains('cs-display-header-overlay')) {
      var headerSmart = document.querySelector('.cs-navbar-smart-enabled .cs-header, .cs-navbar-sticky-enabled .cs-header');
      var headerAlt = headerSmart.querySelector('.cs-container');
      headerAlt.classList.add("cs-header-elements-no-transition");
      clearTimeout(transitionTimer);
      transitionTimer = setTimeout(function () {
        headerAlt.classList.remove("cs-header-elements-no-transition");
      }, 300);
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Header Smart Streatch */

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('header-smart-stretch-scroll-sticky-scroll-init', function (event) {
    var headerParams = event.detail;
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      var headerSmart = document.querySelector('.cs-navbar-smart-enabled .cs-header, .cs-navbar-sticky-enabled .cs-header');
      headerParams.headerSmartPosition = headerSmart ? headerSmart.offsetTop : 0;
      if (scrolled > headerParams.smartStart + headerParams.scrollPoint + 10 && scrolled > headerParams.scrollPrev) {
        if (scrolled > headerParams.smartStart + headerParams.headerLargeHeight + 200) {
          document.dispatchEvent(new CustomEvent('sticky-nav-hide', {
            detail: headerParams
          }));
        }
      } else {
        if (headerParams.scrollUpAmount >= headerParams.scrollPoint || scrolled === 0) {
          document.dispatchEvent(new CustomEvent('sticky-nav-visible', {
            detail: headerParams
          }));
        }
      }
      if (scrolled > headerParams.smartStart + headerParams.headerLargeHeight) {
        document.dispatchEvent(new CustomEvent('nav-stick', {
          detail: headerParams
        }));
      } else if (headerParams.headerSmartPosition <= headerParams.smartStart) {
        document.dispatchEvent(new CustomEvent('nav-unstick', {
          detail: headerParams
        }));
      }
      if (scrolled < headerParams.scrollPrev) {
        headerParams.scrollUpAmount += headerParams.scrollPrev - scrolled;
      } else {
        headerParams.scrollUpAmount = 0;
      }
      var wpAdminBar = document.querySelector('#wpadminbar');
      if (wpAdminBar && window.innerWidth <= 600 && scrolled >= headerParams.wpAdminBarHeight) {
        document.dispatchEvent(new CustomEvent('adminbar-mobile-scrolled', {
          detail: headerParams
        }));
      } else {
        document.dispatchEvent(new CustomEvent('adminbar-mobile-no-scrolled', {
          detail: headerParams
        }));
      }
      headerParams.scrollPrev = scrolled;
    });
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/** ----------------------------------------------------------------------------
 * Hero */


(function () {
  var section = 'cs-hero-type-1';
  var sliders = document.querySelectorAll(".".concat(section, "__slider"));
  if (sliders.length === 0) {
    return;
  }
  var executed = false;
  var initHero = function initHero() {
    if (!executed && (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.isInViewport)(sliders[0])) {
      executed = true;
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
      script.onload = function () {
        function setParallaxAttributes(element, duration) {
          element.setAttribute('data-swiper-parallax-x', '-400');
          element.setAttribute('data-swiper-parallax-duration', duration);
        }
        sliders.forEach(function (slider) {
          // Section data
          var autoplayValue = slider.getAttribute('data-cs-autoplay');
          var autoplayDelayValue = slider.getAttribute('data-cs-autoplay-delay');
          var parallaxValue = slider.getAttribute('data-cs-parallax');
          var gapValue = slider.getAttribute('data-cs-gap');
          var postContentContainer = '.cs-entry__content';

          // Data manipulation
          var autoplayDelay = !isNaN(parseInt(autoplayDelayValue)) ? parseInt(autoplayDelayValue) : 5000;
          var autoplay = autoplayValue ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          } : false;
          var parallax = !!parallaxValue ? true : false;
          var gap = !isNaN(parseInt(gapValue)) ? parseInt(gapValue) : 0;
          var postContents = slider.querySelectorAll(postContentContainer);
          if (parallax) {
            if (postContents.length > 0) {
              postContents.forEach(function (postContent) {
                setParallaxAttributes(postContent, '800');
              });
            }
          }

          // Swiper settings
          var wrapperClass = "".concat(section, "__wrapper");
          var slideClass = "".concat(section, "__item");
          var prevEl = slider.querySelector(".".concat(section, "__button-prev"));
          var nextEl = slider.querySelector(".".concat(section, "__button-next"));
          var paginationContainer = slider.querySelector(".".concat(section, "__pagination"));
          var bulletClass = "".concat(section, "__pagination-bullet");
          var bulletClassActive = "".concat(section, "__pagination-bullet-active");
          new Swiper(slider, {
            scrollbar: false,
            wrapperClass: wrapperClass,
            slideClass: slideClass,
            direction: 'horizontal',
            loop: true,
            speed: 800,
            parallax: parallax,
            autoplay: autoplay,
            slidesPerView: 1,
            spaceBetween: gap,
            a11y: {
              slideRole: 'article',
              slideLabelMessage: 'Slide {{index}} of {{slidesLength}}'
            },
            pagination: {
              el: paginationContainer,
              clickable: true,
              bulletElement: 'span',
              bulletClass: bulletClass,
              bulletActiveClass: bulletClassActive
            },
            navigation: {
              nextEl: nextEl,
              prevEl: prevEl
            },
            on: {
              init: function init() {
                var _this = this;
                setTimeout(function () {
                  var initialSlide = _this.slides[_this.activeIndex];
                  if (initialSlide) {
                    var initialContent = initialSlide.querySelector(postContentContainer);
                    if (initialContent) {
                      initialContent.style.transform = 'none';
                    }
                  }
                }, 100);
              },
              slideChange: function slideChange() {
                var currentSlide = this.slides[this.activeIndex];
                postContents.forEach(function (postContent) {
                  if (postContent === currentSlide.querySelector(postContentContainer)) {
                    postContent.style.transform = 'none';
                  }
                });
              }
            }
          });
        });
      };
      head.appendChild(script);
    }
  };
  document.addEventListener('DOMContentLoaded', function () {
    initHero();
  });
  window.addEventListener('resize', function () {
    initHero();
  });
  window.addEventListener('scroll', function () {
    initHero();
  });
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/**
 * AJAX Load More.
 *
 * Contains functions for AJAX Load More.
 */

if (typeof window.load_more_query === 'undefined') {
  window.load_more_query = [];
}

// Get next posts
function csco_ajax_get_posts(object) {
  var container = object.closest('.cs-posts-area');
  var settings = JSON.parse(object.dataset.settings);
  var page = parseInt(object.dataset.page);
  object.dataset.loading = true;

  // Set button text to Load More.
  object.textContent = settings.translation.loading;
  var data = {
    action: 'csco_ajax_load_more',
    page: page,
    posts_per_page: settings.posts_per_page,
    query_data: settings.query_data,
    attributes: settings.attributes,
    options: settings.options,
    _ajax_nonce: settings.nonce
  };

  // Request Url.
  var csco_pagination_url = settings.type === 'ajax_restapi' ? settings.rest_url : settings.url;
  function encodeFormData(data) {
    return Object.keys(data).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');
  }
  fetch(csco_pagination_url, {
    method: 'POST',
    body: encodeFormData(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    if (res.success) {
      var dataContent = document.createElement('div');
      dataContent.innerHTML = res.data.content;
      if (dataContent.children.length) {
        // WP Post Load trigger. This might need more logic for your specific use-case.
        document.body.dispatchEvent(new Event('post-load'));

        // Reinit Facebook widgets.
        if (document.querySelector('#fb-root') && typeof FB !== 'undefined') {
          FB.XFBML.parse();
        }

        // Set button text to Load More.
        object.textContent = settings.translation.load_more;

        // Increment a page.
        page += 1;
        object.dataset.page = page.toString();

        // Reset the loading state.
        object.dataset.loading = "false";

        // Append new content to the container
        var mainContainer = container.querySelector('.cs-posts-area__main');
        while (dataContent.firstChild) {
          mainContainer.appendChild(dataContent.firstChild);
        }
      }

      // Remove Button on Posts End.
      if (res.data.posts_end) {
        // Remove Load More button.
        object.parentNode.removeChild(object);
      }
    }
  })["catch"](function (error) {
    console.error('Error fetching posts:', error);
  });
}
function csco_load_more_init(infinite) {
  var areas = document.querySelectorAll('.cs-posts-area');
  areas.forEach(function (area) {
    if (area.dataset.init) {
      return;
    }
    var csco_ajax_settings;
    var archive_data = area.dataset.postsArea;
    if (archive_data) {
      csco_ajax_settings = JSON.parse(window.atob(archive_data));
    } else if (typeof csco_ajax_pagination !== 'undefined' && typeof archive_data === 'undefined') {
      csco_ajax_settings = csco_ajax_pagination;
    }
    if (csco_ajax_settings) {
      if (!infinite && csco_ajax_settings.infinite_load) {
        return;
      }
      var pagination = document.createElement('div');
      pagination.className = 'cs-posts-area__pagination';
      var btn = document.createElement('button');
      btn.className = 'cs-load-more';
      btn.textContent = csco_ajax_settings.translation.load_more;
      pagination.appendChild(btn);
      area.appendChild(pagination);
      btn.dataset.settings = JSON.stringify(csco_ajax_settings);
      btn.dataset.page = '2';
      btn.dataset.loading = "false";
      btn.dataset.scrollHandling = JSON.stringify({
        allow: JSON.parse(csco_ajax_settings.infinite_load),
        delay: 400
      });
    }
    area.dataset.init = true;
  });
}
csco_load_more_init(true);

// Elementor Init
window.addEventListener('elementor/frontend/init', function () {
  csco_load_more_init(true);
});

// On Scroll Event.
window.addEventListener('scroll', function () {
  var buttons = document.querySelectorAll('.cs-posts-area .cs-load-more');
  buttons.forEach(function (btn) {
    var loading = btn.dataset.loading === "true";
    var scrollHandling = JSON.parse(btn.dataset.scrollHandling || '{}');
    if (loading || !scrollHandling.allow) {
      return;
    }
    scrollHandling.allow = false;
    btn.dataset.scrollHandling = JSON.stringify(scrollHandling);
    setTimeout(function () {
      scrollHandling.allow = true;
      btn.dataset.scrollHandling = JSON.stringify(scrollHandling);
    }, scrollHandling.delay);
    var offset = btn.getBoundingClientRect().top - window.innerHeight;
    if (offset < 4000) {
      csco_ajax_get_posts(btn);
    }
  });
});

// On Click Event.
document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('cs-load-more')) {
    var loading = event.target.dataset.loading === "true";
    if (!loading) {
      csco_ajax_get_posts(event.target);
    }
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** ----------------------------------------------------------------------------
 * Navigation */
var CscoNavigation = /*#__PURE__*/function () {
  function CscoNavigation() {
    _classCallCheck(this, CscoNavigation);
    this.headerParams = {
      headerLargeHeight: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-initial-height')),
      headerCompactHeight: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')),
      headerSmart: document.querySelector('.cs-navbar-smart-enabled .cs-header, .cs-navbar-sticky-enabled .cs-header'),
      wpAdminBar: document.querySelector('#wpadminbar'),
      headerBefore: document.querySelector('.cs-header-before'),
      headerStretch: document.querySelector('.cs-navbar-smart-enabled .cs-header-stretch'),
      wpAdminBarHeight: null,
      smartStart: null,
      scrollPoint: 200,
      scrollPrev: 200,
      scrollUpAmount: 0,
      headerSmartPosition: 0
    };
    this.initialize();
  }
  _createClass(CscoNavigation, [{
    key: "initialize",
    value: function initialize() {
      if (document.body.classList.contains('wp-admin')) {
        return;
      }
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      document.addEventListener('DOMContentLoaded', function () {
        _this.smartLevels();
        _this.adaptTablet();
        _this.stickyScroll();
        _this.headerClassesChange();
      });
      window.addEventListener('resize', function () {
        _this.smartLevels();
        _this.adaptTablet();
        _this.stickyScroll();
      });
    }
  }, {
    key: "smartLevels",
    value: function smartLevels() {
      var windowWidth = window.innerWidth;

      // Reset Calc.
      document.querySelectorAll('.cs-header__nav-inner li').forEach(function (el) {
        el.classList.remove('cs-sm__level', 'cs-sm-position-left', 'cs-sm-position-right');
      });
      document.querySelectorAll('.cs-header__nav-inner li .sub-menu').forEach(function (el) {
        el.classList.remove('cs-mm__position-init');
      });

      // Set Settings.
      document.querySelectorAll('.cs-header__nav-inner > li.menu-item:not(.cs-mm)').forEach(function (parent) {
        var position = 'cs-sm-position-right'; //default
        var objPrevWidth = 0;
        parent.querySelectorAll('.sub-menu').forEach(function (el) {
          // Reset child levels.
          if (el.parentElement.nextElementSibling) {
            el.parentElement.nextElementSibling.classList.add('cs-sm__level');
          }
          if (el.parentElement.classList.contains('cs-sm__level')) {
            el.parentElement.classList.remove('cs-mm-level');
            position = 'cs-sm-position-right'; //reset
            objPrevWidth = 0;
          }

          // Find out position items.
          var offset = el.getBoundingClientRect().left;
          if (position === 'cs-sm-position-right' && el.offsetWidth + offset > windowWidth) {
            position = 'cs-sm-position-left';
          }
          if (position === 'cs-sm-position-left' && offset - (el.offsetWidth + objPrevWidth) < 0) {
            position = 'cs-sm-position-right';
          }
          objPrevWidth = el.offsetWidth;
          el.classList.add('cs-sm-position-init');
          el.parentElement.classList.add(position);
        });
      });
    }
  }, {
    key: "adaptTablet",
    value: function adaptTablet() {
      // Click outside.
      document.addEventListener('touchstart', function (e) {
        if (!e.target.closest('.cs-header__nav-inner')) {
          document.querySelectorAll('.cs-header__nav-inner .menu-item-has-children').forEach(function (el) {
            el.classList.remove('submenu-visible');
          });
        } else {
          var parentMenuItem = e.target.closest('.menu-item');
          if (parentMenuItem) {
            if (parentMenuItem.previousElementSibling) {
              parentMenuItem.previousElementSibling.querySelectorAll('.menu-item').forEach(function (el) {
                el.classList.remove('submenu-visible');
              });
            }
            if (parentMenuItem.nextElementSibling) {
              parentMenuItem.nextElementSibling.classList.remove('submenu-visible');
            }
          }
        }
      });
      document.querySelectorAll('.cs-header__nav-inner .menu-item-has-children').forEach(function (el) {
        // Reset class.
        el.classList.remove('submenu-visible');

        // Remove expanded if exists.
        var expandedElem = el.querySelector('a > .expanded');
        if (expandedElem) {
          expandedElem.remove();
        }

        // Add a caret.
        if ('ontouchstart' in document.documentElement) {
          var aTag = el.querySelector('a');
          if (aTag) {
            var span = document.createElement('span');
            span.className = 'expanded';
            aTag.appendChild(span);
          }
        }

        // Check touch device.
        if ('ontouchstart' in document.documentElement) {
          el.classList.add('touch-device');
        }
        var expandedElement = el.querySelector('a .expanded');
        if (expandedElement) {
          expandedElement.addEventListener('touchstart', function (e) {
            e.preventDefault();
            el.classList.toggle('submenu-visible');
          }, {
            passive: true
          });
        }
        var anchor = el.querySelector('a');
        if (anchor && anchor.getAttribute('href') === '#') {
          anchor.addEventListener('touchstart', function (e) {
            e.preventDefault();
            if (!e.target.classList.contains('expanded')) {
              el.classList.toggle('submenu-visible');
            }
          }, {
            passive: true
          });
        }
      });
    }
  }, {
    key: "stickyScroll",
    value: function stickyScroll() {
      var _this2 = this;
      this.headerParams = {
        headerLargeHeight: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-initial-height')),
        headerCompactHeight: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height')),
        headerSmart: document.querySelector('.cs-navbar-smart-enabled .cs-header, .cs-navbar-sticky-enabled .cs-header'),
        wpAdminBar: document.querySelector('#wpadminbar'),
        headerBefore: document.querySelector('.cs-header-before'),
        headerStretch: document.querySelector('.cs-navbar-smart-enabled .cs-header-stretch'),
        wpAdminBarHeight: null,
        smartStart: null,
        scrollPoint: 200,
        scrollPrev: 200,
        scrollUpAmount: 0,
        headerSmartPosition: 0
      };
      this.headerParams.wpAdminBarHeight = this.headerParams.wpAdminBar ? this.headerParams.wpAdminBar.offsetHeight : 0;
      if (this.headerParams.headerBefore) {
        this.headerParams.smartStart = this.headerParams.headerBefore.offsetTop;
      } else {
        this.headerParams.smartStart = this.headerParams.wpAdminBarHeight + (this.headerParams.headerSmart ? this.headerParams.headerSmart.offsetTop : 0);
      }
      window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;
        _this2.headerParams.headerSmartPosition = _this2.headerParams.headerSmart ? _this2.headerParams.headerSmart.offsetTop : 0;
        if (scrolled > _this2.headerParams.smartStart + _this2.headerParams.scrollPoint + 10 && scrolled > _this2.headerParams.scrollPrev) {
          if (scrolled > _this2.headerParams.smartStart + _this2.headerParams.headerCompactHeight + 200) {
            document.dispatchEvent(new Event('sticky-nav-hide'));
          }
        } else {
          if (_this2.headerParams.scrollUpAmount >= _this2.headerParams.scrollPoint || scrolled === 0) {
            document.dispatchEvent(new Event('sticky-nav-visible'));
          }
        }
        if (_this2.headerParams.headerSmart) {
          if (scrolled > _this2.headerParams.smartStart + _this2.headerParams.headerCompactHeight) {
            document.dispatchEvent(new Event('nav-stick', {
              detail: _this2.headerParams
            }));
          } else if (_this2.headerParams.headerSmartPosition <= _this2.headerParams.smartStart) {
            document.dispatchEvent(new Event('nav-unstick', {
              detail: _this2.headerParams
            }));
          }
        }
        if (scrolled < _this2.headerParams.scrollPrev) {
          _this2.headerParams.scrollUpAmount += _this2.headerParams.scrollPrev - scrolled;
        } else {
          _this2.headerParams.scrollUpAmount = 0;
        }
        if (_this2.headerParams.wpAdminBar && window.innerWidth <= 600 && scrolled >= _this2.headerParams.wpAdminBarHeight) {
          document.dispatchEvent(new Event('adminbar-mobile-scrolled'));
        } else {
          document.dispatchEvent(new Event('adminbar-mobile-no-scrolled'));
        }
        _this2.headerParams.scrollPrev = scrolled;
      });
    }
  }, {
    key: "headerClassesChange",
    value: function headerClassesChange() {
      var _this3 = this;
      document.addEventListener("sticky-nav-visible", function (event) {
        _this3.headerParams.headerSmart.classList.add('cs-header-smart-visible');
      });
      document.addEventListener("sticky-nav-hide", function (event) {
        _this3.headerParams.headerSmart.classList.remove('cs-header-smart-visible');
      });
      document.addEventListener("nav-stick", function (event) {
        _this3.headerParams.headerSmart.classList.add('cs-scroll-sticky');
      });
      document.addEventListener("nav-unstick", function (event) {
        _this3.headerParams.headerSmart.classList.remove('cs-scroll-sticky', 'cs-header-smart-visible');
      });
      document.addEventListener("adminbar-mobile-scrolled", function (event) {
        document.body.classList.add('cs-adminbar-mobile-scrolled');
      });
      document.addEventListener("adminbar-mobile-no-scrolled", function (event) {
        document.body.classList.remove('cs-adminbar-mobile-scrolled');
      });
    }
  }]);
  return CscoNavigation;
}();
new CscoNavigation();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Offcanvas */

(function () {
  var toggles = document.querySelectorAll('.cs-header__offcanvas-toggle, .cs-site-overlay, .cs-offcanvas__toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var body = document.body;
      if (!body.classList.contains('cs-offcanvas-active')) {
        body.classList.add('cs-offcanvas-transition');
      } else {
        setTimeout(function () {
          body.classList.remove('cs-offcanvas-transition');
        }, 400);
      }
      body.classList.toggle('cs-offcanvas-active');
    });
  });
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Responsive Embeds */

(function () {
  /**
   * Add max-width & max-height to <iframe> elements, depending on their width & height props.
   */
  function initResponsiveEmbeds() {
    var proportion, parentWidth;
    var iframes = document.querySelectorAll('.entry-content iframe');

    // Loop through iframe elements.
    iframes.forEach(function (iframe) {
      // Don't handle if the parent automatically resizes itself.
      if (iframe.closest('div[data-video-start], div[data-video-end]')) {
        return;
      }
      // Only continue if the iframe has a width & height defined.
      if (iframe.width && iframe.height) {
        // Calculate the proportion/ratio based on the width & height.
        proportion = parseFloat(iframe.width) / parseFloat(iframe.height);
        // Get the parent element's width.
        parentWidth = parseFloat(window.getComputedStyle(iframe.parentElement).width);
        // Set the max-width & height.
        iframe.style.maxWidth = '100%';
        iframe.style.maxHeight = Math.round(parentWidth / proportion) + 'px';
      }
    });
  }

  // Document ready.
  document.addEventListener('DOMContentLoaded', function () {
    initResponsiveEmbeds();
  });

  // Post load. This assumes you have an event "post-load" being dispatched on the body element.
  document.body.addEventListener('post-load', function () {
    initResponsiveEmbeds();
  });

  // Window resize.
  window.addEventListener('resize', function () {
    initResponsiveEmbeds();
  });

  // Run on initial load.
  initResponsiveEmbeds();
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/** ----------------------------------------------------------------------------
 * Color Scheme Toogle */


var cscoDarkMode = {
  init: function init() {
    var _this = this;
    this.initMode();
    window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
      _this.initMode();
    });
    document.querySelectorAll('.cs-site-scheme-toggle').forEach(function (toggle) {
      toggle.onclick = function () {
        if ('dark' === document.body.getAttribute('data-scheme')) {
          _this.changeScheme('light', true);
        } else {
          _this.changeScheme('dark', true);
        }
      };
    });
  },
  initMode: function initMode() {
    var siteScheme = false;
    switch (csLocalize.siteSchemeMode) {
      case 'dark':
        siteScheme = 'dark';
        break;
      case 'light':
        siteScheme = 'light';
        break;
      case 'system':
        siteScheme = 'auto';
        break;
    }
    if (csLocalize.siteSchemeToogle) {
      if ('light' === (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.csGetCookie)('_color_schema')) {
        siteScheme = 'light';
      }
      if ('dark' === (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.csGetCookie)('_color_schema')) {
        siteScheme = 'dark';
      }
    }
    if (siteScheme && siteScheme !== document.body.getAttribute('data-scheme')) {
      this.changeScheme(siteScheme, false);
    }
  },
  changeScheme: function changeScheme(siteScheme, cookie) {
    document.body.classList.add('cs-scheme-toggled');
    document.body.setAttribute('data-scheme', siteScheme);
    if (cookie) {
      (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.csSetCookie)('_color_schema', siteScheme, {
        expires: 2592000
      });
    }
    setTimeout(function () {
      document.body.classList.remove('cs-scheme-toggled');
    }, 100);
  }
};
cscoDarkMode.init();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Scroll to top */

(function () {
  var section = 'cs-scroll-top';
  var activeClass = 'is-active';
  var offset = 200;
  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  var scrollToTopButton = document.querySelector(".".concat(section));
  var progressPath = scrollToTopButton.querySelector(".".concat(section, "-progress path"));
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function updateProgress() {
    var scroll = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
    var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var height = docHeight - windowHeight;
    var progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }
  window.addEventListener('scroll', function () {
    updateProgress();
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
    if (scrollPos > offset) {
      scrollToTopButton.classList.add(activeClass);
    } else {
      scrollToTopButton.classList.remove(activeClass);
    }
  });
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Search Dropdown */

(function () {
  var toggles = document.querySelectorAll('.cs-header__search-toggle, .cs-search-overlay, .cs-search__close');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var body = document.body;
      var headerElement = document.querySelector('.cs-header');
      if (!body.classList.contains('cs-search-active')) {
        body.classList.add('cs-search-transition');
      } else {
        setTimeout(function () {
          body.classList.remove('cs-search-transition');
        }, 400);
      }
      body.classList.toggle('cs-search-active');
      headerElement.classList.toggle('cs-search-visible');
    });
  });
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/** ----------------------------------------------------------------------------
 * Sticky Sidebar */

(function () {
  var stickyElementsSmart = [],
    stickyElements = [];
  stickyElementsSmart.push('.cs-navbar-smart-enabled.cs-stick-to-top .cs-single-product .entry-summary', '.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled.cs-stick-to-top .cs-sidebar__inner', '.cs-sticky-sidebar-enabled.cs-navbar-smart-enabled.cs-stick-last .cs-sidebar__inner .widget:last-child');
  stickyElements.push('.cs-navbar-sticky-enabled.cs-stick-to-top .cs-single-product .entry-summary', '.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled.cs-stick-to-top .cs-sidebar__inner', '.cs-sticky-sidebar-enabled.cs-navbar-sticky-enabled.cs-stick-last .cs-sidebar__inner .widget:last-child');
  document.addEventListener("DOMContentLoaded", function () {
    var headerStick = document.querySelector('.cs-header'),
      wpAdminBar = document.querySelector('#wpadminbar'),
      headerStickHeight = headerStick ? headerStick.offsetHeight : 0,
      wpAdminBarHeight = wpAdminBar ? wpAdminBar.offsetHeight : 0,
      headerStretch = document.querySelector('.cs-header-stretch'),
      headerStretchHeight = headerStretch ? headerStretch.offsetHeight : 0,
      allHeight = headerStickHeight + wpAdminBarHeight + 20,
      windowWidth = window.innerWidth;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      stickyElementsSmart.push('.cs-sticky-sidebar-enabled.cs-stick-to-bottom .cs-sidebar__inner');
      stickyElements.push('.cs-sticky-sidebar-enabled.cs-stick-to-bottom .cs-sidebar__inner');
    }
    stickyElementsSmart = stickyElementsSmart.join(',');
    stickyElements = stickyElements.join(',');
    document.addEventListener('sticky-nav-visible', function () {
      headerStickHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height'));
      allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
      document.querySelectorAll(stickyElementsSmart).forEach(function (el) {
        el.style.top = allHeight + 'px';
      });
    });
    document.addEventListener('sticky-nav-hide', function () {
      headerStickHeight = 0;
      allHeight = (headerStickHeight || 0) + (wpAdminBarHeight || 0) + 20;
      document.querySelectorAll(stickyElementsSmart).forEach(function (el) {
        el.style.top = allHeight + 'px';
      });
    });
    document.addEventListener('stretch-nav-to-small', function () {
      headerStretchHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-height'));
      allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
      if (headerStretch && headerStretch.classList.contains("cs-scroll-sticky") && !headerStretch.classList.contains("cs-scroll-active")) {
        document.querySelectorAll(stickyElementsSmart).forEach(function (el) {
          el.style.top = allHeight + 'px';
        });
      }
    });
    document.addEventListener('stretch-nav-to-big', function () {
      headerStretchHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cs-header-initial-height'));
    });
    if (document.body.classList.contains('cs-navbar-smart-enabled') && windowWidth >= 1020) {
      allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
      document.querySelectorAll(stickyElementsSmart).forEach(function (el) {
        el.style.top = allHeight + 'px';
      });
    } else if (document.body.classList.contains('cs-navbar-sticky-enabled') && windowWidth >= 1020) {
      allHeight = (headerStretchHeight || 0) + (wpAdminBarHeight || 0) + 20;
      document.querySelectorAll(stickyElements).forEach(function (el) {
        el.style.top = allHeight + 'px';
      });
    }
    window.addEventListener('resize', function () {
      var windowWidthResize = window.innerWidth;
      if (windowWidthResize < 1020) {
        document.querySelectorAll(stickyElements).forEach(function (el) {
          el.removeAttribute('style');
        });
        document.querySelectorAll(stickyElementsSmart).forEach(function (el) {
          el.removeAttribute('style');
        });
      }
    });
  });
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/** ----------------------------------------------------------------------------
 * Widget Nav Menu */


(function () {
  HTMLElement.prototype.responsiveNav = function () {
    this.classList.remove('menu-item-expanded');
    var previousElement = this.previousElementSibling;
    if (previousElement && previousElement.classList.contains('submenu-visible')) {
      previousElement.classList.remove('submenu-visible');
      (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.slideUp)(previousElement);
      this.parentElement.classList.remove('menu-item-expanded');
    } else {
      var parentOfParent = this.parentElement.parentElement;
      parentOfParent.querySelectorAll('.menu-item .sub-menu').forEach(function (subMenu) {
        subMenu.classList.remove('submenu-visible');
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.slideUp)(subMenu);
      });
      parentOfParent.querySelectorAll('.menu-item-expanded').forEach(function (item) {
        item.classList.remove('menu-item-expanded');
      });
      if (previousElement) {
        previousElement.classList.toggle('submenu-visible');
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(previousElement);
      }
      this.parentElement.classList.toggle('menu-item-expanded');
    }
  };
  document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.widget_nav_menu .menu-item-has-children');
    menuItems.forEach(function (menuItem) {
      var span = document.createElement('span');
      menuItem.appendChild(span);
      span.addEventListener('click', function (e) {
        e.preventDefault();
        this.responsiveNav();
      });
      var anchor = menuItem.children[0];
      if (anchor && anchor.tagName === 'A' && anchor.getAttribute('href') === '#') {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          this.nextElementSibling.nextElementSibling.responsiveNav();
        });
      }
    });
  });
})();
})();

/******/ })()
;