// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
it('returns 2 for 2 elements', () => {
  assert.strictEqual(result.length, 2); // ensure we get back two elements
});

it('returns Lighthouse to ensure the first element is it', () => {
  assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
});

it('returns Labs to ensure the second element is it', () => {
  assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
});

});




// assertEqual(result[1], "Labs");