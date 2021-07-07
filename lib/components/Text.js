"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Text = function Text(props, _ref) {
  var children = _ref.children;
  var colors = ["#f94c4c", "#f78a00", "#cfc500", "#75f94c"];
  var ind = 3;
  if (props.bad >= 90) ind = 0;else if (props.bad >= 50) ind = 2;else if (props.bad >= 75) ind = 1;
  return /*#__PURE__*/React.createElement("p", {
    className: "p",
    style: {
      color: colors[ind]
    }
  }, props.children);
};

var _default = Text;
exports.default = _default;