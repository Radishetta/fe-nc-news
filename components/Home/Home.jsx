import Navbar from "/components/Navbar/Navbar";
import Header from "/components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Articles from "/components/Articles/Articles";
import Users from "/components/Users/Users";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/topics" element={<Topics />} /> */}
        <Route path="/users" element={<Users />} />
      </Routes>
      <div className="home-intro">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad at inventore ex
        necessitatibus? Ullam, at? Sequi doloremque eligendi, quam eos totam labore reprehenderit
        quibusdam nam aut enim cupiditate minus temporibus sunt repudiandae eum? Blanditiis,
        doloremque eligendi, atque architecto accusamus magni amet voluptatum dolore omnis quasi
        ratione harum ullam distinctio?
      </div>
    </div>
  );
};

export default Home;
