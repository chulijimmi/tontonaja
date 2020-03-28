import { all, fork, takeEvery, select, put, call } from "redux-saga/effects";
import { httpGet } from "../../Helper/HttpFetch";
import { COUNTRY_LOADED, setCountry } from "./countries-action";
function* __getCountries() {
  try {
    const uri = "/3/configuration/countries";
    const response = yield call(httpGet, uri);
    console.log("response __getCountries", response);
    const json = yield call([response, response.json]);
    console.log("json __getCountries", json);
    yield put(setCountry(json));
    const countries = yield select(state => state.Countries);
    console.log("countries", countries);
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
