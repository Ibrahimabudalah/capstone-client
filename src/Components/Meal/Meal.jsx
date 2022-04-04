import React from "react";

export default function Meal({
  meal: { id, title, readyInMinutes, servings, sourceUrl, image },
}) {
  return (
    <article>
      <h1>{title}</h1>
      <img
        src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
        alt="recipe"
      />
      <ul>
        <li>Preparation time : {readyInMinutes} </li>
        <li>Number of servings : {servings} </li>
      </ul>

      <a href={sourceUrl} target="_blank">
        Go to Recipe
      </a>
    </article>
  );
}
