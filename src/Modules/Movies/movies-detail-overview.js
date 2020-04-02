import React, { lazy } from "react";
import "./movies-detail-overview.scss";

const PanelSection = lazy(() => import("../Component/panel-section"));

const ListPeopleComponent = lazy(() =>
  import("../People/people-list-component")
);

function MovieOverView({ movie }) {
  return (
    movie && (
      <div className="movie-overview">
        <h3 className="title">
          Overview <span className="released">{movie.status}</span>
        </h3>
        <p className="overview">{movie.overview}</p>
        <p className="rate">
          Rate <span>{movie.vote_average}</span>
        </p>
        <PanelSection
          title="Genre"
          titleSize="small"
          menu={movie.genres}
          onClick={() => console.log("Click panel")}
        />
        <h3 className="title">Casting</h3>
        <ListPeopleComponent data={movie.credits.cast} credits="cast" />
        <h3 className="title">Crew</h3>
        <ListPeopleComponent data={movie.credits.crew} credits="crew" />
      </div>
    )
  );
}
export default MovieOverView;
