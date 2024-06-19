import { useNavigate, Link } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import { useEffect, useState, useContext } from "react";
import { getTopics } from "../../utils/api";
import "../../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const { users, setLoggedUser } = useContext(UsersContext);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  const handleHomeButton = () => {
    navigate("/home");
  };
  const handleArticlesButton = () => {
    navigate("/articles");
  };

  const handleTopicOptions = (e) => {
    e.preventDefault();
  };

  const handleUserOptions = (e) => {
    if (e.target.value === "Log in...") {
      setLoggedUser("");
    } else {
      setLoggedUser(e.target.value);
    }
  };

  return (
    <nav>
      <Link to="/home">
        <button onClick={handleHomeButton}>Home</button>
      </Link>
      <Link to="/articles">
        <button onClick={handleArticlesButton}>Articles</button>
      </Link>
      <select onClick={handleTopicOptions} name="topics">
        <option value="default">Topics</option>
        {topics.map((topic) => {
          return (
            <option value={topic.slug} key={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      <select onClick={handleUserOptions} name="users">
        <option>Log in...</option>
        {users.map((user) => {
          return (
            <option value={user.username} key={user.user_id}>
              {user.username}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default Navbar;
