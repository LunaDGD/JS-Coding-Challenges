const tenChecker = (num) => {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(tenChecker(10000000000));
