# Node.js基礎

## ファイルへの書き込み・読み込みをモジュールを使ってやる。

### commom.js編

`commom.js`を使ってファイルの書き込み、読み込みをする。

まずは、モジュールを取り込んで、

```js
const fs = require("fs");
```

実行ファイルがあるディレクトリまでのフルパスを取る。

```js
console.log(__dirname);
```

現在、実行中のファイル名を取る。

```js
console.log(__filename);
```

（内容を書き込んで）ファイルを生成する

```js
fs.writeFileSync("./test.txt", "hello, node.js!");
```

### `__dirname`の注意点

`Node.js`でパスの指定をする場合は、`__dirname`を起点に行う。
実行ファイルのある場所が起点となる。

その起点より`上の階層`、または`その階層から展開する階層`へのパスの指定は、
`path`モジュールを使う。

```js
const fs = require("fs");

// `path`モジュールを取り込む。
const path = require("path");

// 実行中のディレクトリより上の階層を指定しないと
// いけない場合にも使える『resolve』メソッド。
const distPath = path.resolve(__dirname, "../dist/test.txt");

fs.writeFileSync(distPath, "hello, node.js. path is fine!");
```

## モジュール

### モジュールとは

* ソースコードを機能毎に分割した一つの単位。
* ESM、CJSがある。

|分野|使えるモジュール|
|---|---|
|ブラウザ|ESModule(ESM)|
|Node.js|ESModule(ESM), CommonJS(CJS)|

#### CJSの特徴

* Node.js独自の仕組み。
* ブラウザでは使用不可。
* `require` / `module.exports` / `exports`を使用。
* ESM時と一部使える機能が異なる。
* 基本的には使わないようがよい。

#### ESMの特徴

* ECMAScriptの標準。
* ブラウザでは使用可能。
* `import` / `export`を使用。
* Node.jsでは明示的な指定が必要。

## CommonJSのモジュール取り扱い

### export側　calc.js

```js
// 関数を定義
function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

// `module`に対して`exports`メソッドを充てる。
// 内容は、オブジェクト。
// 任意のパラメーターに関数を値として設定。
// module.exports = {
//   // plus: plus,
//   // minus: minus,
// };
  
// ただし、
// パラメーターと値（関数）が同じなら省略できる。
module.exports = {
  plus,
  minus
};
```

### import側 example.js

import側では、引き取りたい関数を持ったファイルを
`require`関数で受け取りインスタンス化。

インスタンスにメソッドを当てて使う。
という方法と。。。

```js
const calc = require("./calc");

const result1 = calc.plus(1, 2);
const result2 = calc.minus(1, 2);
console.log(result1, result2);
```

__分割代入を使う。__ 運用するならこちらでやる。
```js
const { plus, minus } = require("./calc");

const result1 = plus(1, 2);
const result2 = minus(1, 2);
console.log(result1, result2);
```
