import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";
import "../../styles/Articles.css";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        throw err;
      });
  }, []);

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
