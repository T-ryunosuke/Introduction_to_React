import { produce } from "immer";

const state = {
  nome: "Tom",
  hobbies: ["tennis", "soccer"]
}

// 第一引数にコピー元のオブジェクトを、第二引数にコールバック関数を定義する
produce(state, draft => {
  draft.name = "John";
  console.log(draft);
})
