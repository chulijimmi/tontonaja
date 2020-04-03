export const SEARCH_MOVIE = "Search/search_movie";
export const SET_RESPONSE_SEARCH = "Search/set_response_search";
export const SET_LOADING_SEARCH = "Search/set_loading_search";
export const HIDE_LOADING_SEARCH = "Search/hide_loading_search";

export const searchMovie = payload => ({
  type: SEARCH_MOVIE,
  payload
});

export const setResponseSearch = response => ({
  type: SET_RESPONSE_SEARCH,
  response
});

export const setLoadingSearch = () => ({
  type: SET_LOADING_SEARCH
});

export const hideLoadingSearch = () => ({
  type: HIDE_LOADING_SEARCH
});
