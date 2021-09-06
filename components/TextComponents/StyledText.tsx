import * as React from 'react';
import {Text, TextStyle} from 'react-native';

export interface Props{
  style?: TextStyle
}

const StyledText : React.FC<Props> = ({children, style}) => {
  return (
      <Text style={[style, {fontFamily: 'Nunito_700Bold'}]}>
        {children}
      </Text>
  )
}

export default StyledText