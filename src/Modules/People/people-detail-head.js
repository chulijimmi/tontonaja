import React from "react";

function PeopleDetailHead({
  name,
  profilePath,
  birthday,
  placeDob,
  department,
  biography
}) {
  return (
    <div className="people-head-detail">
      <div className="people-head-detail-images">
        <img src={`https://image.tmdb.org/t/p/original/${profilePath}`} />
      </div>
      <div className="people-head-detail-bio">
        <h3 className="title-section">{name}</h3>
        <p>{placeDob}</p>
        <p>{birthday}</p>
        <p>{department}</p>
      </div>
      <div className="about">
        <h3 className="title-section">About</h3>
        <p>{biography}</p>
      </div>
    </div>
  );
}

export default PeopleDetailHead;
