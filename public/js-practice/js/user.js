// const user = {
//   fullname: "田中太郎",
//   age: "20",
// }

// 分割代入を使わない方法
// const fullname = user.fullname;
// const age = user.age;

// 分割代入を使う方法
// const {fullname, age} = user;

// console.log(`こんにちは、${fullname}さん`)
// console.log(`年齢は${age}歳です`)

// function greet({fullname}) {
//   return `こんばんは、${fullname}さん`
// }

// console.log(greet(user));

const users = ["田中", "山田", "鈴木"];

// const user1 = users[0];
// const user2 = users[1];
// const user3 = users[2];

// 分割代入の場合
const [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);