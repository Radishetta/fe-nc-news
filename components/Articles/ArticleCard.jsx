import "../../styles/ArticleCard.css";
const ArticleCard = ({ article }) => {
  const { author, title, topic, created_at, votes, article_img_url, comment_count } = article;
  return (
    <div className="article-card-wrapper">
      <img
        className="article-card-img"
        src={article_img_url}
        alt={`Image of ${title}`}
        height={200}
        width={300}
      />
      <div className="article-card-body">
        <p>
          <strong>{title}</strong>
        </p>
        <p>By {author}</p>
        <p>Topic: {topic}</p>
        <p>Comments: {comment_count}</p>
        <p>Votes: {votes}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
