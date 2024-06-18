import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { deleteComment } from "../../utils/api";
import "../../styles/CommentCard.css";

const CommentCard = ({ article, comment }) => {
  const { body, author, votes } = comment;
  const { article_id } = article;
  const { loggedUser } = useContext(UsersContext);

  const handleDeleteCommentButton = () => {
    deleteComment(article_id).then(() => {});
  };

  return (
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
          <button onClick={handleDeleteCommentButton}>DELETE COMMENT</button>
        ) : (
          <p>
            <strong>Log in to delete a comment</strong>
          </p>
        )}
      </div>
    </section>
  );
};

export default CommentCard;
