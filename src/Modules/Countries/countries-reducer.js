import { SET_COUNTRY } from "./countries-action";

const initState = {
  country: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.response
      };

    default:
      return state;
  }
};
