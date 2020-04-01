import React, { Suspense, lazy } from "react";
import { Provider, ReactReduxContext } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./Store";
import { location } from "./Env";
import "./CoreScss/global.scss";
/**
 * Do to test unit need to exports of Component
 */
export const HeaderComponent = lazy(() => import("./Header/header-component"));
export const FooterComponent = lazy(() => import("./Footer/footer-component"));
export const ConnectedHome = lazy(() => import("./Modules/Home"));
export const ConnectedGenres = lazy(() => import("./Modules/Genres"));
export const ConnectedCountries = lazy(() => import("./Modules/Countries"));
export const ConnectedMovies = lazy(() => import("./Modules/Movies"));
export const ConnectedTvSeries = lazy(() => import("./Modules/TvSeries"));
export const ConnectedSearch = lazy(() => import("./Modules/Search"));

const store = configureStore();

const routeMap = [
  {
    id: "root",
    path: `${location}/`,
    component: null,
    parent: true
  },
  {
    id: "home",
    path: `${location}/home`,
    component: ConnectedHome,
    parent: false
  },
  {
    id: "genre",
    path: `${location}/genre`,
    component: ConnectedGenres,
    parent: false
  },
  {
    id: "country",
    path: `${location}/country`,
    component: ConnectedCountries,
    parent: false
  },
  {
    id: "movie",
    path: `${location}/movie`,
    component: ConnectedMovies,
    parent: false
  },
  {
    id: "tvserie",
    path: `${location}/tvserie`,
    component: ConnectedTvSeries,
    parent: false
  },
  {
    id: "search",
    path: `${location}/search`,
    component: ConnectedSearch,
    parent: false
  }
];

function MainApp({ history, context }) {
  return (
    <ConnectedRouter history={history} context={context}>
      <Suspense fallback={<div>Loading App...</div>}>
        <>
          <HeaderComponent />
          <Switch>
            {routeMap.map(item => {
              const RouteComponent = item.component;
              if (item.parent) {
                return (
                  <Route
                    key={item.id}
                    exact
                    path={item.path}
                    render={() => <Redirect to={`${location}/home`} />}
                  />
                );
              } else {
                return (
                  <Route
                    key={item.id}
                    path={item.path}
                    render={({ staticContext, ...props }) => (
                      <RouteComponent {...props} />
                    )}
                  />
                );
              }
            })}
          </Switch>
          <FooterComponent />
        </>
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
