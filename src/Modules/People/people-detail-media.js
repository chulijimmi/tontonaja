import React from "react";
import { connect } from "react-redux";
import "./people-detail-media.scss";
import { getGenreName } from "../Genres/genres-helper";

// Render Genre Inforation in Media Section
function renderGenre(arr, genre) {
  let node = [];
  const res = getGenreName(genre, arr);
  res.map(item => {
    node.push(
      <span className="genre" key={item.id.toString()}>
        {item.name}
      </span>
    );
  });
  return node;
}

// Render Media Section
function MediaSection({ media, genre }) {
  return (
    <div className="media">
      <h3>Movie Media</h3>
      <p>{media.title}</p>
      <p>{renderGenre(media.genre_ids, genre)}</p>
      <div className="images-backdrop">
        <img src={`https://image.tmdb.org/t/p/w500/${media.backdrop_path}`} />
      </div>
      <p>Release {media.release_date}</p>
      <p>Character {media.character}</p>
      <p>Overview {media.overview}</p>
    </div>
  );
}

const mapToProp = ({ Genres }) => {
  const { movie } = Genres;
  return { genre: movie };
};

export default connect(mapToProp)(MediaSection);
