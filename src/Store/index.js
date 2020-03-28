import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import reducer from "../RootReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../RootSagas";
export const history = createBrowserHistory();

const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

export default function configureStore(initState) {
  const store = createStore(
    reducer(history),
    initState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      applyMiddleware(routeMiddleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    module.hot.accept("../RootReducers/index", () => {
      const nextReducer = require("../RootReducers/index");
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
