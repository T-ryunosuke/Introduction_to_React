const Example = () => {
  // 引数(num1)が変わってしまっている
  const num1 = { val: 2 };
  const double1 = (num) => {
    num.val = num.val * 2;
    return num;
  };
  const newNum1 = double1(num1);
  console.log("newNum1", newNum1, "num1", num1);
  console.log(newNum1 === num1);

  // immutabilityの保持（引数(num2)が変わっていない）
  const num2 = { val: 2 };
  const double2 = (num) => {
    // const newNum2 = {};
    // newNum2.val = num.val * 2;
    // ⬇︎ 短縮
    const newNum2 = { val: num.val * 2 };

    return newNum2;
  };
  const newNum2 = double2(num2);
  console.log("newNum2", newNum2, "num2", num2);
  console.log(newNum2 === num2);

  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
