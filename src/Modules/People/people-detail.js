import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import "../Component/container.scss";
import "./people-detail.scss";

const PeopleDetailHead = lazy(() => import("./people-detail-head"));
const PeopleCreditInfo = lazy(() => import("./people-credit-info"));

function PeopleDetail({ selected, detail }) {
  const {
    name,
    profile_path,
    birthday,
    place_of_birth,
    known_for_department,
    biography
  } = detail;
  return (
    <div className="container people-detail">
      <div className="people-detail-bio">
        <Suspense fallback={<div>Loading PeopleDetailHead</div>}>
          <PeopleDetailHead
            name={name}
            profilePath={profile_path}
            birthday={birthday}
            placeDob={place_of_birth}
            department={known_for_department}
            biography={biography}
          />
        </Suspense>
      </div>
      <div className="credits-detail-bio">
        <Suspense fallback={<div>Loading PeopleCreditInfo</div>}>
          <PeopleCreditInfo />
        </Suspense>
      </div>
    </div>
  );
}

const mapTopProps = ({ People }) => {
  const { selected, detail } = People;
  return { selected, detail };
};

export default connect(mapTopProps)(PeopleDetail);
