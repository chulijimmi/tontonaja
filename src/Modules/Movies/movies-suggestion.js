import React, { useCallback, lazy, Suspense, useState, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MovieLoadingThumbnail } from "./movies-thumbnail";
import { useOnClickOutside } from "../Component/link-menu";
import "./movies-thumbnail.scss";
import { getGenreName } from "../Genres/genres-helper";

// Lazy imported component
export const MovieThumbnail = lazy(() => import("./movies-thumbnail"));
export const MovieThumbnailPopup = lazy(() =>
  import("./movies-thumbnail-popup")
);

// Render child component thumbnail movie
export function MovieChildComponent(movie) {
  const ref = createRef();
  const [isOpen, setIsOpen] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const handleClick = useCallback(() => {
    setIsOpen(true);
    setMovieInfo(movie);
  });
  const handleWatchMovie = useCallback(() => {
    console.log("watch movie");
  });
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <Suspense fallback={<MovieLoadingThumbnail />}>
      <div className="movie-thumbnail-container">
        {isOpen && (
          <MovieThumbnailPopup
            ref={ref}
            movieData={movieInfo}
            bottomPosition={window.pageYOffset}
            onClick={handleWatchMovie}
          />
        )}
        <MovieThumbnail
          title={movie.title}
          onClick={() => handleClick()}
          backdrop={movie.backdrop_path}
          vote={movie.vote_average}
        />
      </div>
    </Suspense>
  );
}

// Produce Movie Suggestion Integrated with
// reducers state Movies and Genres
// genre_ids on movie object will render based
// click event ThumbnailMovie Component
function ConnectedMovieSuggestion({ movie_loaded, suggestion, genreMovie }) {
  if (movie_loaded) return <MovieLoadingThumbnail />;
  return suggestion.map((item, index) => {
    const genre = getGenreName(genreMovie, item.genre_ids);
    item.genre_movie = genre;
    return (
      index < 10 &&
      item.backdrop_path && (
        <MovieChildComponent {...item} key={index.toString()} />
      )
    );
  });
}

ConnectedMovieSuggestion.propTypes = {
  movie_loaded: PropTypes.bool.isRequired,
  suggestion: PropTypes.array.isRequired,
  genreMovie: PropTypes.array.isRequired
};

const mapToProp = ({ Movies, Genres }) => {
  const { suggestion, movie_loaded } = Movies;
  const { movie } = Genres;
  const genreMovie = movie;
  return { suggestion, movie_loaded, genreMovie };
};

export default connect(mapToProp)(ConnectedMovieSuggestion);
