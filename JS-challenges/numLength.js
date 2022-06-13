//Create a function that will return an integer number corrosponding to the amount of digits in the given integer num

function len(num) {
  return num.toString().length - 1;
}

console.log(len(-1233242536543));
