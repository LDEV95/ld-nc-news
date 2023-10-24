import { Link } from "react-router-dom";
import { useState } from "react";
import * as api from "../../api";

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
  const [updatedVote, updateVote] = useState(0);
  const [err, setErr] = useState(null);

  // add in error functionality later on
  return (
    <article className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <h2 id="articleHeader">{title}</h2>
      </Link>

      <p className="article_Body">{body}</p>
      <p className="article_Topic">
        Topic: {topic[0].toUpperCase() + topic.slice(1, topic.length)}
      </p>
      <p className="article_Comments">Comments: {comment_count}</p>
      <p className="article_Author">Created by: {author}</p>
      <p className="article_CreatedAt">Created on:{created_at}</p>
      <p className="votes">Number of votes: {votes}</p>

      <section className="button_Container"></section>
    </article>
  );
}
