"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var NavBarItem = function NavBarItem(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-item",
    onClick: props.onClick,
    style: {
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "navbar-item-text"
  }, props.text));
};

var _default = NavBarItem;
exports.default = _default;