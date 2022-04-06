import React, { Component } from "react";
import MealList from "../../Components/MealList/MealList";
import Loading from "../../Components/Loading/Loading";
import axios from "../../axiosCalls/axiosCalls";
import "./MealPlanner.scss";

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
    const { data } = await axios.post(`/meal/getMealData`, {
      calories: this.state.calories,
    });
    this.setState({ loading: false, mealData: data });
  };

  getSavedUserData = async () => {
    const { data } = await axios.get(`/meal/getSavedMeals`);
    this.setState({ mealData: data });
  };

  componentDidMount() {
    this.getSavedUserData();
  }

  render() {
    return (
      <div className="plan">
        {this.state.loading && <Loading />}
        <div className="plan__container">
          <input
            type="text"
            placeholder="Calories"
            className="plan__input"
            value={this.state.calories}
            onChange={({ target }) => this.setState({ calories: target.value })}
          />
          <button onClick={() => this.getMealData()} className="plan__button">
            Get Daily Meal Plan
          </button>
        </div>
        <section className="plan__list">
          {this.state.mealData.meals ? (
            <MealList mealData={this.state.mealData} />
          ) : (
            <p className="plan__text">You have no meal list</p>
          )}
        </section>
      </div>
    );
  }
}
