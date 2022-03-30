import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <h1>YourFitnessPal</h1>
      </div>
      <div className="nav__right">
        <ul className="nav__list">
          <Link to="/">
            <li className="nav__item">Home</li>
          </Link>
          <Link to="/calculator">
            <li className="nav__item">Calorie Calculator</li>
          </Link>
          <Link to="/mealPlanner">
            <li className="nav__item">Meal Planner</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
