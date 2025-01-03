import { useSelector } from "react-redux";
import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  // 表示をstateのプロパティで分けるなら戻り値でプロパティまで指定しない
  // const state = useSelector((state) => state.counter);
  const state = useSelector((state) => state);

  // const state = useCounter();

  return (
    <h3>
      {state.counter}:{state.counter2}
    </h3>
  );
};

export default CounterResult;
