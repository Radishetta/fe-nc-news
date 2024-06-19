import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";
import "../../styles/Articles.css";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("desc");
  const [sortedBy, setSortedBy] = useState("created_at");
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, order, sortedBy)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw err;
      });
  }, [topic, order, sortedBy]);

  const handleOrderArticles = (e) => {
    setOrder(e.target.value);
  };

  const handleSortArticles = (e) => {
    setSortedBy(e.target.value);
  };

  isLoading ? <h1>LOADING...</h1> : null;
  return (
    <>
      <label htmlFor="sort-articles">Sort by</label>
      <select onClick={handleSortArticles} defaultValue="created_at" name="sort" id="sort-articles">
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order-articles">Order</label>
      <select onClick={handleOrderArticles} defaultValue="desc" name="order" id="order-articles">
        <option value="asc">Ascending</option>
        <option value="desc">Descening</option>
      </select>
      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
