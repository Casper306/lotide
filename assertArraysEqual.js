// const assertArraysEqual = function(arr1, arr2){
//   if (arr1.length !== arr2.length ){
//     return false;
//   }
//   for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index] !== arr2[index]){
//         return false;
//     }    
//   }
//   return true;
// }

// console.log(assertArraysEqual([1,3,3], [1,2,3]));

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar1, ar2) {
  let st = eqArrays(ar1,ar2);
  if (st === true) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`);
  }
};

module.exports = assertArraysEqual;
