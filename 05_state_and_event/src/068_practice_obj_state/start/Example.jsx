import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    // コールバック関数にしているのは複数の更新関数を扱う場合などリアルタイム性が重要な場合に備えている
    // オブジェクトを返す場合にはオブジェクトリテラルを()で囲まないと、オブジェクトリテラルなのかアロー関数の{}なのか判別できない
    setOrder((order) => ({ ...order, item: e.target.value }));
  };
  const countUp = () => {
    setOrder((order) => ({ ...order, count: order.count + 1 }));
  };
  const countDown = () => {
    setOrder((order) => ({ ...order, count: order.count - 1 }));
  };
  return (
    <div>
      {/* 練習問題
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。 */}
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
