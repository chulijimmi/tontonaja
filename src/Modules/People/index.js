import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { location } from "../../Env";
import { httpGet } from "../../Helper/HttpFetch";
import PeopleDetail from "./people-detail";
import { setPeopleDetail } from "./people-actions";
import { connect } from "react-redux";

function People(props) {
  const peopleId = new URLSearchParams(props.location.search).get("id");
  useEffect(() => {
    async function fetchDetailPeople() {
      const uri = `/3/person/${peopleId}`;
      const response = await httpGet(uri);
      if (response.status === 200) {
        let json = await response.json();
        props.setPeopleDetail(json);
      } else {
        // Redirect to home if nessesary doesn't match with api
        props.history.replace(`${location}/home`);
      }
    }
    fetchDetailPeople();
  }, [peopleId]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${location}/people`}
          render={() => (
            <Suspense fallback={<div>Loading</div>}>
              <PeopleDetail />
            </Suspense>
          )}
        />
      </Switch>
    </Router>
  );
}

export default connect(null, { setPeopleDetail })(withRouter(People));
