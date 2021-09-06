import React from 'react';
import {ScrollView, View, Image} from "react-native";
import {Recipe} from "../types/recipe";
import styled from "styled-components";
import IngredientComponent from "./Ingredient.component";
import { useTheme } from "@react-navigation/native";
import {ThemeProps} from "react-native-elements";
import StyledText from "./TextComponents/StyledText";

export interface RecipeProps{
  thumbnail?: any,
  recipe: Recipe
}

function RecipeComponent({recipe}: RecipeProps) {

  const theme = useTheme();

  const instructions = <InstructionContainer theme={theme}>
    <StyledText style = {{fontSize: theme.text.titleSize}}>
      Instructions :
    </StyledText>
    <InstructionSubContainer>
			<StyledText style={{color: theme.colors.recipeInstructionText}}>
        {recipe.instructions}
			</StyledText>
		</InstructionSubContainer>
  </InstructionContainer>

  const thumbnail = <ThumbailImageContainer>
      <ThumbnailImage source={recipe.thumbnail}/>
  </ThumbailImageContainer>

  return (
    <RecipeBox>
      <TitleContainer>
        <RecipeTitle style = {{fontSize: theme.text.h1Size}}>
          {recipe.title}
        </RecipeTitle>
      </TitleContainer>
      {recipe.thumbnail && thumbnail}
      {recipe.ingredients.map((ingredient) =>
        <IngredientContainer key={ingredient.name}>
          <IngredientComponent icon={ingredient.icon} name={ingredient.name} quantity={ingredient.quantity} unit={ingredient.unit}/>
        </IngredientContainer>
      )}
      {recipe.instructions && instructions}
    </RecipeBox>
  );
}

const TitleContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

const RecipeTitle = styled(StyledText)`
`

const ThumbnailImage = styled(Image)`
  height: 200px;
  width: 100%;
  border-radius: 20px;
`

const ThumbailImageContainer = styled(View)`
  height: 200px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 15px;
`

const RecipeBox = styled(ScrollView)`
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`

const IngredientContainer = styled(View)`
  margin-bottom: 15px;
`

const InstructionContainer = styled(View)<{theme: ThemeProps<any>}>`
  background-color: ${props => props.theme.colors.grey5};
  border-radius: 20px;
  padding: 5px 20px 10px 20px;
`

const InstructionSubContainer = styled(View)`
  margin-top: 10px;
`

export default RecipeComponent;