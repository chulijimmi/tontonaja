import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Countries from "../Modules/Countries/countries-reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    Countries
  });
