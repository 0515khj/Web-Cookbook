import type { Feature } from "../../../../../types/feature";
import BlurFocus from "./BlurFocus";

export const blurFocus: Feature = {
  id: "blur-focus",
  fileName: "블러 효과",
  title: "카드 블러효과",
  description:
    "카드 하나에 마우스를 올리면 나머지 카드가 흐려지고 그 카드만 선명해요.",
  component: BlurFocus,
  code: {
    html: `<div class="list">
  <div class="card">카드 1</div>
  <div class="card">카드 2</div>
  <div class="card">카드 3</div>
</div>`,
    css: `.list {
  display: flex;
  gap: 12px;
}

.card {
  width: 100px;
  padding: 20px 12px;
  transition: filter 0.3s, opacity 0.3s;
}

.list:hover .card:not(:hover) {
  filter: blur(3px);
  opacity: 0.5;
}`,
  },
};