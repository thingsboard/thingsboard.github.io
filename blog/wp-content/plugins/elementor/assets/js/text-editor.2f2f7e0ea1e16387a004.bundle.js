/*! elementor - v3.19.0 - 07-02-2024 */
"use strict";
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([["text-editor"],{

/***/ "../assets/dev/js/frontend/handlers/text-editor.js":
/*!*********************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/text-editor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class TextEditor extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        paragraph: 'p:first'
      },
      classes: {
        dropCap: 'elementor-drop-cap',
        dropCapLetter: 'elementor-drop-cap-letter'
      }
    };
  }
  getDefaultElements() {
    const selectors = this.getSettings('selectors'),
      classes = this.getSettings('classes'),
      $dropCap = jQuery('<span>', {
        class: classes.dropCap
      }),
      $dropCapLetter = jQuery('<span>', {
        class: classes.dropCapLetter
      });
    $dropCap.append($dropCapLetter);
    return {
      $paragraph: this.$element.find(selectors.paragraph),
      $dropCap,
      $dropCapLetter
    };
  }
  wrapDropCap() {
    const isDropCapEnabled = this.getElementSettings('drop_cap');
    if (!isDropCapEnabled) {
      // If there is an old drop cap inside the paragraph
      if (this.dropCapLetter) {
        this.elements.$dropCap.remove();
        this.elements.$paragraph.prepend(this.dropCapLetter);
        this.dropCapLetter = '';
      }
      return;
    }
    const $paragraph = this.elements.$paragraph;
    if (!$paragraph.length) {
      return;
    }
    const paragraphContent = $paragraph.html().replace(/&nbsp;/g, ' '),
      firstLetterMatch = paragraphContent.match(/^ *([^ ] ?)/);
    if (!firstLetterMatch) {
      return;
    }
    const firstLetter = firstLetterMatch[1],
      trimmedFirstLetter = firstLetter.trim();

    // Don't apply drop cap when the content starting with an HTML tag
    if ('<' === trimmedFirstLetter) {
      return;
    }
    this.dropCapLetter = firstLetter;
    this.elements.$dropCapLetter.text(trimmedFirstLetter);
    const restoredParagraphContent = paragraphContent.slice(firstLetter.length).replace(/^ */, match => {
      return new Array(match.length + 1).join('&nbsp;');
    });
    $paragraph.html(restoredParagraphContent).prepend(this.elements.$dropCap);
  }
  onInit() {
    super.onInit(...arguments);
    this.wrapDropCap();
  }
  onElementChange(propertyName) {
    if ('drop_cap' === propertyName) {
      this.wrapDropCap();
    }
  }
}
exports["default"] = TextEditor;

/***/ })

}]);
//# sourceMappingURL=text-editor.2f2f7e0ea1e16387a004.bundle.js.map