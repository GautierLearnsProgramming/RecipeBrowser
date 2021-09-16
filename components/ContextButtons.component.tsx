import React from 'react';
import {Box, Flex, Icon, IconButton, View} from "native-base";
import {Feather, MaterialIcons} from "@expo/vector-icons";

export interface Props{
  onDelete: () => void
  onEdit: () => void
}

function ContextButtonsComponent({onDelete, onEdit}: Props) {
  return (
      <Flex direction={'row'}>
        <IconButton
            onPress={onEdit}
            hitSlop={7}
            borderRadius={30}
            variant={'solid'}
            colorScheme={'amber'}
            icon={<Icon color={'white'} size={'sm'} as={<Feather name={'edit-2'}/>}/>}
        />
        <Box w={'15px'}/>
        <IconButton
            onPress={onDelete}
            hitSlop={7}
            borderRadius={30}
            variant={'solid'}
            colorScheme={'red'}
            icon={<Icon color={'white'} size={'sm'} as={<MaterialIcons name={'delete-outline'}/>}/>}
        />
      </Flex>
  );
}

export default ContextButtonsComponent;