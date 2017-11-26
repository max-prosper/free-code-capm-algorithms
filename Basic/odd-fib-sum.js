// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the //sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	let fibArr = [0, 1];

	for (let i = 2; i <= num; i += 1) {
		const a = fibArr[i - 1];
		const b = fibArr[i - 2];
		fibArr.push(a + b);
	}

	let oddFibArr = fibArr.filter(n => n % 2 !== 0 && n <= num);
	return oddFibArr.reduce((a, b) => a + b, 0);
}


sumFibs(1) // a number.
sumFibs(1000) // 1785.
sumFibs(4000000) // 4613732.
sumFibs(4) // 5.
sumFibs(75024) // 60696.
sumFibs(75025) // 135721.
