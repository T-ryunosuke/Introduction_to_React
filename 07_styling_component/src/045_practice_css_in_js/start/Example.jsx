import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;
const SecondButton = styled(FirstButton)`
  color: white;
  background-color: red;
`;
const ThirdButton = styled(SecondButton)`
  background-color: ${({dark}) => dark ? "black" : "green"};
`;
// const SecondButton = styled(FirstButton)`
//   color: white;
//   background-color: red;
// `;

const Example = () => {
  return (
    <>
      {/* 練習問題
      記述を変更し、完成コードと同じ状態になるようにしてください。
      Q1. FirstButtonのbackgroudをpinkにしてください。
      Q2.FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。
      Q3.SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
      */}
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton dark>ボタン3</ThirdButton>
      {/* <FirstButton>ボタン4</FirstButton> */}
    </>
  );
};

export default Example;
