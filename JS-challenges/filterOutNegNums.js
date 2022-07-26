// create a new array that filters out negative numbers
let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];

const newArr = arr.filter((nums) => {
  return nums > 0;
});

console.log(newArr);
