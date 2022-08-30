import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Blurhomebg from "../components/Blurhomebg";
import Special from "../components/Special";

const Home = () => {
  return (
    <div className="home">
      <div className="landing">
        <Navbar />
        <div className="home__header">
          <Blurhomebg />
          <Header />
        </div>
      </div>

      <Special />
    </div>
  );
};

export default Home;
