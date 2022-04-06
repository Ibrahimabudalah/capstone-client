import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import Home from "../src/pages/Home/Home";
import MealPlanner from "../src/pages/MealPlanner/MealPlanner";
import Calculator from "../src/pages/Calculator/Calculator";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
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
