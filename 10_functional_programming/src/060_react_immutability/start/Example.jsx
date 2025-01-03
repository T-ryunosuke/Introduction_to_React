import { useState } from "react";

const Child = ({ state, setState }) => {
  //
  // const increment = () => {
  //   setState((prev) => {
  //     prev.value += 1;
  //     return prev;
  //   });
  // };
  // 更新関数のコールバック関数でも引数で渡ってきた値を直接変更しないようにする
  // const increment = () => {
  //   setState((prev) => {
  //     const newState = { value: prev.value += 1 };
  //     return newState;
  //   });
  // };
  // ⬇︎ 簡略化
  const increment = () => {
    setState((prev) => ({ value: prev.value + 1 }));
  };

  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
