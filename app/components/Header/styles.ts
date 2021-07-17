import styled from "styled-components/native";

export const Wrapper = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between
  align-items: center
`;

export const Avatar = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.accentColor}
  font-weight: bold;
  font-size: 40px
`;
