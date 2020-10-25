import React, { useState } from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return <div key={index}
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  >{todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div></div>
    ;
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

const RemoveAll = ({ removeAllTodos }) => {
  return (
    <div>
      <button onClick={() => removeAllTodos()}>Delete All</button>
    </div>
  )
}


const App = () => {
  const [todos, setTodo] = useState([
    {
      text: "lorem impulse",
      isCompleted: false
    },
    {
      text: "lorem impulse",
      isCompleted: false
    },
    {
      text: "lorem impulse",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodo(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);

  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const removeAllTodos = () => {
    setTodo([]);

  }

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo, i) => {
        console.log("todo : ", todo)
        return <Todo todo={todo} index={i} key={i} completeTodo={completeTodo} removeTodo={removeTodo} />;
      })}
      <TodoForm addTodo={addTodo} />
      <RemoveAll removeAllTodos={removeAllTodos} />
    </div>
  );
};

export default App;
