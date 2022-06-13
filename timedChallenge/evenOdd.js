// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// warOfNumbers([12, 90, 75]) ➞ 27

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168

// function warOfNumbers(arr) {
// 	var even = 0;
// 	var odd = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] % 2 == 0){
// 			even = even + arr[i];
// 		}else{
// 			odd = odd + arr[i];
// 		}
// 	}
// 	if(even > odd){
// 		return even - odd;
// 	}else{
// 		return odd - even;
// 	}
// }

const evenOdd = (arr) => {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven = sumEven + arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumEven = sumEven + arr[i];
    }
  }

  if (sumEven > sumOdd) {
    return sumEven - sumOdd;
  } else {
    return sumOdd - sumEven;
  }
};

let arr = [2, 8, 7, 5];
console.log(evenOdd(arr));
