import type { Feature } from "../../../../../types/feature";
import Press from "./Press";

export const press: Feature = {
  id: "press",
  fileName: "눌리는 버튼",
  title: "버튼 누르기",
  description:
    "버튼을 누르고 있는 동안 아래로 푹 눌려요.",
  component: Press,
  code: {
    html: `<button class="button">Click me</button>`,
    css: `.button {
  padding: 12px 28px;
  background: #007acc;
  border: none;
  border-radius: 6px;
  box-shadow: 0 6px 0 #005a9e;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
}

.button:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #005a9e;
}`,
  },
};