import type { Feature } from "../../../../../types/feature";
import Counter from "./Counter";

export const counter: Feature = {
  id: "counter",
  fileName: "카운터",
  title: "숫자 카운터",
  description:
    "버튼을 누르면 숫자가 늘거나 줄어요.",
  component: Counter,
  code: {
    html: `<div class="counter-box">
  <button id="minus" class="counter-button">-</button>
  <span id="count" class="counter-value">0</span>
  <button id="plus" class="counter-button">+</button>
</div>`,
    css: `.counter-box {
  display: flex;
  align-items: center;
  gap: 16px;
}

.counter-button {
  width: 36px;
  height: 36px;
  border-radius: 4px;
}

.counter-value {
  min-width: 40px;
  text-align: center;
  font-size: 24px;
}`,
    js: `let count = 0;
const countEl = document.getElementById("count");

document.getElementById("plus").onclick = () => {
  count++;
  countEl.textContent = count;
};

document.getElementById("minus").onclick = () => {
  count--;
  countEl.textContent = count;
};`,
  },
};