import { all, fork, takeEvery, put, call } from "redux-saga/effects";
import {
  MOVIE_LOADED,
  setBannerMovie,
  setSuggestionMovie,
  setLatestMovie
} from "./movies-action";
import { httpGet } from "../../Helper/HttpFetch";

function* __getMovie() {
  try {
    const uriDiscover = "/3/discover/movie?";
    const uriGetBanner = `${uriDiscover}page=1&sort_by=popularity.desc&release_date.gte=2020-03-26&year=2020`;
    const uriGetSuggestion = `${uriDiscover}page=1&sort_by=vote_average.desc&release_date.gte=2020-03-26&year=2020`;
    const uriGetLatest = `${uriDiscover}page=1&sort_by=vote_average.desc&release_date.gte=2020-03-26&year=2020`;

    const [respBanner, respSuggestion, respLatest] = yield all([
      call(httpGet, uriGetBanner),
      call(httpGet, uriGetSuggestion),
      call(httpGet, uriGetLatest)
    ]);

    // Set to state only if receive status 200
    if (respBanner.status === 200) {
      const response = yield call([respBanner, respBanner.json]);
      console.log("response movie saga", response);
      //Set only max 6 movie
      const max = 6;
      const arr = [];
      for (let i = 0; i < max; i++) {
        arr.push(response.results[i]);
      }
      yield put(setBannerMovie(arr));
    }

    // Set all suggestion
    if (respSuggestion.status === 200) {
      const response = yield call([respSuggestion, respSuggestion.json]);
      yield put(setSuggestionMovie(response.results));
    }

    // Set latest movie
    if (respLatest.status === 200) {
      const response = yield call([respLatest, respLatest.json]);
      yield put(setLatestMovie(response.results));
    }
  } catch (error) {
    throw error;
  }
}

export function* getMovie() {
  yield takeEvery(MOVIE_LOADED, __getMovie);
}

export default function* rootSaga() {
  yield fork(getMovie);
}
