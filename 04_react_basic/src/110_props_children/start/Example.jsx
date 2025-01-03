import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      {/* childrenを使う場合開始タグと終了タグに分けて間にchildrenに渡したい要素を挟む */}
      <Container title="Childrenとは？">
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
      <Container
        title="属性として定義して渡す"
        two={[
          // コンポーネント自体もJSのオブジェクトになるので配列に格納できる
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />,
        ]}
      />
      <Container
        title="属性として定義して個別に渡す"
        first={
          // コンポーネント自体もJSのオブジェクトになるので配列に格納できる
          <Profile {...profile[0]} />
        }
        second={<Profile {...profile[1]} />}
      />
    </div>
  );
};

export default Example;
