import {Ingredient} from "../types/ingredient";
import {API} from "aws-amplify";
import * as mutations from '../src/graphql/mutations'

export async function createIngredient(name: string, unit: string): Promise<Ingredient>{
  const input = {
    name: name,
    unit: unit
  }
  const ing = await API.graphql({query: mutations.createIngredient, variables: {input: input}})
  console.log(ing)
  return (
      {
        name: "",
        unit: "",
        icon: ""
      }
  )
}