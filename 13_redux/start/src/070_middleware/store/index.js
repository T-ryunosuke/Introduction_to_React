import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger";

export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  // middleware: (getDefaultMiddleware) => {
  //   // あらかじめ登録されているミドルウェアを取得
  //   const middlewares = getDefaultMiddleware();
  //   console.log(middlewares);
  //   // concatメソッドで新しいloggerというミドルウェアを登録
  //   const newMiddlewares = middlewares.concat(logger);
  //   return newMiddlewares;
  // }
});
