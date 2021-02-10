import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          {/* style for the entire task */}
          <span style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              tabIndex={-1}
              checked={completed}
              // onClick={() => toggleTodo(id)}
              onChange={() => toggleTodo(id)}
            />
            <span
              style={{
                marginLeft: "5px",
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "green" : "red",
              }}
            >
              {task}
            </span>
            {/* </span> */}
            <span style={{ marginLeft: "auto", float: "right" }}>
              <button
                aria-label="Delete"
                onClick={() => removeTodo(id)}
                style={{
                  marginLeft: 5,
                  padding: 0,
                  width: "60px",
                  height: "25px",
                }}
              >
                Delete
              </button>
              <button
                aria-label="Edit"
                onClick={toggle}
                style={{
                  marginLeft: 5,
                  padding: 0,
                  width: "60px",
                  height: "25px",
                }}
              >
                Edit
              </button>
            </span>
          </span>
        </>
      )}
    </div>
  );
}

export default Todo;
