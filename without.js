
/*const eqArrays = function(arr1, arr2){
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








const without = (source, itemsToRemove) => {
  let filteredArray = [];

  // if eqArrays returns true, remove all elements and return an empty array
  if (eqArrays(source, itemsToRemove)) {
    return filteredArray;
  }

  // loop through source, only adding items to filteredArray if they are not present in itemsToRemove 
  for (item of source) {
    if (!(itemsToRemove.includes(item))) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}; 

const without = function(source, itemsToRemove) {
  let withoutArray = [];

  for (let i=0; i<source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
}*/

const without = function (source, remove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++){
    if (!remove.includes(source[i])){
      newArr.push(source[i]);
    }
  }
  return newArr;
  }

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]