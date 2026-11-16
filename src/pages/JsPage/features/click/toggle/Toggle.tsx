import { useState } from "react";
import { ToggleWrap } from "./toggleStyle";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <ToggleWrap className="toggle">
      <div className="toggleBox">
        <button
          className={isOn ? "toggleButton on" : "toggleButton"}
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? "ON" : "OFF"}
        </button>
        <span className="toggleText">
          {isOn ? "켜져 있어요" : "꺼져 있어요"}
        </span>
      </div>
    </ToggleWrap>
  );
};

export default Toggle;