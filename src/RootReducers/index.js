import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Countries from "../Modules/Countries/countries-reducer";
import Genres from "../Modules/Genres/genres-reducers";
import Movies from "../Modules/Movies/movies-reducer";
import People from "../Modules/People/people-reducers";

export default history =>
  combineReducers({
    router: connectRouter(history),
    Countries,
    Genres,
    Movies,
    People
  });
