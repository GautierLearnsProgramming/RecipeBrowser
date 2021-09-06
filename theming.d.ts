import '@react-navigation/native';
import {light} from "./theme";

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = typeof light;
  export function useTheme(): ExtendedTheme;
}