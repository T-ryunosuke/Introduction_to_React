import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <SButton isSelected={isSelected} onClick={clickHandler}>
        <span>ボタン</span>
      </SButton>
      <SOrangeButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </SOrangeButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

const SButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "pink" : "")};
  // 上記は分割代入して簡略化した記述
  // background-color: ${(props) => (props.isSelected ? "pink" : "")};

  &:hover,
  :active {
    color: red;
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    border-radius: 0;
  }

  span {
    font-size: 1.2em;
  }
`;

const SOrangeButton = styled(SButton)`
  background-color: orange;
`;

export default Example;
