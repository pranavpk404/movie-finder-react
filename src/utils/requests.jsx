const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

const genre = `/discover/movie?api_key=${API_KEY}&with_genres=`;
const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${genre}28`,
  fetchComedyMovies: `${genre}35`,
  fetchHorrorMovies: `${genre}27`,
  fetchRomanceMovies: `${genre}10749`,
  fetchAdventure: `${genre}12`,
  fetchMystery: `${genre}9648`,
  fetchThriller: `${genre}53`,
  fetchAnimation: `${genre}16`,
  fetchCrime: `${genre}80`,
  fetchDrama: `${genre}18`,
  fetchFamily: `${genre}10751`,
  fetchFantasy: `${genre}14`,
  fetchHistory: `${genre}36`,
  fetchMusic: `${genre}10402`,
  fetchFiction: `${genre}878`,
  fetchWar: `${genre}10752`,
  search: `/search/movie?api_key=${API_KEY}&query="`,
};

export default request;
