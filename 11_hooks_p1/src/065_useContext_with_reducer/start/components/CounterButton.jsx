import { useUpdateCounter } from "../context/CounterContext";

const calculate = [
{ type: "+", step: 2 },
{ type: "-", step: 2 },
{ type: "+", step: 10 },
{ type: "-", step: 10 },
];

const CounterButton = () => {
  const dispatch = useUpdateCounter();

  const countHandler = (type, step) => {
    dispatch({ type, step });
  };

  return (
    calculate.map((calc, index) => {
      return (
        <button key={index} onClick={() => countHandler(calc.type, calc.step)}>
          {calc.type}
          {calc.step}
        </button>
      );
    })
  );
};
export default CounterButton;
