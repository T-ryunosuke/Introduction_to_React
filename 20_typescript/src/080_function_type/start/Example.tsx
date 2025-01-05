const Example = () => {
  // 練習用
  // 引数の型定義
  function sum1(x: number, y: number) {
    return x + y;
  }
  console.log(sum1(1, 9));

  // アロー関数ver
  const sum2 = (x: number, y: number) => x + y;
  console.log(sum2(1, 19));

  // デフォルト値の設定
  function sum3(x: number, y: number = 29) {
    return x + y;
  }
  console.log(sum3(1));

  // 「?」を使い型定義した引数を必須ではなくす
  function sum4(x: number, y?: number) {
    // yにはundefinedが入るので、それでも実行できる処理なら問題ない。
    console.log(y);
  }
  // 戻り値はないので自動で戻り値の型がvoidになりundefinedが返る
  console.log(sum4(40));

  // 戻り値の型定義
  const sum5 = (x: number, y: number): number => x + y;
  console.log(sum5(1, 49));

  // 戻り値が存在しない場合に使うvoidを使った型定義
  function sum6(x: number, y: number = 59): void {
    // 「60」がブラウザコンソールに表示される
    console.log(x + y);
  }
  // 戻り値がないため「undefined」がブラウザコンソールに表示される
  console.log(sum6(1));

  // typeを使った関数自体の型定義
  type Sum = (x: number, y: number) => number;
  const sum7: Sum = (x, y) => x + y;
  console.log(sum7(1, 69));
};

export default Example;
