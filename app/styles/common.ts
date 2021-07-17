import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  paddingTop: ${Platform.OS === "android" ? `${StatusBar.currentHeight}px` : 0}
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView``;
