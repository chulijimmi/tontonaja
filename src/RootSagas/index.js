import { all, fork } from "redux-saga/effects";
import SagaCounties from "../Modules/Countries/countries-saga";
import SagaGenres from "../Modules/Genres/genres-saga";
import SagaMovies from "../Modules/Movies/movies-saga";
import SagaSearch from "../Modules/Search/search-saga";
export default function*() {
  yield all([
    fork(SagaCounties),
    fork(SagaGenres),
    fork(SagaMovies),
    fork(SagaSearch)
  ]);
}
