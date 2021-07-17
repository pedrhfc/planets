import styled from "styled-components/native";
import { PillProps } from "./interfaces";


export const HorizontalScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: ${({ theme }) => theme.DEFAULT_TOP_MARGIN};
`;

export const Pill = styled.Text.attrs<PillProps>(({ isActive }) => {
  return { isActive };
})<PillProps>`
    color: ${({ isActive, theme }) =>
      isActive ? theme.background : theme.accentColor}
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.accentColor : "transparent"};
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.disabledColor};
    padding: 12px 24px;
    marginLeft: 16px;
  `;
