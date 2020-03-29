import React from "react";
import PropTypes from "prop-types";
import "./popup-menu.scss";

/**
 * PopupMenu have children component to render
 * and it's good to use react memo to speed up
 */
const CheckPropAreEqual = (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
};
/**
 * Menu will render children component
 * @param {Node} props
 */
function Menu(props) {
  return (
    <div className="popup-menu">
      <div className="arrow-up"></div>
      <div className="content-menu">{props.children}</div>
    </div>
  );
}

const PopupMenu = React.memo(Menu, CheckPropAreEqual);

PopupMenu.propTypes = {
  children: PropTypes.node.isRequired
};

export default PopupMenu;
