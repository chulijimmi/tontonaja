import React, { lazy } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MovieLoadingThumbnail } from "./movies-thumbnail";
import { getGenreName } from "../Genres/genres-helper";
import "./movies-thumbnail.scss";

const MovieComponent = lazy(() => import("./movies-component"));

// Produce Movie Suggestion Integrated with
// reducers state Movies and Genres
// genre_ids on movie object will render based
// click event ThumbnailMovie Component
function ConnectedMovieSuggestion({ movie_loaded, suggestion, genreMovie }) {
  if (!movie_loaded) {
    return <MovieLoadingThumbnail />;
  }
  return suggestion.map((item, index) => {
    const genre = getGenreName(genreMovie, item.genre_ids);
    item.genre_movie = genre;
    return (
      index < 10 &&
      item.backdrop_path && <MovieComponent {...item} key={index.toString()} />
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
