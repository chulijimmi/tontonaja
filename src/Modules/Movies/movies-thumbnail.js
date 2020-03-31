import React from "react";
import PropTypes from "prop-types";
import "./movies-thumbnail.scss";

// Check props use to memo
const propsMovieThumbnail = (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
};

// Render the movie thumbnails component
function MovieThumbnail({ onClick, vote, title, backdrop }) {
  return (
    <div className="movie-thumbnail" onClick={onClick}>
      <span className="movie-thumbnail-vote">{vote}</span>
      <div className="shadow">
        <span className="movie-thumbnail-title">{title}</span>
      </div>
      <img
        className="movie-thumnail-backdrop"
        src={`https://image.tmdb.org/t/p/original/${backdrop}`}
      />
    </div>
  );
}

// Component Loading Movie Thumbnail
export const MovieLoadingThumbnail = () => {
  const node = [];
  for (let i = 0; i < 10; i++) {
    node.push(
      <div className="movie-thumbnail-loading" key={i.toString()}></div>
    );
  }
  return node;
};

MovieThumbnail.propTypes = {
  onClick: PropTypes.func,
  vote: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdrop: PropTypes.string
};

export default React.memo(MovieThumbnail, propsMovieThumbnail);
