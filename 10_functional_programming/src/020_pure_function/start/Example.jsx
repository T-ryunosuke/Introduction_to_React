const Example = () => {
  const val1 = 1, val2 = 2;
  // 順数関数
  const add1 = (val1, val2) => {
    return val1 + val2;
  }
  // 副作用
  // 関数外のデータ(val2)を参照しているため、決まった引数(val1)があっても、val2の値によって戻り値が変動してしまうため結果が引数に依存しておらず決まった戻り値とは言えない。
  const add2 = (val1) => {
    return val1 + val2;
  };
  // add関数の外側で定義された変数(result)に影響を及ぼしたり、consoleにログを表示するという操作が関数外に影響を及ぼしているため副作用になる。
  let result;
  const add3 = (val1, val2) => {
    console.log(val1);
    result = val1 + val2;
    return val1 + val2;
  };

  return (
    <>
      <p>純粋関数:{add1(val1, val2)}</p>
      <p>副作用1:{add2(val1)}</p>
      <p>副作用2:{add3(val1, val2)}</p>
    </>
  );
};

export default Example;
