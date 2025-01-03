import { Result } from "./components/Result";
import { Select } from "./components/Select";
import { Input } from "./components/Input";
import { CalcProvider } from "./context/CalculateContext";

const Example = () => {
  return (
    /* 練習問題
    Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。 */
    /* 完成系のJSX */
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
