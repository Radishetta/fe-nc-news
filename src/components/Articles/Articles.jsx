import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";
import "../../styles/Articles.css";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw err;
      });
  }, [topic]);

  isLoading ? <h1>LOADING...</h1> : null;
  return (
    <ul className="articles">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default Articles;
