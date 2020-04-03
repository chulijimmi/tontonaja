import {
  SET_LOADING_SEARCH,
  HIDE_LOADING_SEARCH,
  SET_RESPONSE_SEARCH
} from "./search-action";

const initState = {
  loading: true,
  data: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_SEARCH:
      return {
        ...state,
        loading: true
      };

    case HIDE_LOADING_SEARCH:
      return {
        ...state,
        loading: false
      };

    case SET_RESPONSE_SEARCH:
      return {
        ...state,
        data: [...action.response, ...state.data]
      };

    default:
      return state;
  }
};
