import { all, fork } from "redux-saga/effects";
import SagaCounties from "../Modules/Countries/countries-saga";

export default function*() {
  yield all([fork(SagaCounties)]);
}
