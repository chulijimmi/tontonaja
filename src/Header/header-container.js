import React from "react";
import "./header.scss";

/**
 * HeaderContainer have children props to render
 * @param {Any} props
 */
function HeaderContainer(props) {
  return <div className="header-container">{props.children}</div>;
}

export default HeaderContainer;
