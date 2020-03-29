import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { countryLoaded } from "../Countries/countries-action";
import { genreLoaded } from "../Genres/genres-action";

const location = `${process.env.PUBLIC_URL}`;

function Home(props) {
  useEffect(() => {
    props.countryLoaded();
    props.genreLoaded();
  }, []);

  return (
    <div>
      <p>This is Home</p>
      <Link to={`${location}/movie`}>Movie</Link>
    </div>
  );
}

const mapStateToProps = ({ Countries }) => {
  return { Countries };
};

export default connect(mapStateToProps, { countryLoaded, genreLoaded })(Home);
