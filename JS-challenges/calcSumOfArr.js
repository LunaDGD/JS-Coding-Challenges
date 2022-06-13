//Solution 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log(sum);

//Solution 2
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
  sum2 += arr[i];
}
console.log(sum2);
