import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "styles/theme";
import { CometsContainerProps } from "./interfaces";

export default function CometsContainer({ options }: CometsContainerProps) {
  const { theme } = useTheme();

  return (
    <View>
      <Text style={{ color: theme.accentColor }}>Comets</Text>
    </View>
  );
}
