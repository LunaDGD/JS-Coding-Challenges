// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
let x = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
function largestOfFour(arr) {
  let largestArr = [];
  const sortNum = (a, b) => b - a;
  for (let i = 0; i < arr.length; i++) {
    largestArr.push(arr[i].sort(sortNum)[0]);
  }
  return largestArr;
}
