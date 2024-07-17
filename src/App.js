// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="app">
      <Header />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
