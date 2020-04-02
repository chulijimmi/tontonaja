import React, { useCallback, lazy, Suspense, useState, createRef } from "react";
import { MovieLoadingThumbnail } from "./movies-thumbnail";
import { useOnClickOutside } from "../Component/link-menu";
import "./movies-thumbnail.scss";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
import { setDetailMovie, getDetailMovie } from "./movies-action";
import { connect } from "react-redux";
import { fetchDetailMovie } from "./movies-api";

// Lazy imported component
export const MovieThumbnail = lazy(() => import("./movies-thumbnail"));
export const MovieThumbnailPopup = lazy(() =>
  import("./movies-thumbnail-popup")
);

// Render child component thumbnail movie
// including popup movie
// handleWatchMovie related to fetching data
export function MovieComponent(props) {
  let history = useHistory();
  const ref = createRef();
  const [isOpen, setIsOpen] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const handleClick = useCallback(() => {
    setIsOpen(true);
    setMovieInfo(props);
  });
  const handleWatchMovie = useCallback(async () => {
    const resp = await fetchDetailMovie(props.id);
    if (resp !== false) {
      props.setDetailMovie(resp);
      history.push({
        pathname: `${location}/movie/detail`,
        search: `?id=${props.id}`,
        state: { movieId: props.id }
      });
    }
  });

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <Suspense fallback={<MovieLoadingThumbnail />}>
      <div className="movie-thumbnail-container">
        {isOpen && (
          <MovieThumbnailPopup
            ref={ref}
            movieData={movieInfo}
            bottomPosition={window.pageYOffset}
            onClick={handleWatchMovie}
          />
        )}
        <MovieThumbnail
          title={props.title}
          onClick={() => handleClick()}
          backdrop={props.backdrop_path}
          vote={props.vote_average}
        />
      </div>
    </Suspense>
  );
}
const mtp = ({}) => {
  return {};
};
export default connect(mtp, { setDetailMovie, getDetailMovie })(MovieComponent);
