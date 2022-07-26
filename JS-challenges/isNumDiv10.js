// Create a function that checks if a number is divisible by 10
const tenChecker = (num) => {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(tenChecker(2450));
