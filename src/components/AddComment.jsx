import React from "react";
import * as api from "../../api";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function AddComment({ article_id, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeFunc = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newComment = {
      username: "tickle122",
      body: comment,
    };

    api
      .postComment(article_id, newComment)
      .then((returnedComment) => {
        setComments((thisComment) => {
          return [returnedComment, ...thisComment];
        });
        setComment("");
      })
      .catch(() => {
        setErr(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!loggedInUser.username) {
    return (
      <div>
        <p>Please sign in to post a comment</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label className="addCommentsHeader">
          <div>Add your comment</div>
          <textarea
            className="commentTextBox"
            value={comment}
            onChange={(e) => {
              changeFunc(e);
            }}
          />
        </label>
        <div>
          <button className="submitComment">
            <div>Add comment</div>
          </button>
        </div>
      </form>
      {isLoading ? <p>Loading...</p> : null}
      {err ? <h4>Your comment was not posted</h4> : null}
    </div>
  );
}
