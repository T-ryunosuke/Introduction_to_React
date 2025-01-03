import "./Expression.css";

export const Expression = () => {
  // 変数を定義して、それを{}を使うことでJSX内に埋め込む
  // {}内に埋め込むことができるのはJSの「式」であり、「文」ではない
  const title = "Expression";
  const array = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  // JSのオブジェクトとみなして扱うことができる
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;
  console.log(jsx);
  return (
    // JSのメソッドも利用可能
    // toLowerCaseメソッドは全てを小文字に変換する
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      {/* 配列の中身が展開された上で画面に表示される */}
      <h3>{array}</h3>
      {/* 関数の呼び出しも可能 */}
      <h3>{hello("Hello")}</h3>
      <h3>{/*画面上に表示されません*/}</h3>
      {/* 最終的にJSのオブジェクトに変換される */}
      {<h3>Hello JSX</h3>}
      {jsx}
      {/* booleanの値はJSXでは出力されない */}
      {bool}
    </div>
  );
}
