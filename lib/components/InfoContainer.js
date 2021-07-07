"use strict";

var InfoContainer = function InfoContainer(props, _ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {// justifyContent: "center",
      // alignContent: "center",
      // justifyItems: "center",
      // alignItems: "center",
    }
  }, children));
};