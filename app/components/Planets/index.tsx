import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styles/theme";
import { PlanetsContainerProps } from "./interfaces";
import {
  Card,
  CardBanner,
  CardHeader,
  CardLabel,
  CardStats,
  CardStatsText,
  Wrapper
} from "./styles";

export default function PlanetsContainer({ options }: PlanetsContainerProps) {
  const { theme } = useTheme();

  const handlePlanet = (index: number) => console.log(index);

  return (
    <Wrapper>
      {options.map(({ uri, label, isBanner, views }, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handlePlanet(index)}
        >
          <Card isBanner={isBanner}>
            {isBanner ? (
              <CardBanner source={{ uri }} resizeMode="cover" />
            ) : (
              <CardHeader source={{ uri }} />
            )}
            <CardLabel>{label}</CardLabel>
            <CardStats>
              <AntDesign name="eye" size={24} color={theme.disabledColor} />
              <CardStatsText>{views} views</CardStatsText>
            </CardStats>
          </Card>
        </TouchableWithoutFeedback>
      ))}
    </Wrapper>
  );
}
