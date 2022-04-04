import React from "react";
import Meal from "../Meal/Meal";

export default function MealList({ mealData: { nutrients, meals } }) {
  return (
    <main>
      <section>
        <h1>Macros</h1>
        <ul>
          <li>Calories : {nutrients.calories}</li>
          <li>Carbohydrates : {nutrients.carbohydrates}</li>
          <li>Fat : {nutrients.fat}</li>
          <li>Protein : {nutrients.protein}</li>
        </ul>
      </section>
      <section>
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}
