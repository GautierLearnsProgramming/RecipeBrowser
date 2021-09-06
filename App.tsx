import { StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {light} from "./theme";
import
  {Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_400Regular,
  useFonts} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";
import RecipeComponent from "./components/Recipe.component";
import {Recipe} from "./types/recipe";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabOneScreen from "./screens/TabOneScreen";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";



export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  })

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const Stack = createNativeStackNavigator();





  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
        <>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={"dark-content"}/>
        <SafeAreaProvider>
          <NavigationContainer theme = {light}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="TabOne" component={TabOneScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
        </>
    );
  }
}


