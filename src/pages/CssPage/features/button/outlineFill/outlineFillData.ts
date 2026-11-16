import type { Feature } from "../../../../../types/feature";
import OutlineFill from "./OutlineFill";

export const outlineFill: Feature = {
  id: "outline-fill",
  fileName: "배경 채우기",
  title: "배경 채우기",
  description:
    "테두리만 있는 버튼이 마우스를 올리면 색으로 채워져요.",
  component: OutlineFill,
  code: {
    html: `<button class="button">Hover me</button>`,
    css: `.button {
  padding: 10px 24px;
  background: transparent;
  border: 2px solid #007acc;
  border-radius: 4px;
  color: #007acc;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
}

.button:hover {
  background: #007acc;
  color: #ffffff;
}`,
  },
};