import { useState } from "react";

// export default (initialVal) => {
// const useInputState = (initialVal) => {

function useInputState(initialVal) {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  
  return [value, handleChange, reset];
}

export default useInputState;
