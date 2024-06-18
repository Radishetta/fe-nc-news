import axios from "axios";

const ncNewsAPI = axios.create({ baseURL: "https://nutcracker-news-iaiw.onrender.com/api" });

export const getArticles = () => {
  return ncNewsAPI
    .get("/articles")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const getArticleByID = (id) => {
  return ncNewsAPI
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const getCommentsByArticleID = (id) => {
  return ncNewsAPI
    .get(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const updateArticleVote = (id, body) => {
  return ncNewsAPI
    .patch(`/articles/${id}`, { inc_votes: body })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const postComment = (id, newComment, user) => {
  return ncNewsAPI
    .post(`/articles/${id}/comments`, { username: user, body: newComment })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const deleteComment = (id) => {
  return ncNewsAPI
    .delete(`/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const getUsers = () => {
  return ncNewsAPI
    .get("/users")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};

export const getTopics = () => {
  return ncNewsAPI
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject(err.data);
    });
};
