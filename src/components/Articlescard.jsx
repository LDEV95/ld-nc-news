import { Link } from "react-router-dom";
import { useState } from "react";
// import * as api from "../../api";

export default function ArticlesCard({
  title,
  article_id,
  article_img_url,
  body,
  topic,
  comment_count,
  author,
  created_at,
  votes,
}) {
  const [err, setErr] = useState(null);

  // add in error functionality later on
  const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <h3 id="articleHeader">{title}</h3>
      </Link>
      {article_img_url && (
        <img src={article_img_url} alt={title} className="articleImage" />
      )}

      <p className="article_Body">{body}</p>
      <p className="article_Topic">
        Topic: {topic[0].toUpperCase() + topic.slice(1, topic.length)}
      </p>
      <p className="article_Comments"> Comments: {comment_count}</p>
      <p className="article_Author"> Created by: {author}</p>
      <p className="article_CreatedAt"> Created on:{formattedDate}</p>
      <p className="votes">Number of votes: {votes}</p>

      <section className="button_Container">
        <h4></h4>
        <button>+</button>
        <button>-</button>
        {err ? <p>{err}</p> : null}
      </section>
    </article>
  );
}
