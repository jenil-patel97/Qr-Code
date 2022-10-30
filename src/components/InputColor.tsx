import { SetStateAction, useState } from "react";
import ColorPicker from "react-pick-color";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (color: { hex: SetStateAction<string> }) =>
    setColor(color.hex);

  return (
    <div>
      <label className="font-semibold text-[18px]">Color</label>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ background: color }}
          className="w-11 h-9 mt-2 cursor-pointer border-[3px] border-stone-400"
        ></div>
        <span className="font-medium">{color}</span>
      </div>
      {displayColorPicker && (
        <div className="absolute mt-2">
          <ColorPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
