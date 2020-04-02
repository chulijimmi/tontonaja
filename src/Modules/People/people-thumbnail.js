import React, { memo } from "react";
import PropTypes from "prop-types";
import "./people-component.scss";

export function LoadingPeopleThumbnail() {
  return (
    <div className="people-container">
      <div className="people-images"></div>
      <div className="people-info">
        <span className="people-name"></span>
        <p className="people-bio"></p>
        <p className="people-bio"></p>
        <p className="people-bio"></p>
      </div>
    </div>
  );
}

const propsPeopleThumbnail = (prevProps, nextProps) => {
  return prevProps.label === nextProps.label;
};

export function PeopleThumbnail({
  name,
  job,
  character,
  profilePath,
  department,
  onClick
}) {
  return (
    <div className="people-container" onClick={() => onClick()}>
      <div className="people-images">
        <img
          src={`https://image.tmdb.org/t/p/w185/${profilePath}`}
          alt={name}
        />
      </div>
      <div className="people-info">
        <span className="people-name">{name}</span>
        {job && <p className="people-bio">Jobs: {job}</p>}
        {department && <p className="people-bio">Department: {department}</p>}
        {character && <p className="people-bio">Character: {character}</p>}
      </div>
    </div>
  );
}

PeopleThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  job: PropTypes.string,
  department: PropTypes.string,
  character: PropTypes.string
};

export default React.memo(PeopleThumbnail, propsPeopleThumbnail);
