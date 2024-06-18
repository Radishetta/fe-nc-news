import "../../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  const { body, author, votes } = comment;
  return (
    <div className="comment-card-wrapper">
      <div className="comment-card-body">
        <p>
          <strong>{author}</strong>
        </p>
        <p> {body}</p>
        <div className="bottom-wrapper">
          <p>Votes: {votes}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;