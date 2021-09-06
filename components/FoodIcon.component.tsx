import React from 'react';
import {Image} from "react-native";
import {foodIcons} from "../constants/FoodIcons";

export interface FoodIconProps {
  name: string,
  width?: number,
  height?: number
}

function FoodIcon({name, width, height}: FoodIconProps) {
  return (
      <Image source={foodIcons.get(name)} style={{width: width, height: height}}/>
  );
}

export default FoodIcon;