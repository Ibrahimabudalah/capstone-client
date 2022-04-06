import React from "react";
import '../Calculator/Calculator.scss'

class Calculator extends React.Component {
  state = {
    gender: "",
    weight: "",
    age: "",
    heightFeet: "",
    heightInches: "",
    activity: "",
    bmr: "",
    error: "",
    dailyNeeded: "",
  };

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };
  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };

  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };
  calculateBMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let gender = this.state.gender;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;

    if (
      age === "" ||
      gender === "" ||
      weight === "" ||
      heightFeet === "" ||
      heightInches === ""
    ) {
      this.setState({ error: "All Field Are Required!" });
      return;
    }

    let bmrCalc = "";
    let height = heightFeet * 30.48 + heightInches * 2.54;
    if (gender == 2) {
      bmrCalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
    } else if (gender == 1) {
      bmrCalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    }

    this.setState({ bmr: bmrCalc });

    this.setState({ error: "" });

    console.log(gender);
  }
  calculatecalorie() {
    let dailyCarloriesNeeded;
    let selected = this.state.activity;
    let bmr1 = this.state.bmr;
    if (selected == 1.2) {
      dailyCarloriesNeeded = bmr1 * selected;
    } else if (selected == 1.375) {
      dailyCarloriesNeeded = bmr1 * selected;
    } else if (selected == 1.55) {
      dailyCarloriesNeeded = bmr1 * selected;
    } else if (selected == 1.725) {
      dailyCarloriesNeeded = bmr1 * selected;
    } else if (selected == 1.9) {
      dailyCarloriesNeeded = bmr1 * selected;
    }
    this.setState({ dailyNeeded: dailyCarloriesNeeded });
    console.log(this.state.dailyNeeded);
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div>{this.state.error}</div>;
    }
    let resultBMR;
    if (this.state.bmr) {
      resultBMR = (
        <div className="calc__result">{Math.round(this.state.bmr)}</div>
      );
    }

    let calculateCalories;

    if (this.state.bmr) {
      calculateCalories = (
        <div className="activity">
          <div className="activity__container">
            <label className="activity__label">Workout in a Week</label>
            <select
              className="activity__list"
              value={this.state.activity}
              onChange={this.handleactivityChange}
              name="activity"
            >
              <option value="" className="activity__item">
                Select your Activity
              </option>
              <option value="1.2" className="activity__item">
                Sedentary (Very little or no exercise, and desk job)
              </option>
              <option value="1.375" className="activity__item">Lightly Active</option>
              <option value="1.55" className="activity__item">Moderately Active</option>
              <option value="1.725" className="activity__item">Very Active</option>
              <option value="1.9" className="activity__item">Extremely Active</option>
            </select>
          </div>
          <button type="button" onClick={() => this.calculatecalorie()} className="activity__button">
            Calculate Calorie
          </button>
        </div>
      );
    }
    let neededCalories;
    if (this.state.dailyNeeded) {
      neededCalories = <div className="calc__result">{Math.round(this.state.dailyNeeded)}</div>;
    }

    return (
      <div className="calc">
        <div className="calc__form">
          <h2 className="calc__header">BMR &amp; Daily Calorie Calculator</h2>
          {error}
          <div className="calc__container">
            <label className="calc__label">Gender</label>
            <div className="calc__container">
              <input
                type="radio"
                className="calc__radio"
                checked={this.state.gender === "1"}
                onChange={this.handlegenderChange}
                name="gender"
                value="1"
              />
              <p className="calc__label">Male</p>
              {/* </div> */}
              {/* <label> */}
              <input
                type="radio"
                className="calc__radio"
                checked={this.state.gender === "2"}
                onChange={this.handlegenderChange}
                name="gender"
                value="2"
              />
              <p className="calc__label">Female</p>
            </div>
          </div>
          <div className="calc__weight">
            <label className="calc__label">Weight in Pounds</label>
            <input
              type="text"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="calc__input"
              min="0"
              max="999"
              placeholder="Please enter your weight in lbs"
            />
          </div>
          <div className="calc__height">
            <label className="calc__label">Height in feet and inches</label>
            <input
              type="text"
              value={this.state.heightFeet}
              onChange={this.handleheightFeetChange}
              name="heightinFeet"
              className="calc__input"
              min="0"
              max="8"
              placeholder="Height in Feet"
            />
            <input
              type="text"
              value={this.state.heightInches}
              onChange={this.handleheightInchesChange}
              name="heightInches"
              className="calc__input"
              min="0"
              max="100"
              placeholder="Height in Inches"
            />
          </div>
          <div className="calc__age">
            <label className="calc__label">Age in years</label>
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleAgeChange}
              name="age"
              className="calc__input"
              min="0"
              max="120"
              placeholder="Please enter your age"
            />
          </div>
          <button
            type="button"
            onClick={() => this.calculateBMR()}
            className="calc__button"
          >
            Calculate BMR
          </button>
          <div className="calc__BMRres">
            <p className="calc__BMRres-text">
              {"Your BMR is "}
              {resultBMR} 
            </p>
          </div>
          <div className="calc__list">{calculateCalories}</div>
          <div className="calc__result">
            <p>
              {neededCalories} {"Calories needed per day"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
