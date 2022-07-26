//print numbers 1 - 15. if number is even print number is even, if odd print number is odd
for (i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  }
}
