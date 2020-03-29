import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./home-carousel.scss";
import { connect } from "react-redux";

function ChildrenCarousel(props) {
  const styles = {
    backgroundContainer: {
      backgroundImage: props.item.image
    }
  };

  return (
    <div className="carousel-banner">
      <div className="carousel-content">
        <h1 className="carousel-title">{props.item.title}</h1>
        <p className="carousel-caption">{props.item.overview}</p>
        <button className="carousel-button">Watch Now</button>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`}
        className="carousel-image"
      />
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
    return <div>Loading Banner</div>;
  }

  render() {
    const { banner, loading } = this.props;
    if (loading) return this.loading();
    return (
      <Carousel
        className="carousel"
        autoPlay={this.state.autoPlay}
        timer={this.state.timer}
        animation={this.state.animation}
        indicators={this.state.indicators}
      >
        {banner.map((item, index) => {
          return <ChildrenCarousel item={item} key={index} />;
        })}
      </Carousel>
    );
  }
}

const mapToProps = ({ Movies }) => {
  const { banner } = Movies;
  if (banner.length === 0) return { loading: true };
  return { banner };
};

export default connect(mapToProps)(CarouselComponent);
