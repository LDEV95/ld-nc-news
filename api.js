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
