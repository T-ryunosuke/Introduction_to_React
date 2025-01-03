import Item from "./Item";
import { useTodo } from "../context/TodoContext";

const List = () => {
    const todos = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
