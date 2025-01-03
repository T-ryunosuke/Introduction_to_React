import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
  getAll() {
    return axios.get(ENDPOINT_URL).then((res) => {
      return res.data;
    });
  },
  post(todo) {
    console.log(todo);
    return axios.post(ENDPOINT_URL, todo).then((res) => {
      console.log(res.data);
      return res.data;
    });
  },
  delete(todo) {
    return axios.delete(ENDPOINT_URL + "/" + todo.id).then((res) => {
      console.log(res.data);
      return res.data;
    });
  },
  patch(todo) {
    return axios.put(ENDPOINT_URL + "/" + todo.id, todo).then((res) => {
      return res.data;
    });
  },
};

export default todoApi;
