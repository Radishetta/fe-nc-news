import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import Users from "./components/Users/Users";
import ErrorRoute from "./components/Error/ErrorRoute";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Users />
      <Routes>
        <Route path="*" element={<ErrorRoute />} />
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </main>
  );
}

export default App;
