
const eqArrays = function(ar1, ar2) {
  if (ar1.length === ar2.length) {
    for (let i = 0; i < ar1.length; i ++) {
      if (ar1[i] !== ar2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(ar1, ar2) {
  let st = eqArrays(ar1,ar2);
  if (st === true) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array , callback){
const results = [];

// console.log('array: ', array);
// console.log('callback: ', callback);

for (let item of array){
  // console.log('item Before: ', item);
  // console.log('item After: ' ,callback(item));
  
  results.push(callback(item));
}



return results;
};

//console.log(map());
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g','c','t','m','t']);
// const results2 = map(words, word => word[1]);
// assertArraysEqual(results2, ['r','o','o','a','o']);
// const results3 = map(words, word => {
//   if (word[2] !== undefined){
//     return word[2];
//   } else {
//     return "";
//   }
// });
const results3 = map(words, word => word[2])
assertArraysEqual(results3, ['o','n',undefined,'j','m']);
//console.log(results3);