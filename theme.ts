import { DefaultTheme, DarkTheme, ExtendedTheme } from '@react-navigation/native';

export const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(216, 11, 140)',
    secondary: 'rgb(0, 174, 239)',
    tertiary: 'rgb(34, 31, 114)',
    danger: 'rgb(208, 2, 27)',
    background: 'rgb(239, 238, 244)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(30, 30, 30)',
    subtext: 'rgb(172, 172, 172)',
    recipeInstructionText: 'rgb(120, 120, 120)',
    separator: 'rgb(194, 194, 195)',
    highlight: 'rgb(199, 198, 203)',
    grey5: '#F5F5F5'
  },
  text: {
    primaryFont: 'Nunito700Bold',
    h1Size: 30,
    titleSize: 26,
    textSize: 20
  }
};