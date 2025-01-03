import { useReducer, createContext, useContext } from "react";

const CalculateContext = createContext();
const CalculateUpdateContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      // Inputのイベントで状態を変更しても良いが保守性が悪くなるので、状態管理をする際は専用のファイルで管理するのが良い
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

export const CalcProvider = ({ children }) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  }

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalculateContext.Provider value={state}>
      <CalculateUpdateContext.Provider value={dispatch}>
        {children}
      </CalculateUpdateContext.Provider>
    </CalculateContext.Provider>
  );
};

export const useCalc = () => useContext(CalculateContext);
export const useUpdateCalc = () => useContext(CalculateUpdateContext);
