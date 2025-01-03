/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// 分割代入
// propsはオブジェクトなので、オブジェクトリテラルで囲って使用したいプロパティ名を指定すれば一々使用箇所でprops.colorとしなくてよくなる
const Child = ({ color: c = "green", num, fn, bool, obj }) => {
  // const { color } = props;
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("Props")}</h3>
      {/* もしpropsを送る側にboolがなければundefinedと言う未定義の値を受け取ることになるのでfalseが出力される */}
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
