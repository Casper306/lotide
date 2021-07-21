const assertArraysEqual = function(arr1, arr2){
  if (arr1.length !== arr2.length ){
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]){
        return false;
    }    
  }
  return true;
}

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
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


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