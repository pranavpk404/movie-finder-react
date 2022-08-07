import { useEffect, useState } from "react";
import Card from "./Card";
import "./css/Row.css";
function Row({ title, fetchUrl, setProgress }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setProgress(10);
      let url = `https://api.themoviedb.org/3${fetchUrl}`;
      const request = await fetch(url);
      let resp = await request.json();
      setProgress(50);
      let results = resp.results;
      if (results.length > 0) {
        setMovies(results);
        setProgress(100);
      } else {
        setMovies([]);
        setProgress(100);
        alert("No results found");
      }
    }
    fetchData();
  }, [fetchUrl, setProgress]);

  const getColorByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  const getRoundedValue =(value)=>{
    let rounded_value = Math.trunc(value)
    return rounded_value
  }


  return (
    <div id={title} className="row">
      <h2 className="rowTitle">{title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            name={movie.name}
            title={movie.title}
            original_name={movie.original_name}
            poster_path={movie.poster_path}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={getRoundedValue(movie.vote_average)}
            vote_color={getColorByRate(movie.vote_average)}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
