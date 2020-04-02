import update from "react-addons-update";
import {
  SET_BANNER_MOVIE,
  SET_SUGGESTION_MOVIE,
  SET_LATEST_MOVE,
  SET_DETAIL_MOVIE,
  SET_MOVIE_SUGGESTION_GENRE,
  SET_LOADING_LOADED,
  SET_MOVIE_DISCOVER
} from "./movies-action";

const initState = {
  movie_loaded: false,
  banner: [],
  suggestion: [],
  latest: [],
  detail: {
    loaded: false
  },
  data: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_LOADED:
      return {
        ...state,
        movie_loaded: action.loading
      };
    case SET_BANNER_MOVIE:
      return {
        ...state,
        banner: [...action.response, ...state.suggestion]
      };

    case SET_SUGGESTION_MOVIE:
      return {
        ...state,
        suggestion: [...action.response, ...state.suggestion]
      };

    case SET_LATEST_MOVE:
      return {
        ...state,
        latest: [...action.response, ...state.suggestion]
      };

    case SET_DETAIL_MOVIE:
      return {
        ...state,
        detail: action.movie
      };

    // Produce set movie to top as array where equal with selection genre
    case SET_MOVIE_SUGGESTION_GENRE:
      const data = state.suggestion;
      for (let i = 0; i < data.length; i++) {
        const current = data[i];
        const check =
          data[i] && data[i].genre_ids && data[i].genre_ids.length > 0;
        if (check) {
          if (data[i].genre_ids.length == 1) {
            if (data[i].genre_ids[0] === action.genre.id) {
              data.splice(i, 1);
              data.unshift(current);
            }
          } else if (data[i].genre_ids.length > 1) {
            for (let k = 0; k < data[i].genre_ids.length; k++) {
              if (data[i].genre_ids[k] === action.genre.id) {
                data.splice(i, 1);
                data.unshift(current);
              }
            }
          }
        }
      }

      return {
        ...state,
        suggestion: [...data]
      };

    case SET_MOVIE_DISCOVER:
      return {
        ...state,
        data: [...action.response, ...state.data]
      };
    default:
      return state;
  }
};
