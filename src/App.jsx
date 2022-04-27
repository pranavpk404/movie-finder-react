import { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./utils/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [searchUrl, setSearchUrl] = useState();
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  const [progress, setProgress] = useState(0);

  const search = () => {
    setSearchBtnClicked(true);
    const searchInput = document.getElementById("searchBar").value;

    setSearchUrl(`${requests.search}${searchInput}"`);
  };

  return (
    <div className="allContaining">
      <LoadingBar color="blue" progress={progress} />
      <Navbar search={search} />
      <Banner />
      {searchBtnClicked ? (
        <Row
          title="Search Results:"
          fetchUrl={searchUrl}
          setProgress={setProgress}
        />
      ) : null}
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        setProgress={setProgress}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        setProgress={setProgress}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        setProgress={setProgress}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        setProgress={setProgress}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        setProgress={setProgress}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        setProgress={setProgress}
      />
      <Row title="War" fetchUrl={requests.fetchWar} setProgress={setProgress} />
      <Row
        title="Fiction"
        fetchUrl={requests.fetchFiction}
        setProgress={setProgress}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        setProgress={setProgress}
      />
      <Row
        title="Adventure"
        fetchUrl={requests.fetchAdventure}
        setProgress={setProgress}
      />
      <Row
        title="Mystery"
        fetchUrl={requests.fetchMystery}
        setProgress={setProgress}
      />
      <Row
        title="Thriller"
        fetchUrl={requests.fetchThriller}
        setProgress={setProgress}
      />
      <Row
        title="Animation"
        fetchUrl={requests.fetchAnimation}
        setProgress={setProgress}
      />
      <Row
        title="Crime"
        fetchUrl={requests.fetchCrime}
        setProgress={setProgress}
      />
      <Row
        title="Drama"
        fetchUrl={requests.fetchDrama}
        setProgress={setProgress}
      />
      <Row
        title="Family"
        fetchUrl={requests.fetchFamily}
        setProgress={setProgress}
      />
      <Row
        title="Fantasy"
        fetchUrl={requests.fetchFantasy}
        setProgress={setProgress}
      />
      <Row
        title="History"
        fetchUrl={requests.fetchHistory}
        setProgress={setProgress}
      />
    </div>
  );
}

export default App;
