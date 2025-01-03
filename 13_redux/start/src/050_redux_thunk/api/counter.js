// 非同期処理のためのダミーAPI
// asyncCountという関数では0-1秒のランダムな秒数経過の後にresolveでデータが返却される。
const asyncCount = (count = 1) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: count }), Math.random() * 1000)
  );
};

export { asyncCount };

// サーバーを立てず、擬似的にレスポンスのようなものを取得するためのファイル
