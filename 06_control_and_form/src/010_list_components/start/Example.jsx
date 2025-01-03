
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  // for-ofの構文：配列のanimalsから一つずつ要素がanimalに渡されてループ処理が行われる
  // JSXの中にかけるのは式だけで文はNGなのでreturn外に記述している
  for (const animal of animals) {
    // liタグのJSX部分は最終的にオブジェクトに変換されるので、そのオブジェクトがpushメソッドによって配列の末尾に追加されていく
    animalList.push(<li key="animal">{animal}</li>);
  }
  const helloAnimals = animals.map((animal) => <li key={animal}>Hello,{animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloAnimals}
        {/* mapを使う場合、式になるのでreturn内に入れることができる */}
        {animals.map((animal) => <li key={animal}>Hello,{animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
