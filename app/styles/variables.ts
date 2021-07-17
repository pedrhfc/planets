import { Dimensions, PixelRatio, Platform } from "react-native";

export const WINDOW_WIDTH = Math.round(Dimensions.get("window").width);
const scale = WINDOW_WIDTH / 375;

export const responsivePx = (size: number): string => {
  const nearestPixel = size * scale;

  if (Platform.OS === "android") {
    return `${Math.round(PixelRatio.roundToNearestPixel(nearestPixel)) - 2}px`;
  } else {
    return `${Math.round(PixelRatio.roundToNearestPixel(nearestPixel))}px`;
  }
};
