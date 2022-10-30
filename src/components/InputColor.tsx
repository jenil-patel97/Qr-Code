import { useState } from "react";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div>
      <label className="font-semibold text-[18px]">Color</label>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ background: color }}
          className="w-10 h-8 cursor-pointer border-[3px] border-zinc-300"
        ></div>
        <span className="font-medium">{color}</span>
      </div>
      {displayColorPicker && "ShowcolorPicker"}
    </div>
  );
};

export default InputColor;
