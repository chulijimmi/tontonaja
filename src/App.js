import React, { Suspense, lazy } from "react";
import { Provider, ReactReduxContext } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./Store";
import HeaderComponent from "./Header/header-component";

const ConnectedHome = lazy(() => import("./Modules/Home"));
const ConnectedMovie = lazy(() => import("./Modules/Movie"));

const store = configureStore();
const location = `${process.env.PUBLIC_URL}`;

function MainApp({ history, context }) {
  console.log("MainApp", { history, context });
  return (
    <ConnectedRouter history={history} context={context}>
      <Suspense fallback={<div>Loading App...</div>}>
        <HeaderComponent />
        <Switch>
          <Route
            exact
            path={`${location}/`}
            render={() => <Redirect to={`${location}/home`} />}
          />
          <Route
            path={`${location}/home`}
            render={({ staticContext, ...props }) => (
              <ConnectedHome {...props} />
            )}
          />
          <Route
            path={`${location}/movie`}
            render={({ staticContext, ...props }) => (
              <ConnectedMovie {...props} />
            )}
          />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

function App() {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <MainApp history={history} context={ReactReduxContext} />
    </Provider>
  );
}

export default App;
