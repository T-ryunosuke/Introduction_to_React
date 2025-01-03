import { useState, useEffect } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3003/user").then((res => {
      setUsers(res.data);
    }));
  }, []);

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            {/* joinで配列の要素を,で分けて表示してくれる */}
            <p>hobby: {user.hobbies.join(",")}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Example;
