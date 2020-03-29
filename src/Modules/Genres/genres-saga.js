import { all, fork, takeEvery, put, call } from "redux-saga/effects";
import { httpGet } from "../../Helper/HttpFetch";
import { GENRE_LOADED, setGenreMovie, setGenreTv } from "./genres-action";

function* __getGenre() {
  try {
    const uriMovie = "/3/genre/movie/list";
    const uriTv = "/3/genre/tv/list";
    const [respMovie, respTv] = yield all([
      call(httpGet, uriMovie),
      call(httpGet, uriTv)
    ]);

    //Check if promise all each receive 200 status
    if (respMovie.status === 200) {
      const response = yield call([respMovie, respMovie.json]);
      yield put(setGenreMovie(response.genres));
    }

    if (respTv.status === 200) {
      const response = yield call([respTv, respTv.json]);
      yield put(setGenreTv(response.genres));
    }
  } catch (error) {
    throw error;
  }
}

export function* getGenre() {
  yield takeEvery(GENRE_LOADED, __getGenre);
}

export default function* rootSaga() {
  yield fork(getGenre);
}
