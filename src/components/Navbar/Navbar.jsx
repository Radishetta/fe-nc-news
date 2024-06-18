import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/home");
  };
  const handleArticlesButton = () => {
    navigate("/articles");
  };

  const handleTopicsButton = () => {
    navigate("/topics");
  };

  const handleUsersButton = () => {
    navigate("/users");
  };

  const handleTopicOptions = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <Link to="/home">
        <button onClick={handleHomeButton}>Home</button>
      </Link>
      <Link to="/articles">
        <button onClick={handleArticlesButton}>Articles</button>
      </Link>
      <Link to="/topics">
        <select onClick={handleTopicOptions} name="topics" id="topics">
          <option value="default">Topics</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </Link>
      <Link to="/users">
        <button onClick={handleUsersButton}>Users</button>
      </Link>
    </nav>
  );
};

export default Navbar;
