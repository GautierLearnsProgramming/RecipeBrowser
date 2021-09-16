import React from 'react';
import {Image, ImageBackground, View} from "react-native";
import {Recipe} from "../../types/recipe";
import styled from "styled-components";
import StyledText from "../TextComponents/StyledText";

export interface RecipePreviewProps {
  recipe: Recipe,
}

function RecipePreviewComponent({recipe}:RecipePreviewProps) {
  return (
      <RecipePreviewContainer source={recipe.thumbnail}>
        <BrightnessFilter>
          <RecipePreviewTitle style={{color: '#FFFFFF', fontSize: 24}}>
            {recipe.title}
          </RecipePreviewTitle>
        </BrightnessFilter>
      </RecipePreviewContainer>
  );
}

const RecipePreviewContainer = styled(ImageBackground)`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  flex-direction: row;
`

const RecipePreviewTitle = styled(StyledText)`
  margin-top: -3px;
`

const BrightnessFilter = styled(View)`
  flex: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 20px;
`


export default RecipePreviewComponent;