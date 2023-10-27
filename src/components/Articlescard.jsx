import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../Formateddate";
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
  console.log(title, article_id, "NEW LOG TITLE AND ARTICLE ID");
  const formattedDate = formatDate(created_at);
  const [err, setErr] = useState(null);
  const [newVote, updateVote] = useState(0);

  const clickHandler = (article_id, voteQuantity) => {
    updateVote((currentVote) => {
      const newVoteValue = currentVote + voteQuantity;
      return Math.max(Math.min(newVoteValue, 1), -1);
    });

    api
      .changeVote(article_id, voteQuantity)
      .then(() => {
        console.log(article_id, voteQuantity);
      })
      .catch((err) => {
        console.log(err);
        setErr("Something's not right");
        updateVote(0);
      });
  };

  return (
    <article className="articleCard">
      <a href={`/articles/${article_id}`}>
        <h3 id="articleHeader">{title}</h3>
        {article_img_url && (
          <img src={article_img_url} alt={title} className="articleImage" />
        )}
      </a>

      <p className="article_Topic">
        Topic: {topic[0].toUpperCase() + topic.slice(1, topic.length)}
      </p>

      <p className="article_Comments"> Comments: {comment_count}</p>
      <p className="article_Author"> Written by: {author}</p>
      <p className="article_CreatedAt"> Created on: {formattedDate}</p>
      <p className="votes"> Number of votes: {votes + newVote}</p>

      <section className="button_Container">
        <button
          className="voteUpBtn"
          disabled={newVote >= 1}
          onClick={() => clickHandler(article_id, 1)}>
          +
        </button>
        <button
          className="voteDownBtn"
          disabled={newVote <= -1}
          onClick={() => clickHandler(article_id, -1)}>
          -
        </button>
        {err ? <p>{err}</p> : null}
      </section>
    </article>
  );
}
