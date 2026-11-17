import type { Feature } from "../../../../../types/feature";
import Clipboard from "./Clipboard";

export const clipboard: Feature = {
  id: "clipboard",
  fileName: "클립보드 복사",
  title: "클립보드 복사",
  description:
    "버튼을 누르면 텍스트가 복사되고, 잠깐 '복사됨!'으로 바뀌었다가 돌아와요.",
  component: Clipboard,
  code: {
    html: `<div class="copy-box">
  <code id="copy-text">npm install react</code>
  <button id="copy-button" class="copy-button">복사</button>
</div>`,
    css: `.copy-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 12px 10px 16px;
  border: 1px solid #3c3c3c;
  border-radius: 6px;
}

.copy-button {
  min-width: 64px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.copy-button.copied {
  background: #2e7d32;
  color: #ffffff;
}`,
    js: `const button = document.getElementById("copy-button");
const text = document.getElementById("copy-text").textContent;
let timer;

button.onclick = async () => {
  try {
    await navigator.clipboard.writeText(text);

    button.textContent = "복사됨!";
    button.classList.add("copied");

    clearTimeout(timer);
    timer = setTimeout(() => {
      button.textContent = "복사";
      button.classList.remove("copied");
    }, 1500);
  } catch {
    alert("복사에 실패했어요");
  }
};`,
  },
};