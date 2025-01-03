export const Form = ({ input, changeInput, addTodoLists }) => {
  return (
    <>
      <form onSubmit={addTodoLists}>
        <input type="text" value={input} onChange={changeInput} />
        <button>追加</button>
      </form>
    </>
  );
}
