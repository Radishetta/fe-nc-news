import { useNavigate, Link } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import { useEffect, useState, useContext } from "react";
import { getTopics } from "../../utils/api";
import ErrorPage from "../Error/ErrorPage";
import "../../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const { users, setLoggedUser } = useContext(UsersContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
      })
      .catch((err) => {
        setErr("We couldn't laod the topics");
      });
  }, []);

  const handleHomeButton = () => {
    navigate("/articles");
  };

  const handleUserOptions = (e) => {
    if (e.target.value === "Log in...") {
      setLoggedUser("");
    } else {
      setLoggedUser(e.target.value);
    }
  };

  const handleTopicButton = (e) => {
    navigate(`/articles/${e.target.innerHTML}`);
  };

  err ? <ErrorPage err={err} /> : null;
  return (
    <nav>
      <Link to="/articles">
        <button onClick={handleHomeButton}>Home</button>
      </Link>
      {topics.map((topic) => {
        return (
          <button onClick={handleTopicButton} key={topic.slug}>
            {topic.slug}
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
