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

  return (
    <div>
      <Link to="/home">
        <button onClick={handleHomeButton}>Home</button>
      </Link>
      <Link to="/articles">
        <button onClick={handleArticlesButton}>Articles</button>
      </Link>
      <Link to="/topics">
        <button onClick={handleTopicsButton}>Topics</button>
      </Link>
      <Link to="/users">
        <button onClick={handleUsersButton}>Users</button>
      </Link>
    </div>
  );
};

export default Navbar;
