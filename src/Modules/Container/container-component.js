import React from "react";
import "./container.scss";

/**
 * This component will render children props as Component
 * Usage: <Container>{children}</Container>
 * @param {Any} props
 */
function Container(props) {
  return <div className="container">{props}</div>;
}

export default Container;
