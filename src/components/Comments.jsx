import { useEffect, useState, useContext } from "react";
import * as api from "../../api";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import ErrorPage from "./Errors";
import { formatDate } from "../../Formateddate";
import { UserContext } from "../Contexts/UserContext";

export default function Comments() {
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);

  const [comment, setComments] = useState([
    { comment_id: null, body: "", author: "", votes: 0, created_at: "" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments(commentsData);

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  }, [article_id]);

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.target.value;

    // Update local state to remove the comment immediately
    setComments((prevComments) => {
      const updatedComments = prevComments.filter(
        (singleComment) => singleComment.comment_id !== parseInt(id)
      );
      return updatedComments;
    });

    // Make the delete request to the server
    api
      .deleteComment(id)
      .then((data) => {
        console.log(data, "DATA");
      })
      .catch((err) => {
        setErr(err);
      });
  };

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
      <AddComment setComments={setComments} article_id={article_id} />

      {comment.map(({ comment_id, body, author, votes, created_at }) => {
        const formattedDate = formatDate(created_at);

        return (
          <div className="comment_Container">
            <article>
              <p className="commentText">
                Posted by: {author} on {formattedDate}
              </p>
              <p className="commentText">{body}</p>
              <p className="commentText">{votes}</p>
            </article>

            {loggedInUser.username === author ? (
              <button value={comment_id} onClick={handleDelete}>
                Delete comment
              </button>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
