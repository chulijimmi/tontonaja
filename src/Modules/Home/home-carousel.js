import React, { useCallback } from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./home-carousel.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
import { fetchDetailMovie } from "../Movies/movies-api";
import { setDetailMovie } from "../Movies/movies-action";
function ChildrenCarousel(props) {
  let history = useHistory();
  const handleClick = useCallback(async () => {
    const resp = await fetchDetailMovie(props.item.id);
    console.log("id movie carousel", props.item.id);
    if (resp !== false) {
      props.setDetailMovie(resp);
      history.push({
        pathname: `${location}/movie/detail`,
        search: `?id=${props.item.id}`,
        state: { movieId: props.item.id }
      });
    }
  });
  return (
    <div className="carousel-banner">
      <div className="carousel-content">
        <h1 className="carousel-title">{props.item.title}</h1>
        <p className="carousel-caption">
          {props.item && props.item.overview
            ? props.item.overview.substring(0, 250)
            : ""}{" "}
          ...
        </p>
        <button className="carousel-button" onClick={handleClick}>
          Watch Now
        </button>
      </div>
      {props.item.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`}
          className="carousel-image"
        />
      )}
    </div>
  );
}

/***
 * Render carousel component only have backdrop_path
 *
 */
class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 1000,
      animation: "slide",
      indicators: false
    };

    autoBind(this);
  }

  loading() {
    return <div className="carousel-loading"></div>;
  }

  render() {
    const { banner, movie_loaded, setDetailMovie } = this.props;
    if (!movie_loaded) return this.loading();
    return (
      <Carousel
        className="carousel"
        autoPlay={this.state.autoPlay}
        timer={this.state.timer}
        animation={this.state.animation}
        indicators={this.state.indicators}
      >
        {banner.map((item, index) => {
          return (
            item.backdrop_path && (
              <ChildrenCarousel
                item={item}
                key={index}
                setDetailMovie={setDetailMovie}
              />
            )
          );
        })}
      </Carousel>
    );
  }
}

const mapToProps = ({ Movies }) => {
  const { banner, movie_loaded } = Movies;
  return { banner, movie_loaded };
};

export default connect(mapToProps, { setDetailMovie })(CarouselComponent);
