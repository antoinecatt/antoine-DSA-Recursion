// Recursion reduces the problem to smaller similar problems that can be solved more easily

//Counting Sheep

// function countSheep(sheep) {
//   // BASE CASE
//   if (sheep === 0) {
//     return;
//   }

//   console.log(`${sheep} - Another sheep jump over the fence`);
//   countSheep(sheep - 1);
// }

// // console.log(`${countSheep(3)} - Another sheep jump over the fence`);
// countSheep(3);

// Array Double
// let arrDbl = arr => {
//   if (!arr.length) {
//     return [];
//   }

//   let newArr = arr[0] + arr[0];
//   return newArr + arrDbl(arr.slice(1));
// };

// let input = [1, 2, 3]; // should output [2,4,6]
// console.log(arrDbl(input));

// Reverse String

// I would then take a character out of the string and save it then return the remaining characters in the string
// until the string is empty. Then return it as whole in reverse

// let reverseStr = str => {
//   if (str === "") {
//     return "";
//   }

//   let char = str[str.length - 1];
//   return char + reverseStr(str.slice(0, str.length - 1));
// };

// console.log(reverseStr("Antoine"));

// nth Triangular Number
// an input would be a number and the output that i want will the number of stars
// The number would then have to multiply itself by 2 to produce the next number of stars
//

// const triangle = num => {
//   if (num === 0) {
//     return 0;
//   }

//   return num + triangle(num - 1);
// };

// console.log(triangle(10));

// String Splitter

// const strSplitter = (str, index) => {
//   // base case
//   if (str === "") {
//     return "";
//   }

//   let char = str.slice(index, str.length);
//   return strSplitter
// };

// var str = "The quick brown fox jumped over the lazy dog.";

// console.log(strSplitter(str, 10));

// Factorial

// const factorial = n => {
// let f = [];
// if (n === 0 || n === 1) {
//   return 1;
// }

// if (f[n] > 0) {
//   return f[n];
// }
// return (f[n] = factorial(n - 1) * n);
// };

// console.log(factorial(10));

// function binaryRep(num) {
//   //base case
//   if (num <= 0) {
//     return "";
//   }
//   //recursive case
//   const binary = Math.floor(num % 2);
//   return binaryRep(Math.floor(num / 2)) + binary;
// }

// console.log(binaryRep(25));
