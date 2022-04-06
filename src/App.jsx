import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import Home from "../src/Pages/Home/Home";
import MealPlanner from "../src/Pages/MealPlanner/MealPlanner";
import Calculator from "../src/Pages/Calculator/Calculator";
import Login from "../src/Pages/Login/Login";
import Register from "../src/Pages/Register/Register";
import { userContext } from "../src/context/userContext";

class App extends React.Component {
  static contextType = userContext;

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            {this.context.user ? (
              <div>
                <Route path="/calculator" component={Calculator} />
                <Route path="/mealPlanner" component={MealPlanner} />
              </div>
            ) : (
              <div>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </div>
            )}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
