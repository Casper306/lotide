const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters){
const result = {};

for (let letter of letters){
  if( letter !== " "){
  if (result[letter]){
    result[letter] += 1;
  } else {
    result[letter] = 1;
  }
}

}return result;
}

//console.log(countLetters("lighthouse in the house"));

const answer = countLetters("lighthouse in the house");
assertEqual(answer["h"], 4);
assertEqual(answer["l"], 1);
assertEqual(answer["s"], 2);
assertEqual(answer["e"], 4);