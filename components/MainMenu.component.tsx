import React from 'react';
import { TouchableOpacity, View} from "react-native";
import {Box, Button, Center, Text, useTheme} from "native-base";
import styled from "styled-components";
import {useNavigation} from "@react-navigation/native";

export interface Props {
}

function MainMenuComponent({}: Props) {

  const navigation = useNavigation<any>();

  return (
      <Center style = {{height: '100%'}}>
        <ButtonsContainer>
          <MenuButton colorScheme={'amber'} onPress = {() => {navigation.navigate('Test')}}
          >
            <Text bold fontSize={"xl"} color={'white'} >
              Mes Menus
            </Text>
          </MenuButton>
          <Box h={4}/>
          <MenuButton colorScheme={'lime'}
                      onPress = {() => {navigation.navigate('Recipes')}}
          >
            <Text bold fontSize={"xl"} color={'white'} >
              Mes Recettes
            </Text>
          </MenuButton>
          <Box h={4}/>
          <MenuButton colorScheme={'cyan'}
                      onPress = {() => {navigation.navigate('Ingredients')}}
          >
            <Text bold fontSize={"xl"} color={'white'} >
              Mes Ingrédients
            </Text>
          </MenuButton>
        </ButtonsContainer>
      </Center>
  );
}

const ButtonsContainer = styled(View)`
  display: flex;
  margin-top: -100px;
`

const MenuButton = styled(Button)`
  width: 250px;
  max-width: 80%;
`

export default MainMenuComponent;