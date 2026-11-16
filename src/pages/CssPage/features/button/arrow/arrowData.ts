import type { Feature } from "../../../../../types/feature";
import Arrow from "./Arrow";

export const arrow: Feature = {
  id: "arrow",
  fileName: "화살표 이동",
  title: "화살표 이동",
  description:
    "마우스를 올리면 화살표가 오른쪽으로 밀려나요.",
  component: Arrow,
  code: {
    html: `<button class="button">
  더 보기
  <span class="icon">→</span>
</button>`,
    css: `.button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: #37373d;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}

.icon {
  transition: transform 0.25s;
}

.button:hover .icon {
  transform: translateX(6px);
}`,
  },
};