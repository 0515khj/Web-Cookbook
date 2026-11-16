import type { Feature } from "../../../../../types/feature";
import Flip from "./Flip";

export const flip: Feature = {
  id: "flip",
  fileName: "뒤집히는 카드",
  title: "카드 뒤집기",
  description:
    "마우스를 올리면 카드가 뒤집혀 뒷면이 보여요.",
  component: Flip,
  code: {
    html: `<div class="card">
  <div class="inner">
    <div class="front">앞면</div>
    <div class="back">뒷면</div>
  </div>
</div>`,
    css: `.card {
  width: 220px;
  height: 140px;
  perspective: 800px;
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .inner {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}`,
  },
};