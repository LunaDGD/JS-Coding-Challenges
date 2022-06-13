//Create a function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array C10!!!!".

let arr = [1, 2, 3, 4, 5, 6, 7];
const result = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      return "Boom";
    }
  }
  return "no 7";
};
console.log(result(arr));
