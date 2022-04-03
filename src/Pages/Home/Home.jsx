import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div  className="home__container">
        <p className="home__header">Welcome to YourFitnessPal</p>
        <p className="home__text">Please login or sign up to use our services</p>
        <div className="home__container-two">
          <button className="home__button">Login</button>
          <button className="home__button">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
