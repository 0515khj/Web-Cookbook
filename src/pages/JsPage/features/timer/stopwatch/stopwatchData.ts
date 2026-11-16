import type { Feature } from "../../../../../types/feature";
import Stopwatch from "./Stopwatch";

export const stopwatch: Feature = {
  id: "stopwatch",
  fileName: "스톱워치",
  title: "스톱워치",
  description:
    "시작을 누르면 시간이 흐르고, 정지하면 멈춰요.",
  component: Stopwatch,
  code: {
    html: `<div class="stopwatch-box">
  <span id="time" class="stopwatch-time">00:00.00</span>
  <div class="stopwatch-buttons">
    <button id="toggle" class="stopwatch-button start">시작</button>
    <button id="reset" class="stopwatch-button">초기화</button>
  </div>
</div>`,
    css: `.stopwatch-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.stopwatch-time {
  font-family: Consolas, "Courier New", monospace;
  font-size: 40px;
  color: #ffffff;
}

.stopwatch-buttons {
  display: flex;
  gap: 8px;
}

.stopwatch-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #37373d;
  color: #ffffff;
  cursor: pointer;
}

.stopwatch-button.start {
  background: #007acc;
}`,
    js: `let time = 0;
let timerId = null;

const timeEl = document.getElementById("time");
const toggle = document.getElementById("toggle");

function format(ms) {
  const min = String(Math.floor(ms / 60000)).padStart(2, "0");
  const sec = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return min + ":" + sec + "." + cs;
}

toggle.onclick = () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    toggle.textContent = "시작";
    toggle.classList.add("start");
  } else {
    timerId = setInterval(() => {
      time += 10;
      timeEl.textContent = format(time);
    }, 10);
    toggle.textContent = "정지";
    toggle.classList.remove("start");
  }
};

document.getElementById("reset").onclick = () => {
  clearInterval(timerId);
  timerId = null;
  time = 0;
  timeEl.textContent = format(0);
  toggle.textContent = "시작";
  toggle.classList.add("start");
};`,
  },
};