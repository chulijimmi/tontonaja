import React, { useEffect, useState } from "react";
import "./people-detail.scss";
import { withRouter } from "react-router-dom";
import { httpGet } from "../../Helper/HttpFetch";
import { connect } from "react-redux";
import MediaSection from "./people-detail-media";
import PersonSection from "./people-detail-person";
import KnowForSection from "./people-detail-knowfor";

// Loading PeopleCreditInfoLoading Component
// Only rendering div and animatation before
// receive data from api
function PeopleCreditInfoLoading() {
  return (
    <div className="detail-bio-loading">
      <div className="info"></div>
      <div className="media"></div>
      <div className="person"></div>
    </div>
  );
}

// PeopleCreditInfoLoading Component
// use local state to store data from response
// api credits.
// aovoid to pople hit the uri with query string.
// query string should handle with conditions
function PeopleCreditInfo(props) {
  console.log("PeopleCreditInfo", props);
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  let creditId = null;
  if (props.location.state && props.location.state.creditId) {
    creditId = props.location.state.creditId;
  }

  useEffect(() => {
    setLoading(true);
    async function fetchCredits() {
      const response = await httpGet(`/3/credit/${creditId}`);
      if (response.status === 200) {
        const json = await response.json();
        setState(json);
        setLoading(false);
      }
    }

    fetchCredits();
  }, [creditId]);

  if (loading) return <PeopleCreditInfoLoading />;
  return (
    <div className="detail-bio">
      {console.log("state", state)}
      <div className="info">
        <h3 className="title-section">Credit {state.credit_type}</h3>
        <p>Department Acting</p>
        <p>Job Actor</p>
      </div>
      <MediaSection media={state.media} />
      <PersonSection person={state.person} />
      <KnowForSection movie={state.person.known_for} />
    </div>
  );
}

const mapToProps = ({ Genres }) => {
  const { movie } = Genres;
  return { genre: movie };
};

export default connect(mapToProps)(withRouter(PeopleCreditInfo));
