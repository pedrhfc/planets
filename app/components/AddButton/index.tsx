import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styles/theme";

export default function AddButton({ focused }: { focused: boolean }) {
  const { theme } = useTheme();

  return (
    <AntDesign
      name="pluscircle"
      color={focused ? theme.primaryColor : theme.accentColor}
      size={45}
    />
  );
}
