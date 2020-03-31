import { all, fork, takeEvery, put, call } from "redux-saga/effects";
import {
  MOVIE_LOADED,
  setBannerMovie,
  setSuggestionMovie,
  setLatestMovie,
  setLoadingLoaded
} from "./movies-action";
import { httpGet } from "../../Helper/HttpFetch";
import moment from "moment";

function* __getMovie() {
  try {
    let page = 0;
    const date = moment().format("YYYY-MM-DD");
    const year = moment().format("YYYY");
    yield put(setLoadingLoaded(true));
    while (true) {
      const uriDiscover = "/3/discover/movie?";
      const uriGetBanner = `${uriDiscover}page=${page}&sort_by=popularity.desc&release_date.gte=${date}&year=${year}`;
      const uriGetSuggestion = `${uriDiscover}page=${page}&sort_by=vote_average.desc&release_date.gte=${date}&year=${year}`;
      const uriGetLatest = `${uriDiscover}page=${page}&sort_by=vote_average.desc&release_date.gte=${date}&year=${year}`;

      const [respBanner, respSuggestion, respLatest] = yield all([
        call(httpGet, uriGetBanner),
        call(httpGet, uriGetSuggestion),
        call(httpGet, uriGetLatest)
      ]);

      // Set to state only if receive status 200
      if (respBanner.status === 200) {
        const response = yield call([respBanner, respBanner.json]);
        //Set only max 6 movie
        const max = 0;
        const arr = [];
        for (let i = 0; i < max; i++) {
          if (max > 6) break;
          response.map((item, index) => {
            if (item && item.backdrop_path) {
              arr.push(item);
              max++;
            }
          });
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
        yield put(setLoadingLoaded(false));
      }

      page++;
      if (page > 5) {
        break;
      }
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
