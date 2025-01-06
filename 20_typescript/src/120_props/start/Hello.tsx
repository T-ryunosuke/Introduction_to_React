type HelloProps = {
  text?: string,
  children: React.ReactNode
}

// ジェネリクスを使って型引数を渡すことでpropsに型がつく。
const Hello: React.FC<HelloProps> = ({ text, children }) => {
  return (
    <div>Hello {text}! {children}</div>
  )
}

// propsで受け取った関数の型定義
type FnProps = {
  fn: (text: string) => void
}
export const Btn: React.FC<FnProps> = ({ fn }) => {
  return <button onClick={() => fn("Typescript")}>ボタン</button>
}

export default Hello
