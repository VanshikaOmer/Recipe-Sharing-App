// src/components/Recipe.js
import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default Recipe;
