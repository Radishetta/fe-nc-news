import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";

const Articles = () => {
  const [isLoading, setisLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setisLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setisLoading(false);
    });
  }, [articles]);
  isLoading ? <h1>LOADING...</h1> : null;
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default Articles;
