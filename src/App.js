import React, { useState } from "react";

const Todo = ({ text, index }) => {
  return <div key={index}>{text}</div>;
};
const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("")
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Enter Todo"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
    </form>
  );
};
const App = () => {
  const [getTodo, setTodo] = useState([
    {
      text: "lorem impulse"
    },
    {
      text: "lorem impulse"
    },
    {
      text: "lorem impulse"
    }
  ]);
  const addTodo = text => {
    setTodo([
      ...getTodo,
      {
        text
      }
    ]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      {getTodo.map((todo, i) => {
        return <Todo text={todo.text} index={i} />;
      })}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
