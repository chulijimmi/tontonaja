import React, { useState, useCallback, createRef, lazy } from "react";
import "./search-component.scss";
import { useOnClickOutside } from "../Component/link-menu";
import { connect } from "react-redux";
import { searchMovie } from "./search-action";
import { useHistory } from "react-router-dom";
import { getDetailMovie } from "../Movies/movies-action";
import { location } from "../../Env";
const SearchPopUp = lazy(() => import("./search-popup-component"));

// Search Component
// When user click the result search
// it will handle by handleClickResult
// this component integrated with search-saga
function SearchComponent({
  position,
  data,
  loading,
  searchMovie,
  genres,
  getDetailMovie
}) {
  let history = useHistory();
  const ref = createRef();
  const inputRef = createRef();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    setVisible(true);
  };

  const handleOnChange = useCallback(event => {
    inputRef.current.focus();
    const value = event.target.value;
    searchMovie(value);
  });

  const handleClickResult = useCallback(item => {
    getDetailMovie(item.id);
    setVisible(false);
    history.push({
      pathname: `${location}/movie/detail`,
      search: `?id=${item.id}`,
      state: { movieId: item.id }
    });
  });

  useOnClickOutside(ref, () => setVisible(false));

  return (
    <div className={`search-container`}>
      <input
        placeholder="Search Movie"
        className={`search-input search-position-${position}`}
        onClick={handleClick}
        onChange={handleOnChange}
        ref={inputRef}
      ></input>
      {visible && (
        <SearchPopUp
          ref={ref}
          data={data}
          loading={loading}
          genre={genres}
          onClickResult={item => handleClickResult(item)}
        />
      )}
    </div>
  );
}

const mapToProps = ({ Search, Genres }) => {
  const { loading, data } = Search;
  const { movie } = Genres;
  return { loading, data, genres: movie };
};

export default connect(mapToProps, { searchMovie, getDetailMovie })(
  SearchComponent
);
