/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
export const onCreateIngredientRecipe = /* GraphQL */ `
  subscription OnCreateIngredientRecipe {
    onCreateIngredientRecipe {
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
export const onUpdateIngredientRecipe = /* GraphQL */ `
  subscription OnUpdateIngredientRecipe {
    onUpdateIngredientRecipe {
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
export const onDeleteIngredientRecipe = /* GraphQL */ `
  subscription OnDeleteIngredientRecipe {
    onDeleteIngredientRecipe {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
