// Solution 1
let arr = [1, 2, 3, 4, 5];

const reverseArr = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(reverseArr(arr));

//Solution 2
let rv = arr.reverse();
console.log(rv);
