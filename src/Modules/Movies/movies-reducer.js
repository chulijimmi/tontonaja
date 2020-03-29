import {
  SET_BANNER_MOVIE,
  SET_SUGGESTION_MOVIE,
  SET_LATEST_MOVE,
  SET_DETAIL_MOVIE
} from "./movies-action";

const initState = {
  banner: [],
  suggestion: [],
  latest: [],
  detail: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_BANNER_MOVIE:
      return {
        ...state,
        banner: action.response
      };

    case SET_SUGGESTION_MOVIE:
      return {
        ...state,
        suggestion: action.response
      };

    case SET_LATEST_MOVE:
      return {
        ...state,
        latest: action.response
      };

    case SET_DETAIL_MOVIE:
      return {
        ...state,
        detail: {
          ...action.movie
        }
      };
    default:
      return state;
  }
};
