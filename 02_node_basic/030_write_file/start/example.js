// // ファイルへの書き込み
// // __dirname, __filename
// // path
// const fs = require('fs');
// const path = require('path');

// const distPath = path.resolve(__dirname, 'test.txt');
// console.log(distPath);

// // fs.writeFileSync(distPath, 'hello, node.js');
// // console.log('hello, node.js');

// ファイルへの書き込み・読み込みをモジュールを使ってやる。
// `commom.js`を使ってファイルの書き込み、読み込みをする。
const fs = require("fs");
// 実行ファイルがあるディレクトリまでのフルパスを取ることができる。
console.log(__dirname);
// 現在、実行中のファイル名を取ることができる。
console.log(__filename);
// fs.writeFileSync("./test.txt", "hello, node.js!");
