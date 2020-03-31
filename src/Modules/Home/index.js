import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { countryLoaded } from "../Countries/countries-action";
import { genreLoaded } from "../Genres/genres-action";
import { movieLoaded } from "../Movies/movies-action";
import CarouselComponent from "./home-carousel";
import MovieSuggestion from "../Movies/movies-suggestion";
import MovieSection from "../Movies/movies-section";
import "../../CoreScss/global.scss";

function Home(props) {
  useEffect(() => {
    props.countryLoaded();
    props.genreLoaded();
    props.movieLoaded();
  }, []);

  return (
    <div className="wrapper">
      <CarouselComponent onClick={() => console.log("Click Caousel")} />
      <MovieSection title={"Suggestion Movie"} menu={props.genre}>
        <MovieSuggestion />
      </MovieSection>
    </div>
  );
}

const mapStateToProps = ({ Countries, Genres }) => {
  const { country } = Countries;
  const { movie } = Genres;
  const genre = movie;
  return { country, genre };
};

export default connect(mapStateToProps, {
  countryLoaded,
  genreLoaded,
  movieLoaded
})(Home);
