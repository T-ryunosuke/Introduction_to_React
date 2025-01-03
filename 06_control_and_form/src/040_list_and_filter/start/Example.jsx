import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

// 配列の要素の中に一致する文字があれば表示させる
const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const filtering = (e) => setFilterVal(e.target.value)
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={filtering} />
      <ul>
        {animals
          // includesメソッドはindexOfの代替
          .filter(animal => animal.includes(filterVal))
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
