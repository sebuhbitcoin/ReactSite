"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactResponsive = require("react-responsive");

var _react = _interopRequireWildcard(require("react"));

var _Spacer = _interopRequireDefault(require("./components/Spacer"));

var _NavBarItem = _interopRequireDefault(require("./components/NavBarItem"));

require("./App.css");

var _Text = _interopRequireDefault(require("./components/Text"));

var _HomeCarousel = _interopRequireDefault(require("./carousels/HomeCarousel"));

var _AboutCarousel = _interopRequireDefault(require("./carousels/AboutCarousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var App = function App() {
  var isBigScreen = (0, _reactResponsive.useMediaQuery)({
    query: "(min-width: 1224px)"
  });
  var isTabletOrMobile = (0, _reactResponsive.useMediaQuery)({
    query: "(max-width: 1224px)"
  });

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      carousel = _useState2[0],
      setCarousel = _useState2[1];

  var bakerAddress = "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP";

  var _useState3 = (0, _react.useState)(0.0),
      _useState4 = _slicedToArray(_useState3, 2),
      stakingBalance = _useState4[0],
      setStakingBalance = _useState4[1];

  var _useState5 = (0, _react.useState)(1000.0),
      _useState6 = _slicedToArray(_useState5, 2),
      stakingCapacity = _useState6[0],
      setStakingCapacity = _useState6[1];

  var _useState7 = (0, _react.useState)(0.0),
      _useState8 = _slicedToArray(_useState7, 2),
      nextPayoutAmount = _useState8[0],
      setNextPayoutAmount = _useState8[1];

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var bbResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.baking-bad.org/v2/bakers/".concat(bakerAddress));

            case 2:
              _context.next = 4;
              return _context.sent.json();

            case 4:
              bbResponse = _context.sent;
              setStakingBalance(bbResponse.stakingBalance);
              setStakingCapacity(bbResponse.stakingCapacity);
              console.log(stakingBalance);
              console.log(stakingCapacity);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }

  var i = 0; // Fetch data at root so it won't happen each time HomeCarousel is mounted

  (0, _react.useEffect)(function () {
    fetchData();
    i++;
    console.log(i);
  }, []);

  var NavBar = function NavBar() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "navbar"
    }, /*#__PURE__*/_react.default.createElement(_NavBarItem.default, {
      text: "Dashboard",
      onClick: function onClick() {
        return setCarousel(0);
      }
    }), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement(_NavBarItem.default, {
      text: "Farm",
      onClick: function onClick() {
        return window.open("https://farm.sebuh.net/", "_blank");
      },
      tooltip: "https://farm.sebuh.net"
    }), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement(_NavBarItem.default, {
      text: "Swap",
      onClick: function onClick() {
        return window.open("https://dex.sebuh.net/", "_blank");
      },
      tooltip: "https://dex.sebuh.net"
    }), /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement(_NavBarItem.default, {
      text: "About",
      onClick: function onClick() {
        return setCarousel(1);
      }
    }));
  };

  var Carousel = function Carousel() {
    var screens = [/*#__PURE__*/_react.default.createElement(_HomeCarousel.default, {
      stakingBalance: stakingBalance,
      stakingCapacity: stakingCapacity
    }), /*#__PURE__*/_react.default.createElement(_AboutCarousel.default, null)];
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        justifySelf: "center"
      }
    }, screens[carousel]);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Spacer.default, null), /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      justifyItems: "center",
      justifySelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(Carousel, null))));
};

var NavDrawer = function NavDrawer() {};

var _default = App;
exports.default = _default;