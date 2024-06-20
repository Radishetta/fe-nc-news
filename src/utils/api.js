import axios from "axios";

const ncNewsAPI = axios.create({ baseURL: "https://nutcracker-news-iaiw.onrender.com/api" });

export const getArticles = (topic, order, sortBy) => {
  return ncNewsAPI
    .get(`/articles`, { params: { topic: topic, sort_by: sortBy, order: order } })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleByID = (id) => {
  return ncNewsAPI.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleID = (id) => {
  return ncNewsAPI.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
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
  return ncNewsAPI.get("/topics").then(({ data }) => {
    return data;
  });
};

export const updateArticleVote = (id, body) => {
  return ncNewsAPI.patch(`/articles/${id}`, { inc_votes: body }).then(({ data }) => {
    return data;
  });
};

export const postComment = (id, newComment, user) => {
  return ncNewsAPI
    .post(`/articles/${id}/comments`, { username: user, body: newComment })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (id) => {
  return ncNewsAPI.delete(`/comments/${id}`).then((res) => {
    console.log(`Deleted comment with ID ${id}`);
  });
};
