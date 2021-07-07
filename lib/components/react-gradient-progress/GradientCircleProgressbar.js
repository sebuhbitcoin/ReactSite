"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Text = _interopRequireDefault(require("../Text"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CircleContainer = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 100%;\n  position: relative;\n"])));

var PercentageContainer = _styled.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n"])));

var StyledCircle = _styled.default.circle(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n"]))); // const CircleContainer = ({ children, style }) => <div className="react-super-progressbar__base" style={style}>{children}</div>
// const PercentageContainer = ({ children }) => <div className="react-super-progressbar__percentage-container">{children}</div>
// const StyledCircle = ({ children, ...props }) => <circle className="react-super-progressbar__styled-circle" {...props}>{children}</circle>


var GradientCircleProgressbar = function GradientCircleProgressbar(_ref) {
  var percentage = _ref.percentage,
      width = _ref.width,
      strokeWidth = _ref.strokeWidth,
      fontSize = _ref.fontSize,
      fontColor = _ref.fontColor,
      fontFamily = _ref.fontFamily,
      primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor,
      fill = _ref.fill,
      hidePercentageText = _ref.hidePercentageText,
      strokeLinecap = _ref.strokeLinecap,
      child = _ref.child;
  var PI = 3.14;
  var R = width / 2 - strokeWidth * 2;
  var circumference = 2 * PI * R;
  var offset = circumference - percentage / 100 * circumference;
  var gradientId = "".concat(primaryColor[0]).concat(primaryColor[1]).replace(/#/g, "");
  return /*#__PURE__*/_react.default.createElement(CircleContainer, {
    className: "react-super-progressbar__base",
    style: {
      height: "".concat(width, "px"),
      width: "".concat(width, "px")
    }
  }, !hidePercentageText ? /*#__PURE__*/_react.default.createElement(PercentageContainer, {
    className: "react-super-progressbar__percentage-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "react-super-progressbars__percentage",
    style: {
      fontSize: fontSize,
      fontFamily: fontFamily,
      color: fontColor
    }
  }, percentage, "%", child)) : null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "100%",
    height: "100%",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: gradientId,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    stopColor: primaryColor[0]
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    stopColor: primaryColor[1]
  })), /*#__PURE__*/_react.default.createElement("circle", {
    strokeWidth: strokeWidth,
    fill: "transparent",
    r: R,
    cx: width / 2,
    cy: width / 2,
    stroke: secondaryColor,
    strokeDasharray: "".concat(circumference, " ").concat(circumference)
  }), /*#__PURE__*/_react.default.createElement(StyledCircle, {
    strokeWidth: strokeWidth,
    fill: fill,
    r: R,
    cx: width / 2,
    cy: width / 2,
    stroke: "url(#".concat(gradientId, ")"),
    strokeLinecap: strokeLinecap,
    strokeDasharray: "".concat(circumference, " ").concat(circumference),
    strokeDashoffset: offset
  })));
};

GradientCircleProgressbar.propTypes = {
  percentage: _propTypes.default.number.isRequired,
  width: _propTypes.default.number,
  strokeWidth: _propTypes.default.number,
  strokeLinecap: _propTypes.default.oneOf(["round", "square", "butt"]),
  fontSize: _propTypes.default.string,
  fontColor: _propTypes.default.string,
  fontFamily: _propTypes.default.string,
  primaryColor: _propTypes.default.array,
  secondaryColor: _propTypes.default.string,
  fill: _propTypes.default.string,
  hidePercentageText: _propTypes.default.bool
};
GradientCircleProgressbar.defaultProps = {
  width: 200,
  strokeWidth: 5,
  strokeLinecap: "round",
  fontSize: "inherit",
  fontColor: "inherit",
  fontFamily: "inherit",
  primaryColor: ["#00BBFF", "#92d7f1"],
  secondaryColor: "transparent",
  fill: "transparent"
};
var _default = GradientCircleProgressbar;
exports.default = _default;