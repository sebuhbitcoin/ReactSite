"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _FillableBar = _interopRequireDefault(require("../components/FillableBar"));

var _Spacer = _interopRequireDefault(require("../components/Spacer"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _reactGradientProgress = require("../components/react-gradient-progress");

var _DelegatorModal = _interopRequireDefault(require("../components/DelegatorModal"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HomeCarousel = function HomeCarousel(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      modalState = _useState2[0],
      setModalState = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      addressEntryState = _useState4[0],
      setAddressEntryState = _useState4[1];

  var _useState5 = (0, _react.useState)("#75f94c"),
      _useState6 = _slicedToArray(_useState5, 2),
      inputBorderColor = _useState6[0],
      setInputBorderColor = _useState6[1];

  var p = props.stakingBalance / props.stakingCapacity * 100;
  var pFixed = p.toFixed();
  var wtf = (props.stakingCapacity - props.stakingBalance).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var tpor = Number(props.totalPaidOutRewards.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  var verifyAndSubmitAddress = function verifyAndSubmitAddress(address) {
    if (!/^(tz|KT)[1-2][K-Za-i][A-Za-z0-9]{32}$/.test(address)) {
      setInputBorderColor("#f94c4c");
      return;
    }

    setInputBorderColor("#75f94c");
    setModalState(true);
  };

  var CircleProgressColor = function CircleProgressColor(props) {
    var colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];
    var ind = 3;
    if (props.percentage >= 90) ind = 0;else if (props.percentage >= 50) ind = 2;else if (props.percentage >= 75) ind = 1; // ind = Math.floor(props.percentage / 25);

    return /*#__PURE__*/_react.default.createElement(_reactGradientProgress.CircleProgress, {
      percentage: Number(props.percentage),
      strokeWidth: props.strokeWidth,
      fontSize: String(props.fontSize),
      primaryColor: [colors[ind], colors[ind]],
      secondaryColor: "#484848",
      child: props.subtitle
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement(_DelegatorModal.default, {
    visibility: modalState,
    onClose: setModalState,
    delegatorAddress:
    /*addressEntryState*/
    "tz1RhHkSABE42NA9mzDQ9jx7m8HR4LBoGrw6",
    payoutsArray: props.payoutsArray
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      // , paddingLeft: 50
      // alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    bad: p
  }, "Free space"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    bad: p
  }, /*#__PURE__*/_react.default.createElement(CircleProgressColor, {
    percentage: pFixed,
    strokeWidth: 8,
    fontSize: 28,
    subtitle: /*#__PURE__*/_react.default.createElement(_Text.default, {
      bad: p
    }, wtf, "\uA729 left")
  })), /*#__PURE__*/_react.default.createElement(_Text.default, {
    bad: p
  }, props.delegators, " delegators"))), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      justifyContent: "center",
      alignContent: "center",
      justifyItems: "center",
      alignItems: "center",
      padding: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    customFontSize: 16,
    customFontWeight: "bold"
  }, "Check your rewards")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: function onSubmit(e) {
      verifyAndSubmitAddress(addressEntryState);
      e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    width: 75,
    height: 50,
    type: "text",
    placeholder: "Delegator address...",
    className: "input",
    style: {
      transition: "all .2s ease-in-out",
      border: "1px solid ".concat(inputBorderColor)
    },
    onChange: function onChange(e) {
      setAddressEntryState(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      width: 40,
      height: 35
    },
    onClick: function onClick() {
      return verifyAndSubmitAddress(addressEntryState);
    }
  }, " ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "5px"
    }
  })))), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, null, "Testing"), /*#__PURE__*/_react.default.createElement("div", {
    style: _defineProperty({
      display: "flex",
      flexDirection: "row"
    }, "display", "inline-block")
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "white",
      fontFamily: "Roboto Mono"
    }
  }, "Fee: ", props.fee * 100, "%"), /*#__PURE__*/_react.default.createElement(_Text.default, null, Number(tpor), "\uA729 paid out"))), /*#__PURE__*/_react.default.createElement(MiniInfoSpaced, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    customFontSize: 16
  }, "Baking since block 349")))));
};

var MiniInfoSpaced = function MiniInfoSpaced(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      padding: "5px"
    }
  }, children));
};

var _default = HomeCarousel;
exports.default = _default;