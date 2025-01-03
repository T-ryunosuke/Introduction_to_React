import { useState } from "react";

import { Form } from "./Form";
import { List } from "./List";

export const Todo = () => {
  const [input, setInput] = useState("");
  const todosList = [
    { id: 1, content: "店予約する" },
    {id: 2, content: "卵買う"},
    {id: 3, content: "郵便出す"}
  ];
  const [todoLists, setTodoLists] = useState(todosList);
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const addTodoLists = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTodoLists = [
      ...todoLists,
      { id: Math.floor(Math.random() * 1e5), content: input }
    ];
    setTodoLists(newTodoLists);
    setInput("");
  };

  const onClickEnd = (id) => {
    // filterメソッドはtrueになったものを新しい配列の要素としてのこす
    const newTodoLists = todoLists.filter(todo => {
      // !==で一致しないものを返す
      return todo.id !== id;
    })
    setTodoLists(newTodoLists);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Reminder</h2>
      <List todoLists={todoLists} onClickEnd={onClickEnd} />
      <Form
        input={input}
        changeInput={changeInput}
        addTodoLists={addTodoLists}
      />
    </>
  );
};
