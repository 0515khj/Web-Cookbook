import type { Feature } from "../../../../../types/feature";
import Accordion from "./Accordion";

export const accordion: Feature = {
  id: "accordion",
  fileName: "아코디언",
  title: "아코디언 메뉴",
  description:
    "질문을 누르면 답변이 펼쳐지고, 다른 질문을 누르면 먼저 열린 건 닫혀요.",
  component: Accordion,
  code: {
    html: `<div class="accordion-box">
  <div class="accordion-item">
    <button class="accordion-header">첫 번째 질문</button>
    <p class="accordion-body">첫 번째 답변이에요.</p>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">두 번째 질문</button>
    <p class="accordion-body">두 번째 답변이에요.</p>
  </div>
</div>`,
    css: `.accordion-box {
  width: 320px;
}

.accordion-item {
  border: 1px solid #3c3c3c;
  border-bottom: none;
  background: #252526;
}

.accordion-item:last-child {
  border-bottom: 1px solid #3c3c3c;
}

.accordion-header {
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  color: #ffffff;
  text-align: left;
  cursor: pointer;
}

.accordion-body {
  display: none;
  padding: 0 16px 12px;
  color: #858585;
}

.accordion-item.open .accordion-body {
  display: block;
}`,
    js: `const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  item.querySelector(".accordion-header").onclick = () => {
    const wasOpen = item.classList.contains("open");
    items.forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  };
});`,
  },
};