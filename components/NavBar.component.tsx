import React from 'react';
import {ArrowBackIcon, Box, Center, Flex, Spacer, Text} from "native-base";
import styled from "styled-components";

export interface Props {
  title: string
}

function NavBarComponent({title}: Props) {
  return (
      <Center>
        <Flex direction={"row"} align={"center"} justify={"flex-start"} h={'60px'}>
          <ArrowBackIcon/>
          <Box w={'20px'}/>
          <Text bold fontSize={'3xl'}>
            {title}
          </Text>
        </Flex>
      </Center>
  );
}



export default NavBarComponent;