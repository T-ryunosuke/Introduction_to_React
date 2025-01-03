import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    // 初期値にstatusを追加
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = "Loading..."
    })
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
      state.status = "取得済み"
      state.count = state.count + action.payload;
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = "エラー"
    })
  }
});

const { add, minus } = counter.actions;

// 第一引数にtypeとなる一意の文字列を取り、第二引数に非同期処理を記述する。
// 非同期処理の引数にはpayloadを入れる
const addAsyncWithStatus = createAsyncThunk(
  "counter/asyncCount",
  async (payload) => {
    const response = await asyncCount(payload);
    return response.data;
  }
);
// const addAsync = (payload) => {
//   return async (dispatch, getState) => {
//     const response = await asyncCount(payload);
//     dispatch(add(response.data));
//   }
// }


export { add, minus, addAsyncWithStatus }
export default counter.reducer
