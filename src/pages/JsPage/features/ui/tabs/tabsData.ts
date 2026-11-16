import type { Feature } from "../../../../../types/feature";
import Tabs from "./Tabs";

export const tabs: Feature = {
  id: "tabs",
  fileName: "탭 메뉴",
  title: "탭 메뉴",
  description:
    "탭을 누르면 아래 내용이 바뀌어요.",
  component: Tabs,
  code: {
    html: `<div class="tabs-box">
  <div class="tabs-list">
    <button class="tabs-button active">소개</button>
    <button class="tabs-button">기능</button>
    <button class="tabs-button">후기</button>
  </div>
  <p id="panel" class="tabs-panel">첫 번째 탭의 내용이에요.</p>
</div>`,
    css: `.tabs-box {
  width: 320px;
}

.tabs-list {
  display: flex;
  border-bottom: 1px solid #3c3c3c;
}

.tabs-button {
  padding: 8px 16px;
  border: none;
  background: none;
  color: #858585;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.tabs-button.active {
  color: #ffffff;
  border-bottom-color: #007acc;
}

.tabs-panel {
  padding: 16px 4px;
  color: #cccccc;
}`,
    js: `const contents = [
  "첫 번째 탭의 내용이에요.",
  "두 번째 탭의 내용이에요.",
  "세 번째 탭의 내용이에요.",
];

const buttons = document.querySelectorAll(".tabs-button");
const panel = document.getElementById("panel");

buttons.forEach((button, index) => {
  button.onclick = () => {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    panel.textContent = contents[index];
  };
});`,
  },
};