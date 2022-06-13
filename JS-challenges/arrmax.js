// //Create a function that finds the maximum number in an array of numbers
function findMax(ar) {
  var max = 0;
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }
  return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(`Max: ${max}`);
console.log(ar.length);
