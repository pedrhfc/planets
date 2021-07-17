import { AntDesign } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styles/theme";
import { Avatar, Title, Wrapper } from "./styles";

const randomImg = Math.random() * 20;
const avatarUri = `https://thispersondoesnotexist.com/image?rdm=${randomImg}`;

export default function Header({ title }: BottomTabNavigationOptions) {
  const { theme } = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => setOpenDrawer(true);

  return (
    <Wrapper>
      <Avatar source={{ uri: avatarUri }} />
      <Title>{title}</Title>
      <TouchableOpacity onPress={handleDrawer}>
        <AntDesign name="appstore1" size={24} color={theme.accentColor} />
      </TouchableOpacity>
    </Wrapper>
  );
}
