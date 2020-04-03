import { fork, call, put, debounce, select } from "redux-saga/effects";
import {
  SEARCH_MOVIE,
  setResponseSearch,
  setLoadingSearch,
  hideLoadingSearch
} from "../Search/search-action";
import { httpGet } from "../../Helper/HttpFetch";
function* __searchMovie(action) {
  try {
    const data = yield select(state => state.Search);
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
