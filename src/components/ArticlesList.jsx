import { useEffect, useState } from "react";
import * as api from "../../api";
import ArticlesCard from "./Articlescard";
// import { useParams } from "react-router-dom";
import ErrorPage from "./Errors";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  // const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(/*topic*/)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
        setErr(null);
      })

      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p id="loading">loading...</p>;
  if (err) return <ErrorPage />;

  return (
    <section>
      {articles.map(
        ({
          title,
          article_id,
          article_img_url,
          body,
          topic,
          comment_count,
          author,
          created_at,
          votes,
        }) => {
          return (
            <ArticlesCard
              key={article_id}
              title={title}
              article_id={article_id}
              article_img_url={article_img_url}
              body={body}
              topic={topic}
              comment_count={comment_count}
              author={author}
              created_at={created_at}
              votes={votes}
            />
          );
        }
      )}
    </section>
  );
}
