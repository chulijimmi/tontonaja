import React from "react";
import "./container.scss";

/**
 * This component will render children props as Component
 * Usage: <Container>{children}</Container>
 * @param {Any} children
 */
function Container({ children }) {
  console.log("Container", children);
  const UpdateComponent = React.Children.map(children, child => {
    return { child };
  });
  return (
    <div className="container">
      {children.length > 0 ? UpdateComponent : children}
    </div>
  );
}

export default Container;
