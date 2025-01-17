import { useState } from "react";

import { useUpdateTodo } from "../context/TodoContext";

const Form = () => {
  const dispatch = useUpdateTodo();

  const [enteredTodo, setEnteredTodo] = useState("");

  const createTodo = (newTodo) => {
    dispatch({ type: "new", newTodo: newTodo });
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
