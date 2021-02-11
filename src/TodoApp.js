import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

// function initialTodos() {
//   return JSON.parse(window.localStorage.getItem("todos") || "[]");
// }

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "1rem",
        maxWidth: "800px",
        padding: "1rem",
        paddingTop: "0.1rem",
        background: "#fdf8f5",
        color:"#4f4846",
      }}
    >
      <h1>JP2 TODO HOOKS SIMPLIFIED</h1>
      <h2 style={{color:"#266150"}}>Updated, styled, and simplified by JP ... work in progress</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
export default TodoApp;
