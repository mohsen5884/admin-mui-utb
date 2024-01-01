// rgb to rgba converter
export default function RgbToRgba(rgb, opacity) {
  const result = rgb.replace(")", ", " + opacity + ")").replace("rgb", "rgba");
  return result;
}
