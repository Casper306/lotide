const assertArraysEqual = require('./assertArraysEqual');


const middle =function (arr) {
  if (!arr.length | arr.length <= 2)
    return [];
    
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
};

module.exports = middle;






// Math.floor  https://developer.mozilla.org/zh-TW/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Math/floor


// console.log(middleItem([]));            // undefined
// console.log(middleItem([0]));           // 0
// console.log(middleItem([0,1]));         // [0, 1]
// console.log(middleItem([0,1,2]));       // 1
// console.log(middleItem([0,1,2,3]));     // [1, 2]
// console.log(middleItem([0,1,2,3,4]));   // 2

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]