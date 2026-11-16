import type { Feature } from "../../../../../types/feature";
import Toggle from "./Toggle";

export const toggle: Feature = {
  id: "toggle",
  fileName: "ON/OFF 토글",
  title: "ON/OFF 버튼 토글",
  description:
    "버튼을 누를 때마다 ON과 OFF가 바뀌어요.",
  component: Toggle,
  code: {
    html: `<div class="toggle-box">
  <button id="toggle" class="toggle-button">OFF</button>
  <span id="text" class="toggle-text">꺼져 있어요</span>
</div>`,
    css: `.toggle-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle-button {
  padding: 10px 20px;
  border-radius: 4px;
  background: #858585;
}

.toggle-button.on {
  background: #000;
}`,
    js: `let isOn = false;
const button = document.getElementById("toggle");
const text = document.getElementById("text");

button.onclick = () => {
  isOn = !isOn;
  button.textContent = isOn ? "ON" : "OFF";
  button.classList.toggle("on", isOn);
  text.textContent = isOn ? "켜져 있어요" : "꺼져 있어요";
};`,
  },
};