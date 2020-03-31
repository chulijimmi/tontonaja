import { SET_GENRE_MOVIE } from "../Genres/genres-action";

export const MOVIE_LOADED = "Movies/movie_loaded";
export const SET_LOADING_LOADED = "Movies/set_loading_loaded";
export const SET_BANNER_MOVIE = "Movies/set_banner_movie";
export const SET_SUGGESTION_MOVIE = "Movies/set_suggestion_movie";
export const SET_LATEST_MOVE = "Movies/set_latest_movie";
export const SET_DETAIL_MOVIE = "Movies/set_detail_movie";
export const SET_MOVIE_SUGGESTION_GENRE = "Movies/set_movie_suggestion_genre";

// Saga task runner loaded movie
export const movieLoaded = () => ({
  type: MOVIE_LOADED
});

//Set Loading movies when loaded process
export const setLoadingLoaded = loading => ({
  type: SET_LOADING_LOADED,
  loading
});

// Dispatching banner movie response
export const setBannerMovie = response => ({
  type: SET_BANNER_MOVIE,
  response
});

// Dispatching suggestion movie
export const setSuggestionMovie = response => ({
  type: SET_SUGGESTION_MOVIE,
  response
});

// Dispatching latest movie
export const setLatestMovie = response => ({
  type: SET_LATEST_MOVE,
  response
});

// Dispatching detail movie
export const setDetailMovie = movie => ({
  type: SET_DETAIL_MOVIE,
  movie
});

export const setMovieSuggestionGenre = genre => ({
  type: SET_MOVIE_SUGGESTION_GENRE,
  genre
});
