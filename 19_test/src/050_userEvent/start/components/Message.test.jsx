import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("入力された文字が画面上に存在", () => {
      render(<Message />);

      const h2El = screen.getByRole("heading", {name: "入力された文字:"});
      screen.debug(h2El);

    });
  });

  describe("画面操作正常性確認", () => {
    test("入力値変更 -> 送信ボタン押下", async () => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      const btnEl = screen.getByRole("button", { name: "送信ボタン" });

      const h2El = screen.getByRole("heading", { name: "入力された文字:" });
      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");
      screen.debug(h2El);

      await user.type(inputEl, "こんにちは");

      expect(btnEl).not.toBeDisabled();

      await user.click(btnEl);

      expect(h2El.textContent).toBe("入力された文字:こんにちは");
      expect(btnEl).toBeDisabled();
    });
  });

});
