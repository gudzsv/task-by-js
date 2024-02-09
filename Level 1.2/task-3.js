// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

function sumFirstAndLastDigit(number) {
	const numToString = String(number);
	const firstDigit = +numToString[0];
	const lastDigit = +numToString[numToString.length - 1];
	console.log(firstDigit + lastDigit);
}

sumFirstAndLastDigit(151);
