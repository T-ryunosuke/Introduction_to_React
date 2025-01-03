import { memo } from "react";

// memoの第二引数として使う関数の定義
function areEqual(prevProps, nextProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false;
  } else {
    return true;
  }
}

const ChildMemo = memo(({ countB }) => {
  // %cを先頭につけて第二引数以下にスタイルを設定することができる
  console.log("%cChild render", "color: red;");
  return (
    <div className="child">
      <h3>子コンポーネント領域</h3>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
// memoの第二引数
}, areEqual);

// const ChildMemo = React.memo(Child);

export default ChildMemo;
