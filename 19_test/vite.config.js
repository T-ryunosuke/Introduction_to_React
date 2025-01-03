import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dynamicImport from "vite-plugin-dynamic-import";
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), dynamicImport()],
  server: {
    port: 3001,
  },
  // テスト参考
  // https://vitest.dev/guide/#workspaces-support
  // https://testing-library.com/docs/svelte-testing-library/setup/
  test: {
    //  describe, expect, it などのAPIをファイル内でimportしなくても使用可にする設定
    globals: true,
    // DOMの実装を提供するJavaScriptの環境を意味します。これは、ブラウザ環境を模倣して、DOM操作やウィンドウオブジェクトへのアクセスなど、ブラウザ固有のAPIを使用するテストをサポートするために使われます。
    environment: "happy-dom",
    // テスト全体で使用するライブラリをvitest-setup.jsに記載し、インポートする設定
    setupFiles: [resolve(__dirname, "src", "vitest-setup.js")],
  },
});
