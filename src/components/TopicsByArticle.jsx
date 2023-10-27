import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../../api";
import ArticlesCard from "./Articlescard";
const TopicsByArticle = ({ selectedTopic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (selectedTopic) {
      getArticlesByTopic(selectedTopic).then((data) => {
        setArticles(data);
      });
    }
  }, [selectedTopic]);

  return (
    <div>
      <div className="bigContainer">
        {articles.map((article) => (
          <div key={article.article_id} className="articles_container">
            <ArticlesCard
              key={article.article_id}
              title={article.title}
              article_id={article.article_id}
              article_img_url={article.article_img_url}
              body={article.body}
              topic={article.topic}
              comment_count={article.comment_count}
              author={article.author}
              created_at={article.created_at}
              votes={article.votes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsByArticle;
