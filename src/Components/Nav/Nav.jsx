import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import "./Nav.scss";

export default class Nav extends Component {
  static contextType = userContext;

  render() {
    return (
      <div className="nav">
        <div className="nav__left">
          <Link to="/">
            <h1 className="nav__title">YourFitnessPal</h1>
          </Link>
        </div>
        <div className="nav__right">
          <ul className="nav__list">
            <Link to="/">
              <li className="nav__item">Home</li>
            </Link>
            {this.context.user ? (
              <>
                <Link to="/calculator">
                  <li className="nav__item">Calorie Calculator</li>
                </Link>
                <Link to="/mealPlanner">
                  <li className="nav__item">Meal Planner</li>
                </Link>
                <Link to="/" onClick={() => this.context.logout()}>
                  <li className="nav__item">Logout</li>
                </Link>
                {/* <li className="nav__name">
                  Hello, {this.context.user.fullname}
                </li> */}
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="nav__item">Login</li>
                </Link>
                <Link to="/register">
                  <li className="nav__item">Signup</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
