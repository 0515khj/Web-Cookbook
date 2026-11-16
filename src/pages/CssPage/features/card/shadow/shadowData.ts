import type { Feature } from "../../../../../types/feature";
import Shadow from "./Shadow";

export const shadow: Feature = {
  id: "shadow",
  fileName: "그림자 생기기",
  title: "그림자 생기기",
  description:
    "마우스를 올리면 그림자가 생기는 효과예요.",
  component: Shadow,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>마우스를 올리면 그림자가 생겨요</p>
</div>`,
    css: `.card {
  width: 220px;
  padding: 24px;
  border-radius: 8px;
  transition: box-shadow 0.25s;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.25);
}`,
  },
};