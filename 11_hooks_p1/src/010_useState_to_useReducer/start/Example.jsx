import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  // useState
  const [state, setState] = useState(0);
  const countUp = () => {
    setState((prev) => ++prev);
  };

  // useReducer
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;

      case "-":
        return prev - step;

      // actionが上記のケース以外だった場合
      default:
        return new Error("不明なactionです");
      // そのまま返してもいい
      // default:
      //   return prev;
    }
    // if文
    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
  }, 0);

  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 2 });
  };

  // actionに渡す値を文字列でそのまま渡すことも一応できる
  // const rcountUp = () => {
  //   dispatch("+");
  // }
  // const rcountDown = () => {
  //   dispatch("-");
  // }

  return (
    <>
      {/* useState */}
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>

      {/* useReducer */}
      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
