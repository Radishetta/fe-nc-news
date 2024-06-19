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

  const handleUserOptions = (e) => {
    if (e.target.value === "Log in...") {
      setLoggedUser("");
    } else {
      setLoggedUser(e.target.value);
    }
  };

  return (
    <nav>
      <Link to="/articles">
        <button onClick={handleHomeButton}>Home</button>
      </Link>
      {topics.map((topic) => {
        return (
          <button key={topic.slug}>
            <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
          </button>
        );
      })}
      <select onClick={handleUserOptions} name="users">
        <option value="">Log in...</option>
        {users.map((user) => {
          return (
            <option value={user.username} key={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default Navbar;
