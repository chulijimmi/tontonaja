import { SET_GENRE_MOVIE, SET_GENRE_TV } from "./genres-action";

const initState = {
  movie: [],
  tv: []
};
export default (state = initState, action) => {
  switch (action.type) {
    case SET_GENRE_MOVIE:
      return {
        ...state,
        movie: action.response
      };

    case SET_GENRE_TV:
      return {
        ...state,
        tv: action.response
      };
    default:
      return state;
  }
};
