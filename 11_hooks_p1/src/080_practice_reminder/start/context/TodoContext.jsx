import { useReducer, createContext, useContext } from "react";

const TodoContext = createContext();
const TodoUpdateContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  }
];

const reducer = (todos, action) => {
  switch (action.type) {
    case "new": {
      const { newTodo } = action;
      return [...todos, newTodo ];
    }
    case "update": {
      const { newTodo } = action;
      return todos.map((todo) =>
        todo.id === newTodo.id ? { ...todo, ...newTodo } : todo
      );
    }
    case "complete": {
      const { id } = action;
      return todos.filter((todo) => todo.id !== id);
    }
    default:
      throw new Error("operator is invalid");
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoUpdateContext.Provider value={dispatch}>
        {children}
      </TodoUpdateContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
export const useUpdateTodo = () => useContext(TodoUpdateContext);
