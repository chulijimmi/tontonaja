import React from "react";
import { connect } from "react-redux";
import GenreItem from "./genres-memo-genre-item";
import PropTypes from "prop-types";
import "./genres.scss";
/**
 * Create Children Component of Genre Header Menu
 * @param {Array} genre
 */
function createComponent(genre) {
  let node = [];
  let start = 0;
  let limit = 4;
  let offer = 0;

  for (let k = 0; k < genre.length / 4; k++) {
    if (k !== 0) {
      limit = limit * start;
      offer = limit + 4;
    }

    if (start === 0) {
      const child = genre.slice(start, limit);
      const children = [];
      child.map(item => {
        children.push(
          <div className="genre-item" key={item.id}>
            <GenreItem label={item.name} />
          </div>
        );
      });
      node.push(
        <div className="genre-link left" key={k.toString()}>
          {children}
        </div>
      );
    } else {
      const child = genre.slice(limit, offer);
      const children = [];
      child.map(item => {
        children.push(
          <div className="genre-item" key={item.id}>
            <GenreItem label={item.name} />
          </div>
        );
      });
      node.push(
        <div className="genre-link left" key={k.toString()}>
          {children}
        </div>
      );
    }
    start = k + 1;
  }
  return node;
}

function GenreMenu(props) {
  return (
    <div className="genre-container">
      <div className="genre-movie">
        <h4 className="genre-title">Movie</h4>
        {createComponent(props.movie)}
      </div>
      <div className="genre-tv">
        <h4 className="genre-title">TV Series</h4>
        {createComponent(props.tv)}
      </div>
    </div>
  );
}

GenreMenu.propTypes = {
  movie: PropTypes.array.isRequired,
  tv: PropTypes.array.isRequired
};

const mapToProps = ({ Genres }) => {
  const { movie, tv } = Genres;
  return { movie, tv };
};

export default connect(mapToProps)(GenreMenu);
