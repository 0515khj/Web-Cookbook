import type { Feature } from "../../../../../types/feature";
import TodoList from "./TodoList";

export const todoList: Feature = {
  id: "todo-list",
  fileName: "할 일 목록",
  title: "할 일 목록",
  description:
    "할 일을 입력하고 추가하면 목록에 쌓여요. 글자를 누르면 완료(취소선) 처리되고, ✕를 누르면 삭제돼요.",
  component: TodoList,
  code: {
    html: `<div class="todo-box">
  <div class="todo-form">
    <input id="input" class="todo-input" placeholder="할 일을 입력하세요" />
    <button id="add" class="todo-add">추가</button>
  </div>
  <ul id="list" class="todo-items"></ul>
</div>`,
    css: `.todo-box {
  width: 280px;
}

.todo-form {
  display: flex;
  gap: 8px;
}

.todo-input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  background: #1e1e1e;
  color: #ffffff;
  outline: none;
}

.todo-input:focus {
  border-color: #007acc;
}

.todo-add {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  background: #007acc;
  color: #ffffff;
  cursor: pointer;
}

.todo-items {
  margin-top: 12px;
  padding: 0;
  list-style: none;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  margin-top: 6px;
  background: #252526;
  border-radius: 4px;
}

.todo-text {
  flex: 1;
  cursor: pointer;
  color: #ffffff;
}

.todo-item.done .todo-text {
  color: #858585;
  text-decoration: line-through;
}

.todo-delete {
  border: none;
  background: none;
  color: #858585;
  cursor: pointer;
}

.todo-delete:hover {
  color: #e5484d;
}`,
    js: `const input = document.getElementById("input");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const item = document.createElement("li");
  item.className = "todo-item";

  const label = document.createElement("span");
  label.className = "todo-text";
  label.textContent = text;
  label.onclick = () => item.classList.toggle("done");

  const remove = document.createElement("button");
  remove.className = "todo-delete";
  remove.textContent = "✕";
  remove.onclick = () => item.remove();

  item.append(label, remove);
  list.appendChild(item);
  input.value = "";
}

addButton.onclick = addTodo;
input.onkeydown = (e) => {
  if (e.key === "Enter") addTodo();
};`,
  },
};