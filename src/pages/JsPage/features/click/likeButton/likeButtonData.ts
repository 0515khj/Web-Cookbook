import type { Feature } from "../../../../../types/feature";
import LikeButton from "./LikeButton";

export const likeButton: Feature = {
  id: "like-button",
  fileName: "좋아요 버튼",
  title: "좋아요 버튼",
  description:
    "누르면 하트가 채워지고 숫자가 1 늘어요. 다시 누르면 취소돼요.",
  component: LikeButton,
  code: {
    html: `<button id="like" class="like-button">
  <span id="icon">♡</span>
  <span id="count">24</span>
</button>`,
    css: `.like-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 20px;
}

.like-button.liked {
  border-color: #e5484d;
  color: #e5484d;
}`,
    js: `let liked = false;
let count = 24;

const button = document.getElementById("like");
const icon = document.getElementById("icon");
const countEl = document.getElementById("count");

button.onclick = () => {
  liked = !liked;
  count += liked ? 1 : -1;
  icon.textContent = liked ? "♥" : "♡";
  countEl.textContent = count;
  button.classList.toggle("liked", liked);
};`,
  },
};