import React from 'react';
import { View } from "react-native";
import styled from "styled-components";
import StyledText from "./TextComponents/StyledText";
import FoodIcon from "./FoodIcon.component";
import { ThemeProps } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

export interface Props {
  icon: string
  name: string
  quantity: number
  unit: string
}

function IngredientComponent({name, quantity, unit, icon}: Props) {

  const theme = useTheme();

  return (
      <IngredientBox theme={theme}>
        <IngredientMainBox>
          <IconBox>
            <FoodIcon name={icon} width={37} height={37}/>
          </IconBox>
          <StyledText style={{fontSize: 23, color: theme.colors.text}}>
            {name}
          </StyledText>
        </IngredientMainBox>
        <StyledText style={{fontSize: 20, color: theme.colors.subtext}}>
          {`${quantity} ${unit}`}
        </StyledText>
      </IngredientBox>
  );
}

const IngredientBox = styled(View)<{theme: ThemeProps<any>}>`
  background-color: ${(props) => props.theme.colors.grey5};
  border-radius: 20px;
  min-height: 64px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px 0 20px;
`

const IngredientMainBox = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
`

const IconBox = styled(View)`
  background-color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default IngredientComponent;