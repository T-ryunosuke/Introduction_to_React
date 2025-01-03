const array = ["配列1", "配列2", "配列3"];
console.log(array[0]);
console.log(array[2]);

const [a, b, c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);

const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(obj.x);
console.log(obj.y);

const { x, y, z } = {
  x: "オブジェクト1",
  y: "オブジェクト2",
  z: "オブジェクト3",
};
console.log(x);
console.log(y);


const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
