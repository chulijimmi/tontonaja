export const SET_GENRE_MOVIE = "Genres/set_movies";
export const SET_GENRE_TV = "Genres/set_tv";
export const GENRE_LOADED = "Genres/genre_loaded";

// Task saga runner
export const genreLoaded = () => ({
  type: GENRE_LOADED
});
/**
 * Set reducers Genre state movie from api response
 * @param {Array} response
 */
export const setGenreMovie = response => ({
  type: SET_GENRE_MOVIE,
  response
});

/**
 * Set reducers Genre state tv from api response
 * @param {Array} response
 */
export const setGenreTv = response => ({
  type: SET_GENRE_TV,
  response
});
