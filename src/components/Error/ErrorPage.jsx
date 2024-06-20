import { useNavigate } from "react-router-dom";

const ErrorAPI = ({ err }) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>Something went wrong</h1>
      <p>{err}</p>
      <button onClick={handleBackHome}>GO BACK</button>
    </>
  );
};

export default ErrorAPI;
