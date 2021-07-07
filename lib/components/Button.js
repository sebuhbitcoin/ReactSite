"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "button-item",
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement("p", {
    className: "button-text"
  }, props.text));
};

var _default = Button;
exports.default = _default;