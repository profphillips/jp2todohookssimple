import React from "react";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <div>
        <ul
          style={{ margin: "20 0 0 0", padding: 0, listStyleType: "none" }}
        >
          {todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <li key={i} style={{ color: "green", padding: 10 }}>
              {/* <React.Fragment key={i}> */}
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {/* {i < todos.length - 1 && <hr />} */}
              {/* </React.Fragment> */}
            </li>
          ))}
        </ul>
      </div>
    );
  return null;
}
export default TodoList;
