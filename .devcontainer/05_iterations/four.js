const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
}; // for in loops for objects

for (const key in myObject) {
  //   console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
} // for of loops for arrays

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of Ammerica");
// map.set("Fr", "France");

// for (const key in map) {
//   console.log(key);
// } FOR IN LOOPS CANNOT BE USED ON MAP BECAUSE IT IS NOT ITERABLE
