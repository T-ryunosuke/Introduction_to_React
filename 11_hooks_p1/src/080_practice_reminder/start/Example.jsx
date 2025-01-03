import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
    {/* 練習問題
    ①Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。
    ②タイトルをダブルクリックするとタイトルを変更出来るようにしましょう
    ③ReducerとContextを使ってTodoをグローバルなステートにしましょう */}
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
