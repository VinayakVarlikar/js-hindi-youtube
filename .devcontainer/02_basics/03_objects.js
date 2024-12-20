// signleton

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Vinayak",
  "full name": "Vinayak Varlikar",
  age: 24,
  [mySym]: "mykey1",
  location: "Mumbai",
  email: "vinayakworlikersai@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Vinayak@google.com";
// Object.freeze(JsUser);
JsUser.email = "microsoft@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
