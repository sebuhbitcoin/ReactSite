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
  // Responsive media queries
  var isBigScreen = (0, _reactResponsive.useMediaQuery)({
    query: "(min-width: 1224px)"
  });
  var isTabletOrMobile = (0, _reactResponsive.useMediaQuery)({
    query: "(max-width: 1224px)"
  }); // API related constants

  var bbBaseUri = "https://api.baking-bad.org/v2";
  var bakerAddress = "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP";
  var cycleBakingStarted = 349; // State vars

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      carousel = _useState2[0],
      setCarousel = _useState2[1];

  var _useState3 = (0, _react.useState)(0.0),
      _useState4 = _slicedToArray(_useState3, 2),
      stakingBalance = _useState4[0],
      setStakingBalance = _useState4[1];

  var _useState5 = (0, _react.useState)(1000.0),
      _useState6 = _slicedToArray(_useState5, 2),
      stakingCapacity = _useState6[0],
      setStakingCapacity = _useState6[1];

  var _useState7 = (0, _react.useState)(0.1),
      _useState8 = _slicedToArray(_useState7, 2),
      fee = _useState8[0],
      setFee = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      delegators = _useState10[0],
      setDelegators = _useState10[1];

  var _useState11 = (0, _react.useState)(0.0),
      _useState12 = _slicedToArray(_useState11, 2),
      totalPaidOutRewards = _useState12[0],
      setTotalPaidOutRewards = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      payoutsArray = _useState14[0],
      setPayoutsArray = _useState14[1];

  var _useState15 = (0, _react.useState)(0.05),
      _useState16 = _slicedToArray(_useState15, 2),
      estimatedROI = _useState16[0],
      setEstimatedROI = _useState16[1];

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Retrieve BB API Data
              getGeneralBakingData();
              getTotalDelegates();
              getRewardsData("tz1bBFRBHoU3j534nC2ZTP22rSikHGtfrabT");

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchData.apply(this, arguments);
  }

  function getGeneralBakingData() {
    return _getGeneralBakingData.apply(this, arguments);
  }

  function _getGeneralBakingData() {
    _getGeneralBakingData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var bbResponse;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("".concat(bbBaseUri, "/bakers/").concat(bakerAddress));

            case 2:
              _context3.next = 4;
              return _context3.sent.json();

            case 4:
              bbResponse = _context3.sent;
              setStakingBalance(bbResponse.stakingBalance);
              setStakingCapacity(bbResponse.stakingCapacity);
              setFee(bbResponse.fee);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getGeneralBakingData.apply(this, arguments);
  }

  function getTotalDelegates() {
    return _getTotalDelegates.apply(this, arguments);
  }

  function _getTotalDelegates() {
    _getTotalDelegates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fetch("https://sebuh.net:8732/chains/main/blocks/head/context/delegates/tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP", {
                method: "GET"
              }).then(function (response) {
                return response.json();
              }).then(function (json) {
                setDelegators(json.delegated_contracts.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _getTotalDelegates.apply(this, arguments);
  }

  function getRewardsData(_x) {
    return _getRewardsData.apply(this, arguments);
  } // Fetch data at root so it won't happen each time HomeCarousel is mounted


  function _getRewardsData() {
    _getRewardsData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(address) {
      var cycleresp, cycle, tpor, currentArray, tzStatsResp;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch("https://api.tzstats.com/explorer/cycle/head");

            case 2:
              _context5.next = 4;
              return _context5.sent.json();

            case 4:
              cycleresp = _context5.sent;
              cycle = cycleresp.cycle;
              tpor = 0.0;
              currentArray = [];
              _context5.next = 10;
              return fetch("https://api.tzstats.com/explorer/account/".concat(bakerAddress));

            case 10:
              _context5.next = 12;
              return _context5.sent.json();

            case 12:
              tzStatsResp = _context5.sent;
              setTotalPaidOutRewards(tzStatsResp.total_rewards_earned); // for (var i = cycleBakingStarted; i < cycle; i++) {
              //   const rewardsResp = await (
              //     await fetch(`${bbBaseUri}/rewards/${bakerAddress}?cycle=${i}`)
              //   ).json();
              //   // console.log(`${bbBaseUri}/rewards/${bakerAddress}?cycle=${i}`);
              //   // console.log(rewardsResp.payouts);
              //   currentArray.push(rewardsResp.payouts);
              // }

              setPayoutsArray(currentArray);
              console.log("payoutsArray loaded");

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _getRewardsData.apply(this, arguments);
  }

  (0, _react.useEffect)(function () {
    function bruh() {
      return _bruh.apply(this, arguments);
    }

    function _bruh() {
      _bruh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _bruh.apply(this, arguments);
    }

    bruh(); // getRewardsData("tz1bBFRBHoU3j534nC2ZTP22rSikHGtfrabT");
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
      stakingCapacity: stakingCapacity,
      fee: fee,
      delegators: delegators,
      totalPaidOutRewards: totalPaidOutRewards,
      payoutsArray: payoutsArray
    }), /*#__PURE__*/_react.default.createElement(_AboutCarousel.default, {
      isBigScreen: isBigScreen
    })];
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
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "wordmark"
  }, "Sebuh.net XTZ Baker"), /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      justifyItems: "center",
      justifySelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(Carousel, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    customClassName: "footer-text",
    customColor: "#d3d3d3",
    customFontSize: 12
  }, "\xA92021-", new Date().getFullYear(), " All rights reserved.", /*#__PURE__*/_react.default.createElement("br", null), "Powered by Tezos Reward Distributor"), /*#__PURE__*/_react.default.createElement(_Text.default, {
    customClassName: "footer-text",
    customColor: "#d3d3d3",
    customFontSize: 12
  }, "Site built by", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://twitter.com/whattheclap/",
    target: "_blank"
  }, "whattheclap")))));
};

var NavDrawer = function NavDrawer() {};

var _default = App;
exports.default = _default;