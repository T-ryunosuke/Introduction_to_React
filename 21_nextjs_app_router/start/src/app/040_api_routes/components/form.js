import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [msg, setMsg] = useState("")

  const onSubmit = (e) => {
    // submit時のデフォルト制御を停止
    e.preventDefault();
    // イベントからform内容を取得
    const form = e.target;
    // FromDataでformを扱いやすく加工する
    const formData = new FormData(form);

    // formタグで指定したmethodと、
    fetch('/api/article', { method: form.method, body: formData }).then((res) => {
      if(!res.ok) {
        return res.json().then(data => {
          return data.msg
        })
      }
      return res.json().then(data => {
        return `${data.id}:${data.title}の登録が完了しました。`
      })
      // 前のthenのコールバック関数の戻り値が次のthenの引数に入る
    }).then((msg) => {
      // msgをstateで更新してこのJSXの一番下で表示している。
      setMsg(msg)
    });

  }
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div>
        <label>
          {" "}
          Id:
          <input type="number" name="id" value={newId} onChange={(e) => setNewId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input name="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: 'red' }}>{msg}</div>
    </form>
  );
}
