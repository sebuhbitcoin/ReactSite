"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "button-item",
    onClick: props.onClick,
    style: {
      backgroundColor: props.backgroundColor,
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: props.textColor,
      fontSize: props.fontSize,
      fontWeight: props.customFontWeight,
      fontFamily: "Roboto Mono"
    }
  }, props.text));
};

var _default = Button;
exports.default = _default;