import React, { lazy, useCallback } from "react";
import "./people-component.scss";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
import { setPeople } from "./people-actions";
import { connect } from "react-redux";

const PeopleThumbnailComponent = lazy(() => import("./people-thumbnail"));

function PeopleList({ data, credits, setPeople }) {
  let history = useHistory();

  const handleOnclick = useCallback(people => {
    const { id, cast_id, credit_id } = people;
    history.push({
      pathname: `${location}/people`,
      search: `?id=${id}`,
      state: { peopleId: id, castId: cast_id, creditId: credit_id }
    });

    setPeople(people, credits);
  });

  const child = [];
  for (let i = 0; i <= data.length; i++) {
    data[i] &&
      data[i].profile_path &&
      child.push(
        <PeopleThumbnailComponent
          key={data[i].credit_id}
          name={data[i].name}
          job={data[i].job}
          profilePath={data[i].profile_path}
          department={data[i].department}
          character={data[i].character}
          onClick={() => handleOnclick(data[i])}
        />
      );
  }
  if (child.length === 0) return null;
  return <div className="people-thumbnail-area">{child}</div>;
}

const mapToProps = ({ People }) => {
  const { selected } = People;
  return { selected };
};

export default connect(mapToProps, { setPeople })(PeopleList);
