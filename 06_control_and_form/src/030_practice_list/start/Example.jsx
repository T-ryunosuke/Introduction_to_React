import Profile from "./components/Profile";

const Example = () => {
  const persons = [
    { name: "Geo", age: "18", hobbies: ["sports", "music"] },
    { name: "Tom", age: "25", hobbies: ["movie", "music"] },
    { name: "Lisa", age: "21", hobbies: ["sports", "travel", "game"] }
  ];

  return (
    <>
      {/* 練習問題
      Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。 */}
      <ul>
        {persons.map((person) =>  (
          <li key={person.name}>
            <Profile  {...person} />
          </li>
        ))}

      </ul>
    </>
  );
};

export default Example;
