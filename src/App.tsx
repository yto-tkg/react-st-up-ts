import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/Todo";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((result) => {
        setTodos(result.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <p>
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        </p>
      ))}
    </div>
  );
}
