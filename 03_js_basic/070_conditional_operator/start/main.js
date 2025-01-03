// 三項演算子（ ? : ）

const a = true;
let resultA = a ? "true" : "false";
console.log(resultA);

// 三項演算子を使わない場合
let resultB;
if(a) {
  resultB = "true";
} else {
  resultB = "false";
}
console.log(resultB);

// returnに続けて記述する場合
// 変数aがtrueなら:の左を返し、falseなら:の右を返す
function getResult() {
  return a ? "true" : "false";
}
console.log(getResult());
