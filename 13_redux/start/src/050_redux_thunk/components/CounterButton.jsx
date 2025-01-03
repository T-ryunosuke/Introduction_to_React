import { useDispatch } from "react-redux";
// import { add, minus } from "../store/modules/counter"

// actionCreatorにadd/minus/addAsyncのどれかが入っているので作られたボタンによってdispatchで
const CounterButton = ({calcType, step, actionCreator}) => {

    const dispatch = useDispatch();
    const clickHandler = () => {
      // calcType が文字列 '+' と等しいかどうかを評価してtrueならadd、falseならminusを代入する
    //   const action = calcType === "+" ? add(step) : minus(step);
      dispatch(actionCreator(step));
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;
