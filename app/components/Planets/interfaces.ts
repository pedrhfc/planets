import { ViewProps } from "react-native";

type Option = {
  uri: string;
  label: string;
  views: number;
  isBanner?: boolean;
};

export type CardProps = ViewProps & {
  isBanner?: boolean;
};

export interface PlanetsContainerProps {
  options: Option[];
}
