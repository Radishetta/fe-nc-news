import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../utils/api";
import "../../styles/Articles.css";
import { useParams } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");
  const [err, setErr] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, order, sortBy)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data.msg === "Topic Not Found") {
          setErr("We couldn't find the topic you are looking for");
        } else setErr("We couldn't load the articles");
      });
  }, [topic, sortBy, order]);

  const handleOrderArticles = (e) => {
    setOrder(e.target.value);
  };

  const handleSortArticles = (e) => {
    setSortBy(e.target.value);
  };

  isLoading ? <h1>LOADING...</h1> : null;
  if (err && err !== "Something went wrong, please try again.") {
    return <ErrorPage err={err} />;
  }
  return (
    <>
      <label htmlFor="sort-articles">Sort by</label>
      <select
        onChange={handleSortArticles}
        defaultValue="created_at"
        name="sort"
        id="sort-articles"
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order-articles">Order</label>
      <select onChange={handleOrderArticles} defaultValue="desc" name="order" id="order-articles">
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
