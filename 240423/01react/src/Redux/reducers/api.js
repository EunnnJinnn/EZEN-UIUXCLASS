import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: { "content-Type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("request error", error);
    return Promise.reject(error);
  }
);
