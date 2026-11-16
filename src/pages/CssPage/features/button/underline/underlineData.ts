import type { Feature } from "../../../../../types/feature";
import Underline from "./Underline";

export const underline: Feature = {
  id: "underline",
  fileName: "밑줄 늘어나기",
  title: "밑줄",
  description:
    "마우스를 올리면 밑줄이 왼쪽에서 오른쪽으로 늘어나요.",
  component: Underline,
  code: {
    html: `<button class="button">Hover me</button>`,
    css: `.button {
  position: relative;
  padding: 10px 4px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #007acc;
  transition: width 0.3s;
}

.button:hover::after {
  width: 100%;
}`,
  },
};