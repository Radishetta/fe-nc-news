import "../../styles/Header.css";
import TodayDate from "../TodayDate/TodayDate";
const Header = () => {
  return (
    <>
      <header>
        <h1>NC NEWS</h1>
        <span>
          <TodayDate />
        </span>
      </header>
    </>
  );
};

export default Header;
