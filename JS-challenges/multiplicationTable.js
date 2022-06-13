var result = "\n";
for (var i = 1; i < 12; i++) {
  for (var j = 1; j < 12; j++) {
    result += i * j + " ";
  }
  result += "\n";
}
console.log(result);
