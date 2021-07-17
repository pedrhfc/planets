import styled from "styled-components/native";
import { responsivePx } from "styles/variables";
import { CardProps } from "./interfaces";

const borderRadius = "25px";

export const Wrapper = styled.View`
  margin-top: ${({ theme }) => theme.DEFAULT_TOP_MARGIN};
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.View.attrs<CardProps>(({ isBanner }) => {
  return { isBanner };
})<CardProps>`
  margin: ${responsivePx(60)} 16px 0 16px;
  border: ${({ isBanner }) => (isBanner ? "0" : "1px")} solid ${({ theme }) =>
  theme.disabledColor}
  border-radius: ${borderRadius};
  padding: ${({ isBanner }) => responsivePx(isBanner ? 60 : 20)};
  flex: ${({ isBanner }) => (isBanner ? "100%" : "none")};
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const CardBanner = styled.Image`
  border-radius: ${borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const CardHeader = styled.Image`
  bottom: ${responsivePx(60)};
  width: ${responsivePx(80)};
  height: ${responsivePx(80)};
`;

export const CardLabel = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.accentColor};
`;

export const CardStats = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CardStatsText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.disabledColor};
`;
