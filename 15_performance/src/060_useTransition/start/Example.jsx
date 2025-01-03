import { useDeferredValue } from "react";
import { useTransition } from "react";
import { useState } from "react";

// 一万個のitemを作成する関数
const generateDummyItem = (num) => {
  // 渡ってきたnum分の配列要素を確保して、mapで"item {index}"を各要素に挿入している。mapはundefinedが設定されている要素はスキップしてしまうのでfillによって事前に各要素へとnullを設定している。
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  // const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    // startTransition(() => {
    //   setFilterVal(e.target.value);
    // })
    setFilterVal(e.target.value);
  };

  const filteredITems = dummyItems
    .filter((item) => {
      if (filterVal === "") return true;
      return item.includes(filterVal);
    })
    .map((item) => <li key={item}>{item}</li>);

  const deferredItems = useDeferredValue(filteredITems)

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* isPendingではstartTransitionの引数に渡したコールバック関数が実行中の時にはtrueが返され、完了したらfalseが返ってくる。 */}
      {/* {isPending && <div>Loading...</div>} */}
      <ul>{deferredItems}</ul>
    </>
  );
};

export default Example;
