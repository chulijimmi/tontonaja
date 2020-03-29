import React from "react";
import "./header.scss";
import PropTypes from "prop-types";

/**
 * HeaderLogo Component have only props title
 * @param {String} title
 */
function HeaderLogo({ title }) {
  return (
    <div className="header-logo">
      <p className="logo-title">{title}</p>
    </div>
  );
}

HeaderLogo.propTypes = {
  // render text title of logo
  title: PropTypes.string.isRequired
};

export default HeaderLogo;
