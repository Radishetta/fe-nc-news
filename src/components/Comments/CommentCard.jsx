import { useContext, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { deleteComment } from "../../utils/api";
import "../../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  const { comment_id, body, author, votes } = comment;
  const { loggedUser } = useContext(UsersContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [err, setErr] = useState(null);

  const handleDeleteCommentButton = () => {
    setIsDeleted(true);
    deleteComment(comment_id).catch((err) => {
      setIsDeleted(false);
      setErr("Something went wrong, please try again.");
    });
  };

  return isDeleted ? (
    <p>- MESSAGE DELETED -</p>
  ) : (
    <section className="comment-card-container">
      <div className="comment-card-body">
        <p>
          <strong>{author}</strong>
        </p>
        <p> {body}</p>
        <div className="bottom-wrapper">
          <p>Votes: {votes}</p>
        </div>
        {loggedUser === author ? (
          <button disabled={err} onClick={handleDeleteCommentButton}>
            DELETE COMMENT
          </button>
        ) : (
          <p>
            <strong>Log in to delete a comment</strong>
          </p>
        )}
      </div>
      {err ? <p>{err}</p> : null}
    </section>
  );
};

export default CommentCard;
