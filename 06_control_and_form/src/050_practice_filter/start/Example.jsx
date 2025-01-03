import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filter, setFilter] = useState("");
  const filtering = (e) => setFilter(e.target.value );
  return (
    <>
      {/* 練習問題
      入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。 */}
      <input type="text" value={filter} onChange={filtering} />

      <ul>
        {persons.filter(persons => persons.name.includes(filter)).map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
