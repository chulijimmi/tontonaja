import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { location } from "../../Env";

const MovieDetail = lazy(() => import("./movies-detail"));
const MovieListing = lazy(() => import("./movies-listing"));

function Movie() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route
          exact
          path={`${location}/movie`}
          render={() => (
            <Suspense fallback={<div>Loading</div>}>
              <MovieListing />
            </Suspense>
          )}
        />
        <Route
          path={`${location}/movie/detail`}
          render={() => <MovieDetail />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Movie;
