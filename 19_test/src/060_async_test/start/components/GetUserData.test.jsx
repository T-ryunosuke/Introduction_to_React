import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";

describe("GetUserDataコンポーネントの動作確認", () => {
  test("外部データ取得中", () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h1El = screen.getByRole("heading");
    screen.debug(h1El);
  });

  test("外部データ取得後", async () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h2El = await screen.findByRole("heading", {name: "プロフィール"});
    screen.debug(h2El);

    const listEls = await screen.findAllByRole("listitem");
    expect(listEls[0].textContent).toBe("ID: 1");
    expect(listEls[1].textContent).toBe("Name: CodeMafia");
  });
});
