import React from "react";
import '../Meal/Meal.scss'

export default function Meal({
  meal: { id, title, readyInMinutes, servings, sourceUrl, image },
}) {
  return (
    <article className="meal">
      <h1 className="meal__title">{title}</h1>
      <img
        src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
        alt="recipe"
        className="meal__picture"
      />
      <ul className="meal__list">
        <li className="meal__item">Preparation time : {readyInMinutes} </li>
        <li className="meal__item">Number of servings : {servings} </li>
      </ul>

      <a href={sourceUrl} className="meal__recipe">
        Go to Recipe
      </a>
    </article>
  );
}
