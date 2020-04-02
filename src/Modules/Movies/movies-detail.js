import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { getDetailMovie } from "./movies-action";
import "../Component/container.scss";
import "./movies-detail.scss";

const MovieVideo = lazy(() => import("./movies-detail-video"));
const Breadcrumbs = lazy(() => import("../Component/breadcrumbs"));
const MovieOverView = lazy(() => import("./movies-detail-overview"));

function MovieDetail(props) {
  const { loading, detail, router, getDetailMovie } = props;
  const movieId = router.location.query.id;
  useEffect(() => {
    if (loading) {
      getDetailMovie(movieId);
    }
  }, [movieId]);

  if (loading) return <span>Loading MovieDetail</span>;
  return (
    <div className="container">
      <div className="container-video">
        <div className="wrapper">
          <Suspense fallback={<span>Loading Breadcrumbs</span>}>
            <Breadcrumbs title={detail.title} />
          </Suspense>
          <Suspense fallback={<span>Loading MovieVideo</span>}>
            <MovieVideo
              backdrop={detail.backdrop_path}
              video={detail.video}
              title={detail.title}
            />
          </Suspense>
        </div>
      </div>
      <div className="container-info">
        <Suspense fallback={<span>Loading MovieOverView</span>}>
          <MovieOverView movie={detail} />
        </Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = ({ router, Movies }) => {
  const { detail } = Movies;
  if (detail.loaded === false) return { loading: true, router, detail };
  return { router, detail };
};

export default connect(mapStateToProps, { getDetailMovie })(MovieDetail);
