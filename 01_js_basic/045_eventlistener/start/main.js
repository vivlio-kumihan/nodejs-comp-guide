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


// DOMを取得する方法

const h1Element = document.querySelector('h1');

  // オブジェクトのプロパティが見えるdir
  // オブジェクトが帰ってきた時に詳しい情報を見たい時に使うのよ。
console.dir(h1Element);

  // 参照。オブジェクトに規定されたメソッドを渡すと値が返る。
console.log(h1Element.textContent);

  // 変更。オブジェクトの値を変更する。
h1Element.textContent = '変更後のタイトル';

  // 例えばボタンのDOMを取ってクリックしたイベントに応じて何かしてみる。
const btnEl = document.querySelector('button');

  // addEventListenerにはイベントに応じて引数が渡ってくる。
  // 習慣的に『e』を使う。
  // 返ってくるのは、イベントの発火に伴うオブジェクト。
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello')
};

  // 第一引数 => 実行するイベントの内容。
  // 第二引数 => 実行したい関数。
btnEl.addEventListener('click', helloFn)

// 配列



