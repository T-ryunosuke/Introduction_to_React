export const List = ({ todoLists, onClickEnd }) => {
  // 8行目のonClickEndをcompleteにして3-5の記述を残すことで、完了ボタンを押した際に起こる処理を簡単に追記できる。
  // const complete = (id) => {
  //   onClickEnd(id);
  // };
  return todoLists.map((todo) => (
    <div key={todo.id}>
      <button onClick={() => onClickEnd(todo.id)}>完了</button>
      {todo.content}
    </div>
  ));
};
