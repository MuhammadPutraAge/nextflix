import axios from "axios";

const API = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

const POSTER_API = axios.create({
  baseURL: `https://img.omdbapi.com`,
});

export { API, POSTER_API };