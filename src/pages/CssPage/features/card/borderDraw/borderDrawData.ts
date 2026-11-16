import type { Feature } from "../../../../../types/feature";
import BorderDraw from "./BorderDraw";

export const borderDraw: Feature = {
  id: "border-draw",
  fileName: "그려지는 테두리",
  title: "테두리 그리기",
  description:
    "마우스를 올리면 테두리가 선처럼 그려져요. ::before와 ::after 두 개의 가상 요소를 0 크기에서 100%로 키우고, 가로 → 세로 순서로 transition 지연(delay)을 줘서 그려지는 느낌을 만들어요.",
  component: BorderDraw,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>테두리가 선으로 그려져요</p>
</div>`,
    css: `.card {
  position: relative;
  width: 220px;
  padding: 24px;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  box-sizing: border-box;
}

.card::before { top: 0; left: 0; }
.card::after { right: 0; bottom: 0; }

.card:hover::before {
  width: 100%;
  height: 100%;
  border-top-color: #007acc;
  border-right-color: #007acc;
  transition: width 0.25s, height 0.25s 0.25s;
}

.card:hover::after {
  width: 100%;
  height: 100%;
  border-bottom-color: #007acc;
  border-left-color: #007acc;
  transition: width 0.25s, height 0.25s 0.25s;
}`,
  },
};