import { all, fork, takeEvery, select, put, call } from "redux-saga/effects";
import { httpGet } from "../../Helper/HttpFetch";
import { COUNTRY_LOADED, setCountry } from "./countries-action";
function* __getCountries() {
  try {
    const uri = "/3/configuration/countries";
    const response = yield call(httpGet, uri);
    const json = yield call([response, response.json]);
    yield put(setCountry(json));
  } catch (error) {
    throw error;
  }
}

export function* getCountries() {
  yield takeEvery(COUNTRY_LOADED, __getCountries);
}

export default function* rootSaga() {
  yield fork(getCountries);
}
