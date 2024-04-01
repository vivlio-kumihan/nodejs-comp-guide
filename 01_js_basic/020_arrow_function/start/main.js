// function fn(number) {
//   return number * 2;
// }

// 関数式を使った関数の定義方法
const fn = (number) => {
  console.log(fn(2));
  return number * 2;
}

// objectを戻り値とする場合に()で囲む
const fnArrowObj = number => ({ result: number * 2 })
