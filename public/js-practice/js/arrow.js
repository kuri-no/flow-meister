// function greet(userName) {
//   return `こんにちは、${userName}さん`;
// }

// アロー関数の場合
// const greet = (userName) => {
//   return `こんにちは、${userName}さん`;
// }

// returnの1行だけの場合は、{}とreturnを省略できる
// const greet = (userName) => `こんにちは、${userName}さん`

// 引数が1つの場合は、()を省略できる
const greet = userName => `こんにちは、${userName}さん`

console.log(greet("太郎"))