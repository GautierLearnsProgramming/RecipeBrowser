import React from 'react';
import {TouchableHighlight, View} from "react-native";
import styled from "styled-components";
import StyledText from "../TextComponents/StyledText";
import FoodIcon from "../FoodIcon.component";
import {Box, Text, useTheme} from "native-base";


export interface Props {
  icon: string
  name: string
  quantity?: number
  unit: string
  onPress?: () => void
}

function IngredientComponent({name, quantity, unit, icon, onPress}: Props) {

  const theme = useTheme()
  const colors = theme.colors

  return (
      <TouchableHighlight activeOpacity={0.9} onPress={onPress} style={{borderRadius: 20}}>
        <IngredientBox theme={theme}>
          <IngredientMainBox>
            <IconBox>
              <FoodIcon name={icon} width={37} height={37}/>
            </IconBox>
            <Text bold fontSize={'2xl'} color={colors.darkText}>
              {name}
            </Text>
          </IngredientMainBox>
          <UnitBox>
          {quantity ?
              <Text bold fontSize={'xl'} color={colors.warmGray[400]}>
                {`${quantity} ${unit}`}
              </Text> :
              <Text bold fontSize={'xl'} color={colors.warmGray[400]}>
                {`Unité : ${unit}`}
              </Text>
          }
          </UnitBox>
        </IngredientBox>
      </TouchableHighlight>
  );
}

const IngredientBox = styled(View)<{theme: any}>`
  background-color: ${(props) => props.theme.colors.warmGray[100]};
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
  margin-right: 10px;
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

const UnitBox = styled(Box)`
  width: 100px;
`

export default IngredientComponent;