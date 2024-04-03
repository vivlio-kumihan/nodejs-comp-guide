// // 関数式を使った関数の定義方法
// const fn = (number) => {
//   console.log(fn(2));
//   return number * 2;
// }

// // objectを戻り値とする場合に()で囲む
// const fnArrowObj = number => ({ result: number * 2 })

// // コールバック関数
//   // 引数にコールバック関数を入れる関数を作る。
// const print = (callback) => {
//   // const result = callback();
//   // console.log(result);
//   console.log(callback(2));
// };

//   // オプションで引数に初期値を与えておいて。。。
// const myFn = (number = 13) => {
//   return number * 2;
// };

// print(myFn);


// // DOMを取得する方法

// const h1Element = document.querySelector('h1');

//   // オブジェクトのプロパティが見えるdir
//   // オブジェクトが帰ってきた時に詳しい情報を見たい時に使うのよ。
// console.dir(h1Element);

//   // 参照。オブジェクトに規定されたメソッドを渡すと値が返る。
// console.log(h1Element.textContent);

//   // 変更。オブジェクトの値を変更する。
// h1Element.textContent = '変更後のタイトル';

//   // 例えばボタンのDOMを取ってクリックしたイベントに応じて何かしてみる。
// const btnEl = document.querySelector('button');

//   // addEventListenerにはイベントに応じて引数が渡ってくる。
//   // 習慣的に『e』を使う。
//   // 返ってくるのは、イベントの発火に伴うオブジェクト。
// const helloFn = (e) => {
//   console.dir(e.target.textContent);
//   console.log('hello')
// };

//   // 第一引数 => 実行するイベントの内容。
//   // 第二引数 => 実行したい関数。
// btnEl.addEventListener('click', helloFn)

// // 配列
// const arr = [10, 20, 30, 40];

//   // for
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2)
// }
// console.log(newArr);

//   // map
//   // mapは引数にコールバック関数を持つ。
//   // この引数部分で配列の中身を変更する仕組み。
//   // この書き方は省略形。
// const newArr2 = arr.map(elem => elem * 2);
// console.log(newArr2);

//   // 複数行に分けて詳細な仕組みを作ることもできる。
//   // 定義した関数の最後は『return』で値を返さないといけない。
// const newArr3 = arr.map(elem => {
//   return elem * 2;
// });
// console.log(newArr3);

//   // mapの引数は3つ
//   // 値、インデックス、元の配列自体。
// const newArr4 = arr.map((elem, idx, arr) => {
//   return elem * 2;
// });
// console.log(newArr3);

//   // filter
//     // for版だと長いね。
// const newArr5 = [];
// for (let i = 0; i < arr.length; i++) {
//   const elem = arr[i] * 3;
//   if (elem > 50) {
//     newArr5.push(elem);
//   }
// }
// console.log(newArr5);

//     // filter版
// const newArr6 = arr.map(elem => elem * 2).filter(elem => elem > 50);
// console.log(newArr6);


// // 分割代入
// // 配列の中から特定の要素を取り出す方法。
//   // その1 要素数と同じ数の変数を入れた配列に代入する。
//   // 普通の配列へのアクセス
// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[0]);
// console.log(arry[2]);

//   // その1-1 分割代入版
// const [one, two, three] = ["配列1", "配列2", "配列3"];
// console.log(one);
// console.log(two);
// console.log(three);

//   // その1-2 要素数さえ揃えれば変数がなくても代入可能。
// const [four, , six] = ["配列4", "配列5", "配列6"];
// console.log(six);

//   // その2 普通のオブジェクトへのアクセス
// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

//   // その2 分割代入版　オブジェクトでやってみる。
//   // 配列は順番が肝心。オブジェクトはプロパティ（属性）で管理されている。
//   // 順番は関係ない。
//   // オブジェクト・リテラルは揃えないと作動しなよ。
// const { z, x, y } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(y);

//   // その3 関数の引数に分割代入を使う。
//   // 配列版
// const arr = ["Japan", "Tokyo", "Shinjuku"];
// const fnArr = (arry) => {
//   console.log("---配列---");
//   console.log(`country: ${ arry[0] }`);
//   console.log(`state: ${ arry[1] }`);
//   console.log(`city: ${ arry[2] }`);
// };
// fnArr(arr);

// // 分割代入版
// const fnArr_destructure = ([country, state, city]) => {
//   console.log("---配列---");
//   console.log(`country: ${ country }`);
//   console.log(`state: ${ state }`);
//   console.log(`city: ${ city }`);
// };
// fnArr_destructure(arr);

//   // オブジェクト版
// const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
// const fnObj = (objAddr) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${ objAddr.country }`);
//   console.log(`state: ${ objAddr.state }`);
//   console.log(`city: ${ objAddr.city }`);
// };
// fnObj(objAddress);

//   // 分割代入版
// const fnObj_destructure = ({ country, state, city }) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${ country }`);
//   console.log(`state: ${ state }`);
//   console.log(`city: ${ city }`);
// };
// fnObj_destructure(objAddress);

// // スプレッド演算子
//   // 関数の引数に配列の要素を渡す方法
// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

//   // // max関数に引数を与えて、一番大きい値を抽出している。
// const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
// console.log(result);

//   // // これをスプレッド演算子を使ってやる。
// const result_spreadRest = Math.max(...nums);
// console.log(result_spreadRest);

//   // 複製してコピーをやる。
//   // オリジナルには影響しないやつ。
//   let arr = [1, 2, 3];
//   let myArr = [...arr];
//   myArr.push(100);
//   console.log(arr, myArr)
  
//   // 配列をまとめることができる。
//   let arr1 = [1, 2, 3];
//   let arr2 = [4, 5, 6];
//   let newArr = [...arr1, 10, ...arr2 ];
//   console.log(newArr);
  
//   // オブジェクトで複製してコピーをやってみる。
// const obj = {
//   name: "Tom",
//   age: 22,
// };
// const newObj = { ...obj };
// newObj.name = 'John';
// newObj.country = 'England'
// console.log(obj, newObj);

//   // 可変長引数をやる。
//   // これまでの説明があって初めての可変長引数な訳だった。
// const restA = (...argA) => console.log(argA);
// restA(1, 3)

// const restB = (n, ...argB) => console.log(argB);
// restB(1, 3, 4)


// // 三項演算子（ ? : ）
// const a = true;

//   // if文を簡略化
// // if(a) {
// //   resultA = "true";
// // } else {
// //   resultA = "false";
// // }
// let resultA = a ? true : false;
// console.log(resultA);

//   // returnの後に書く場合がある。
// function getResult() {
//   return a ? "true" : "false";
// }

//   // 無形関数で書いて簡略化もよし。
// const getResult = () => a ? "ture" : "false";
// console.log(getResult());


// // truthy and falsy
// //   falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// //   truthy → それ以外
// // falsyな値の一覧
// //   false
// //   0 (数字)
// //   0n (big int)
// //   "" (空文字)
// //   null
// //   undefined
// //   NaN (Not a Number)


//   // 変数定義にいろいろな値を置けば判断ができる。
// const a = 0;
// let result = a ? 10 : -10;
// console.log(result);

//   // truthy、falsyかどちらかわからなくなった場合は、
//   // Boolean関数を使う。
// const falsy = 0;
// const truthy = 1;
// console.log(Boolean(truthy));
// console.log(Boolean(falsy));

//   // 論理積 (&&) について
//   // 左側から順に読んでいって、
//   // falsyな値を見つけたらその時点で該当する値を返して処理が終了する。
//   // falsyな値がなければ最後の値を返す。
// const resultA = "" && "foo";
// const resultB = 2 && 1 && 0 && 3;
// const resultC = "foo" && 4;

// console.log(resultA); // => 空文字
// console.log(resultB); // => 0
// console.log(resultC); // => 

//   // 理論和 (||) について
//   // 左側から順に読んでいって、
//   // truthyな値を見つけたらその時点で該当する値を返して処理が終了する。
//   // つまり、最初にtruthyな値があればその地点で処理を終了する。
// const resultD = "" || "foo";
// const resultE = 0 || 2 || 0;
// const resultF = "foo" || 4;

// console.log(resultD);
// console.log(resultE);
// console.log(resultF);

// Promise 非同期処理
let a = 0;

  // 通常の動き：処理が上から順。
  // first
console.log('first => ', a);
  // second
setTimeout(() => {
  console.log('second => ', a);  
}, 2000);
  // third
console.log('third => ', a);
    // reslut
      // first =>  0
      // third =>  0
      // second =>  0


      // 非同期に処理する。

let A = 0;

  // first
console.log('first hoge => ', A);
  // second
    // まず、これが非同期処理の原型。
    // ・Promise()でインスタンスを生成させる。
    //   最初の無名関数には非同期させたい対象の処理を書く。
    // ・つなげたthen()関数で『まさにその時』実行する。
    // ・catchはエラー処理用。
    // new Promise(() => {}).then(() => {}).catch(() => {});
new Promise((resolve, reject) => {
  setTimeout(() => {
    A = 1;
    resolve(A);
  }, 2000);
}).then((A) => {
  console.log('second hoge => ', A);  
}).catch(() => {});
  // third
console.log('third hoge => ', A);
    // reslut
      // first =>  0
      // third =>  0
      // second =>  0

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })

