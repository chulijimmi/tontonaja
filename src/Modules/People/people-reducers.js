import { SET_PEOPLE, SET_PEOPLE_DETAIL } from "./people-actions";

const initState = {
  selected: {},
  detail: {
    loaded: false
  },
  credits: {
    loaded: false
  }
};
export default (state = initState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        selected: {
          credits: action.credits,
          ...action.payload
        }
      };

    case SET_PEOPLE_DETAIL:
      return {
        ...state,
        detail: {
          loaded: true,
          ...action.response
        }
      };
    default:
      return state;
  }
};
