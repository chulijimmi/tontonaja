import React from "react";
import "./footer.scss";

/**
 * FooterContainer have children props to render
 * @param {Any} props
 */
function FooterContainer(props) {
  return <div className="footer-container">{props.children}</div>;
}

export default FooterContainer;
