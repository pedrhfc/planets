import React from "react";
import { TextProps } from "react-native";

export type PillProps = TextProps & { isActive: boolean };

type Option = {
  label: string;
  component: typeof React.Component | React.ComponentType;
};

export interface PillsContainerProps {
  options: Option[];
  active?: (index: number, label: string) => void;
}
