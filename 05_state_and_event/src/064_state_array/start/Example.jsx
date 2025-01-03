import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums];
    // popメソッドで配列の末尾が一つ削除されて、その削除した値を返す
    const value = newNums.pop();
    // unshiftメソッドで引数を先頭に追加する
    newNums.unshift(value);
    setNums(newNums);

  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>シャッフル</button>
    </>
  );
};

export default Example;
