"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutCarousel = function AboutCarousel() {
  var box = 200;
  return /*#__PURE__*/React.createElement("div", {
    className: "padded-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(_Text.default, null, "Sebuh has been involved in Crypto since 2011. In those days he was heavily involved with mining Bitcoin. Eventually He moved on to selling miners online and supporting people interested in getting involved in mining crypto. Over time he pushed for new user adoption and helped crypto get more popular. As time went on he got tired of the \"miner problems\" he was constantly dealing with. Eventually he tried to find other ways of supporting crypto without contributing to the ecological nightmare that proof of work crypto mining had become. In 2019 Sebuh fell in love with Tezos and everything it offered. After looking for ways to support the growth of Tezos Sebuh decided to become a Baker. After about a year of research and consuming every bit of information about Tezos he could find The Sebuh.net Tezos Bakery was launched. On March 17, 2021 the bakery went live on Tezos Mainnet.")));
};

var _default = AboutCarousel;
exports.default = _default;