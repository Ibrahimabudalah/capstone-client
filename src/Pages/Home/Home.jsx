import React, { Component } from "react";
import { userContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import "./Home.scss";

export default class Home extends Component {
  static contextType = userContext;

  render() {
    return (
      <div className="home">
        {
          // this is the condition to check if the user is logged in
          !this.context.user ? (
            <div className="home__container">
              <p className="home__header">Welcome to YourFitnessPal</p>
              <p className="home__text">
                Please login or sign up to use our services
              </p>
              <div className="home__container-two">
                <Link to="/login">
                  <button className="home__button">Login</button>
                </Link>
                <Link to="/register">
                  <button className="home__button">Signup</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p></p>
            </div>
          )
        }
      </div>
    );
  }
}
