import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { PillsContainerProps } from "./interfaces";
import { HorizontalScrollContainer, Pill } from "./styles";

export default function PillsContainer({ options }: PillsContainerProps) {
  const [isActive, setIsActive] = useState(0);

  const { component: Component, ...rest } = options[isActive];

  const handlePills = (index: number) => {
    setIsActive(index);
  };

  return (
    <React.Fragment>
      <HorizontalScrollContainer>
        {options.map(({ label }, index) => (
          <TouchableOpacity key={index} onPress={() => handlePills(index)}>
            <Pill isActive={isActive === index}>{label}</Pill>
          </TouchableOpacity>
        ))}
      </HorizontalScrollContainer>
      <Component {...rest} />
    </React.Fragment>
  );
}
