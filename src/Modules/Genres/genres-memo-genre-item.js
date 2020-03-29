import React, { memo } from "react";
import PropTypes from "prop-types";
import "./genres.scss";
// Item Text genre
// Probably will render multiple genre
// Solution to use react memo to speed up

const propsGenreItem = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

/**
 * Render the genre items link
 * @param {String} props.onClick
 * @param {String} props.label
 */
function GenreItemComponent(props) {
  return (
    <span className="genre-button" onClick={props.onClick}>
      {props.label}
    </span>
  );
}
export const GenreItem = React.memo(GenreItemComponent, propsGenreItem);

GenreItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default memo(GenreItemComponent);
