//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9

// function that takes an array of integers
// for loop iteration
// add the two numbers together
// if nums = target, return indices
// else continue iteration

function checker(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const addition = arr[i] + arr[j];
      const target = 9;
      if (addition === target) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

const arr = [2, 7, 11, 15];
console.log(checker(arr));
