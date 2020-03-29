import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Countries from "../Modules/Countries/countries-reducer";
import Genres from "../Modules/Genres/genres-reducers";
import Movies from "../Modules/Movies/movies-reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    Countries,
    Genres,
    Movies
  });
