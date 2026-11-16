import type { Feature } from "../../../../../types/feature";
import Shine from "./Shine";

export const shine: Feature = {
  id: "shine",
  fileName: "반짝이는 카드",
  title: "카드 반짝이기",
  description:
    "마우스를 올리면 빛줄기가 카드를 가로질러 지나가요.",
  component: Shine,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>빛이 지나가며 반짝여요</p>
</div>`,
    css: `.card {
  position: relative;
  width: 220px;
  padding: 24px;
  overflow: hidden;
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.25),
    transparent
  );
  transition: left 0.6s;
}

.card:hover::after {
  left: 140%;
}`,
  },
};