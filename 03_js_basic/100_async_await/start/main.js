// 非同期処理（Promise）
let a = 0;

// initは関数宣言だからどこからでも呼び出せる
init();

// awaitを使った関数の先頭にasyncと記述する。
async function init() {
    try {
        await new Promise((resolve, reject) => {
        setTimeout(() => {
          a = 1;
          // rejectの引数はcatchの引数に渡る
          reject(a);
        }, 2000);
        });
        console.log(a);
    // 受け取る変数名はeやerrorであることが一般的
    } catch (e) {
        console.log("catchの実行, e");
    }
};


// 複数の非同期処理の結果をまとめる
const fetchData1 = async () => {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("データ1"), 5000)
  );
  return result1;
};

const fetchData2 = async () => {
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("データ2"), 10000)
  );
  return result2;
};

const init1 = async () => {
  const result1 = await fetchData1(); // 5秒後
  const result2 = await fetchData2(); // fetchData1の10秒後
  console.log("取得したデータ:", result1, result2);
};

init1();
