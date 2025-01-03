import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

// 上記ExampleコンポーネントのJSXをBabelで変換
//React.createElement(
//   "div",
//   null,
//   React.createElement(Bye, null)
// );

// ByeコンポーネントもReact.createElementで作られるオブジェクトになっているということは、つまりコンポーネントもReact要素であるということ。


console.log(Example());

export default Example;
