import { fork, call, put, debounce } from "redux-saga/effects";
import {
  SEARCH_MOVIE,
  setResponseSearch,
  setLoadingSearch,
  hideLoadingSearch
} from "../Search/search-action";
import { httpGet } from "../../Helper/HttpFetch";

/**
 * Task fetching data use debounce to set delay
 * @param {String} action
 */
function* __searchMovie(action) {
  try {
    yield put(setLoadingSearch());
    const uri = `/3/search/movie?query=${action.payload}`;
    const response = yield call(httpGet, uri);
    if (response.status === 200) {
      const json = yield call([response, response.json]);
      yield put(setResponseSearch(json.results));
      yield put(hideLoadingSearch());
    }
  } catch (error) {
    throw error;
  }
}

export function* searchMovie() {
  yield debounce(500, SEARCH_MOVIE, __searchMovie);
}

export default function* rootSaga() {
  yield fork(searchMovie);
}
