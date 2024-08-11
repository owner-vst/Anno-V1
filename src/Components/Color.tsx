import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function Color({}) {
  const [color, setColor] = useColor("#561ecb");

  return <ColorPicker color={color} onChange={setColor} />;
}
