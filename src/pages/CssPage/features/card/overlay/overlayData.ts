import type { Feature } from "../../../../../types/feature";
import Overlay from "./Overlay";

export const overlay: Feature = {
  id: "overlay",
  fileName: "덮어씌우는 설명",
  title: "설명 덮어씌우기",
  description:
    "마우스를 올리면 숨겨둔 설명이 카드 위에 덮어씌워져요. 덮개를 position: absolute로 카드에 꽉 채우고 opacity를 0에서 1로 바꿔요.",
  component: Overlay,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <div class="cover">숨겨둔 설명이 덮어씌워져요</div>
</div>`,
    css: `.card {
  position: relative;
  width: 220px;
  height: 140px;
  overflow: hidden;
}

.cover {
  position: absolute;
  inset: 0;
  background: rgba(0, 122, 204, 0.9);
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover .cover {
  opacity: 1;
}`,
  },
};