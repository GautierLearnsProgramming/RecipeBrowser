import * as React from 'react';

import { View } from '../components/Themed';
import { carbonara } from "../constants/Recipes";
import RecipePreviewComponent from "../components/RecipeNavigator/RecipePreview.component";
import RecipeNavigatorComponent from "../components/RecipeNavigator/RecipeNavigator.component";
import styled from "styled-components";

export interface Props{
  navigation: any
}

export default function RecipeNavigationScreen() {

  const recipes = [
      carbonara,
      carbonara,
      carbonara,
      carbonara
  ]

  return (
    <PageContainer>
      <RecipeNavigatorComponent recipes={recipes}/>
    </PageContainer>
  );
}

const PageContainer = styled(View)`
  padding-left: 20px;
  padding-right: 20px;
`
