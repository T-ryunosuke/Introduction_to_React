const Example = () => {
  // オブジェクト指向型
  // 以下のnumObjのようにオブジェクト指向型はオブジェクト(numObj)にデータ(nums)とそれを加工するメソッド(sum)を対で保持する
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };

  // 関数型
  // 関数型ではデータ(nums)と処理(sum)を別で定義する
  // 以下のsum関数の中だけを見ると関数型プログラミングとは呼べないが、視点を広げて31行目で呼び出すところから見ることで関数型プログラミングと呼ぶことができる。
  // const nums = [1, 2, 3];
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     sumValue += nums[i];
  //   }
  //   return sumValue;
  // }
  // ⬇︎
  //上記のfor文をもう一歩関数型に近づけるとforEachを使う
  // const nums = [1, 2, 3];
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = 0;
  //   nums.forEach(nu => sumValue += num);
  //   return sumValue;
  // }
  // ⬇︎
  // 同じ実装の関数型最終系
  // const nums = [1, 2, 3];
  // const sum = (array) => array.reduce((accu, curr) => accu + curr);
  // ちゃんとnumsとsumで状態と処理を分けていて、開発者が最終的にやりたいこと（「accu + curr」）が明確になっていてそこに集中できる。

  return (
    <>
      <p>オブジェクト指向型: {numObj.sum()}</p>
      <p>関数型:{sum(nums)}</p>
    </>
  );
};

export default Example;
