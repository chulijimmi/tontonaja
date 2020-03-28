import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countryLoaded } from "../Countries/countries-action";

const location = `${process.env.PUBLIC_URL}`;

function Home(props) {
  useEffect(() => {
    props.countryLoaded();
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

export default connect(mapStateToProps, { countryLoaded })(Home);
