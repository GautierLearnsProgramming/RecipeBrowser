import React from 'react';
import RecipeComponent from "../components/Recipe.component";
import {carbonara} from "../constants/Recipes";

function RecipeScreen() {
  return (
      <RecipeComponent recipe={carbonara}/>
  );
}

export default RecipeScreen;