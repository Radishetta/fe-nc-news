import axios from "axios";

const ncNewsAPI = axios.create({ baseURL: "https://nutcracker-news-iaiw.onrender.com/api" });

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then((res) => {
    return res.data;
  });
};
