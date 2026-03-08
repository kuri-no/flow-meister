// 配列の場合
const numbers = [1, 2, 3];
const Newnumbers = [4, ...numbers, 5];

console.log(Newnumbers);

// オブジェクトの場合
const book = {
  title: "JavaScript入門",
  author: "田中太郎",
  pages: "120",
  price: "3000",
}
const newBook = { pages: 320, ...book };

console.log(newBook);

// 分割代入
const { title, author, ...rest } = book;
console.log(title);
console.log(author);
console.log(rest);

