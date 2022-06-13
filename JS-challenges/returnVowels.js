let string = "hello my name is chicka chicka slim shady";

//Solution 1
const vowelChecker = (str) => {
  let newString = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      newString.push(str[i]);
    }
  }
  return newString.length;
};

console.log(vowelChecker(string));

//Solution 2
const string2 = string.match(/[aeiou]/g).length;
console.log(string2);
