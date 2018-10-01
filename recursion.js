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

let reverseStr = str => {
  if (str === "") {
    return "";
  }

  let char = str[str.length - 1];
  return char + reverseStr(str.slice(0, str.length - 1));
};

console.log(reverseStr("Antoine"));
