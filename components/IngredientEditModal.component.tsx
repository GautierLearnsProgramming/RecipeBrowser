import React, {useState} from 'react';
import {Box, Button, Center, FormControl, Input, Modal, Text, View} from "native-base";

export interface Props {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: () => void,
}

function IngredientEditModalComponent({isOpen, onClose}: Props) {
  const [formData, setFormData] = useState({name: 'Tomates', unit: 'kg'});

  const onSubmit = () => {
    alert(`Created new ingredient : ${formData.name}, ${formData.unit}`)
  }

  return (
      <Modal isOpen={isOpen} onClose={onClose} avoidKeyboard>
        <Modal.Content>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label _text={{bold: true}}>Nom</FormControl.Label>
              <Input
                  placeholder="Tomates"
                  onChangeText={(value) => setFormData({ ...formData, name: value })}
              />
              <FormControl.HelperText _text={{fontSize: 'xs'}}>
                Le nom doit avoir au moins trois lettres.
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>Error Name</FormControl.ErrorMessage>
              <Box h={'20px'}/>
              <FormControl.Label _text={{bold: true}}>Unité</FormControl.Label>
              <Input
                  placeholder="kg"
                  onChangeText={(value) => setFormData({ ...formData, unit: value })}
              />
              <FormControl.HelperText _text={{fontSize: 'xs'}}>
                L'unité doit faire moins de 8 charactères
              </FormControl.HelperText>
              <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>Error Name</FormControl.ErrorMessage>
            </FormControl>
            <Box h={'32px'}/>
            <Button onPress={onSubmit}>
              Créer l'ingrédient
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
  );
}

export default IngredientEditModalComponent;