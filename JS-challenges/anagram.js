function reverseString(str) {
  var newString = str.split('').reverse().join('');
  return newString;
}
console.log(reverseString('string string'));
