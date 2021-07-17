import { Header } from "components";
import React from "react";
import { Container as HeaderContainer, ScrollContainer } from "styles/common";
import { RouteProps } from "types";

export default function CreateScreen({ route }: { route: RouteProps }) {
  const { name } = route;

  return (
    <ScrollContainer>
      <HeaderContainer>
        <Header title={name} />
      </HeaderContainer>
    </ScrollContainer>
  );
}
