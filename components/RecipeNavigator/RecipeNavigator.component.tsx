import React from 'react';
import {View} from "react-native";
import {Recipe} from "../../types/recipe";
import styled from "styled-components";
import RecipePreviewComponent from "./RecipePreview.component";
import {Fab, Icon} from "native-base";
import {AntDesign} from "@expo/vector-icons";

export interface Props{
  recipes: Recipe[]
}

function RecipeNavigatorComponent({recipes}: Props) {
  return (
      <>
        {
          recipes.map((recipe) => <RecipePreviewContainer>
            <RecipePreviewComponent recipe={recipe}/>
          </RecipePreviewContainer>)
        }
        <Fab
            position="absolute"
            size="sm"
            icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
            colorScheme={'lime'}
        />
      </>
  );
}

export default RecipeNavigatorComponent;

const RecipePreviewContainer = styled(View)`
  margin-bottom: 10px;
`