import type { Feature } from "../../../../../types/feature";
import Countdown from "./Countdown";

export const countdown: Feature = {
  id: "countdown",
  fileName: "카운트다운",
  title: "카운트다운",
  description:
    "버튼을 누르면 10부터 1초마다 줄어들고, 0이 되면 멈추며 빨간색으로 바뀌어요.",
  component: Countdown,
  code: {
    html: `<div class="countdown-box">
  <span id="time" class="countdown-time">10</span>
  <button id="start" class="countdown-button">10초 시작</button>
</div>`,
    css: `.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.countdown-time {
  font-family: Consolas, "Courier New", monospace;
  font-size: 56px;
  color: #ffffff;
}

.countdown-time.end {
  color: #e5484d;
}

.countdown-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #007acc;
  color: #ffffff;
  cursor: pointer;
}

.countdown-button:disabled {
  opacity: 0.6;
  cursor: default;
}`,
    js: `const timeEl = document.getElementById("time");
const button = document.getElementById("start");

button.onclick = () => {
  let left = 10;
  timeEl.textContent = left;
  timeEl.classList.remove("end");
  button.disabled = true;
  button.textContent = "카운트 중...";

  const timerId = setInterval(() => {
    left--;
    timeEl.textContent = left;

    if (left === 0) {
      clearInterval(timerId);
      timeEl.classList.add("end");
      button.disabled = false;
      button.textContent = "10초 시작";
    }
  }, 1000);
};`,
  },
};