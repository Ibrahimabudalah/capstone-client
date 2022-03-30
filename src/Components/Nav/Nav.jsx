import React from 'react'

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <h1>YourFitnessPal</h1>
      </div>
      <div className="nav__right">
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">Calorie Calculator</li>
          <li className="nav__item">Meal Planner</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav