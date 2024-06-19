import "../../styles/ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { author, title, topic, created_at, votes, article_img_url, comment_count, article_id } =
    article;

  return (
    <div className="articles">
      <Link to={`/article/${article_id}`}>
        <section className="article-card-container">
          <img className="article-card-img" src={article_img_url} alt={`Image of ${title}`} />
          <div className="article-card-body">
            <p>
              <strong>{title}</strong>
            </p>
            <p id="author">By {author}</p>
            <div className="bottom-wrapper">
              <p>Topic: {topic}</p>
              <p>Comments: {comment_count}</p>
              <p>Votes: {votes}</p>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default ArticleCard;
