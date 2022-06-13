let arr = [13, 25, 6, 33, 72, 6, 84, 42, 56, 23];

let sort = arr.sort((a, b) => {
  return a - b; // to reverse order/High to Low: return b-a
});

console.log(sort);
