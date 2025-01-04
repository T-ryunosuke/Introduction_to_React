const Example = () => {
  // 練習用
  let strOrNum: string | number = "Hello";
  strOrNum = 456;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = false;
  console.log(strOrNumOrBool);

  // リテラル型の結合
  let helloOrNumOrBool: "おはよう" | number | boolean = 123;
  helloOrNumOrBool = "おはよう";
  console.log(helloOrNumOrBool);

  type DayOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  const day: DayOfWeek = "Monday";
  console.log(day);

};

export default Example;
