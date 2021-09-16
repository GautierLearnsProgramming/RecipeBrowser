import {Recipe} from "../types/recipe";

export const carbonara: Recipe = {
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