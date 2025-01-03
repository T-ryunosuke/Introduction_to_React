import { useCalc, useUpdateCalc } from "../context/CalculateContext";

export const Input = ({ name }) => {
  const state = useCalc();
  const dispatch = useUpdateCalc();

  const numChangeHandler = (e) => {
    // ここでparseIntを使って状態を変更しても良いが保守性が悪くなるので、状態管理をする際は専用のファイルで管理するのが良い
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        // ブラケット記法(nameはpropsのためaかbが渡ってくるので、以下のようにすることでstate.aかstate.bを取得できる)
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  );
};
