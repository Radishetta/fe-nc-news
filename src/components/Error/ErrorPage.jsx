const ErrorAPI = ({ err }) => {
  const handleBackHome = () => {
    window.location.reload();
  };
  return (
    <>
      <h1>Something went wrong</h1>
      <p>{err}</p>
      <button onClick={handleBackHome}>BACK TO HOME</button>
    </>
  );
};

export default ErrorAPI;
