import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
      <form style={{marginLeft:15}}
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <input
          type="text"
          value={value}
          placeholder="Type new todo and press enter"
          onChange={handleChange}
          label="Add New Todo"
          autoFocus={true}
          style={{color:"red", width:"80%"}}
        />
      </form>
  );
}
export default TodoForm;
