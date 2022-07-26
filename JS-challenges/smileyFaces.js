// https://dubbsong.github.io/dev/2019/10/20/codewars-6kyu-28/
// create function
// in function declare vairable that declares an array of all possible smiley faces
// set counter = 0
// create for loop that will iterate through an array of smiley faces
// in if statement use includes method. includes method will check is the aray includes the set of smiley faces from the smileys array
// if true, counter will be incremented by 1
// return counter

function countSmileys(arr) {
  const smileys = [
    ":)",
    ":D",
    ":-)",
    ":~)",
    ":-D",
    ":~D",
    ";)",
    ";D",
    ";-)",
    ";~)",
    ";-D",
    ";~D",
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (smileys.includes(arr[i])) {
      //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
      //
      count++;
    }
  }
  return count;
}

console.log(countSmileys([]));
console.log(countSmileys([":)"]));
console.log(countSmileys([":("]));
console.log(countSmileys([":)", ":D", ";-)", ":~D"]));
console.log(countSmileys([";(", ":-]", ":}", ":->"]));
