import React from "react";
import "./movies-thumbnail-popup.scss";

// Render child component text movie genre
export function ChildGenre(movieData) {
  const genre = [];
  movieData.genre_movie &&
    movieData.genre_movie.map(item => {
      const node = (
        <span className="genre" key={item.id}>
          {item.name}
        </span>
      );
      genre.push(node);
    });
  return genre;
}

// Render detail information on movie thumbnail section
// when user click the component area
// this child Component using forwardRef
// ```which the Parent can using createRef
// ```Eg. in movies-suggestion already
export default React.forwardRef((props, ref) => {
  const { movieData } = props;
  const genre = ChildGenre(movieData);
  return (
    <div ref={ref} className="movie-thumbnail-popup-container">
      <div className="movie-thumbnail-popup">
        <span className="release-date">Release {movieData.release_date}</span>
        <h3 className="title">{movieData.title}</h3>
        <p className="rating">
          Rating {movieData.vote_average} {genre}
        </p>
        <p className="overview">{movieData.overview.substring(0, 250)}</p>
        <button className="watch-now" onClick={props.onClick}>
          Watch Now
        </button>
      </div>
    </div>
  );
});
