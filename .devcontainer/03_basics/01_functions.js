function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Resilt: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("Vinayak"));
// console.log(loginUserMessage("Vinayak"));

function calculateCartPrice(num1) {
  return num1;
}
