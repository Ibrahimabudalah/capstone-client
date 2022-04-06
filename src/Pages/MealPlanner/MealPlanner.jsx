import React, { Component } from "react";
import MealList from "../../components/MealList/MealList";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import "./MealPlanner.scss";

/*
 * CHANGE USER ID DEPENDING ON YOUR LOGIN SYSTEM
 */
const userID = 1234;

const serverURI = "http://localhost:8080";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: 2000,
      mealData: {},
      loading: false,
    };
  }

  getMealData = async () => {
    this.setState({ loading: true });
    const { data } = await axios.post(`${serverURI}/getMealData`, {
      calories: this.state.calories,
      userID,
    });
    this.setState({ loading: false, mealData: data });
  };

  getSavedUserData = async () => {
    const { data } = await axios.get(`${serverURI}/getSavedMeal/${userID}`);
    this.setState({ mealData: data });
  };

  componentDidMount() {
    this.getSavedUserData();
  }

  render() {
    return (
      <div className="plan">
        {this.state.loading && <Loading />}
        <div>
          <input
            type="text"
            placeholder="Calories"
            value={this.state.calories}
            onChange={({ target }) => this.setState({ calories: target.value })}
          />
          <button onClick={() => this.getMealData()}>
            Get Daily Meal Plan
          </button>
        </div>
        <section className="plan__container">
          {this.state.mealData.meals ? (
            <MealList mealData={this.state.mealData} />
          ) : (
            <p>You have no meal list</p>
          )}
        </section>
      </div>
    );
  }
}
