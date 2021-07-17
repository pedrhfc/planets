import Navigation from "navigation/index";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "styles/theme";


export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkTheme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
