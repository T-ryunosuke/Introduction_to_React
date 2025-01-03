const print = callback => {
  // 関数が渡されていることの確認
  console.log(callback);
  const result = callback(8);
  console.log(result);
}
// 引数に初期値設定(今は8が渡っているものの、ない時はnumberに3があてがわれる)
const fn = (number = 3) => {
  return number * 2;
}

// debuggerでコードの流れを確認
debugger;
print(fn);
