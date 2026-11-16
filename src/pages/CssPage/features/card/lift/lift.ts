import type { Feature } from "../../../../../types/feature";
import HoverCard from "./HoverCard";

export const lift: Feature = {
  id: "hover",
  fileName: "떠오르는 효과",
  title: "떠오르는 효과",
  description:
    "마우스를 올리면 카드가 위로 떠오르는 효과예요.",
  component: HoverCard,
  code: {
    html: `<div class="card">
  <h3>Hover</h3>
  <p>마우스를 올리면 카드가 떠올라요</p>
</div>`,
    css: `.card {
  width: 220px;
  padding: 24px;
  border-radius: 8px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}`,
  },
};