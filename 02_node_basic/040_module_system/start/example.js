// const calc = require("./calc");
// console.log(calc);

// const result1 = calc.plus(1, 2);
// const result2 = calc.minus(1, 2);
// console.log(result1, result2);

// 分割代入を使う
const { plus, minus } = require("./calc");

const result1 = plus(1, 2);
const result2 = minus(1, 2);
console.log(result1, result2);






// // CommonJSで読み込み
// const { plus } = require('./calc');
// const result = plus(1, 2);
// console.log(result);






// Node.jsでパスの指定をする場合は、`__dirname`を起点に行う。
// 実行ファイルのある場所が起点となる。
// その起点より上の階層、またはその階層から展開する階層へのパスの指定は、
// `path`モジュールを使う。

// const fs = require("fs");
// const path = require("path");
// console.log(__dirname);
// const distPath = path.resolve(__dirname, "../dist/test.txt");
// fs.writeFileSync(distPath, "hello, node.js. path is fine!");