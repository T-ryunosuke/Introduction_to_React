// DOMの取得
const h1Element = document.querySelector("h1");
// dirはJSでオブジェクトを表示するためのメソッド
// オブジェクトのプロパティ構造を詳しく調べることができる
console.dir(h1Element);
console.log(h1Element.textContent);

h1Element.textContent = "変更後のタイトル"


const btnEl = document.querySelector("button");
// イベントリスナーで関数を登録
// 第一引数にはどんなアクションかというタイプを渡す
// 第二引数にはアクションが起きた時に実行したい関数を渡す
// 第二引数はコールバック関数になっていて、一般的に引数はeやev、eventと言う名前で受け取る
// この引数はイベントのオブジェクトと呼ばれ、イベントの発火に伴う情報が入っているオブジェクトになっている
// その情報の中でもよく使うプロパティが「target」
// btnEl.addEventListener("click", (e) => {
//   console.dir(e.target);
//   console.log("hello");
// })

const handleClick = (e) => {
  console.dir(e.target);
  console.log("hello");
};
btnEl.addEventListener("click", handleClick);
