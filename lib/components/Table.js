"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Cycle"), /*#__PURE__*/_react.default.createElement("th", null, "Delegated Balance"), /*#__PURE__*/_react.default.createElement("th", null, "Payout"))), /*#__PURE__*/_react.default.createElement("tbody", null, props.data.map(function (item, index) {
    console.log(item);
    return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      key: index
    }, item.cycle), /*#__PURE__*/_react.default.createElement("td", null, (item.balance / 1000000).toFixed(2)), /*#__PURE__*/_react.default.createElement("td", {
      key: index
    }, item.amount));
  }))));
};

var _default = Table;
exports.default = _default;