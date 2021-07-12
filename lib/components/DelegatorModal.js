"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Text = _interopRequireDefault(require("./Text"));

var _react = require("react");

var _Button = _interopRequireDefault(require("./Button"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(props) {
  // When this component is mounted, this function will be called.
  // It will be given a string, delegatorAddress, and an array, payoutsArray, which is an array of objects, from props.
  // Each element of payoutsArray has the following values:
  // address, a string
  // amount, a double
  // snapshotBalance, a double
  // It must loop through every element of payoutsArray. Then, it must check if the delegatorAddress is equal to address passed in.
  // If it is, it must add the amount value to a totalAmount variable.
  // Finally, the function will print out the totalAmount va,riable.
  // function calculateTotalAmount(delegatorAddress, payoutsArray) {
  // let totalAmount = 0.0;
  // for (var i = 0; i < payoutsArray.length; i++) {
  //   console.log(payoutsArray[i]);
  // }
  // let totalAmount = 0;
  // payoutsArray.forEach((element) => {
  //   if (element.address === delegatorAddress) {
  //     totalAmount += element.amount;
  //   }
  // });
  // console.log(totalAmount);
  // }
  var _useState = (0, _react.useState)([{
    cycle: "",
    balance: "",
    amount: ""
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1];

  var calculateDelegatorRewards = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var apiResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.tzkt.io/v1/rewards/delegators/".concat(props.delegatorAddress, "?limit=1000"));

            case 2:
              _context.next = 4;
              return _context.sent.json();

            case 4:
              apiResponse = _context.sent;
              console.log(apiResponse);
              apiResponse.reverse().forEach(function (element) {
                if (element.baker.address === "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP") {
                  console.log(element);
                  var thisCycleReward = (element.futureBlockRewards + element.ownBlockRewards + element.extraBlockRewards + element.futureEndorsementRewards + element.endorsementRewards + element.ownBlockFees + element.extraBlockFees + element.revelationRewards) / 1000000;
                  var balance = (element.balance / 1000000).toFixed(6);
                  console.log("Balance now is", balance);
                  var stakingBalance = (element.stakingBalance / 1000000).toFixed(6);
                  console.log("Staking balance now is", stakingBalance);
                  var del_share = (element.balance / element.stakingBalance * 100).toFixed(3) + "%";
                  console.log("Share now is", del_share);
                  var fees = 5;
                  var reward = (thisCycleReward * (balance / stakingBalance) * 0.95).toFixed(6);
                  console.log(element.cycle);
                  console.log(reward);
                  var nextObj = {
                    cycle: element.cycle,
                    balance: element.balance,
                    amount: reward
                  };
                  setTableData(function (tableData) {
                    return [].concat(_toConsumableArray(tableData), [nextObj]);
                  });
                  console.log("For cycle", element.cycle, reward);
                } else console.log("Delegator not delegated for cycle");
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function calculateDelegatorRewards() {
      return _ref.apply(this, arguments);
    };
  }();

  var truncate = function truncate(str) {
    return "".concat(str.substr(0, 7), "...").concat(str.substr(str.length - 5, 5));
  };

  if (props.visibility) {
    console.log(props.delegatorAddress);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // calculateTotalAmount(props.delegatorAddress, props.payoutsArray);

    calculateDelegatorRewards();
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "1000",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      // boxShadow: "0 0 3px 1px #e3e3e3",
      justifyContent: "left",
      fontSize: "16px",
      color: "white",
      height: 500,
      width: 500,
      transition: "all 125ms ease-in-out",
      opacity: props.visibility ? 1 : 0,
      visibility: props.visibility ? "visible" : "hidden",
      borderRadius: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(_Text.default, null, "Info for ", truncate(props.delegatorAddress)), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 30,
      height: 30,
      marginLeft: "1vw"
    },
    onClick: function onClick() {
      return props.onClose();
    }
  }, " ", /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "left"
    }
  }, /*#__PURE__*/React.createElement(_Text.default, {
    customFontSize: 18
  }, "total earned rewards"))));
};

var _default = Modal;
exports.default = _default;