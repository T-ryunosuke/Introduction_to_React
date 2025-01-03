// それぞれコンソールログで使うためにインポート
import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Example = () => {
  const sample1 = <h1 className="greeting">Hello World</h1>;

  // 以下3つのコンソール表示は全て同じになる
  console.log(sample1);

  console.log(
    _jsx("h1", {
      className: "greeting",
      children: "Hello World",
    })
  );

  console.log(
    // 第一引数にタグの種類、第二引数にpropsの値（オブジェクト形式）、第三引数にはタグに挟まれた要素が入る
    React.createElement("h1", { className: "greeting" }, "Hello World")
  );

  // Babelに変換されてsample1が関数になった形(React16以前)
  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(sample2);

  console.log(
    _jsxs("div", {
      children: [
        _jsx("h1", { children: "Hello!" }),
        _jsx("h2", { children: "Good to see you." }),
      ],
    })
  );

  // 第三引数の挟まれた要素もまたReactのcreateElementで仮想DOMとして作成される
  console.log(
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello!"),
      React.createElement("h2", null, "Good to see you.")
    )
  );

  // Babelに変換されてsample2が関数になった形(React16以前)
  // React.createElement("div",null,
  //   React.createElement("h1", null, "Hello!"),
  //   React.createElement("h2", null, "Good to see you.")
  // );

  // JSXのコードから作成される仮想DOMにあるpropsを取得
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;
