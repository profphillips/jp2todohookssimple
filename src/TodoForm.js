import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
      <form style={{marginLeft:0}}
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
          style={{width:"90%", padding:"10px"}}
        />
      </form>
  );
}
export default TodoForm;
