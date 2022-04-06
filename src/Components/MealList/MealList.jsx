import React from "react";
import Meal from "../Meal/Meal";
import '../MealList/MealList.scss'

export default function MealList({ mealData: { nutrients, meals } }) {
  return (
    <main>
      <section className="macros">
        <h1 className="macros__text">Macros</h1>
        <ul className="macros__list">
          <li className="macros__item">Calories : {nutrients.calories}</li>
          <li className="macros__item">
            Carbohydrates : {nutrients.carbohydrates}
          </li>
          <li className="macros__item">Fat : {nutrients.fat}</li>
          <li className="macros__item">Protein : {nutrients.protein}</li>
        </ul>
      </section>
      <section className="macros__meals">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}
