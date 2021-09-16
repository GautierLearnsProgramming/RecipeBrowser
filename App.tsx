import {StatusBar} from 'react-native';
import React from 'react';
import { theme, reactNavigationTheme } from './theme';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)


import useCachedResources from './hooks/useCachedResources';

import
  {
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  useFonts } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RecipeNavigationScreen from "./screens/RecipeNavigationScreen.screen";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RecipeScreen from "./screens/RecipeScreen.screen";
import IngredientsNavigationScreen from "./screens/IngredientsNavigationScreen.screen";
import HomeScreen from "./screens/HomeScreen.screen";
import TestScreen from "./screens/Test.screen";


export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  })

  const isLoadingComplete = useCachedResources();

  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
        <>
          <NativeBaseProvider theme={theme}>
              <NavigationContainer theme={reactNavigationTheme}>
                <StatusBar backgroundColor={'transparent'} barStyle={"dark-content"}/>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="Recipes" component={RecipeNavigationScreen}/>
                  <Stack.Screen name="Recipe" component={RecipeScreen}/>
                  <Stack.Screen name="Ingredients" component={IngredientsNavigationScreen}/>
                  <Stack.Screen name="Test" component={TestScreen}/>
                </Stack.Navigator>
              </NavigationContainer>
          </NativeBaseProvider>
        </>
    );
  }
}
