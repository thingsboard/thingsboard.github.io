/*! elementor - v3.19.0 - 07-02-2024 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@elementor/query/dist/index.js":
/*!******************************************************!*\
  !*** ../node_modules/@elementor/query/dist/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  QueryClient: () => import_react_query2.QueryClient,
  QueryClientProvider: () => import_react_query2.QueryClientProvider,
  createQueryClient: () => createQueryClient,
  useMutation: () => import_react_query2.useMutation,
  useQuery: () => import_react_query2.useQuery,
  useQueryClient: () => import_react_query2.useQueryClient
});
module.exports = __toCommonJS(src_exports);
var import_react_query = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/modern/index.cjs");
var import_react_query2 = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/modern/index.cjs");
function createQueryClient() {
  return new import_react_query.QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
      }
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../modules/notifications/assets/js/api/index.js":
/*!*******************************************************!*\
  !*** ../modules/notifications/assets/js/api/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getNotifications = void 0;
var request = function request(endpoint) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    elementorCommon.ajax.addRequest(endpoint, {
      success: resolve,
      error: reject,
      data: data
    });
  });
};
var getNotifications = function getNotifications() {
  return request('notifications_get');
};
exports.getNotifications = getNotifications;

/***/ }),

/***/ "../modules/notifications/assets/js/components/bar-button-notification.js":
/*!********************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/bar-button-notification.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BarButtonNotification = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _whatsNew = __webpack_require__(/*! ./whats-new */ "../modules/notifications/assets/js/components/whats-new.js");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _giftIcon = __webpack_require__(/*! ../icons/gift-icon */ "../modules/notifications/assets/js/icons/gift-icon.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BarButtonNotification = function BarButtonNotification(props) {
  var defaultIsRead = props.defaultIsRead;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultIsRead),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    isRead = _useState4[0],
    setIsRead = _useState4[1];

  // TODO: This is a temporary solution until we have a proper admin bar component.
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "e-admin-top-bar__bar-button",
    style: {
      backgroundColor: 'transparent',
      border: 'none'
    },
    onClick: function onClick(event) {
      event.preventDefault();
      setIsOpen(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Badge, {
    color: "primary",
    variant: "dot",
    invisible: isRead,
    sx: {
      mx: 0.5
    }
  }, /*#__PURE__*/_react.default.createElement(_giftIcon.GiftIcon, {
    fontSize: "inherit"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "e-admin-top-bar__bar-button-title"
  }, props.children)), /*#__PURE__*/_react.default.createElement(_whatsNew.WhatsNew, {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    setIsRead: setIsRead
  }));
};
exports.BarButtonNotification = BarButtonNotification;
BarButtonNotification.propTypes = {
  defaultIsRead: PropTypes.bool,
  children: PropTypes.any.isRequired
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-drawer-content.js":
/*!*********************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-drawer-content.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewDrawerContent = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _query = __webpack_require__(/*! @elementor/query */ "../node_modules/@elementor/query/dist/index.js");
var _api = __webpack_require__(/*! ../api */ "../modules/notifications/assets/js/api/index.js");
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _whatsNewItem = __webpack_require__(/*! ./whats-new-item */ "../modules/notifications/assets/js/components/whats-new-item.js");
var WhatsNewDrawerContent = function WhatsNewDrawerContent() {
  var _useQuery = (0, _query.useQuery)({
      queryKey: ['e-notifications'],
      queryFn: _api.getNotifications
    }),
    isPending = _useQuery.isPending,
    error = _useQuery.error,
    items = _useQuery.data;
  if (isPending) {
    return /*#__PURE__*/_react.default.createElement(_ui.Box, null, /*#__PURE__*/_react.default.createElement(_ui.LinearProgress, {
      color: "secondary"
    }));
  }
  if (error) {
    return /*#__PURE__*/_react.default.createElement(_ui.Box, null, "An error has occurred: ", error);
  }
  return items.map(function (item, itemIndex) {
    return /*#__PURE__*/_react.default.createElement(_whatsNewItem.WhatsNewItem, {
      key: itemIndex,
      item: item,
      itemIndex: itemIndex,
      itemsLength: items.length
    });
  });
};
exports.WhatsNewDrawerContent = WhatsNewDrawerContent;

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-item-chips.js":
/*!*****************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-item-chips.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewItemChips = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var WhatsNewItemChips = function WhatsNewItemChips(_ref) {
  var chipPlan = _ref.chipPlan,
    chipTags = _ref.chipTags,
    itemIndex = _ref.itemIndex;
  var chips = [];
  if (chipPlan) {
    chips.push({
      color: 'promotion',
      size: 'small',
      label: chipPlan
    });
  }
  if (chipTags) {
    chipTags.forEach(function (chipTag) {
      chips.push({
        variant: 'outlined',
        size: 'small',
        label: chipTag
      });
    });
  }
  if (!chips.length) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    direction: "row",
    flexWrap: "wrap",
    gap: 1,
    sx: {
      pb: 1
    }
  }, chips.map(function (chip, chipIndex) {
    return /*#__PURE__*/_react.default.createElement(_ui.Chip, (0, _extends2.default)({
      key: "chip-".concat(itemIndex).concat(chipIndex)
    }, chip));
  }));
};
exports.WhatsNewItemChips = WhatsNewItemChips;
WhatsNewItemChips.propTypes = {
  chipPlan: PropTypes.string,
  chipTags: PropTypes.array,
  itemIndex: PropTypes.number.isRequired
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-item-thumbnail.js":
/*!*********************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-item-thumbnail.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewItemThumbnail = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _wrapperWithLink = __webpack_require__(/*! ./wrapper-with-link */ "../modules/notifications/assets/js/components/wrapper-with-link.js");
var WhatsNewItemThumbnail = function WhatsNewItemThumbnail(_ref) {
  var imageSrc = _ref.imageSrc,
    title = _ref.title,
    link = _ref.link;
  return /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      pb: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_wrapperWithLink.WrapperWithLink, {
    link: link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageSrc,
    alt: title,
    style: {
      maxWidth: '100%'
    }
  })));
};
exports.WhatsNewItemThumbnail = WhatsNewItemThumbnail;
WhatsNewItemThumbnail.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-item-topic-line.js":
/*!**********************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-item-topic-line.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewItemTopicLine = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var WhatsNewItemTopicLine = function WhatsNewItemTopicLine(_ref) {
  var topic = _ref.topic,
    date = _ref.date;
  return /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    direction: "row",
    divider: /*#__PURE__*/_react.default.createElement(_ui.Divider, {
      orientation: "vertical",
      flexItem: true
    }),
    spacing: 1,
    color: "text.tertiary",
    sx: {
      pb: 1
    }
  }, topic && /*#__PURE__*/_react.default.createElement(_ui.Box, null, topic), date && /*#__PURE__*/_react.default.createElement(_ui.Box, null, date));
};
exports.WhatsNewItemTopicLine = WhatsNewItemTopicLine;
WhatsNewItemTopicLine.propTypes = {
  topic: PropTypes.string,
  date: PropTypes.string
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-item.js":
/*!***********************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-item.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewItem = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _whatsNewItemTopicLine = __webpack_require__(/*! ./whats-new-item-topic-line */ "../modules/notifications/assets/js/components/whats-new-item-topic-line.js");
var _wrapperWithLink = __webpack_require__(/*! ./wrapper-with-link */ "../modules/notifications/assets/js/components/wrapper-with-link.js");
var _whatsNewItemThumbnail = __webpack_require__(/*! ./whats-new-item-thumbnail */ "../modules/notifications/assets/js/components/whats-new-item-thumbnail.js");
var _whatsNewItemChips = __webpack_require__(/*! ./whats-new-item-chips */ "../modules/notifications/assets/js/components/whats-new-item-chips.js");
var WhatsNewItem = function WhatsNewItem(_ref) {
  var item = _ref.item,
    itemIndex = _ref.itemIndex,
    itemsLength = _ref.itemsLength;
  return /*#__PURE__*/_react.default.createElement(_ui.Box, {
    key: itemIndex,
    display: "flex",
    flexDirection: "column",
    sx: {
      pt: 2
    }
  }, (item.topic || item.date) && /*#__PURE__*/_react.default.createElement(_whatsNewItemTopicLine.WhatsNewItemTopicLine, {
    topic: item.topic,
    date: item.date
  }), /*#__PURE__*/_react.default.createElement(_wrapperWithLink.WrapperWithLink, {
    link: item.link
  }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "subtitle1",
    sx: {
      pb: 2
    }
  }, item.title)), item.imageSrc && /*#__PURE__*/_react.default.createElement(_whatsNewItemThumbnail.WhatsNewItemThumbnail, {
    imageSrc: item.imageSrc,
    link: item.link,
    title: item.title
  }), /*#__PURE__*/_react.default.createElement(_whatsNewItemChips.WhatsNewItemChips, {
    chipPlan: item.chipPlan,
    chipTags: item.chipTags,
    itemIndex: itemIndex
  }), item.description && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      pb: 2
    }
  }, item.description, item.readMoreText && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement(_ui.Link, {
    href: item.link,
    color: "info.main",
    target: "_blank"
  }, item.readMoreText))), item.cta && item.ctaLink && /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      pb: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    href: item.ctaLink,
    target: "_blank",
    variant: "contained",
    size: "small",
    color: "promotion"
  }, item.cta)), itemIndex !== itemsLength - 1 && /*#__PURE__*/_react.default.createElement(_ui.Divider, {
    sx: {
      my: 1
    }
  }));
};
exports.WhatsNewItem = WhatsNewItem;
WhatsNewItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemIndex: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new-top-bar.js":
/*!**************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new-top-bar.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNewTopBar = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var _xIcon = __webpack_require__(/*! ../icons/x-icon */ "../modules/notifications/assets/js/icons/x-icon.js");
var WhatsNewTopBar = function WhatsNewTopBar(props) {
  var setIsOpen = props.setIsOpen;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.AppBar, {
    elevation: 0,
    position: "sticky",
    sx: {
      backgroundColor: 'background.default'
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Toolbar, {
    variant: "dense"
  }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "overline",
    sx: {
      flexGrow: 1
    }
  }, (0, _i18n.__)('What\'s New', 'elementor')), /*#__PURE__*/_react.default.createElement(_ui.IconButton, {
    "aria-label": 'close',
    size: "small",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_xIcon.XIcon, null)))), /*#__PURE__*/_react.default.createElement(_ui.Divider, null));
};
exports.WhatsNewTopBar = WhatsNewTopBar;
WhatsNewTopBar.propTypes = {
  setIsOpen: PropTypes.func.isRequired
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/whats-new.js":
/*!******************************************************************!*\
  !*** ../modules/notifications/assets/js/components/whats-new.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WhatsNew = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var _query = __webpack_require__(/*! @elementor/query */ "../node_modules/@elementor/query/dist/index.js");
var _whatsNewTopBar = __webpack_require__(/*! ./whats-new-top-bar */ "../modules/notifications/assets/js/components/whats-new-top-bar.js");
var _whatsNewDrawerContent = __webpack_require__(/*! ./whats-new-drawer-content */ "../modules/notifications/assets/js/components/whats-new-drawer-content.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var queryClient = new _query.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 30 // 30 minutes
    }
  }
});

var WhatsNew = function WhatsNew(props) {
  var isOpen = props.isOpen,
    setIsOpen = props.setIsOpen,
    setIsRead = props.setIsRead,
    _props$anchorPosition = props.anchorPosition,
    anchorPosition = _props$anchorPosition === void 0 ? 'right' : _props$anchorPosition;
  (0, _react.useEffect)(function () {
    if (!isOpen) {
      return;
    }
    setIsRead(true);
  }, [isOpen, setIsRead]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_query.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react.default.createElement(_ui.ThemeProvider, {
    colorScheme: "auto"
  }, /*#__PURE__*/_react.default.createElement(_ui.Drawer, {
    anchor: anchorPosition,
    open: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    ModalProps: {
      style: {
        // Above the WordPress Admin Top Bar.
        zIndex: 999999
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      width: 320,
      backgroundColor: 'background.default'
    },
    role: "presentation"
  }, /*#__PURE__*/_react.default.createElement(_whatsNewTopBar.WhatsNewTopBar, {
    setIsOpen: setIsOpen
  }), /*#__PURE__*/_react.default.createElement(_ui.Box, {
    sx: {
      padding: '16px'
    }
  }, /*#__PURE__*/_react.default.createElement(_whatsNewDrawerContent.WhatsNewDrawerContent, null)))))));
};
exports.WhatsNew = WhatsNew;
WhatsNew.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setIsRead: PropTypes.func.isRequired,
  anchorPosition: PropTypes.oneOf(['left', 'top', 'right', 'bottom'])
};

/***/ }),

/***/ "../modules/notifications/assets/js/components/wrapper-with-link.js":
/*!**************************************************************************!*\
  !*** ../modules/notifications/assets/js/components/wrapper-with-link.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WrapperWithLink = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
var WrapperWithLink = function WrapperWithLink(props) {
  var link = props.link,
    children = props.children;
  if (!link) {
    return children;
  }
  return /*#__PURE__*/_react.default.createElement(_ui.Link, {
    href: link,
    target: "_blank",
    underline: "none",
    color: "inherit",
    sx: {
      '&:hover': {
        color: 'inherit'
      }
    }
  }, children);
};
exports.WrapperWithLink = WrapperWithLink;
WrapperWithLink.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any.isRequired
};

/***/ }),

/***/ "../modules/notifications/assets/js/icons/gift-icon.js":
/*!*************************************************************!*\
  !*** ../modules/notifications/assets/js/icons/gift-icon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GiftIcon = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var GiftIcon = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.65527 4.84484C8.95951 4.07178 8.20923 3.73771 7.51306 3.74984L7.5 3.75007C7.03587 3.75007 6.59075 3.93433 6.26256 4.26252C5.93437 4.59071 5.75 5.03583 5.75 5.49995C5.75 5.96408 5.93437 6.4092 6.26256 6.73739C6.59075 7.06558 7.03587 7.24995 7.5 7.24995C7.50295 7.24995 7.5059 7.24997 7.50884 7.25001H11.0002C10.6592 6.26394 10.1939 5.44328 9.65527 4.84484ZM11.25 8.75001V11.25H4C3.86193 11.25 3.75 11.1381 3.75 11V9.00001C3.75 8.86193 3.86193 8.75001 4 8.75001H11.25ZM4.25 12.75H4C3.0335 12.75 2.25 11.9665 2.25 11V9.00001C2.25 8.03351 3.0335 7.25001 4 7.25001H4.76141C4.43004 6.73144 4.25 6.12498 4.25 5.49995C4.25 4.638 4.59241 3.81135 5.2019 3.20186C5.80984 2.59392 6.63384 2.2517 7.49342 2.24996C8.72414 2.23069 9.86213 2.83242 10.7702 3.84139C11.2484 4.37275 11.6608 5.01284 12 5.73103C12.3392 5.01284 12.7516 4.37275 13.2298 3.84139C14.1379 2.83242 15.2759 2.23069 16.5066 2.24996C17.3662 2.2517 18.1902 2.59392 18.7981 3.20186C19.4076 3.81135 19.75 4.638 19.75 5.49995C19.75 6.12498 19.57 6.73144 19.2386 7.25001H20C20.9665 7.25001 21.75 8.03351 21.75 9.00001V11C21.75 11.9665 20.9665 12.75 20 12.75H19.75V19C19.75 19.7294 19.4603 20.4288 18.9445 20.9445C18.4288 21.4603 17.7293 21.75 17 21.75H7C6.27065 21.75 5.57118 21.4603 5.05546 20.9445C4.53973 20.4288 4.25 19.7294 4.25 19V12.75ZM11.25 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V12.75H11.25V20.25ZM12.75 20.25H17C17.3315 20.25 17.6495 20.1183 17.8839 19.8839C18.1183 19.6495 18.25 19.3315 18.25 19V12.75H12.75V20.25ZM12.75 11.25V8.75001H20C20.1381 8.75001 20.25 8.86193 20.25 9.00001V11C20.25 11.1381 20.1381 11.25 20 11.25H12.75ZM16.4912 7.25001C16.4941 7.24997 16.497 7.24995 16.5 7.24995C16.9641 7.24995 17.4092 7.06558 17.7374 6.73739C18.0656 6.4092 18.25 5.96408 18.25 5.49995C18.25 5.03583 18.0656 4.59071 17.7374 4.26252C17.4092 3.93433 16.9641 3.74995 16.5 3.74995H16.4869C15.7908 3.73783 15.0405 4.07178 14.3447 4.84484C13.8061 5.44328 13.3408 6.26394 12.9998 7.25001H16.4912Z"
  }));
});
exports.GiftIcon = GiftIcon;

/***/ }),

/***/ "../modules/notifications/assets/js/icons/x-icon.js":
/*!**********************************************************!*\
  !*** ../modules/notifications/assets/js/icons/x-icon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.XIcon = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _ui = __webpack_require__(/*! @elementor/ui */ "@elementor/ui");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var XIcon = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_ui.SvgIcon, (0, _extends2.default)({
    viewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
  }));
});
exports.XIcon = XIcon;

/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/prop-types/lib/has.js":
/*!*********************************************!*\
  !*** ../node_modules/prop-types/lib/has.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "@elementor/ui":
/*!*********************************!*\
  !*** external "elementorV2.ui" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = elementorV2.ui;

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

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/focusManager.cjs":
/*!**************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/focusManager.cjs ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/focusManager.ts
var focusManager_exports = {};
__export(focusManager_exports, {
  FocusManager: () => FocusManager,
  focusManager: () => focusManager
});
module.exports = __toCommonJS(focusManager_exports);
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var FocusManager = class extends import_subscribable.Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!import_utils.isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=focusManager.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/hydration.cjs":
/*!***********************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/hydration.cjs ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/hydration.ts
var hydration_exports = {};
__export(hydration_exports, {
  defaultShouldDehydrateMutation: () => defaultShouldDehydrateMutation,
  defaultShouldDehydrateQuery: () => defaultShouldDehydrateQuery,
  dehydrate: () => dehydrate,
  hydrate: () => hydrate
});
module.exports = __toCommonJS(hydration_exports);
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state,
    ...mutation.meta && { meta: mutation.meta }
  };
}
function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash,
    ...query.meta && { meta: query.meta }
  };
}
function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === "success";
}
function dehydrate(client, options = {}) {
  const filterMutation = options.shouldDehydrateMutation ?? defaultShouldDehydrateMutation;
  const mutations = client.getMutationCache().getAll().flatMap(
    (mutation) => filterMutation(mutation) ? [dehydrateMutation(mutation)] : []
  );
  const filterQuery = options.shouldDehydrateQuery ?? defaultShouldDehydrateQuery;
  const queries = client.getQueryCache().getAll().flatMap((query) => filterQuery(query) ? [dehydrateQuery(query)] : []);
  return { mutations, queries };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== "object" || dehydratedState === null) {
    return;
  }
  const mutationCache = client.getMutationCache();
  const queryCache = client.getQueryCache();
  const mutations = dehydratedState.mutations || [];
  const queries = dehydratedState.queries || [];
  mutations.forEach((dehydratedMutation) => {
    mutationCache.build(
      client,
      {
        ...options?.defaultOptions?.mutations,
        mutationKey: dehydratedMutation.mutationKey,
        meta: dehydratedMutation.meta
      },
      dehydratedMutation.state
    );
  });
  queries.forEach(({ queryKey, state, queryHash, meta }) => {
    const query = queryCache.get(queryHash);
    if (query) {
      if (query.state.dataUpdatedAt < state.dataUpdatedAt) {
        const { fetchStatus: _ignored, ...dehydratedQueryState } = state;
        query.setState(dehydratedQueryState);
      }
      return;
    }
    queryCache.build(
      client,
      {
        ...options?.defaultOptions?.queries,
        queryKey,
        queryHash,
        meta
      },
      // Reset fetch status to idle to avoid
      // query being stuck in fetching state upon hydration
      {
        ...state,
        fetchStatus: "idle"
      }
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=hydration.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/index.cjs":
/*!*******************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/index.cjs ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CancelledError: () => import_retryer.CancelledError,
  InfiniteQueryObserver: () => import_infiniteQueryObserver.InfiniteQueryObserver,
  MutationCache: () => import_mutationCache.MutationCache,
  MutationObserver: () => import_mutationObserver.MutationObserver,
  QueriesObserver: () => import_queriesObserver.QueriesObserver,
  Query: () => import_query.Query,
  QueryCache: () => import_queryCache.QueryCache,
  QueryClient: () => import_queryClient.QueryClient,
  QueryObserver: () => import_queryObserver.QueryObserver,
  defaultShouldDehydrateMutation: () => import_hydration.defaultShouldDehydrateMutation,
  defaultShouldDehydrateQuery: () => import_hydration.defaultShouldDehydrateQuery,
  dehydrate: () => import_hydration.dehydrate,
  focusManager: () => import_focusManager.focusManager,
  hashKey: () => import_utils.hashKey,
  hydrate: () => import_hydration.hydrate,
  isCancelledError: () => import_retryer2.isCancelledError,
  isServer: () => import_utils.isServer,
  keepPreviousData: () => import_utils.keepPreviousData,
  matchQuery: () => import_utils.matchQuery,
  notifyManager: () => import_notifyManager.notifyManager,
  onlineManager: () => import_onlineManager.onlineManager,
  replaceEqualDeep: () => import_utils.replaceEqualDeep
});
module.exports = __toCommonJS(src_exports);
var import_retryer = __webpack_require__(/*! ./retryer.cjs */ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs");
var import_queryCache = __webpack_require__(/*! ./queryCache.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryCache.cjs");
var import_queryClient = __webpack_require__(/*! ./queryClient.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryClient.cjs");
var import_queryObserver = __webpack_require__(/*! ./queryObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryObserver.cjs");
var import_queriesObserver = __webpack_require__(/*! ./queriesObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/queriesObserver.cjs");
var import_infiniteQueryObserver = __webpack_require__(/*! ./infiniteQueryObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.cjs");
var import_mutationCache = __webpack_require__(/*! ./mutationCache.cjs */ "../node_modules/@tanstack/query-core/build/modern/mutationCache.cjs");
var import_mutationObserver = __webpack_require__(/*! ./mutationObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/mutationObserver.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_focusManager = __webpack_require__(/*! ./focusManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/focusManager.cjs");
var import_onlineManager = __webpack_require__(/*! ./onlineManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/onlineManager.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_retryer2 = __webpack_require__(/*! ./retryer.cjs */ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs");
var import_hydration = __webpack_require__(/*! ./hydration.cjs */ "../node_modules/@tanstack/query-core/build/modern/hydration.cjs");
__reExport(src_exports, __webpack_require__(/*! ./types.cjs */ "../node_modules/@tanstack/query-core/build/modern/types.cjs"), module.exports);
var import_query = __webpack_require__(/*! ./query.cjs */ "../node_modules/@tanstack/query-core/build/modern/query.cjs");
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.cjs":
/*!***********************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.cjs ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infiniteQueryBehavior.ts
var infiniteQueryBehavior_exports = {};
__export(infiniteQueryBehavior_exports, {
  hasNextPage: () => hasNextPage,
  hasPreviousPage: () => hasPreviousPage,
  infiniteQueryBehavior: () => infiniteQueryBehavior
});
module.exports = __toCommonJS(infiniteQueryBehavior_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const fetchFn = async () => {
        const options = context.options;
        const direction = context.fetchOptions?.meta?.fetchMore?.direction;
        const oldPages = context.state.data?.pages || [];
        const oldPageParams = context.state.data?.pageParams || [];
        const empty = { pages: [], pageParams: [] };
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = context.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${context.options.queryHash}'`)
        ));
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            direction: previous ? "backward" : "forward",
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const page = await queryFn(
            queryFnContext
          );
          const { maxPages } = context.options;
          const addTo = previous ? import_utils.addToStart : import_utils.addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        let result;
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          result = await fetchPage(
            empty,
            oldPageParams[0] ?? options.initialPageParam
          );
          const remainingPages = pages ?? oldPages.length;
          for (let i = 1; i < remainingPages; i++) {
            const param = getNextPageParam(options, result);
            result = await fetchPage(result, param);
          }
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  );
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return options.getPreviousPageParam?.(
    pages[0],
    pages,
    pageParams[0],
    pageParams
  );
}
function hasNextPage(options, data) {
  if (!data)
    return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam)
    return false;
  return getPreviousPageParam(options, data) != null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=infiniteQueryBehavior.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.cjs":
/*!***********************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.cjs ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infiniteQueryObserver.ts
var infiniteQueryObserver_exports = {};
__export(infiniteQueryObserver_exports, {
  InfiniteQueryObserver: () => InfiniteQueryObserver
});
module.exports = __toCommonJS(infiniteQueryObserver_exports);
var import_queryObserver = __webpack_require__(/*! ./queryObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryObserver.cjs");
var import_infiniteQueryBehavior = __webpack_require__(/*! ./infiniteQueryBehavior.cjs */ "../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.cjs");
var InfiniteQueryObserver = class extends import_queryObserver.QueryObserver {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options, notifyOptions) {
    super.setOptions(
      {
        ...options,
        behavior: (0, import_infiniteQueryBehavior.infiniteQueryBehavior)()
      },
      notifyOptions
    );
  }
  getOptimisticResult(options) {
    options.behavior = (0, import_infiniteQueryBehavior.infiniteQueryBehavior)();
    return super.getOptimisticResult(options);
  }
  fetchNextPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(query, options) {
    const { state } = query;
    const result = super.createResult(query, options);
    const { isFetching, isRefetching } = result;
    const isFetchingNextPage = isFetching && state.fetchMeta?.fetchMore?.direction === "forward";
    const isFetchingPreviousPage = isFetching && state.fetchMeta?.fetchMore?.direction === "backward";
    return {
      ...result,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0, import_infiniteQueryBehavior.hasNextPage)(options, state.data),
      hasPreviousPage: (0, import_infiniteQueryBehavior.hasPreviousPage)(options, state.data),
      isFetchingNextPage,
      isFetchingPreviousPage,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=infiniteQueryObserver.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/mutation.cjs":
/*!**********************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/mutation.cjs ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mutation.ts
var mutation_exports = {};
__export(mutation_exports, {
  Mutation: () => Mutation,
  getDefaultState: () => getDefaultState
});
module.exports = __toCommonJS(mutation_exports);
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_removable = __webpack_require__(/*! ./removable.cjs */ "../node_modules/@tanstack/query-core/build/modern/removable.cjs");
var import_retryer = __webpack_require__(/*! ./retryer.cjs */ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs");
var Mutation = class extends import_removable.Removable {
  constructor(config) {
    super();
    this.mutationId = config.mutationId;
    this.#defaultOptions = config.defaultOptions;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  #observers;
  #defaultOptions;
  #mutationCache;
  #retryer;
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const executeMutation = () => {
      this.#retryer = (0, import_retryer.createRetryer)({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject(new Error("No mutationFn found"));
          }
          return this.options.mutationFn(variables);
        },
        onFail: (failureCount, error) => {
          this.#dispatch({ type: "failed", failureCount, error });
        },
        onPause: () => {
          this.#dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.#dispatch({ type: "continue" });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.#retryer.promise;
    };
    const restored = this.state.status === "pending";
    try {
      if (!restored) {
        this.#dispatch({ type: "pending", variables });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this
        );
        const context = await this.options.onMutate?.(variables);
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables
          });
        }
      }
      const data = await executeMutation();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this
      );
      await this.options.onSuccess?.(data, variables, this.state.context);
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this
      );
      await this.options.onSettled?.(data, null, variables, this.state.context);
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !(0, import_retryer.canFetch)(this.options.networkMode),
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    import_notifyManager.notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=mutation.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/mutationCache.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/mutationCache.cjs ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mutationCache.ts
var mutationCache_exports = {};
__export(mutationCache_exports, {
  MutationCache: () => MutationCache
});
module.exports = __toCommonJS(mutationCache_exports);
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_mutation = __webpack_require__(/*! ./mutation.cjs */ "../node_modules/@tanstack/query-core/build/modern/mutation.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var MutationCache = class extends import_subscribable.Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = [];
    this.#mutationId = 0;
  }
  #mutations;
  #mutationId;
  #resuming;
  build(client, options, state) {
    const mutation = new import_mutation.Mutation({
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.push(mutation);
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    this.#mutations = this.#mutations.filter((x) => x !== mutation);
    this.notify({ type: "removed", mutation });
  }
  clear() {
    import_notifyManager.notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.remove(mutation);
      });
    });
  }
  getAll() {
    return this.#mutations;
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.#mutations.find(
      (mutation) => (0, import_utils.matchMutation)(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.#mutations.filter(
      (mutation) => (0, import_utils.matchMutation)(filters, mutation)
    );
  }
  notify(event) {
    import_notifyManager.notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    this.#resuming = (this.#resuming ?? Promise.resolve()).then(() => {
      const pausedMutations = this.#mutations.filter((x) => x.state.isPaused);
      return import_notifyManager.notifyManager.batch(
        () => pausedMutations.reduce(
          (promise, mutation) => promise.then(() => mutation.continue().catch(import_utils.noop)),
          Promise.resolve()
        )
      );
    }).then(() => {
      this.#resuming = void 0;
    });
    return this.#resuming;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=mutationCache.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/mutationObserver.cjs":
/*!******************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/mutationObserver.cjs ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mutationObserver.ts
var mutationObserver_exports = {};
__export(mutationObserver_exports, {
  MutationObserver: () => MutationObserver
});
module.exports = __toCommonJS(mutationObserver_exports);
var import_mutation = __webpack_require__(/*! ./mutation.cjs */ "../node_modules/@tanstack/query-core/build/modern/mutation.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var MutationObserver = class extends import_subscribable.Subscribable {
  constructor(client, options) {
    super();
    this.#currentResult = void 0;
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  #client;
  #currentResult;
  #currentMutation;
  #mutateOptions;
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!(0, import_utils.shallowEqualObjects)(prevOptions, this.options)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    this.#currentMutation?.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? (0, import_mutation.getDefaultState)();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    import_notifyManager.notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(
            action.data,
            this.#currentResult.variables,
            this.#currentResult.context
          );
          this.#mutateOptions.onSettled?.(
            action.data,
            null,
            this.#currentResult.variables,
            this.#currentResult.context
          );
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(
            action.error,
            this.#currentResult.variables,
            this.#currentResult.context
          );
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            this.#currentResult.variables,
            this.#currentResult.context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=mutationObserver.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/notifyManager.ts
var notifyManager_exports = {};
__export(notifyManager_exports, {
  createNotifyManager: () => createNotifyManager,
  notifyManager: () => notifyManager
});
module.exports = __toCommonJS(notifyManager_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  const batch = (callback) => {
    let result;
    transactions++;
    try {
      result = callback();
    } finally {
      transactions--;
      if (!transactions) {
        flush();
      }
    }
    return result;
  };
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      (0, import_utils.scheduleMicrotask)(() => {
        notifyFn(callback);
      });
    }
  };
  const batchCalls = (callback) => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      (0, import_utils.scheduleMicrotask)(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  const setNotifyFunction = (fn) => {
    notifyFn = fn;
  };
  const setBatchNotifyFunction = (fn) => {
    batchNotifyFn = fn;
  };
  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
}
var notifyManager = createNotifyManager();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=notifyManager.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/onlineManager.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/onlineManager.cjs ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/onlineManager.ts
var onlineManager_exports = {};
__export(onlineManager_exports, {
  OnlineManager: () => OnlineManager,
  onlineManager: () => onlineManager
});
module.exports = __toCommonJS(onlineManager_exports);
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var OnlineManager = class extends import_subscribable.Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!import_utils.isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=onlineManager.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/queriesObserver.cjs":
/*!*****************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/queriesObserver.cjs ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/queriesObserver.ts
var queriesObserver_exports = {};
__export(queriesObserver_exports, {
  QueriesObserver: () => QueriesObserver
});
module.exports = __toCommonJS(queriesObserver_exports);
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_queryObserver = __webpack_require__(/*! ./queryObserver.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryObserver.cjs");
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
function difference(array1, array2) {
  return array1.filter((x) => !array2.includes(x));
}
function replaceAt(array, index, value) {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}
var QueriesObserver = class extends import_subscribable.Subscribable {
  #client;
  #result;
  #queries;
  #observers;
  #options;
  #combinedResult;
  constructor(client, queries, options) {
    super();
    this.#client = client;
    this.#queries = [];
    this.#observers = [];
    this.#setResult([]);
    this.setQueries(queries, options);
  }
  #setResult(value) {
    this.#result = value;
    this.#combinedResult = this.#combineResult(value);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#observers.forEach((observer) => {
        observer.subscribe((result) => {
          this.#onUpdate(observer, result);
        });
      });
    }
  }
  onUnsubscribe() {
    if (!this.listeners.size) {
      this.destroy();
    }
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#observers.forEach((observer) => {
      observer.destroy();
    });
  }
  setQueries(queries, options, notifyOptions) {
    this.#queries = queries;
    this.#options = options;
    import_notifyManager.notifyManager.batch(() => {
      const prevObservers = this.#observers;
      const newObserverMatches = this.#findMatchingObservers(this.#queries);
      newObserverMatches.forEach(
        (match) => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions)
      );
      const newObservers = newObserverMatches.map((match) => match.observer);
      const newResult = newObservers.map(
        (observer) => observer.getCurrentResult()
      );
      const hasIndexChange = newObservers.some(
        (observer, index) => observer !== prevObservers[index]
      );
      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }
      this.#observers = newObservers;
      this.#setResult(newResult);
      if (!this.hasListeners()) {
        return;
      }
      difference(prevObservers, newObservers).forEach((observer) => {
        observer.destroy();
      });
      difference(newObservers, prevObservers).forEach((observer) => {
        observer.subscribe((result) => {
          this.#onUpdate(observer, result);
        });
      });
      this.#notify();
    });
  }
  getCurrentResult() {
    return this.#combinedResult;
  }
  getQueries() {
    return this.#observers.map((observer) => observer.getCurrentQuery());
  }
  getObservers() {
    return this.#observers;
  }
  getOptimisticResult(queries) {
    const matches = this.#findMatchingObservers(queries);
    const result = matches.map(
      (match) => match.observer.getOptimisticResult(match.defaultedQueryOptions)
    );
    return [
      result,
      (r) => {
        return this.#combineResult(r ?? result);
      },
      () => {
        return matches.map((match, index) => {
          const observerResult = result[index];
          return !match.defaultedQueryOptions.notifyOnChangeProps ? match.observer.trackResult(observerResult) : observerResult;
        });
      }
    ];
  }
  #combineResult(input) {
    const combine = this.#options?.combine;
    if (combine) {
      return (0, import_utils.replaceEqualDeep)(this.#combinedResult, combine(input));
    }
    return input;
  }
  #findMatchingObservers(queries) {
    const prevObservers = this.#observers;
    const prevObserversMap = new Map(
      prevObservers.map((observer) => [observer.options.queryHash, observer])
    );
    const defaultedQueryOptions = queries.map(
      (options) => this.#client.defaultQueryOptions(options)
    );
    const matchingObservers = defaultedQueryOptions.flatMap((defaultedOptions) => {
      const match = prevObserversMap.get(defaultedOptions.queryHash);
      if (match != null) {
        return [{ defaultedQueryOptions: defaultedOptions, observer: match }];
      }
      return [];
    });
    const matchedQueryHashes = new Set(
      matchingObservers.map((match) => match.defaultedQueryOptions.queryHash)
    );
    const unmatchedQueries = defaultedQueryOptions.filter(
      (defaultedOptions) => !matchedQueryHashes.has(defaultedOptions.queryHash)
    );
    const getObserver = (options) => {
      const defaultedOptions = this.#client.defaultQueryOptions(options);
      const currentObserver = this.#observers.find(
        (o) => o.options.queryHash === defaultedOptions.queryHash
      );
      return currentObserver ?? new import_queryObserver.QueryObserver(this.#client, defaultedOptions);
    };
    const newOrReusedObservers = unmatchedQueries.map((options) => {
      return {
        defaultedQueryOptions: options,
        observer: getObserver(options)
      };
    });
    const sortMatchesByOrderOfQueries = (a, b) => defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);
    return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
  }
  #onUpdate(observer, result) {
    const index = this.#observers.indexOf(observer);
    if (index !== -1) {
      this.#setResult(replaceAt(this.#result, index, result));
      this.#notify();
    }
  }
  #notify() {
    import_notifyManager.notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(this.#result);
      });
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=queriesObserver.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/query.cjs":
/*!*******************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/query.cjs ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/query.ts
var query_exports = {};
__export(query_exports, {
  Query: () => Query
});
module.exports = __toCommonJS(query_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_retryer = __webpack_require__(/*! ./retryer.cjs */ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs");
var import_removable = __webpack_require__(/*! ./removable.cjs */ "../node_modules/@tanstack/query-core/build/modern/removable.cjs");
var Query = class extends import_removable.Removable {
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.#setOptions(config.options);
    this.#observers = [];
    this.#cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = config.state || getDefaultState(this.options);
    this.state = this.#initialState;
    this.scheduleGc();
  }
  #initialState;
  #revertState;
  #cache;
  #promise;
  #retryer;
  #observers;
  #defaultOptions;
  #abortSignalConsumed;
  get meta() {
    return this.options.meta;
  }
  #setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    if (!this.#observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = (0, import_utils.replaceData)(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(import_utils.noop).catch(import_utils.noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.#observers.some(
      (observer) => observer.options.enabled !== false
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.#observers.some((observer) => observer.getCurrentResult().isStale);
  }
  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, import_utils.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.#observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.#observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.#observers.includes(observer)) {
      this.#observers = this.#observers.filter((x) => x !== observer);
      if (!this.#observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.#observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#promise) {
        this.#retryer?.continueRetry();
        return this.#promise;
      }
    }
    if (options) {
      this.#setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.#observers.find((x) => x.options.queryFn);
      if (observer) {
        this.#setOptions(observer.options);
      }
    }
    if (true) {
      if (!Array.isArray(this.options.queryKey)) {
        console.error(
          `As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`
        );
      }
    }
    const abortController = new AbortController();
    const queryFnContext = {
      queryKey: this.queryKey,
      meta: this.meta
    };
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    addSignalProperty(queryFnContext);
    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject(
          new Error(`Missing queryFn: '${this.options.queryHash}'`)
        );
      }
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          this.options.queryFn,
          queryFnContext,
          this
        );
      }
      return this.options.queryFn(
        queryFnContext
      );
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn
    };
    addSignalProperty(context);
    this.options.behavior?.onFetch(
      context,
      this
    );
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    const onError = (error) => {
      if (!((0, import_retryer.isCancelledError)(error) && error.silent)) {
        this.#dispatch({
          type: "error",
          error
        });
      }
      if (!(0, import_retryer.isCancelledError)(error)) {
        this.#cache.config.onError?.(
          error,
          this
        );
        this.#cache.config.onSettled?.(
          this.state.data,
          error,
          this
        );
      }
      if (!this.isFetchingOptimistic) {
        this.scheduleGc();
      }
      this.isFetchingOptimistic = false;
    };
    this.#retryer = (0, import_retryer.createRetryer)({
      fn: context.fetchFn,
      abort: abortController.abort.bind(abortController),
      onSuccess: (data) => {
        if (typeof data === "undefined") {
          if (true) {
            console.error(
              `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
            );
          }
          onError(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(data);
        this.#cache.config.onSuccess?.(data, this);
        this.#cache.config.onSettled?.(
          data,
          this.state.error,
          this
        );
        if (!this.isFetchingOptimistic) {
          this.scheduleGc();
        }
        this.isFetchingOptimistic = false;
      },
      onError,
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode
    });
    this.#promise = this.#retryer.promise;
    return this.#promise;
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: action.meta ?? null,
            fetchStatus: (0, import_retryer.canFetch)(this.options.networkMode) ? "fetching" : "paused",
            ...!state.dataUpdatedAt && {
              error: null,
              status: "pending"
            }
          };
        case "success":
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const error = action.error;
          if ((0, import_retryer.isCancelledError)(error) && error.revert && this.#revertState) {
            return { ...this.#revertState, fetchStatus: "idle" };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    import_notifyManager.notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function getDefaultState(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = typeof data !== "undefined";
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=query.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/queryCache.cjs":
/*!************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/queryCache.cjs ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/queryCache.ts
var queryCache_exports = {};
__export(queryCache_exports, {
  QueryCache: () => QueryCache
});
module.exports = __toCommonJS(queryCache_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_query = __webpack_require__(/*! ./query.cjs */ "../node_modules/@tanstack/query-core/build/modern/query.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var QueryCache = class extends import_subscribable.Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? (0, import_utils.hashQueryKeyByOptions)(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new import_query.Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    import_notifyManager.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => (0, import_utils.matchQuery)(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => (0, import_utils.matchQuery)(filters, query)) : queries;
  }
  notify(event) {
    import_notifyManager.notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    import_notifyManager.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    import_notifyManager.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=queryCache.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/queryClient.cjs":
/*!*************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/queryClient.cjs ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/queryClient.ts
var queryClient_exports = {};
__export(queryClient_exports, {
  QueryClient: () => QueryClient
});
module.exports = __toCommonJS(queryClient_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_queryCache = __webpack_require__(/*! ./queryCache.cjs */ "../node_modules/@tanstack/query-core/build/modern/queryCache.cjs");
var import_mutationCache = __webpack_require__(/*! ./mutationCache.cjs */ "../node_modules/@tanstack/query-core/build/modern/mutationCache.cjs");
var import_focusManager = __webpack_require__(/*! ./focusManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/focusManager.cjs");
var import_onlineManager = __webpack_require__(/*! ./onlineManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/onlineManager.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_infiniteQueryBehavior = __webpack_require__(/*! ./infiniteQueryBehavior.cjs */ "../node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.cjs");
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new import_queryCache.QueryCache();
    this.#mutationCache = config.mutationCache || new import_mutationCache.MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1)
      return;
    this.#unsubscribeFocus = import_focusManager.focusManager.subscribe(() => {
      if (import_focusManager.focusManager.isFocused()) {
        this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = import_onlineManager.onlineManager.subscribe(() => {
      if (import_onlineManager.onlineManager.isOnline()) {
        this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0)
      return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  getQueryData(queryKey) {
    return this.#queryCache.find({ queryKey })?.state.data;
  }
  ensureQueryData(options) {
    const cachedData = this.getQueryData(options.queryKey);
    return cachedData !== void 0 ? Promise.resolve(cachedData) : this.fetchQuery(options);
  }
  getQueriesData(filters) {
    return this.getQueryCache().findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const query = this.#queryCache.find({ queryKey });
    const prevData = query?.state.data;
    const data = (0, import_utils.functionalUpdate)(updater, prevData);
    if (typeof data === "undefined") {
      return void 0;
    }
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return import_notifyManager.notifyManager.batch(
      () => this.getQueryCache().findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    return this.#queryCache.find({ queryKey })?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    import_notifyManager.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    const refetchFilters = {
      type: "active",
      ...filters
    };
    return import_notifyManager.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(filters = {}, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = import_notifyManager.notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(import_utils.noop).catch(import_utils.noop);
  }
  invalidateQueries(filters = {}, options = {}) {
    return import_notifyManager.notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters.refetchType === "none") {
        return Promise.resolve();
      }
      const refetchFilters = {
        ...filters,
        type: filters.refetchType ?? filters.type ?? "active"
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(filters = {}, options) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options?.cancelRefetch ?? true
    };
    const promises = import_notifyManager.notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(import_utils.noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(import_utils.noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(import_utils.noop).catch(import_utils.noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = (0, import_infiniteQueryBehavior.infiniteQueryBehavior)(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(import_utils.noop).catch(import_utils.noop);
  }
  resumePausedMutations() {
    return this.#mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set((0, import_utils.hashKey)(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    let result = {};
    defaults.forEach((queryDefault) => {
      if ((0, import_utils.partialMatchKey)(queryKey, queryDefault.queryKey)) {
        result = { ...result, ...queryDefault.defaultOptions };
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set((0, import_utils.hashKey)(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    let result = {};
    defaults.forEach((queryDefault) => {
      if ((0, import_utils.partialMatchKey)(mutationKey, queryDefault.mutationKey)) {
        result = { ...result, ...queryDefault.defaultOptions };
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...options?.queryKey && this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = (0, import_utils.hashQueryKeyByOptions)(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (typeof defaultedOptions.refetchOnReconnect === "undefined") {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (typeof defaultedOptions.throwOnError === "undefined") {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (typeof defaultedOptions.networkMode === "undefined" && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=queryClient.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/queryObserver.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/queryObserver.cjs ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/queryObserver.ts
var queryObserver_exports = {};
__export(queryObserver_exports, {
  QueryObserver: () => QueryObserver
});
module.exports = __toCommonJS(queryObserver_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var import_notifyManager = __webpack_require__(/*! ./notifyManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/notifyManager.cjs");
var import_focusManager = __webpack_require__(/*! ./focusManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/focusManager.cjs");
var import_subscribable = __webpack_require__(/*! ./subscribable.cjs */ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs");
var import_retryer = __webpack_require__(/*! ./retryer.cjs */ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs");
var QueryObserver = class extends import_subscribable.Subscribable {
  constructor(client, options) {
    super();
    this.#currentQuery = void 0;
    this.#currentQueryInitialState = void 0;
    this.#currentResult = void 0;
    this.#trackedProps = /* @__PURE__ */ new Set();
    this.#client = client;
    this.options = options;
    this.#selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery;
  #currentQueryInitialState;
  #currentResult;
  #currentResultState;
  #currentResultOptions;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps;
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (!(0, import_utils.shallowEqualObjects)(prevOptions, this.options)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.#updateQuery();
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.#currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.#trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(import_utils.noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    if (import_utils.isServer || this.#currentResult.isStale || !(0, import_utils.isValidTimeout)(this.options.staleTime)) {
      return;
    }
    const time = (0, import_utils.timeUntilStale)(
      this.#currentResult.dataUpdatedAt,
      this.options.staleTime
    );
    const timeout = time + 1;
    this.#staleTimeoutId = setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (import_utils.isServer || this.options.enabled === false || !(0, import_utils.isValidTimeout)(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || import_focusManager.focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let { error, errorUpdatedAt, fetchStatus, status } = state;
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        fetchStatus = (0, import_retryer.canFetch)(query.options.networkMode) ? "fetching" : "paused";
        if (!state.dataUpdatedAt) {
          status = "pending";
        }
      }
      if (options._optimisticResults === "isRestoring") {
        fetchStatus = "idle";
      }
    }
    if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(state.data);
          data = (0, import_utils.replaceData)(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            this.#selectError = null;
          } catch (selectError) {
            this.#selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = (0, import_utils.replaceData)(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const result = {
      status,
      fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: state.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch
    };
    return result;
  }
  updateResult(notifyOptions) {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if ((0, import_utils.shallowEqualObjects)(nextResult, prevResult)) {
      return;
    }
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    this.#currentResult = nextResult;
    const defaultNotifyOptions = {};
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    if (notifyOptions?.listeners !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }
    this.#notify({ ...defaultNotifyOptions, ...notifyOptions });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    import_notifyManager.notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!(0, import_utils.shallowEqualObjects)(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=queryObserver.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/removable.cjs":
/*!***********************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/removable.cjs ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/removable.ts
var removable_exports = {};
__export(removable_exports, {
  Removable: () => Removable
});
module.exports = __toCommonJS(removable_exports);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if ((0, import_utils.isValidTimeout)(this.gcTime)) {
      this.#gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (import_utils.isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=removable.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/retryer.cjs":
/*!*********************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/retryer.cjs ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/retryer.ts
var retryer_exports = {};
__export(retryer_exports, {
  CancelledError: () => CancelledError,
  canFetch: () => canFetch,
  createRetryer: () => createRetryer,
  isCancelledError: () => isCancelledError
});
module.exports = __toCommonJS(retryer_exports);
var import_focusManager = __webpack_require__(/*! ./focusManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/focusManager.cjs");
var import_onlineManager = __webpack_require__(/*! ./onlineManager.cjs */ "../node_modules/@tanstack/query-core/build/modern/onlineManager.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/query-core/build/modern/utils.cjs");
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? import_onlineManager.onlineManager.isOnline() : true;
}
var CancelledError = class {
  constructor(options) {
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  const cancel = (cancelOptions) => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config.abort?.();
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const shouldPause = () => !import_focusManager.focusManager.isFocused() || config.networkMode !== "always" && !import_onlineManager.onlineManager.isOnline();
  const resolve = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onSuccess?.(value);
      continueFn?.();
      promiseResolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved) {
      isResolved = true;
      config.onError?.(value);
      continueFn?.();
      promiseReject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        const canContinue = isResolved || !shouldPause();
        if (canContinue) {
          continueResolve(value);
        }
        return canContinue;
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved) {
      return;
    }
    let promiseOrValue;
    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved) {
        return;
      }
      const retry = config.retry ?? (import_utils.isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      (0, import_utils.sleep)(delay).then(() => {
        if (shouldPause()) {
          return pause();
        }
        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  if (canFetch(config.networkMode)) {
    run();
  } else {
    pause().then(run);
  }
  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn?.();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=retryer.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/subscribable.cjs":
/*!**************************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/subscribable.cjs ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/subscribable.ts
var subscribable_exports = {};
__export(subscribable_exports, {
  Subscribable: () => Subscribable
});
module.exports = __toCommonJS(subscribable_exports);
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=subscribable.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/types.cjs":
/*!*******************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/types.cjs ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/types.ts
var types_exports = {};
module.exports = __toCommonJS(types_exports);
//# sourceMappingURL=types.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/query-core/build/modern/utils.cjs":
/*!*******************************************************************!*\
  !*** ../node_modules/@tanstack/query-core/build/modern/utils.cjs ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils.ts
var utils_exports = {};
__export(utils_exports, {
  addToEnd: () => addToEnd,
  addToStart: () => addToStart,
  functionalUpdate: () => functionalUpdate,
  hashKey: () => hashKey,
  hashQueryKeyByOptions: () => hashQueryKeyByOptions,
  isPlainArray: () => isPlainArray,
  isPlainObject: () => isPlainObject,
  isServer: () => isServer,
  isValidTimeout: () => isValidTimeout,
  keepPreviousData: () => keepPreviousData,
  matchMutation: () => matchMutation,
  matchQuery: () => matchQuery,
  noop: () => noop,
  partialMatchKey: () => partialMatchKey,
  replaceData: () => replaceData,
  replaceEqualDeep: () => replaceEqualDeep,
  scheduleMicrotask: () => scheduleMicrotask,
  shallowEqualObjects: () => shallowEqualObjects,
  sleep: () => sleep,
  timeUntilStale: () => timeUntilStale
});
module.exports = __toCommonJS(utils_exports);
var isServer = typeof window === "undefined" || "Deno" in window;
function noop() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetchStatus !== "undefined" && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some((key) => !partialMatchKey(a[key], b[key]));
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function keepPreviousData(previousData) {
  return previousData;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=utils.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/HydrationBoundary.cjs":
/*!********************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/HydrationBoundary.cjs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/HydrationBoundary.tsx
var HydrationBoundary_exports = {};
__export(HydrationBoundary_exports, {
  HydrationBoundary: () => HydrationBoundary
});
module.exports = __toCommonJS(HydrationBoundary_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
var HydrationBoundary = ({
  children,
  options = {},
  state,
  queryClient
}) => {
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  const [hydrationQueue, setHydrationQueue] = React.useState();
  const optionsRef = React.useRef(options);
  optionsRef.current = options;
  React.useMemo(() => {
    if (state) {
      if (typeof state !== "object") {
        return;
      }
      const queryCache = client.getQueryCache();
      const queries = state.queries || [];
      const newQueries = [];
      const existingQueries = [];
      for (const dehydratedQuery of queries) {
        const existingQuery = queryCache.get(dehydratedQuery.queryHash);
        if (!existingQuery) {
          newQueries.push(dehydratedQuery);
        } else {
          const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt;
          const queryAlreadyQueued = hydrationQueue?.find(
            (query) => query.queryHash === dehydratedQuery.queryHash
          );
          if (hydrationIsNewer && (!queryAlreadyQueued || dehydratedQuery.state.dataUpdatedAt > queryAlreadyQueued.state.dataUpdatedAt)) {
            existingQueries.push(dehydratedQuery);
          }
        }
      }
      if (newQueries.length > 0) {
        (0, import_query_core.hydrate)(client, { queries: newQueries }, optionsRef.current);
      }
      if (existingQueries.length > 0) {
        setHydrationQueue(
          (prev) => prev ? [...prev, ...existingQueries] : existingQueries
        );
      }
    }
  }, [client, hydrationQueue, state]);
  React.useEffect(() => {
    if (hydrationQueue) {
      (0, import_query_core.hydrate)(client, { queries: hydrationQueue }, optionsRef.current);
      setHydrationQueue(void 0);
    }
  }, [client, hydrationQueue]);
  return children;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=HydrationBoundary.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs":
/*!**********************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/QueryClientProvider.tsx
var QueryClientProvider_exports = {};
__export(QueryClientProvider_exports, {
  QueryClientContext: () => QueryClientContext,
  QueryClientProvider: () => QueryClientProvider,
  useQueryClient: () => useQueryClient
});
module.exports = __toCommonJS(QueryClientProvider_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var QueryClientContext = React.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = React.useContext(QueryClientContext);
  if (queryClient) {
    return queryClient;
  }
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};
var QueryClientProvider = ({
  client,
  children
}) => {
  React.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ React.createElement(QueryClientContext.Provider, { value: client }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=QueryClientProvider.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.cjs":
/*!**************************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.cjs ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/QueryErrorResetBoundary.tsx
var QueryErrorResetBoundary_exports = {};
__export(QueryErrorResetBoundary_exports, {
  QueryErrorResetBoundary: () => QueryErrorResetBoundary,
  useQueryErrorResetBoundary: () => useQueryErrorResetBoundary
});
module.exports = __toCommonJS(QueryErrorResetBoundary_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React.createContext(createValue());
var useQueryErrorResetBoundary = () => React.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /* @__PURE__ */ React.createElement(QueryErrorResetBoundaryContext.Provider, { value }, typeof children === "function" ? children(value) : children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=QueryErrorResetBoundary.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.cjs":
/*!*********************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.cjs ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/errorBoundaryUtils.ts
var errorBoundaryUtils_exports = {};
__export(errorBoundaryUtils_exports, {
  ensurePreventErrorBoundaryRetry: () => ensurePreventErrorBoundaryRetry,
  getHasError: () => getHasError,
  useClearResetErrorBoundary: () => useClearResetErrorBoundary
});
module.exports = __toCommonJS(errorBoundaryUtils_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/react-query/build/modern/utils.cjs");
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  React.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && (0, import_utils.shouldThrowError)(throwOnError, [result.error, query]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=errorBoundaryUtils.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/index.cjs":
/*!********************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/index.cjs ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HydrationBoundary: () => import_HydrationBoundary.HydrationBoundary,
  IsRestoringProvider: () => import_isRestoring.IsRestoringProvider,
  QueryClientContext: () => import_QueryClientProvider.QueryClientContext,
  QueryClientProvider: () => import_QueryClientProvider.QueryClientProvider,
  QueryErrorResetBoundary: () => import_QueryErrorResetBoundary.QueryErrorResetBoundary,
  infiniteQueryOptions: () => import_infiniteQueryOptions.infiniteQueryOptions,
  queryOptions: () => import_queryOptions.queryOptions,
  useInfiniteQuery: () => import_useInfiniteQuery.useInfiniteQuery,
  useIsFetching: () => import_useIsFetching.useIsFetching,
  useIsMutating: () => import_useMutationState.useIsMutating,
  useIsRestoring: () => import_isRestoring.useIsRestoring,
  useMutation: () => import_useMutation.useMutation,
  useMutationState: () => import_useMutationState.useMutationState,
  useQueries: () => import_useQueries.useQueries,
  useQuery: () => import_useQuery.useQuery,
  useQueryClient: () => import_QueryClientProvider.useQueryClient,
  useQueryErrorResetBoundary: () => import_QueryErrorResetBoundary.useQueryErrorResetBoundary,
  useSuspenseInfiniteQuery: () => import_useSuspenseInfiniteQuery.useSuspenseInfiniteQuery,
  useSuspenseQueries: () => import_useSuspenseQueries.useSuspenseQueries,
  useSuspenseQuery: () => import_useSuspenseQuery.useSuspenseQuery
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs"), module.exports);
__reExport(src_exports, __webpack_require__(/*! ./types.cjs */ "../node_modules/@tanstack/react-query/build/modern/types.cjs"), module.exports);
var import_useQueries = __webpack_require__(/*! ./useQueries.cjs */ "../node_modules/@tanstack/react-query/build/modern/useQueries.cjs");
var import_useQuery = __webpack_require__(/*! ./useQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useQuery.cjs");
var import_useSuspenseQuery = __webpack_require__(/*! ./useSuspenseQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.cjs");
var import_useSuspenseInfiniteQuery = __webpack_require__(/*! ./useSuspenseInfiniteQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.cjs");
var import_useSuspenseQueries = __webpack_require__(/*! ./useSuspenseQueries.cjs */ "../node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.cjs");
var import_queryOptions = __webpack_require__(/*! ./queryOptions.cjs */ "../node_modules/@tanstack/react-query/build/modern/queryOptions.cjs");
var import_infiniteQueryOptions = __webpack_require__(/*! ./infiniteQueryOptions.cjs */ "../node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
var import_HydrationBoundary = __webpack_require__(/*! ./HydrationBoundary.cjs */ "../node_modules/@tanstack/react-query/build/modern/HydrationBoundary.cjs");
var import_QueryErrorResetBoundary = __webpack_require__(/*! ./QueryErrorResetBoundary.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.cjs");
var import_useIsFetching = __webpack_require__(/*! ./useIsFetching.cjs */ "../node_modules/@tanstack/react-query/build/modern/useIsFetching.cjs");
var import_useMutationState = __webpack_require__(/*! ./useMutationState.cjs */ "../node_modules/@tanstack/react-query/build/modern/useMutationState.cjs");
var import_useMutation = __webpack_require__(/*! ./useMutation.cjs */ "../node_modules/@tanstack/react-query/build/modern/useMutation.cjs");
var import_useInfiniteQuery = __webpack_require__(/*! ./useInfiniteQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.cjs");
var import_isRestoring = __webpack_require__(/*! ./isRestoring.cjs */ "../node_modules/@tanstack/react-query/build/modern/isRestoring.cjs");
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.cjs":
/*!***********************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/infiniteQueryOptions.cjs ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/infiniteQueryOptions.ts
var infiniteQueryOptions_exports = {};
__export(infiniteQueryOptions_exports, {
  infiniteQueryOptions: () => infiniteQueryOptions
});
module.exports = __toCommonJS(infiniteQueryOptions_exports);
function infiniteQueryOptions(options) {
  return options;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=infiniteQueryOptions.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/isRestoring.cjs":
/*!**************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/isRestoring.cjs ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/isRestoring.ts
var isRestoring_exports = {};
__export(isRestoring_exports, {
  IsRestoringProvider: () => IsRestoringProvider,
  useIsRestoring: () => useIsRestoring
});
module.exports = __toCommonJS(isRestoring_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var IsRestoringContext = React.createContext(false);
var useIsRestoring = () => React.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isRestoring.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/queryOptions.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/queryOptions.cjs ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/queryOptions.ts
var queryOptions_exports = {};
__export(queryOptions_exports, {
  queryOptions: () => queryOptions
});
module.exports = __toCommonJS(queryOptions_exports);
function queryOptions(options) {
  return options;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=queryOptions.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs":
/*!***********************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/suspense.cjs ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/suspense.ts
var suspense_exports = {};
__export(suspense_exports, {
  defaultThrowOnError: () => defaultThrowOnError,
  ensureStaleTime: () => ensureStaleTime,
  fetchOptimistic: () => fetchOptimistic,
  shouldSuspend: () => shouldSuspend,
  willFetch: () => willFetch
});
module.exports = __toCommonJS(suspense_exports);
var defaultThrowOnError = (_error, query) => typeof query.state.data === "undefined";
var ensureStaleTime = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result, isRestoring) => defaultedOptions?.suspense && willFetch(result, isRestoring);
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=suspense.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/types.cjs":
/*!********************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/types.cjs ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/types.ts
var types_exports = {};
module.exports = __toCommonJS(types_exports);
//# sourceMappingURL=types.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs":
/*!***************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useBaseQuery.ts
var useBaseQuery_exports = {};
__export(useBaseQuery_exports, {
  useBaseQuery: () => useBaseQuery
});
module.exports = __toCommonJS(useBaseQuery_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryErrorResetBoundary = __webpack_require__(/*! ./QueryErrorResetBoundary.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
var import_isRestoring = __webpack_require__(/*! ./isRestoring.cjs */ "../node_modules/@tanstack/react-query/build/modern/isRestoring.cjs");
var import_errorBoundaryUtils = __webpack_require__(/*! ./errorBoundaryUtils.cjs */ "../node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.cjs");
var import_suspense = __webpack_require__(/*! ./suspense.cjs */ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs");
function useBaseQuery(options, Observer, queryClient) {
  if (true) {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new Error(
        'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
      );
    }
  }
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  const isRestoring = (0, import_isRestoring.useIsRestoring)();
  const errorResetBoundary = (0, import_QueryErrorResetBoundary.useQueryErrorResetBoundary)();
  const defaultedOptions = client.defaultQueryOptions(options);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  (0, import_suspense.ensureStaleTime)(defaultedOptions);
  (0, import_errorBoundaryUtils.ensurePreventErrorBoundaryRetry)(defaultedOptions, errorResetBoundary);
  (0, import_errorBoundaryUtils.useClearResetErrorBoundary)(errorResetBoundary);
  const [observer] = React.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => {
        const unsubscribe = isRestoring ? () => void 0 : observer.subscribe(import_query_core.notifyManager.batchCalls(onStoreChange));
        observer.updateResult();
        return unsubscribe;
      },
      [observer, isRestoring]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React.useEffect(() => {
    observer.setOptions(defaultedOptions, { listeners: false });
  }, [defaultedOptions, observer]);
  if ((0, import_suspense.shouldSuspend)(defaultedOptions, result, isRestoring)) {
    throw (0, import_suspense.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary);
  }
  if ((0, import_errorBoundaryUtils.getHasError)({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useBaseQuery.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.cjs":
/*!*******************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.cjs ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useInfiniteQuery.ts
var useInfiniteQuery_exports = {};
__export(useInfiniteQuery_exports, {
  useInfiniteQuery: () => useInfiniteQuery
});
module.exports = __toCommonJS(useInfiniteQuery_exports);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_useBaseQuery = __webpack_require__(/*! ./useBaseQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs");
function useInfiniteQuery(options, queryClient) {
  return (0, import_useBaseQuery.useBaseQuery)(
    options,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    import_query_core.InfiniteQueryObserver,
    queryClient
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useInfiniteQuery.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useIsFetching.cjs":
/*!****************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useIsFetching.cjs ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useIsFetching.ts
var useIsFetching_exports = {};
__export(useIsFetching_exports, {
  useIsFetching: () => useIsFetching
});
module.exports = __toCommonJS(useIsFetching_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
function useIsFetching(filters, queryClient) {
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  const queryCache = client.getQueryCache();
  return React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => queryCache.subscribe(import_query_core.notifyManager.batchCalls(onStoreChange)),
      [queryCache]
    ),
    () => client.isFetching(filters),
    () => client.isFetching(filters)
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useIsFetching.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useMutation.cjs":
/*!**************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useMutation.cjs ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useMutation.ts
var useMutation_exports = {};
__export(useMutation_exports, {
  useMutation: () => useMutation
});
module.exports = __toCommonJS(useMutation_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
var import_utils = __webpack_require__(/*! ./utils.cjs */ "../node_modules/@tanstack/react-query/build/modern/utils.cjs");
function useMutation(options, queryClient) {
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  const [observer] = React.useState(
    () => new import_query_core.MutationObserver(
      client,
      options
    )
  );
  React.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => observer.subscribe(import_query_core.notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = React.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && (0, import_utils.shouldThrowError)(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function noop() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useMutation.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useMutationState.cjs":
/*!*******************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useMutationState.cjs ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useMutationState.ts
var useMutationState_exports = {};
__export(useMutationState_exports, {
  useIsMutating: () => useIsMutating,
  useMutationState: () => useMutationState
});
module.exports = __toCommonJS(useMutationState_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
function useIsMutating(filters, queryClient) {
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  return useMutationState(
    { filters: { ...filters, status: "pending" } },
    client
  ).length;
}
function getResult(mutationCache, options) {
  return mutationCache.findAll(options.filters).map(
    (mutation) => options.select ? options.select(
      mutation
    ) : mutation.state
  );
}
function useMutationState(options = {}, queryClient) {
  const mutationCache = (0, import_QueryClientProvider.useQueryClient)(queryClient).getMutationCache();
  const optionsRef = React.useRef(options);
  const result = React.useRef();
  if (!result.current) {
    result.current = getResult(mutationCache, options);
  }
  React.useEffect(() => {
    optionsRef.current = options;
  });
  return React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => mutationCache.subscribe(() => {
        const nextResult = (0, import_query_core.replaceEqualDeep)(
          result.current,
          getResult(mutationCache, optionsRef.current)
        );
        if (result.current !== nextResult) {
          result.current = nextResult;
          import_query_core.notifyManager.schedule(onStoreChange);
        }
      }),
      [mutationCache]
    ),
    () => result.current,
    () => result.current
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useMutationState.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useQueries.cjs":
/*!*************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useQueries.cjs ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useQueries.ts
var useQueries_exports = {};
__export(useQueries_exports, {
  useQueries: () => useQueries
});
module.exports = __toCommonJS(useQueries_exports);
var React = __toESM(__webpack_require__(/*! react */ "react"), 1);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_QueryClientProvider = __webpack_require__(/*! ./QueryClientProvider.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.cjs");
var import_isRestoring = __webpack_require__(/*! ./isRestoring.cjs */ "../node_modules/@tanstack/react-query/build/modern/isRestoring.cjs");
var import_QueryErrorResetBoundary = __webpack_require__(/*! ./QueryErrorResetBoundary.cjs */ "../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.cjs");
var import_errorBoundaryUtils = __webpack_require__(/*! ./errorBoundaryUtils.cjs */ "../node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.cjs");
var import_suspense = __webpack_require__(/*! ./suspense.cjs */ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs");
function useQueries({
  queries,
  ...options
}, queryClient) {
  const client = (0, import_QueryClientProvider.useQueryClient)(queryClient);
  const isRestoring = (0, import_isRestoring.useIsRestoring)();
  const errorResetBoundary = (0, import_QueryErrorResetBoundary.useQueryErrorResetBoundary)();
  const defaultedQueries = React.useMemo(
    () => queries.map((opts) => {
      const defaultedOptions = client.defaultQueryOptions(opts);
      defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
      return defaultedOptions;
    }),
    [queries, client, isRestoring]
  );
  defaultedQueries.forEach((query) => {
    (0, import_suspense.ensureStaleTime)(query);
    (0, import_errorBoundaryUtils.ensurePreventErrorBoundaryRetry)(query, errorResetBoundary);
  });
  (0, import_errorBoundaryUtils.useClearResetErrorBoundary)(errorResetBoundary);
  const [observer] = React.useState(
    () => new import_query_core.QueriesObserver(
      client,
      defaultedQueries,
      options
    )
  );
  const [optimisticResult, getCombinedResult, trackResult] = observer.getOptimisticResult(defaultedQueries);
  React.useSyncExternalStore(
    React.useCallback(
      (onStoreChange) => isRestoring ? () => void 0 : observer.subscribe(import_query_core.notifyManager.batchCalls(onStoreChange)),
      [observer, isRestoring]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React.useEffect(() => {
    observer.setQueries(
      defaultedQueries,
      options,
      {
        listeners: false
      }
    );
  }, [defaultedQueries, options, observer]);
  const shouldAtLeastOneSuspend = optimisticResult.some(
    (result, index) => (0, import_suspense.shouldSuspend)(defaultedQueries[index], result, isRestoring)
  );
  const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
    const opts = defaultedQueries[index];
    if (opts) {
      const queryObserver = new import_query_core.QueryObserver(client, opts);
      if ((0, import_suspense.shouldSuspend)(opts, result, isRestoring)) {
        return (0, import_suspense.fetchOptimistic)(opts, queryObserver, errorResetBoundary);
      } else if ((0, import_suspense.willFetch)(result, isRestoring)) {
        void (0, import_suspense.fetchOptimistic)(opts, queryObserver, errorResetBoundary);
      }
    }
    return [];
  }) : [];
  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }
  const observerQueries = observer.getQueries();
  const firstSingleResultWhichShouldThrow = optimisticResult.find(
    (result, index) => (0, import_errorBoundaryUtils.getHasError)({
      result,
      errorResetBoundary,
      throwOnError: defaultedQueries[index]?.throwOnError ?? false,
      query: observerQueries[index]
    })
  );
  if (firstSingleResultWhichShouldThrow?.error) {
    throw firstSingleResultWhichShouldThrow.error;
  }
  return getCombinedResult(trackResult());
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useQueries.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useQuery.cjs":
/*!***********************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useQuery.cjs ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useQuery.ts
var useQuery_exports = {};
__export(useQuery_exports, {
  useQuery: () => useQuery
});
module.exports = __toCommonJS(useQuery_exports);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_useBaseQuery = __webpack_require__(/*! ./useBaseQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs");
function useQuery(options, queryClient) {
  return (0, import_useBaseQuery.useBaseQuery)(options, import_query_core.QueryObserver, queryClient);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useQuery.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.cjs":
/*!***************************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useSuspenseInfiniteQuery.cjs ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useSuspenseInfiniteQuery.ts
var useSuspenseInfiniteQuery_exports = {};
__export(useSuspenseInfiniteQuery_exports, {
  useSuspenseInfiniteQuery: () => useSuspenseInfiniteQuery
});
module.exports = __toCommonJS(useSuspenseInfiniteQuery_exports);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_useBaseQuery = __webpack_require__(/*! ./useBaseQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs");
var import_suspense = __webpack_require__(/*! ./suspense.cjs */ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs");
function useSuspenseInfiniteQuery(options, queryClient) {
  return (0, import_useBaseQuery.useBaseQuery)(
    {
      ...options,
      enabled: true,
      suspense: true,
      throwOnError: import_suspense.defaultThrowOnError
    },
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    import_query_core.InfiniteQueryObserver,
    queryClient
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useSuspenseInfiniteQuery.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.cjs":
/*!*********************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useSuspenseQueries.cjs ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useSuspenseQueries.ts
var useSuspenseQueries_exports = {};
__export(useSuspenseQueries_exports, {
  useSuspenseQueries: () => useSuspenseQueries
});
module.exports = __toCommonJS(useSuspenseQueries_exports);
var import_useQueries = __webpack_require__(/*! ./useQueries.cjs */ "../node_modules/@tanstack/react-query/build/modern/useQueries.cjs");
var import_suspense = __webpack_require__(/*! ./suspense.cjs */ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs");
function useSuspenseQueries(options, queryClient) {
  return (0, import_useQueries.useQueries)(
    {
      ...options,
      queries: options.queries.map((query) => ({
        ...query,
        suspense: true,
        throwOnError: import_suspense.defaultThrowOnError,
        enabled: true
      }))
    },
    queryClient
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useSuspenseQueries.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.cjs":
/*!*******************************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.cjs ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/useSuspenseQuery.ts
var useSuspenseQuery_exports = {};
__export(useSuspenseQuery_exports, {
  useSuspenseQuery: () => useSuspenseQuery
});
module.exports = __toCommonJS(useSuspenseQuery_exports);
var import_query_core = __webpack_require__(/*! @tanstack/query-core */ "../node_modules/@tanstack/query-core/build/modern/index.cjs");
var import_useBaseQuery = __webpack_require__(/*! ./useBaseQuery.cjs */ "../node_modules/@tanstack/react-query/build/modern/useBaseQuery.cjs");
var import_suspense = __webpack_require__(/*! ./suspense.cjs */ "../node_modules/@tanstack/react-query/build/modern/suspense.cjs");
function useSuspenseQuery(options, queryClient) {
  return (0, import_useBaseQuery.useBaseQuery)(
    {
      ...options,
      enabled: true,
      suspense: true,
      throwOnError: import_suspense.defaultThrowOnError
    },
    import_query_core.QueryObserver,
    queryClient
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useSuspenseQuery.cjs.map

/***/ }),

/***/ "../node_modules/@tanstack/react-query/build/modern/utils.cjs":
/*!********************************************************************!*\
  !*** ../node_modules/@tanstack/react-query/build/modern/utils.cjs ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils.ts
var utils_exports = {};
__export(utils_exports, {
  shouldThrowError: () => shouldThrowError
});
module.exports = __toCommonJS(utils_exports);
function shouldThrowError(throwError, params) {
  if (typeof throwError === "function") {
    return throwError(...params);
  }
  return !!throwError;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=utils.cjs.map

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
/*!***************************************************!*\
  !*** ../modules/notifications/assets/js/admin.js ***!
  \***************************************************/


var _barButtonNotification = __webpack_require__(/*! ./components/bar-button-notification */ "../modules/notifications/assets/js/components/bar-button-notification.js");
window.elementorNotificationCenter = {
  BarButtonNotification: _barButtonNotification.BarButtonNotification
};
})();

/******/ })()
;
//# sourceMappingURL=admin-notifications.js.map