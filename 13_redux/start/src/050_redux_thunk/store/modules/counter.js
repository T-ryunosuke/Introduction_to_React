import { createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: ""
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

// Counter.jsxで以下のaddAsyncがインポートされて、三つ目のボタンのpropsにはactionCreator={addAsync}が設定されているので、CounterButton.jsxで作成されることになる三つ目のボタンが押された場合は「dispatch(addAsync(step));」が実行されることになる。
// そしてaddAsyncにはpayloadにstepの2が渡り、apiのasyncCountで使われる。
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    // 現在の状態の確認
    // const state = getState();
    // console.log(state);

    // apiのasyncCountにpayloadを渡す(payloadはstepの値)
    const response = await asyncCount(payload);
    // apiの戻り値でdataプロパティにcountの値が設定されているので、responseの中のdataをaddの引数にして今度こそ非同期ではなく普通にdispatchにアクションオブジェクトを渡す。
    dispatch(add(response.data));
  };
};

export { add, minus, addAsync }
export default counter.reducer
