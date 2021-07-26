const assert = require('chai').assert
const inMiddle = require('../middle');

describe('#middle', () => {
it('return [] when only 1 element', () => {
  assert.deepEqual(inMiddle([1]), [])// => [];
});

it("returns [] for [2, 1]", () => {
  assert.deepEqual(inMiddle([2, 1]), [] )
});

it("returns 2 for [1, 2, 3]", () => {
  assert.deepEqual(inMiddle([1, 2, 3]), 2 )
});

it("returns 1 for [1, 1, 1]", () => {
  assert.deepEqual(inMiddle([1, 1, 1]), 1 )
});

it("returns [2,3] for [1, 2, 3,4]", () => {
  assert.deepEqual(inMiddle([1, 2, 3, 4]), [2,3] )
});

});



// console.log(inMiddle([1])) // => []
// console.log(inMiddle([1, 2])) // => []
// console.log(inMiddle([1, 2, 3]))// => [2]
// console.log(inMiddle([1, 2, 3, 4, 5])) // => [3]
// console.log(inMiddle([1, 2, 3, 4])) // => [2, 3]
// console.log(inMiddle([1, 2, 3, 4, 5, 6])) // => [3, 4]