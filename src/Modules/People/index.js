import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { location } from "../../Env";

function People() {
  return (
    <Route
      path={`${location}/people`}
      render={() => (
        <Suspense fallback={<div>Loading</div>}>
          <div>People Route</div>
        </Suspense>
      )}
    />
  );
}

export default People;
