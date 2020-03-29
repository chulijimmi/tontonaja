import React, { useEffect } from "react";
import { connect } from "react-redux";
import { countryLoaded } from "../Countries/countries-action";
import { genreLoaded } from "../Genres/genres-action";
import { movieLoaded } from "../Movies/movies-action";
import CarouselComponent from "./home-carousel";

function Home(props) {
  useEffect(() => {
    props.countryLoaded();
    props.genreLoaded();
    props.movieLoaded();
  }, []);

  return (
    <div>
      <CarouselComponent />
    </div>
  );
}

const mapStateToProps = ({ Countries }) => {
  return { Countries };
};

export default connect(mapStateToProps, {
  countryLoaded,
  genreLoaded,
  movieLoaded
})(Home);
