// 関数式を使った関数の定義方法
const fn = (number) => {
  console.log(fn(2));
  return number * 2;
}

// objectを戻り値とする場合に()で囲む
const fnArrowObj = number => ({ result: number * 2 })

// コールバック関数
  // 引数にコールバック関数を入れる関数を作る。
const print = (callback) => {
  // const result = callback();
  // console.log(result);
  console.log(callback(2));
};

// オプションで引数に初期値を与えておいて。。。
const myFn = (number = 13) => {
  return number * 2;
};

print(myFn);