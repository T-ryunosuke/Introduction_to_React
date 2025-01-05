const Example = () => {
  // 練習用
  // 配列の型定義
  const arry1: number[] = [1, 2, 3];
  const arry2: string[] = ["壱", "弍", "参"];
  const arry4: Array<number> = [1, 2, 3];

  // 配列のユニオン型定義
  const arry3: (string | number)[] = [1, "弍", 3];
  const arry5: Array<string | number> = ["壱", 2, "参"];

  // オブジェクトの型定義
  const obj1: { name: string; age: number } = { name: "Taro", age: 18 };

  type Person = { name: string; age: number };
  const obj2: Person = { name: "Taro", age: 18 };

  // 「?」をつけて任意で含めることができるプロパティにする
  type People = { name: string; age?: number };
  const obj3: People = { name: "Taro" };

  // 存在しないプロパティへのアクセスはエラーとなる
  // obj1.hobby;

  // オブジェクトを含む配列
  const users: People[] = [
    { name: "Taro" }, { name: "Hanako", age: 30 }
  ];
};

export default Example;
