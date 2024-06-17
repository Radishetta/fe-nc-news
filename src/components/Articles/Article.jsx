import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, getCommentsByArticleID } from "../../utils/api";
import "../../styles/Article.css";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { author, title, topic, created_at, votes, article_img_url, comment_count } = article;

  useEffect(() => {
    setIsLoading(true);
    getArticleByID(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("No article with that ID");
        throw err;
      });

    getCommentsByArticleID(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("No comments with that article ID");
        throw err;
      });
  }, []);
  console.log(comments);

  isLoading ? <h1>LOADING...</h1> : null;

  return (
    <div className="article-card-wrapper">
      <img className="article-card-img" src={article_img_url} alt={`Image of ${title}`} />
      <div className="article-card-body">
        <p>
          <strong>{title}</strong>
        </p>
        <p id="author">By {author}</p>
        <div className="bottom-wrapper">
          <p>Topic: {topic}</p>
          <div className="votes-wrapper">
            <p className="votes">Votes: {votes}</p>
            <button className="vote-btn">VOTE UP </button>
            <button className="vote-btn">VOTE DOWN</button>
          </div>
          {/* {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Article;
