import { useState } from "react";

import { useUpdateTodo } from "../context/TodoContext";


const Item = ({todo}) => {
  const dispatch = useUpdateTodo();

  const [editingContent, setEditingContent] = useState(todo.content);

  const deleteTodo = (id) => {
    dispatch({ type: "complete", id: id });
  };

  const updateTodo = (newTodo) => {
    dispatch({ type: "update", newTodo: newTodo });
  };

  const handleDoubleClick = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, content: editingContent, editing: !todo.editing };
    updateTodo(newTodo);
  };

  return (
    <div>
      <button onClick={() => deleteTodo(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          // 編集モード時には入力フィールドを表示
          <input
            type="text"
            value={editingContent}
            onChange={(e) => setEditingContent(e.target.value)}
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
