import React from "react";
import "./people-detail-person.scss";

// PersonSection Component
function PersonSection({ person }) {
  return (
    <div className="person">
      <h3>Person</h3>
      <div className="images-profile">
        <img src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`} />
      </div>
      <div className="person-profile">
        <p>
          {person.known_for_department} {person.name}
        </p>
      </div>
    </div>
  );
}

export default PersonSection;
