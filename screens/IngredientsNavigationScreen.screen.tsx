import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Recipe} from "../types/recipe";
import RecipeComponent from "../components/Recipe.component";
import { carbonara } from "../constants/Recipes";
import {Box, Center, Text, useTheme} from "native-base";
import IngredientNavigatorComponent from "../components/IngredientNavigator.component";

export interface Props{
}

export default function IngredientsNavigationScreen() {
  const theme = useTheme()

  return (
    <Box pl={'20px'} pr = {'20px'}>
      <IngredientNavigatorComponent ingredients={carbonara.ingredients}/>
    </Box>
  );
}
