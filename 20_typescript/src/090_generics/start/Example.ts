const Example = () => {
  // 練習用
  const repeatStr = (times: number, value: string): string[] => {
    return new Array(times).fill(value);
  };

  const repeatNum = (times: number, value: number): number[] => {
    return new Array(times).fill(value);
  };

  const strArry = repeatStr(3, "hello");
  const numArry = repeatNum(3, 10);


  // ジェネリクスを用いた関数定義
  const repeat = <T>(times: number, value: T): T[] => {
    return new Array(times).fill(value);
  };
  const strArryGen = repeat<string>(3, "おはよう");
  const numArryGen = repeat<number>(3, 10);
  const litArryGen = repeat<"good">(3, "good");


  console.log(strArry);
  console.log(numArry);
  console.log(strArryGen);
  console.log(numArryGen);
  console.log(litArryGen);
};

export default Example;
