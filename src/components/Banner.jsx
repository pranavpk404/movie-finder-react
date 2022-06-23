import { useEffect, useState } from "react";
import requests from "../utils/requests";
import "./css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const getGenre = () => {
    let list = [
      "fetchTrending",
      "fetchNetflixOriginals",
      "fetchTopRated",
      "fetchActionMovies",
      "fetchComedyMovies",
      "fetchHorrorMovies",
      "fetchDocumentaries",
      "fetchAdventure",
      "fetchMystery",
      "fetchThriller",
      "fetchAnimation",
      "fetchCrime",
      "fetchDrama",
      "fetchFamily",
      "fetchFantasy",
      "fetchHistory",
      "fetchFiction",
      "fetchWar",
    ];

    let genre = list[Math.floor(Math.random() * list.length)];
    return genre;
  };
  useEffect(() => {
    async function fetchData() {
      let url = `https://api.themoviedb.org/3${requests[getGenre()]}`;
      const request = await fetch(url);
      let resp = await request.json();
      let results = resp.results;
      let banner = results[Math.floor(Math.random() * results.length)];
      setMovie(banner);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}")`,
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {/* The below due to api some movies have title some name some original_name */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h4 className="bannerDesc">{truncate(movie?.overview, 150)}</h4>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
