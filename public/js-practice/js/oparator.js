// 条件 ? trueの時の値 : falseの時の値
const isLogin = true;

// const message = isLogin ? "ようこそ" : "ログインしてください";

// let message;
// if(isLogin) {
//   message = "ようこそ";
// } else {
//   message = "ログインしてください";
// }

// console.log(`isLoginが「${isLogin}」の時、messageは「${message}」になる。`)

// const message = isLogin && "ようこそ";
const message = isLogin || "ログインしてください";

console.log(`isLoginが「${isLogin}」の時、messageは「${message}」になる。`)
