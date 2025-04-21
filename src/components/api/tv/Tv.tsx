import axios from "axios";

const API_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";

export const fetchTopRated = async (type: "movie" | "tv") => {
  const url = `https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_KEY}&language=ru-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
};
