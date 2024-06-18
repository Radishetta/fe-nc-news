import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleByID,
  getCommentsByArticleID,
  updateArticleVote,
  postComment,
} from "../../utils/api";
import CommentCard from "../Comments/CommentCard";
import "../../styles/Article.css";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { author, title, topic, created_at, votes, article_img_url, comment_count } = article;
  const [voteChange, setVoteChange] = useState(0);
  const [err, setErr] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        throw err;
      });

    getCommentsByArticleID(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        throw err;
      });
  }, []);

  const handleVoteUpButton = () => {
    setVoteChange(voteChange + 1);
    updateArticleVote(article_id, 1).catch((err) => {
      setVoteChange(voteChange - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  const handleVoteDownButton = () => {
    setVoteChange(voteChange - 1);
    updateArticleVote(article_id, -1).catch((err) => {
      setVoteChange(voteChange + 1);
      setErr("Something went wrong, please try again.");
    });
  };
  const handleTextAreaChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setIsLoadingComment(true);
    postComment(article_id, newComment).then(({ newComment }) => {
      setComments((currentComments) => {
        return [newComment, ...currentComments];
      });
      setIsLoadingComment(false);
      setNewComment("");
    });
  };

  const newVotes = voteChange + votes;

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="article">
      <div className="article-card-container">
        <img className="article-card-img" src={article_img_url} alt={`Image of ${title}`} />
        <div className="article-card-body">
          <p>
            <strong>{title}</strong>
          </p>
          <p id="author">By {author}</p>
          <div className="bottom-wrapper">
            <p>Topic: {topic}</p>
            <div className="votes-wrapper">
              <p className="votes">Votes: {newVotes}</p>
              <button onClick={handleVoteUpButton} className="vote-btn">
                VOTE UP
              </button>
              <button onClick={handleVoteDownButton} className="vote-btn">
                VOTE DOWN
              </button>
            </div>
            {err ? <p>{err}</p> : null}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmitComment} className="comment-form">
        {isLoadingComment ? <p>Posting your comment....</p> : null}
        <textarea
          onChange={handleTextAreaChange}
          name="newComment"
          value={newComment}
          id="newComment"
          placeholder="Add your comment..."
        ></textarea>
        <button disabled={newComment.length === 0 || newComment.length < 10}>
          ADD NEW COMMENT
        </button>
      </form>
      <ul>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};

export default Article;
