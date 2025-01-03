import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Messageコンポーネントの確認", () => {
  describe("初期表示の正常性確認", () => {
    test("input要素の確認", () => {
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl.value).toBe("");
    });
  });

  describe("動作確認", () => {
    test("input入力 -> messageのstate更新", async () => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole("textbox");

      await user.type(inputEl, "こんにちは");

      expect(inputEl.value).toBe("こんにちは");
    });
  });
});
