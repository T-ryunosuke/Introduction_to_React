// Math.maxは渡した引数の中でどれが一番大きい数値かを確認する
const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
console.log(result);

// スプレッド演算子を使用
const nums = [3, 1, 4, 1, 5, 10, 2, 6];
const result2 = Math.max(...nums);
console.log(result2);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// 配列を展開して別の配列に同じ要素が入る
let newArr = [...arr1];
// スプレッド演算子で配列を作ると同じ中身でも別の配列と認識される
console.log(newArr === arr1);

// ただ代入するだけだと同じ配列と認識される
let newArr1 = arr1;
console.log(newArr1 === arr1);

// 配列の結合
let newArr2 = [...arr1, 0, ...arr2, 10];
console.log(newArr2);

// オブジェクトに対して
const obj = { name: "Tom", age: 22 };
const newObj = { ...obj };
console.log(newObj);

// 関数に対して
// 1, 3, 4の３つの引数が渡されているが、...argAとすることでargAという一つの配列にまとめて関数内で使用できるようにしている
// この記法は可変長の引数を取る関数の定義でよく使われる
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 特定の引数だけ別の変数にして定義する場合（1だけn）
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
