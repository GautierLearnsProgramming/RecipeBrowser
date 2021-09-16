/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      unit
      icon
      recipes {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      unit
      icon
      recipes {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      unit
      icon
      recipes {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createIngredientRecipe = /* GraphQL */ `
  mutation CreateIngredientRecipe(
    $input: CreateIngredientRecipeInput!
    $condition: ModelIngredientRecipeConditionInput
  ) {
    createIngredientRecipe(input: $input, condition: $condition) {
      id
      recipeID
      ingredientID
      recipe {
        id
        name
        instructions
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      ingredient {
        id
        name
        unit
        icon
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateIngredientRecipe = /* GraphQL */ `
  mutation UpdateIngredientRecipe(
    $input: UpdateIngredientRecipeInput!
    $condition: ModelIngredientRecipeConditionInput
  ) {
    updateIngredientRecipe(input: $input, condition: $condition) {
      id
      recipeID
      ingredientID
      recipe {
        id
        name
        instructions
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      ingredient {
        id
        name
        unit
        icon
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteIngredientRecipe = /* GraphQL */ `
  mutation DeleteIngredientRecipe(
    $input: DeleteIngredientRecipeInput!
    $condition: ModelIngredientRecipeConditionInput
  ) {
    deleteIngredientRecipe(input: $input, condition: $condition) {
      id
      recipeID
      ingredientID
      recipe {
        id
        name
        instructions
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      ingredient {
        id
        name
        unit
        icon
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      name
      instructions
      ingredients {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      name
      instructions
      ingredients {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      name
      instructions
      ingredients {
        items {
          id
          recipeID
          ingredientID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
