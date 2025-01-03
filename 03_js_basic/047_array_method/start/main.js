const array = [10, 20, 30, 40];

// mapメソッドを使わずに同じことをする
const newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] * 2);
}
console.log(newArray);

// mapメソッド
// callback関数が配列の要素一つ一つに対して実行され、その戻り値が格納された新しい配列として定義される
const newArray2 = array.map((val) => val * 2);
console.log(newArray2);

// mapは第三引数まで取ることが可能
const newArray3 = array.map((val, i, array) => {
  console.log(val, i, array);
  return val * 3;
});
console.log(newArray3);

// filterメソッドを使わずに同じことをする
const newArray4 = [];
for (let i = 0; i < array.length; i++) {
  const val = array[i] * 2;
  if (val > 50) {
    newArray4.push(array[i] * 2);
  }
}
console.log(newArray4);

// filterメソッド
// callback関数の返す値がtrueであれば新しい配列の要素として追加される
const newArray5 = newArray2.filter((val) => val > 50);
console.log(newArray5);

// mapを使ってからfilterを使う場合の簡略化(連結)
const newArray6 = array.map((val) => val * 2).filter((val) => val > 50);
console.log(newArray6);
