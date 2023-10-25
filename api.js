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
    console.log(data);
    return data;
  });
};
