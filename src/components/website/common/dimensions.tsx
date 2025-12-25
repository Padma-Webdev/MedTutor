import { useWindowDimensions, ScaledSize } from "react-native";

interface DimensionData {
  window: ScaledSize;
}


function useDimensions(): DimensionData {
  const dimensions = useWindowDimensions();
  return {
    window: {
      height: dimensions.height,
      width: dimensions.width,
      fontScale: dimensions.fontScale,
      scale: dimensions.scale,
    },
  };
}

export default useDimensions;


  