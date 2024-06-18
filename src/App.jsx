import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import Users from "./components/Users/Users";
function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Articles />} /> */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/topics" element={<Topics />} /> */}
      </Routes>
    </main>
  );
}

export default App;
