//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

let arr = [-3, -5, 3, 4, 3, -1, 7, 35, -24];

const sum = arr.reduce((acc, curr) => {
  return Math.abs(acc) + Math.abs(curr);
});

console.log(sum);

// function getAbsSum(arr){
//     var result = 0;

//     for(i = 0; i < arr.length; i++) {
//       result += Math.abs(arr[i]);
//     }

//     return result;
//   }
