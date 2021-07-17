import { useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components/native";
import { responsivePx } from "./variables";

const primaryColor = "#6775f2";
const disabledColor = "#616161";
const blackColor = "#000";
const whiteColor = "#fff";
const lightAccent = "#000";
const darkAccent = "#fff";

const DEFAULT_TOP_MARGIN = responsivePx(25);

declare module "styled-components" {
  export interface DefaultTheme {
    DEFAULT_TOP_MARGIN: string;
    background: string;
    accentColor: string;
    primaryColor: string;
    disabledColor: string;
    blackColor: string;
    whiteColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  background: whiteColor,
  accentColor: lightAccent,
  DEFAULT_TOP_MARGIN,
  primaryColor,
  disabledColor,
  blackColor,
  whiteColor,
};

export const darkTheme: DefaultTheme = {
  background: blackColor,
  accentColor: darkAccent,
  DEFAULT_TOP_MARGIN,
  primaryColor,
  disabledColor,
  blackColor,
  whiteColor,
};

export function useTheme() {
  const theme = useContext(ThemeContext);
  return { theme };
}
