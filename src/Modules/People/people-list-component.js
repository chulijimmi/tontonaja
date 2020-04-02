import React, { lazy, useCallback } from "react";
import "./people-component.scss";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
const PeopleThumbnailComponent = lazy(() => import("./people-thumbnail"));
function PeopleList({ data }) {
  let history = useHistory();

  const handleOnclick = useCallback((peopleId, castId, creditId) => {
    history.push({
      pathname: `${location}/people`,
      search: `?id=${peopleId}`,
      state: { peopleId }
    });
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
          onClick={() =>
            handleOnclick(data[i].id, data[i].cast_id, data[i].credit_id)
          }
        />
      );
  }
  if (child.length === 0) return null;
  return <div className="people-thumbnail-area">{child}</div>;
}

export default PeopleList;
