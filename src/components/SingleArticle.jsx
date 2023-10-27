import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesCard from "./Articlescard";

import { getArticlesById } from "../../api";
import ErrorPage from "./Errors";
import Comments from "./Comments";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticlesById(article_id)
      .then((articleData) => {
        setArticle(articleData);

        setIsLoading(false);
      })
      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading === true) return <p>Loading...</p>;
  if (err) return <ErrorPage />;
  return (
    <section>
      <ArticlesCard
        key={article.article_id}
        article_id={article.article_id}
        title={article.title}
        article_img_url={article.article_img_url}
        body={article.body}
        author={article.author}
        topic={article.topic}
        comment_count={article.comment_count}
        created_at={article.created_at}
        votes={article.votes}
      />
      <Comments article_id={article_id} comment_count={article.comment_count} />
    </section>
  );
}
