import {Ingredient} from "./ingredient";

export interface Recipe{
  title: string,
  thumbnail?: any,
  ingredients: RecipeIngredient[]
  instructions?: string
}

interface RecipeIngredient extends Ingredient{
  quantity: number
}
