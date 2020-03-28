import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const location = `${process.env.PUBLIC_URL}`;
const Movie = props => {
  console.log("Props Movie", props);
  return (
    <div>
      <p>This is movie</p>
      <Link to={`${location}/home`}>Home</Link>
    </div>
  );
};

export default connect()(Movie);
