import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  // 定義したいメソッドを渡す
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload;
      // return newState;
    },
    minus(state, { payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload;
      // return newState;
    }
  }
});
// const initialState = 0;

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/+":
//       return state + payload;
//     case "counter/-":
//       return state - payload;
//     default:
//       return state;
//   }
// };

// CounterButton.jsxのactionで使われている
const { add, minus } = counter.actions;
// Action Createrは上記の記述だけで自動作成される。
// const add = (payload) => {
//     return {
//         type: "counter/add",
//         payload
//     }
// }

// const minus = (payload) => {
//     return {
//         type: "counter/minus",
//         payload
//     }
// }

// reducerの部分はcounterオブジェクトのreducerに入っている。
// デフォルトエクスポートとして渡すと使う側での指定が便利
export { add, minus }
export default counter.reducer;

// export { reducer, add, minus }
