const Example = () => {
  // 練習用
  let str: string = "Hello";
  str = "ByeBye";
  console.log(str);

  let num: number = 111;
  console.log(num);

  // bigintはnumberで処理し切れないくらい大きな数値に使用する
  let bignum: bigint = 111n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  // 緑のnullは型を示し、青のnullは値を示している
  let nullish: null = null;
  console.log(nullish);

  let undefinedValue: undefined = undefined;
  console.log(undefinedValue);


  // リテラル型
  // 真偽値や文字列、数値などのリテラルによって型を定義する
  let trueVal: true = true;
  let num123: 123 = 123;
  let stringHello: "Hello" = "Hello";
  // 上記で設定したリテラル型以外を代入しようとした場合エラーになる
  trueVal = true;
  num123 = 123;
  stringHello = "Hello";
};

export default Example;
