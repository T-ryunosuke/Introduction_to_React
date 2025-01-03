import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    // 文字列を書くなら""で囲まないと変数と見做されてしまう。あくまでJSファイル内の記述となる。
    const style = {
        width: 120, height: 60, display: "block", fontWeight: "bold", borderRadius: 9999, cursor: "pointer", border: "none", margin: "auto", background: isSelected ? "pink" : ""
    }
    console.log(isSelected && "クリックされました。");
    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>

          <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
