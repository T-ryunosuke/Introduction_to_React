import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  debugger;
  switch (type) {
    case "change":
      return { ...state, [payload.name]: payload.value };
    case "add":
      return { ...state, result: state.a + state.b };
    case "minus":
      return { ...state, result: state.a - state.b };
    case "divide":
      return { ...state, result: state.a / state.b };
    case "multiply":
      return { ...state, result: state.a * state.b };
    // actionが上記のケース以外だった場合
    default:
      throw new Error("不明なactionです");
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({ type: "change", payload: {name: e.target.name, value: parseInt(e.target.value) } });
  }
  return (
    <>
      {/* 練習問題
      useReducerを使って完成コードと同じ機能を作成してください。 */}
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      {/* selectのvalue属性とその子要素であるoptionタグのvalue属性はHTMLの標準仕様で自動的に連動する仕組み */}
      <select onChange={calculate}>
        {CALC_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
