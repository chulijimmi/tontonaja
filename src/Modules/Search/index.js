import React from "react";
import { connect } from "react-redux";

const Search = props => {
  console.log("Props Search", props);
  return (
    <div>
      <p>This is Search</p>
    </div>
  );
};

export default connect()(Search);
