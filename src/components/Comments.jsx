import { useEffect, useState } from "react";
import * as api from "../../api";
import { useParams } from "react-router-dom";
import ErrorPage from "./Errors";
import { formatDate } from "../../Formateddate";

export default function Comments() {
  const { article_id } = useParams();
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getCommentsByArticleId(article_id)
      .then((commentsData) => {
        //  console.log(commentsData);
        setComment(commentsData);
        // console.log(comment);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  }, [article_id]);
  if (comment.length === 0) {
    return (
      <>
        <h2 className="commentsHeader">Comments for this article</h2>
        <p>No comments available...</p>
      </>
    );
  }
  if (isLoading === true) return <p>Loading...</p>;
  if (err) return <ErrorPage />;

  return (
    <section>
      <h2 className="commentsHeader">Comments for this article</h2>
      {comment.map(({ comment_id, body, author, votes, created_at }) => {
        const formattedDate = formatDate(created_at);
        return (
          <div className="comment_Container">
            <article>
              <article key={comment_id}>
                <p className="commentText">
                  Posted by: {author} on {formattedDate}
                </p>
                <p className="commentText">{body}</p>
                <p className="commentText">{votes}</p>
              </article>
            </article>
          </div>
        );
      })}
    </section>
  );
}
