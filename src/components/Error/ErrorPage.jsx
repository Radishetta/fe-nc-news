import { Link, useNavigate } from "react-router-dom";
const ErrorAPI = ({ err }) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Something wen't wrong</h1>
      <p>{err}</p>
      <Link to={"/articles"}>
        <button onClick={handleBackHome}>BACK TO HOME</button>
      </Link>
    </>
  );
};

export default ErrorAPI;
