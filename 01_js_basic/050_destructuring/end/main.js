// POINT 分割代入の使い方
// destructuring 構造改革

// const [ a, , c ] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);
// // console.log(arry[2]);

// const { z, x } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

// const arr = ["Japan", "Tokyo", "Shinjuku"];
// const dest = ([country, state, city]) => {
//   console.log(country);
//   console.log(state);
//   console.log(city);
// };
// dest(arr);


// const hash = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
// const dest = ({ country, state, city }) => {
//   console.log(country);
//   console.log(state);
//   console.log(city);
// };
// dest(hash);

// const fnArr = ([ country, state, city ]) => {
//   console.log("---配列---");
//   console.log(`country: ${country}`);
//   console.log(`state: ${state}`);
//   console.log(`city: ${city}`);
// };

// const fnObj = ({ country, state }) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${country}`);
//   console.log(`state: ${state}`);
//   // console.log(`city: ${city}`);
// };

// // fnArr(arr);
// fnObj(objAddress);



