function convert(factor, miles) {
  let km = miles / factor;
  return km;
}
let factor = 0.62;

console.log(convert(factor, 23.4));
