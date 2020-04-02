import React, { useEffect } from "react";
import { connect } from "react-redux";
import { movieLoaded } from "../Movies/movies-action";
import CarouselComponent from "./home-carousel";
import MovieSuggestion from "../Movies/movies-suggestion";
import MovieSection from "../Movies/movies-section";
import "../../CoreScss/global.scss";

// Load movie to banner, suggestion, latest
// with condition if loaded false
function Home({ genre, movieLoaded }) {
  useEffect(() => {
    movieLoaded();
  });
  return (
    <div className="wrapper">
      <CarouselComponent />
      <MovieSection title={"Suggestion Movie"} menu={genre}>
        <MovieSuggestion />
      </MovieSection>
    </div>
  );
}

const mapStateToProps = ({ Genres, Movies }) => {
  const { movie } = Genres;
  return { genre: movie };
};

export default connect(mapStateToProps, {
  movieLoaded
})(Home);
