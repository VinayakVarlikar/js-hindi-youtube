// reduce
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0); // arrow function type to use reduce

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "web dev course",
    price: 5999,
  },
  {
    itemName: "DSA course",
    price: 7999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
