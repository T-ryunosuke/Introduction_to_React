// 非同期処理
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    // resolveがないとPromiseは未解決のままとなるためthenに進まない（thenに引数も渡せる）
    resolve(a);
  }, 5000);
})
  // thenメソッドはresolveがないと実行されない
  .then((b) => {
    console.log(b);
    // 次のthenメソッドに引数を渡すには戻り値を設定する必要がある
    return b + 1;
  })
  // thenメソッドは繋げることができ、前のthenブロックの戻り値が次のthenの引数に入る
  .then((c) => {
    console.log(c);
  })
  // rejectでもcatchが実行されるが、なくてもcatch自身でPromise内で発生した例外を検知してcatchは実行される
  .catch(() => {
    console.log("catchの実行");
  });

console.log(a);
