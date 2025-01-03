// 外部スコープで定義した変数を使っていて、関数コンポーネントChildを複数表示した時に別の戻り値が返ってしまっている。
let value = 0;
const Child = () => {
  value++;
  return <div>{value}</div>
}

// 上記と同じ処理をしたいなら以下のようにする。
// 関数コンポーネントChildPureを複数表示した時に別の戻り値が返っているものの、それは引数(value)が変わっているからなので問題ではない。
const ChildPure = ({value}) => {
  return <div>{value}</div>;
};

const Example = () => {
  let value = 0;
  return (
    <>
      <Child />
      <Child />
      <Child />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
