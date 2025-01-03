// ES6以前の関数
function fn(number) {
  return number * 2;
}
console.log(fn(2));


// アロー関数
const fnArrow = (number) => {
  return number * 2;
};
console.log(fnArrow(2));

// 簡略化
// 引数が一つなら()を外せる
// 本文が1行なら{}とreturnを省略可能
const fnArrow2 = number => number * 2;
console.log(fnArrow2(2));


// 戻り値がオブジェクトの時
const fnArrowObj = (number) => {
  return { result: number * 2 };
};
console.log(fnArrowObj(2));

// 簡略化
// 暗黙の戻り値を使用する場合は()で囲む
// {}だけだと関数の本文と解釈されてしまうため
const fnArrowObj2 = number => ({ result: number * 2 });
console.log(fnArrowObj2(2));
