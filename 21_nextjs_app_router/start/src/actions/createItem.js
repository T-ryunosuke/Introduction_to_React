"use server"
import { ENDPOINT } from "@/constants";

// JSON Serverにデータを登録する処理をする関数

// formDataにはformの情報がオブジェクトで渡される
export async function createItem(state, formData) {
  // "use server"
  const id = formData.get("id");
  const title = formData.get("title");
  if (id === "" || title === "") {
    return { msg: "入力フィールドが空です" };
  }

  try {
    // throw "error"
    const res = await fetch(ENDPOINT, {
      method: "POST",
      // 送信するデータがJSON形式であることをメタデータとしてサーバーに伝える
      headers: { "Content-Types": "application/json" },
      // bodyはリクエストの内容そのもので、JSON形式の文字列に変換して引数のオブジェクトを送信するデータとして設定する。
      body: JSON.stringify({ id, title }),
    });
    // thenで繋げてもいいが一貫性や可読性を鑑みて繋げずにawaitを使用している。
    // またエラーハンドリングも分けることでしやすくなる。
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const data = await res.json();
    return { msg: `${data.id}:${data.title}の登録が完了しました。` };
  } catch (e) {
    // エラー時の処理はstatusも変えないと正常な処理として扱われてしまう。
    return { msg: "登録に失敗しました" };
  }
}
