import type { Feature } from "../../../../../types/feature";
import SearchFilter from "./SearchFilter";

export const searchFilter: Feature = {
  id: "search-filter",
  fileName: "검색 필터",
  title: "검색 필터",
  description:
    "입력창에 글자를 치면 목록이 바로 걸러져요. ",
  component: SearchFilter,
  code: {
    html: `<div class="search-box">
  <input id="search" class="search-input" placeholder="과일을 검색하세요" />
  <ul id="list" class="search-items"></ul>
</div>`,
    css: `.search-box {
  width: 240px;
}

.search-input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  background: #1e1e1e;
  color: #ffffff;
  outline: none;
  box-sizing: border-box;
}

.search-input:focus {
  border-color: #007acc;
}

.search-items {
  margin-top: 10px;
  padding: 0;
  list-style: none;
}

.search-item {
  padding: 8px 10px;
  margin-top: 6px;
  background: #252526;
  border-radius: 4px;
  color: #ffffff;
}`,
    js: `const items = ["사과", "바나나", "포도", "딸기", "수박", "오렌지", "복숭아"];
const input = document.getElementById("search");
const list = document.getElementById("list");

function render(keyword) {
  list.innerHTML = "";

  items
    .filter((item) => item.includes(keyword))
    .forEach((item) => {
      const li = document.createElement("li");
      li.className = "search-item";
      li.textContent = item;
      list.appendChild(li);
    });
}

input.oninput = () => render(input.value);
render("");`,
  },
};