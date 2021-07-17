import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigation from "./RootNavigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
