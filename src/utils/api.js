import axios from "axios";

const ncNewsAPI = axios.create({ baseURL: "https://nutcracker-news-iaiw.onrender.com/api" });

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then((res) => {
    return res.data;
  });
};

export const getArticleByID = (id) => {
  return ncNewsAPI.get(`/articles/${id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsByArticleID = (id) => {
  return ncNewsAPI.get(`/articles/${id}/comments`).then((res) => {
    return res.data;
  });
};
