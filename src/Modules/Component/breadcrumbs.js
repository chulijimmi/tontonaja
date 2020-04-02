import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./breadcrumbs.scss";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
import { withRouter } from "react-router";

// Create link uri to handle onClick button breadcrumbs
function createLink(args, start, end) {
  const node = [];
  for (let i = start; i <= end; i++) {
    const item = args[i] === "tontonaja" ? "home" : args[i];
    node.push(item);
  }
  if (node.length < 1) return "home";
  return node.join("/");
}

// Breadchrumbs Component with child link
// based on location pathname
function Breadcrumbs(props) {
  const history = useHistory();
  const pathname = props.router.location.pathname;
  const param = pathname.split("/");
  const handleClick = useCallback(loc => {
    console.log("location", loc);
    history.replace(`${location}/${loc}`);
  });

  const child = [];

  for (let i = 0; i < param.length; i++) {
    if (param[i] !== "") {
      const item = param[i] === "tontonaja" ? "home" : param[i];
      const link = createLink(param, 2, i);
      child.push(
        <button
          key={i.toString()}
          className="link"
          onClick={() => handleClick(link)}
        >
          {item}
        </button>
      );
    }
  }

  return (
    <div className="breadcrumbs">
      <h3 className="title">{props.title}</h3>
      <div className="child">{child}</div>
    </div>
  );
}

const mapToProp = ({ router }) => {
  return { router };
};

export default connect(mapToProp)(withRouter(Breadcrumbs));
