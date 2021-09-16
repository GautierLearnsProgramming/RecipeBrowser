import React from 'react';
import {View} from "native-base";
import ContextButtonsComponent from "../components/ContextButtons.component";

function TestScreen() {
  return (
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <ContextButtonsComponent/>
      </View>
  );
}

export default TestScreen;