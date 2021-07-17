import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "styles/theme";
import { SolarSystemContainerProps } from "./interfaces";

export default function SolarSystem({ options }: SolarSystemContainerProps) {
  const { theme } = useTheme();
  return (
    <View>
      <Text style={{ color: theme.accentColor }}>SolarSystem</Text>
    </View>
  );
}
