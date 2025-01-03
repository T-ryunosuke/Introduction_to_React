import { useCount } from "./hooks";

const Example = () => {
  const { count, countUp } = useCount();

  return (
    <>
      {/* 練習問題
      記述を変更し、完成コードと同じ状態になるようにしてください。
      startフォルダの中にhooks.jsというファイルを作成しその中でuseCountというカスタムフックを作成してください。 */}
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
