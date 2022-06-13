// Create a function that takes in an array of numbers and returns the sum of its cubes.

let arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => {
  let sumCubes = acc * 3 + curr * 3;
  return sumCubes;
});

console.log(sum);
