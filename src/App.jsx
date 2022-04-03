import React from "react";
import "./App.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "../src/pages/Home/Home";
import Calculator from "../src/pages/Calculator/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" component={Calculator} />
            {/* <Route path="/mealPlanner" component={MealPlanner}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
