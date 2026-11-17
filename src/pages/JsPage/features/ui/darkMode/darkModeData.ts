import type { Feature } from "../../../../../types/feature";
import DarkMode from "./DarkMode";

export const darkMode: Feature = {
  id: "darkMode",
  fileName: "다크모드 토글",
  title: "다크모드 토글",
  description:
    "버튼을 누르면 밝은 화면과 어두운 화면이 바뀌어요. 선택한 모드는 저장돼서 새로고침해도 유지돼요.",
  component: DarkMode,
  code: {
    html: `<div class="card">
  <div>
    <h3>다크모드 예제</h3>
    <p>버튼을 눌러 보세요</p>
  </div>
  <button id="theme-button" class="theme-button">🌙 다크</button>
</div>`,
    css: `body {
  background: #ffffff;
  color: #222222;
  transition: background 0.3s, color 0.3s;
}

body.dark {
  background: #121212;
  color: #eeeeee;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
}

.card p {
  color: #666666;
}

body.dark .card p {
  color: #999999;
}

.theme-button {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  background: #222222;
  color: #ffffff;
  cursor: pointer;
}

body.dark .theme-button {
  background: #eeeeee;
  color: #121212;
}`,
    js: `const button = document.getElementById("theme-button");

// 저장된 값이 있으면 그걸 쓰고, 없으면 OS 설정을 따라가요
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let isDark = saved ? saved === "dark" : prefersDark;

function applyTheme() {
  document.body.classList.toggle("dark", isDark);
  button.textContent = isDark ? "☀️ 라이트" : "🌙 다크";
}

button.onclick = () => {
  isDark = !isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme();
};

applyTheme();`,
  },
};