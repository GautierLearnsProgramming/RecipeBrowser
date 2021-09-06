import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Recipe} from "../types/recipe";
import RecipeComponent from "../components/Recipe.component";

const carbonara: Recipe = {
  title: 'Spaghetti Carbonara',
  thumbnail: require('../assets/carbonara.jpg'),
  instructions: "Mettre l'eau à bouillir.\nPlonger les pâtes dans l'eau pendant 10 minutes.",
  ingredients: [
    {
      icon: 'pasta',
      name: 'Pâtes',
      quantity: 200,
      unit: 'g'
    },
    {
      icon: 'cheese',
      name: 'Parmesan',
      quantity: 100,
      unit: 'g'
    },
    {
      icon: 'ham',
      name: 'Lard',
      quantity: 200,
      unit: 'g'
    },
    {
      icon: 'cream',
      name: 'Crème',
      quantity: 3,
      unit: 'càs'
    }
  ]
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <RecipeComponent recipe={carbonara} thumbnail={''}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
