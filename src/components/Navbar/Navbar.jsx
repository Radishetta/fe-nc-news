import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import ErrorPage from "../Error/ErrorPage";
import "../../styles/Navbar.css";
import ButtonAppBar from "./ButtonAppBar";

const Navbar = () => {
  const [topics, setTopics] = useState([]);
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

  err ? <ErrorPage err={err} /> : null;
  return <ButtonAppBar topics={topics} />;
};

export default Navbar;
