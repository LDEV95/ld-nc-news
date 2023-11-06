import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ldev-news-api-project.onrender.com/api",
});

export const getArticles = (topic, sort, order) => {
  return newsApi
    .get("/articles", { params: { topic, sort_by: sort, order: order } })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data[0];
  });
};

export const getArticlesByTopic = (topic, sort, order) => {
  return newsApi
    .get(`/articles?topic=${topic}`, {
      params: { sort_by: sort, order: order },
    })
    .then((response) => {
      console.log(response.data, "HEHEHEHHEH");
      return response.data.articles;
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
    return data;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics/").then(({ data }) => {
    return data;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`).then(() => {});
};
