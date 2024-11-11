// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 32423434565447757688n;
//  Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "vinayak",
  age: 23,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);
