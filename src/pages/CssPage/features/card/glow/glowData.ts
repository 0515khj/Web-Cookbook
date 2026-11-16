import type { Feature } from "../../../../../types/feature";
import Glow from "./Glow";

export const glow: Feature = {
  id: "glow",
  fileName: "빛나는 카드",
  title: "빛나는 카드",
  description:
    "마우스를 올리면 테두리와 함께 빛이 번지는 효과예요.",
  component: Glow,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>마우스를 올리면 파란 빛이 나요</p>
</div>`,
    css: `.card {
  width: 220px;
  padding: 24px;
  border: 1px solid #3c3c3c;
  border-radius: 8px;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.card:hover {
  border-color: #007acc;
  box-shadow: 0 0 16px rgba(0, 122, 204, 0.7);
}`,
  },
};