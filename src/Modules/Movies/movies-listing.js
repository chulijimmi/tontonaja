import React, { useEffect, lazy, useState } from "react";
import { MovieLoadingThumbnail } from "./movies-thumbnail";
import { httpGet } from "../../Helper/HttpFetch";
import "../Component/container.scss";
import { movieDiscoverLoaded } from "./movies-action";
import { connect } from "react-redux";

const MovieComponent = lazy(() => import("./movies-component"));
const Breadcrumbs = lazy(() => import("../Component/breadcrumbs"));

// Movie Listing render multiple movie component
// including breadcrumbs with title on props.
// before this component renders it will going to
// fetch data throug api.
// we use local state to handle state.
// avoid to use local state render to many data,
// we move to reducers state data inside Movies
function MovieListing(props) {
  const { data, movieDiscoverLoaded } = props;
  useEffect(() => {
    movieDiscoverLoaded();
  }, []);

  return (
    <div className="container">
      <Breadcrumbs title="Movie" />
      {data.length == 0 ? (
        <MovieLoadingThumbnail />
      ) : (
        data.map(
          (item, index) =>
            item.backdrop_path && (
              <MovieComponent {...item} key={index.toString()} />
            )
        )
      )}
    </div>
  );
}

const mtp = ({ Movies }) => {
  const { data } = Movies;
  return { data };
};

export default connect(mtp, { movieDiscoverLoaded })(MovieListing);
