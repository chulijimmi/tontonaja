import React, { lazy } from "react";
import "../Component/container.scss";
import { connect } from "react-redux";
import { setMovieSuggestionGenre } from "./movies-action";
import "./movies-section.scss";
const PanelSection = lazy(() => import("../Component/panel-section"));

/**
 * Produce element child component with title
 * and panel menu based on genre movies
 * @param {String} title
 * @param {Node} children
 */
function Section(props) {
  const { title, menu, children, setMovieSuggestionGenre } = props;
  const ChildSectionMovie = React.Children.map(children, child => {
    return <div className="section-movie">{child}</div>;
  });

  return (
    <div className="container">
      <PanelSection
        title={title}
        menu={menu}
        onClick={data => setMovieSuggestionGenre(data)}
      />
      {ChildSectionMovie}
    </div>
  );
}

const mapToProps = ({}) => {
  return {};
};

export default connect(mapToProps, { setMovieSuggestionGenre })(Section);
