import React, { useCallback } from "react";
import "./breadcrumbs.scss";
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
// avoiding useHistory hook its not good performance
// probably there is something bugs, we can use withRouter
// HOC from react-router-dom to replace the history location
function Breadcrumbs(props) {
  const pathname = props.location.pathname;
  const param = pathname.split("/");
  const handleClick = useCallback(loc => {
    props.history.replace(`${location}/${loc}`);
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

export default withRouter(Breadcrumbs);
