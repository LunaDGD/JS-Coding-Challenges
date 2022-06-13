let string = "hello my name is chicka chicka slim shady";

//Solution 1
const str = string.split(" ").join("");
console.log(str);

//Solution 2
let str2 = string.replace(/\s/g, "");
console.log(str2);
