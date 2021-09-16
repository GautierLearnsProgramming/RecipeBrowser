import { DefaultTheme, DarkTheme, ExtendedTheme } from '@react-navigation/native';
import {extendTheme} from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Nunito: {
      100: {
        normal: 'Nunito_200ExtraLight',
        italic: 'Nunito_200ExtraLight_Italic',
      },
      200: {
        normal: 'Nunito_200ExtraLight',
        italic: 'Nunito_200ExtraLight_Italic',
      },
      300: {
        normal: 'Nunito_300Light',
        italic: 'Nunito_300Light_Italic',
      },
      400: {
        normal: 'Nunito_400Regular',
        italic: 'Nunito_400Regular_Italic',
      },
      500: {
        normal: 'Nunito_400Regular',
        italic: 'Nunito_400Regular_Italic'
      },
      600: {
        normal: 'Nunito_600SemiBold',
        italic: 'Nunito_600SemiBold_Italic',
      },
      700: {
        normal: 'Nunito_700Bold',
        italic: 'Nunito_700Bold_Italic'
      },
      800: {
        normal: 'Nunito_800ExtraBold',
        italic: 'Nunito_800ExtraBold_Italic',
      },
      900: {
        normal: 'Nunito_900Black',
        italic: 'Nunito_900Black_Italic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
    mono: 'Nunito',
  },
})

export const reactNavigationTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
}