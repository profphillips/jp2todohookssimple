import React from "react";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <input
        type="text"
        margin="normal"
        value={value}
        onChange={handleChange}
        // fullWidth
        autoFocus
        style={{color:"blue", width:"80%"}}
      />
    </form>
  );
}
export default EditTodoForm;
