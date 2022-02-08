//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);
// console.log("1st value " + newNumbers[2]);

// var nNumber = [];

// function double1(x1) {
//   nNumber.push(x1 * 2);
// }

// numbers.forEach(double1);
// console.log(nNumber);

// var nnNumbers = [];

// numbers.forEach(function (x) {
//   nnNumbers.push(x * 2);
// });

// console.log(nnNumbers);

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

//let's create the new array that will return values that are grater than 10.
//we will use the map funtion.

// var numbers = [3, 56, 2, 48, 5];

// const number10orMore = numbers.map(function (num) {
//   return num >= 10;
// });

// console.log("Here: " + number10orMore);

// const number11orMore = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log("Here 11: " + number11orMore);

// var newNumber = [];

// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumber.push(num);
//   }
// });

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

// var number = 0;
// numbers.forEach(function (num) {
//   number += num;
// });
// console.log(number);

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const fNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(fNumber);

// //FindIndex - find the index of the first item that matches.

// const fIndex = numbers.findIndex(function (num) {
//   return num === 48;
// });

// console.log("found Index: " + fIndex);

import emojipedia from "./emojipedia";

// console.log(emojipedia);

const eMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 19);
});

console.log(eMeaning);
