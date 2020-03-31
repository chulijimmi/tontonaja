import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./home-carousel.scss";
import { connect } from "react-redux";

function ChildrenCarousel(props) {
  return (
    <div className="carousel-banner">
      <div className="carousel-content" onClick={props.onClick}>
        <h1 className="carousel-title">
          {props.item && props.item.title ? props.item.title : ""}
        </h1>
        <p className="carousel-caption">
          {props.item && props.item.overview ? props.item.overview : ""}
        </p>
        <button className="carousel-button">Watch Now</button>
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
    const { banner, movie_loaded } = this.props;
    if (movie_loaded) return this.loading();
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
            <ChildrenCarousel
              item={item}
              key={index}
              onClick={this.props.onClick.bind(this)}
            />
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

export default connect(mapToProps)(CarouselComponent);
