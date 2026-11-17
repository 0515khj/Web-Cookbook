import type { Feature } from "../../../../../types/feature";
import Toast from "./Toast";

export const toast: Feature = {
  id: "toast",
  fileName: "토스트 알림",
  title: "토스트 알림",
  description:
    "버튼을 누르면 알림이 화면 구석에 나타났다가, 몇 초 뒤에 저절로 사라져요.",
  component: Toast,
  code: {
    html: `<button id="success-button">성공</button>
<button id="error-button">에러</button>

<div id="toast-container" class="toast-container" aria-live="polite"></div>`,
    css: `.toast-container {
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.toast {
  padding: 12px 18px;
  background: #252526;
  border-left: 4px solid #2e7d32;
  border-radius: 4px;
  color: #ffffff;
  white-space: nowrap;
  transition: opacity 0.3s, transform 0.3s;
  animation: toast-in 0.3s ease;
}

.toast.error {
  border-left-color: #d32f2f;
}

.toast.hide {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    js: `const container = document.getElementById("toast-container");

function showToast(message, type = "success") {
  // 1. 알림 요소 만들기
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;
  container.appendChild(toast);

  // 2. 2.5초 뒤에 사라지는 효과를 주고 제거
  setTimeout(() => {
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2500);
}

document.getElementById("success-button").onclick = () =>
  showToast("저장되었어요!", "success");

document.getElementById("error-button").onclick = () =>
  showToast("오류가 발생했어요", "error");`,
  },
};