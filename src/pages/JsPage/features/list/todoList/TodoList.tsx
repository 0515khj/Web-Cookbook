import { useState } from "react";
import { TodoListWrap } from "./todoListStyle";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodoListWrap className="todoList">
      <div className="todoListBox">
        <div className="todoListForm">
          <input
            className="todoListInput"
            value={text}
            placeholder="할 일을 입력하세요"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button className="todoListAdd" onClick={addTodo}>
            추가
          </button>
        </div>

        <ul className="todoListItems">
          {todos.map((t) => (
            <li
              key={t.id}
              className={t.done ? "todoListItem done" : "todoListItem"}
            >
              <span className="todoListText" onClick={() => toggleTodo(t.id)}>
                {t.text}
              </span>
              <button className="todoListDelete" onClick={() => deleteTodo(t.id)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </TodoListWrap>
  );
};

export default TodoList;