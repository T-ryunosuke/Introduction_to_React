import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    // async/awaitを使った非同期処理
    const getUser = async () => {
      const res = await axios.get("http://localhost:3003/user");
      console.log(res.data);
    }
    getUser();
    // thenを使った非同期処理
    // axios.get("http://localhost:3003/user").then((res) => {
    //   console.log(res.data)
    // });
  })
  return <></>;
};

export default Example;
