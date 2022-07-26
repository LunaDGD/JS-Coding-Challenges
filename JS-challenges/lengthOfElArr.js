// Explain what a callback function is and provide a simple example.

const nums = [10, 20, 30];

const smallNum = nums.map((num) => num / 10);

// const smallNum = () => nums.map((num) => num / 10);

// console.log(smallNum);
// console.log(smallNum());

// Write code to convert an array of strings to an array of the lengths of those strings
var words = ["the", "quick", "brown", "fox"];

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].length;
// }
// console.log(words);

const words2 = words.map((str) => str.length);
console.log(words2);
