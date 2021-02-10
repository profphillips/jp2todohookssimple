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
    <div style={{maxWidth:"500px", marginLeft:"10px"}}>
      <h1>JP2 TODO HOOKS SIMPLIFIED</h1>
      <p>Updated, styled, and simplified by JP ... work in progress</p>
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
