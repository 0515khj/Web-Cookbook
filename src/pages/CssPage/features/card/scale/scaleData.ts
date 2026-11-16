import type { Feature } from "../../../../../types/feature";
import Scale from "./Scale"

export const scale: Feature = {
  id: "scale",
  fileName: "커지는 카드",
  title: "커지는 카드",
  description:
    "마우스를 올리면 카드가 1.1배로 커지는 효과예요.",
  component: Scale,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>마우스를 올리면 카드가 커져요</p>
</div>`,
    css: `.card {
  width: 220px;
  padding: 24px;
  border-radius: 8px;
  transition: transform 0.25s;
}

.card:hover {
  transform: scale(1.1);
}`,
  },
};