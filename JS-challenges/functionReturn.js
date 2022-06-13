function func1(str) {
  return str;
}
function func2(a) {
  return a;
}

console.log(func2(func1("Hello world")));

function redundant(str) {
  return function () {
    return str;
  };
}
console.log(redundant("Hello world"));
