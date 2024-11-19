// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
//   console.log(item);
// //   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4; // whenever you open scope, you have to write return keyword
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

let books = [
  {
    title: "Book one",
    genre: "Non-Fiction",
    publish: 1999,
  },
  {
    title: "Book two",
    genre: "Fiction",
    publish: 1997,
  },
  {
    title: "Book three",
    genre: "Fairy-tale",
    publish: 2001,
  },
  {
    title: "Book four",
    genre: "History",
    publish: 1999,
  },
  {
    title: "Book five",
    genre: "Science",
    publish: 2005,
  },
  {
    title: "Book six",
    genre: "History",
    publish: 2014,
  },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1999 && bk.genre === "Science";
});
console.log(userBooks);
