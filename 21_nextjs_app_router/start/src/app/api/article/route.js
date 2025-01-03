// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT).then(res => res.json())
  return Response.json(data)
}

// form.jsからリクエストが来る
export async function POST(request) {
  // formの情報を取得
  const formData = await request.formData();
  // formで設定しているそれぞれのnameプロパティを確認しgetで指定することで該当の入力値を取得できる。
  const id = formData.get("id");
  const title = formData.get("title");

  // 取得した入力値のバリデーションチェック。
  if (id === "" || title === "") {
    return Response.json({ msg: "入力フィールドが空です" }, { status: 500 });
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
    return Response.json(data);
  } catch (e) {
    // エラー時の処理はstatusも変えないと正常な処理として扱われてしまう。
    return Response.json({ msg: "登録に失敗しました" }, {status: 500});
  }
}
