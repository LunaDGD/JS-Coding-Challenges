// Create a function that checks if two arrays are a palindrome

function anaChecker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(anaChecker("ab cd", "dc ab"));
console.log(anaChecker("Things are good", "Dogs eat ants"));
