import type { Feature } from "../../../../../types/feature";
import Tilt from "./Tilt";

export const tilt: Feature = {
  id: "tilt",
  fileName: "기울어지는 카드",
  title: "카드 기울이기",
  description:
    "마우스를 올리면 카드가 3D로 살짝 기울어져요.",
  component: Tilt,
  code: {
    html: `<div class="scene">
  <div class="card">
    <h3>Hover me</h3>
    <p>카드가 3D로 기울어져요</p>
  </div>
</div>`,
    css: `.scene {
  perspective: 600px;
}

.card {
  width: 220px;
  padding: 24px;
  transition: transform 0.3s;
}

.card:hover {
  transform: rotateX(12deg) rotateY(-12deg);
}`,
  },
};