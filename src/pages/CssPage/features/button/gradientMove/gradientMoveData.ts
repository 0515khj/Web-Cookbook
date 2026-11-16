import type { Feature } from "../../../../../types/feature";
import GradientMove from "./GradientMove";

export const gradientMove: Feature = {
  id: "gradient-move",
  fileName: "움직이는 그라데이션",
  title: "그라데이션 움직이기",
  description:
    "마우스를 올리면 그라데이션이 흘러가요.",
  component: GradientMove,
  code: {
    html: `<button class="button">Hover me</button>`,
    css: `.button {
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(90deg, #007acc, #8a2be2, #007acc);
  background-size: 200% 100%;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-position 0.5s;
}

.button:hover {
  background-position: 100% 0;
}`,
  },
};