import axios from "axios";

const ncNewsAPI = axios.create({ baseURL: "https://nutcracker-news-iaiw.onrender.com/api" });

export const getArticles = () => {
  return ncNewsAPI
    .get("/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err.res.data);
    });
};

export const getArticleByID = (id) => {
  return ncNewsAPI
    .get(`/articles/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err.res.data);
    });
};

export const getCommentsByArticleID = (id) => {
  return ncNewsAPI
    .get(`/articles/${id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err.res.data);
    });
};

export const updateArticleVote = (id, body) => {
  return ncNewsAPI
    .patch(`/articles/${id}`, { inc_votes: body })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err.res.data);
    });
};
