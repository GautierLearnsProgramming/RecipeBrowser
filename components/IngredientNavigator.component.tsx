import React, {useEffect, useState} from 'react';
import {Box, Fab, Icon, View} from "native-base";
import {Ingredient} from "../types/ingredient";
import styled from "styled-components";
import IngredientComponent from "./Ingredient/Ingredient.component";
import {AntDesign} from "@expo/vector-icons";
import NavBarComponent from "./NavBar.component";
import ContextButtonsComponent from "./ContextButtons.component";
import IngredientEditModalComponent from "./IngredientEditModal.component";

export interface Props {
  ingredients: Ingredient[]
}

function IngredientNavigatorComponent({ingredients}: Props) {
  const [showContextButton, setShowContextButton] = useState<boolean[]>([]);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  useEffect(() => {
    setShowContextButton(ingredients.map((ingredient) => false))
  }, [ingredients.length])

  const toggleShowIthContextButton = (index: number) => {
    showContextButton[index] = !showContextButton[index]
    setShowContextButton([...showContextButton])
  }

  const getToogleIthContextButton = (index: number) => {
    return () => {
      toggleShowIthContextButton(index)
    }
  }

  const openEditModal = () => {
    console.log('Opening modal')
    setShowEditModal(true)
  }

  const closeEditModal = () => {
    console.log('Closing modal')
    setShowEditModal(false)
  }

  return (
      <>
        <NavBarComponent title={'Ingrédients'}/>
        {ingredients.map((ingredient, index) => { return(
            <View key={index}>
              {showContextButton[index] && (<ContextMenuContainer>
                <ContextButtonsComponent onDelete={() => {}} onEdit={() => {}}/>
              </ContextMenuContainer>)}
              <IngredientContainer>
                <IngredientComponent
                    icon={ingredient.icon}
                    name={ingredient.name}
                    unit={ingredient.unit}
                    onPress={getToogleIthContextButton(index)}
                />
              </IngredientContainer>
            </View>
        )})}
        <Fab
            position="absolute"
            size="sm"
            icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
            colorScheme={'cyan'}
            onPress={openEditModal}
        />
        <IngredientEditModalComponent isOpen={showEditModal} onClose={closeEditModal} onSubmit={closeEditModal}/>
      </>
  );
}

const IngredientContainer = styled(Box)`
  margin-bottom: 10px;
`

const ContextMenuContainer = styled(Box)`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

export default IngredientNavigatorComponent;
