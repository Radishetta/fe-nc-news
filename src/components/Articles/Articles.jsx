import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Unable to retrieve the list of articles");
        throw err;
      });
  }, []);

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
