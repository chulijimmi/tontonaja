import React from "react";
import "./movies-detail-video.scss";

function MovieVideo({ backdrop, video, title }) {
  const imageHash = Date.now();
  return (
    backdrop && (
      <div className="video-container">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop}?${imageHash}`}
          alt={title}
        />
      </div>
    )
  );
}

export default MovieVideo;
