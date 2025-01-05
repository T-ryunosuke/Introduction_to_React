const Example = () => {
  // 練習用
  type User = {
    name: string,
    age: number
  }
  const user: User = {
    name: "Taro", age: 10
  }

  // 単独の型も別名で定義可能
  type UserName = string;
  type UserGender = "man" | "woman" | "others";

  // 定義した型エイリアスを使ってさらに別の型を定義することも可能
  type UserProfile = {
    name: UserName;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "Hanako",
    gender: "woman",
  };
};

export default Example;
