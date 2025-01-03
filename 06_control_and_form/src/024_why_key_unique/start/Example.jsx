import "../end/Example.css";
import { useState } from "react";

const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />
  });

  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()]);

  const inputKeyList = inputs.map(input => <li key={input.key}>{input.key}:{input.value}</li>);

  const inputIndexList = inputs.map((input, index) => <li key={index}>{input.key}:{input.value}</li>);

  const unshiftInput = () => {
    setInputs((prev) => [inputFact(), ...prev])
  }

  return (
    <>
      <button onClick={unshiftInput}>先頭に追加</button>
      <div className="flex">
        <div>
          <strong>{`key={ユニークキー}`}</strong>
          <ul>{inputKeyList}</ul>
        </div>

        <div>
          <strong>{`key={index}`}</strong>
          <ul>{inputIndexList}</ul>
        </div>
      </div>
    </>
  );
};

export default Example;
