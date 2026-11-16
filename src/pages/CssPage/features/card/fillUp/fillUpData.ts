import type { Feature } from "../../../../../types/feature";
import FillUp from "./FillUp";

export const fillUp: Feature = {
  id: "fill-up",
  fileName: "차오르는 배경",
  title: "배경 차오르기",
  description:
    "마우스를 올리면 배경색이 아래에서 위로 차올라요.",
  component: FillUp,
  code: {
    html: `<div class="card">
  <h3>Hover me</h3>
  <p>배경이 아래에서 차올라요</p>
</div>`,
    css: `.card {
  position: relative;
  width: 220px;
  padding: 24px;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background: #007acc;
  transition: height 0.35s;
}

.card:hover::before {
  height: 100%;
}

.card h3,
.card p {
  position: relative;
  z-index: 1;
}`,
  },
};