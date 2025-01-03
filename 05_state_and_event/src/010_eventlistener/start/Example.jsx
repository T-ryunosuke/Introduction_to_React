const Example = () => {
  const clickHandler = () => {
    alert("クリックされた");
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
    </>
  );
};

export default Example;
