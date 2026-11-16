import type { Feature } from "../../../../../types/feature";
import Border from "./Border";

export const borderData: Feature = {
  id: "border",
  fileName: "테두리 색 변경",
  title: "테두리 색 변경",
  description:
    "마우스를 올리면 테두리 색이 바뀌는 효과예요.",
  component: Border,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>마우스를 올리면 테두리 색이 바뀌어요</p>
</div>`,
    css: `.card {
  width: 220px;
  padding: 24px;
  border: 2px solid #3c3c3c;
  border-radius: 8px;
  transition: border-color 0.25s;
}

.card:hover {
  border-color: #fff;
}`,
  },
};