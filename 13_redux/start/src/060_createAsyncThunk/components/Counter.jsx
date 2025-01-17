import { useSelector } from "react-redux";

import {
  add,
  minus,
  addAsyncWithStatus,
} from "../store/modules/counter";
import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  // 現在のstateの中にあるstatusを取得
  const status = useSelector(state => state.counter.status);
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType="+" actionCreator={add} />
      <CounterButton step={2} calcType="-" actionCreator={minus} />
      <CounterButton
        step={2}
        calcType="非同期(+)"
        actionCreator={addAsyncWithStatus}
      />
      <h3>{status}</h3>
    </>
  );
};
export default Counter;
