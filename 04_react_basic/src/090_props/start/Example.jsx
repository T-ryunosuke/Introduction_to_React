import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = {color: "red", num: 123}
  return (
    <>
      <Child
        // 元々オブジェクトで値を持っている場合にはスプレッド演算子でまとめて渡せる
        {...o}
        fn={hello}
        // 真偽値を送る場合には値を代入しなくていい
        // この記述だけでboolを受け取る側ではtrueになる
        bool
        // 内側の黄色い{}がオブジェクトリテラルのもので、外側の青い{}がJSX内でJSのコードを実行するためのもの
        obj={{ name: "Tom", age: "18" }}
      />
      {/* <Child color="red" /> */}
    </>
  );
};

export default Example;
