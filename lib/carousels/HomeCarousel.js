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

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HomeCarousel = function HomeCarousel(props) {
  var p = props.stakingBalance / props.stakingCapacity * 100;
  var pFixed = p.toFixed();
  var wtf = (props.stakingCapacity - props.stakingBalance).toFixed();

  var CircleProgressColor = function CircleProgressColor(props) {
    var colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];
    var ind = 3;
    if (props.percentage >= 90) ind = 0;else if (props.percentage >= 50) ind = 2;else if (props.percentage >= 75) ind = 1; // ind = Math.floor(props.percentage / 25);

    return /*#__PURE__*/_react.default.createElement(_reactGradientProgress.CircleProgress, {
      percentage: props.percentage,
      strokeWidth: props.strokeWidth,
      fontSize: props.fontSize,
      primaryColor: [colors[ind], colors[ind]],
      secondaryColor: "#484848",
      child: props.subtitle
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Text.default, null, "Current baker stats"), /*#__PURE__*/_react.default.createElement("div", {
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
    className: "container",
    style: {// justifyContent: "center",
      // alignContent: "center",
      // justifyItems: "center",
      // alignItems: "center",
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-info-box-row"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    bad: p
  }, /*#__PURE__*/_react.default.createElement(CircleProgressColor, {
    percentage: pFixed,
    strokeWidth: 8,
    fontSize: 28,
    subtitle: /*#__PURE__*/_react.default.createElement(_Text.default, {
      bad: p
    }, wtf, "\uA729 left")
  })))), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      justifyContent: "center",
      alignContent: "center",
      justifyItems: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Delegator address...",
    className: "input"
  }), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "Go"
  })))), /*#__PURE__*/_react.default.createElement(_Spacer.default, null)));
};

var container = {};
var _default = HomeCarousel;
exports.default = _default;