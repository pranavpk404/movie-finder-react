import React from "react";
import CustomModal from "./CustomModal";
function Card({
  name,
  poster_path,
  overview,
  title,
  original_name,
  release_date,
  vote_average,
  vote_color,
}) {
  const imgBaseURL = "https://image.tmdb.org/t/p/w154/";
  return (
    <div className="rowPostersContentHolder">
      <img
        className="rowPostersContent"
        src={`${imgBaseURL}${poster_path}`}
        alt={name}
      />
      <span className="movieInfo">
        {/* The Same reason as banner  */}
        <h4 className="cardTitle">{title || name || original_name}</h4>
        <h5 className={`${vote_color} cardVoteAverage`}>{vote_average}</h5>
        <CustomModal
          poster_path={poster_path}
          name={name}
          title={title}
          original_name={original_name}
          overview={overview}
          release_date={release_date}
          vote_average={vote_average}
          vote_color={vote_color}
        />
      </span>
    </div>
  );
}

export default Card;
