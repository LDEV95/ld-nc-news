import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ldev-news-api-project.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return newsApi
    .get("/articles", { params: { topic, sort_by, order } })
    .then(({ data }) => {
      return data;
    });
};

export const getArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data[0];
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    //   console.log(data);
    return data;
  });
};

export const changeVote = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((response) => {
      console.log(response);
      return response.data.article;
    });
};

export const postComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics/").then(({ data }) => {
    console.log(data);
    return data;
  });
};
