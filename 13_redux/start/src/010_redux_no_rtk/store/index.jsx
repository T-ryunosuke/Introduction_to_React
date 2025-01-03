// 取り消し線は今使っているreduxのバージョンでは非推奨であることを示している
// Toolkit推奨
import { createStore, combineReducers } from "redux";

// 初期値の設定
const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    // Toolkitを使うならそもそもdefaultは不要。
    default:
      // Reduxの場合はthrowとは書かず、そのままstateを返す。
      return state;
    // throw new Error("不明なactionです。");
  }
};
const reducer2 = (state = initialState, { type, step }) => {
  switch (type) {
    case "counter2/+":
      return state + step;
    case "counter2/-":
      return state - step;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: reducer,
  counter2: reducer2
})

export default createStore(reducers);
