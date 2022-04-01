import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          {/* <Route to="/calculator" component={CalorieCalculator}/> */}
          {/* <Route to="/mealPlanner" component={MealPlanner}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Home;
