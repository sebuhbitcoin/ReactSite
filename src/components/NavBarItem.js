import React from "react";

const NavBarItem = (props) => {
  return (
    <div
      className="navbar-item"
      onClick={props.onClick}
      style={{ flexDirection: "column" }}
    >
      <p className="navbar-item-text">{props.text}</p>
    </div>
  );
};

export default NavBarItem;
