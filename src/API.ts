/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngredientInput = {
  id?: string | null,
  name: string,
  unit: string,
  icon?: string | null,
};

export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id: string,
  name: string,
  unit: string,
  icon?: string | null,
  recipes?: ModelIngredientRecipeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelIngredientRecipeConnection = {
  __typename: "ModelIngredientRecipeConnection",
  items?:  Array<IngredientRecipe | null > | null,
  nextToken?: string | null,
};

export type IngredientRecipe = {
  __typename: "IngredientRecipe",
  id: string,
  recipeID: string,
  ingredientID: string,
  recipe: Recipe,
  ingredient: Ingredient,
  createdAt: string,
  updatedAt: string,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  name: string,
  instructions?: string | null,
  ingredients?: ModelIngredientRecipeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
  unit?: string | null,
  icon?: string | null,
};

export type DeleteIngredientInput = {
  id: string,
};

export type CreateIngredientRecipeInput = {
  id?: string | null,
  recipeID: string,
  ingredientID: string,
};

export type ModelIngredientRecipeConditionInput = {
  recipeID?: ModelIDInput | null,
  ingredientID?: ModelIDInput | null,
  and?: Array< ModelIngredientRecipeConditionInput | null > | null,
  or?: Array< ModelIngredientRecipeConditionInput | null > | null,
  not?: ModelIngredientRecipeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateIngredientRecipeInput = {
  id: string,
  recipeID?: string | null,
  ingredientID?: string | null,
};

export type DeleteIngredientRecipeInput = {
  id: string,
};

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  instructions?: string | null,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  instructions?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  instructions?: string | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  unit?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items?:  Array<Ingredient | null > | null,
  nextToken?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  instructions?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientRecipeMutationVariables = {
  input: CreateIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type CreateIngredientRecipeMutation = {
  createIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientRecipeMutationVariables = {
  input: UpdateIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type UpdateIngredientRecipeMutation = {
  updateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientRecipeMutationVariables = {
  input: DeleteIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type DeleteIngredientRecipeMutation = {
  deleteIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items?:  Array< {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    unit: string,
    icon?: string | null,
    recipes?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientRecipeSubscription = {
  onCreateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientRecipeSubscription = {
  onUpdateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientRecipeSubscription = {
  onDeleteIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    id: string,
    recipeID: string,
    ingredientID: string,
    recipe:  {
      __typename: "Recipe",
      id: string,
      name: string,
      instructions?: string | null,
      ingredients?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      unit: string,
      icon?: string | null,
      recipes?:  {
        __typename: "ModelIngredientRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    name: string,
    instructions?: string | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      items?:  Array< {
        __typename: "IngredientRecipe",
        id: string,
        recipeID: string,
        ingredientID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
