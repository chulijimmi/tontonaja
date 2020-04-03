import React from "react";
import "./search-component.scss";
import { getGenreName } from "../Genres/genres-helper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { location } from "../../Env";
const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  barColorPrimary: {
    backgroundColor: "#17b353"
  }
})(LinearProgress);

function LoadingSearch() {
  return [1, 2].map(item => {
    return (
      <div className="search-results" key={item.toString()}>
        <div className="backdrop">
          <div className="image-backdrop loading-results"></div>
          <div className="rating loading-results"></div>
        </div>
        <div className="info">
          <div className="title loading-results"></div>
          <div className="genre loading-results"></div>
          <div className="overview loading-results"></div>
          <div className="loading-bar">
            <ColorLinearProgress />
          </div>
        </div>
      </div>
    );
  });
}

// Render Genre Inforation in search popup component
function renderGenre(arr, genre) {
  let node = [];
  const res = getGenreName(genre, arr);
  if (res.length === 1) {
    return (
      <span className="genre" key={res[0].id.toString()}>
        {res[0].name}
      </span>
    );
  } else {
    res.map(item => {
      node.push(
        <span className="genre" key={item.id.toString()}>
          {item.name}
        </span>
      );
    });
  }
  return node;
}

function SearchResult(props) {
  let history = useHistory();
  const { data } = props;

  return data.map((item, index) => {
    return (
      item.backdrop_path && (
        <div
          className="search-results"
          key={index.toString()}
          onClick={() => props.onClickResult(item)}
        >
          <div className="backdrop">
            <div className="image-backdrop">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              />
            </div>
            <div className="rating">
              <p>{item.vote_average}</p>
            </div>
          </div>
          <div className="info">
            <div className="title">
              <p>{item.title.substring(0, 30)}</p>
            </div>
            <div className="genre">
              {renderGenre(item.genre_ids, props.genre)}
            </div>
            <div className="overview">
              <p>{item.overview.substring(0, 100)}</p>
            </div>
          </div>
        </div>
      )
    );
  });
}

// Form Search Popup
const SearchForm = React.forwardRef((props, ref) => {
  return (
    <div className="search-form" ref={ref}>
      {props.loading ? (
        <LoadingSearch />
      ) : (
        <SearchResult
          data={props.data}
          genre={props.genre}
          onClickResult={item => props.onClickResult(item)}
        />
      )}
    </div>
  );
});

export default SearchForm;
