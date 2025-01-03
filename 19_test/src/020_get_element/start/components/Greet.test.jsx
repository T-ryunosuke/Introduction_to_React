import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1とradioのroleが存在するかどうか", () => {
  // const { debug } = render(<Greet />);
  const { container } = render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();

  // radioロール取得
  // const radioEl = screen.getByRole("radio");
  // screen.debug(radioEl);

  // img取得
  // const imgEl = screen.getByRole("img");
  // screen.debug(imgEl);
  // expect(imgEl).toBeInTheDocument();

  // alt取得（getByAltText）
  // const imgAltEl = screen.getByAltText("React Logo");
  // screen.debug(imgAltEl);
  // expect(imgAltEl).toBeInTheDocument();

  // h1取得
  // const headingEl = screen.getByRole("heading");
  // screen.debug(headingEl);
  // expect(headingEl).toBeInTheDocument();

  // 複数対象から特定の要素を取得する
  // パターン1
  // const headingEl = screen.getByRole("heading", { name: "こんにちは" });
  // screen.debug(headingEl);

  // パターン2
  // const h2El = container.querySelector("h2");
  // screen.debug(h2El);

  // labelによるinput取得
  // const elByLabel = screen.getByLabelText("氏名");
  // screen.debug(elByLabel);

  // placeholderによるinput取得
  const elByPlaceholder = screen.getByPlaceholderText("氏名");
  screen.debug(elByPlaceholder);
});
