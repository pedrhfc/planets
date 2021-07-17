import {
  CometsContainer,
  Header,
  PillsContainer,
  PlanetsContainer,
  SolarSystemContainer
} from "components";
import React, { useState } from "react";
import { RefreshControl, View } from "react-native";
import { comets, planets } from "services";
import { Container as HeaderContainer, ScrollContainer } from "styles/common";
import { RouteProps } from "types";

const AllContainer = ({ options }: any) => {
  return (
    <View>
      <PlanetsContainer options={options.planets} />
      <CometsContainer options={options.comets} />
      <SolarSystemContainer options={options.solarSystem} />
    </View>
  );
};

export default function HomeScreen({ route }: { route: RouteProps }) {
  const { name } = route;

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <ScrollContainer
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    >
      <HeaderContainer>
        <Header title={name} />
      </HeaderContainer>

      <PillsContainer
        options={[
          {
            label: "All",
            component: () => AllContainer({ options: { planets, comets } }),
          },
          {
            label: "Planets",
            component: () => PlanetsContainer({ options: planets }),
          },
          {
            label: "Comets",
            component: () => CometsContainer({ options: planets }),
          },
          {
            label: "Solar System",
            component: () => SolarSystemContainer({ options: planets }),
          },
        ]}
      />
    </ScrollContainer>
  );
}
