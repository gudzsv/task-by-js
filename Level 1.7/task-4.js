// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

function sumDigitOfUmber(number) {
	const arrNumbers = String(number);
	let sum = 0;
	for (let index = 0; index < arrNumbers.length; index++) {
		sum += Number(arrNumbers[index]);
	}
	console.log(sum);
}

function sumDigitOfUmber1(number) {
	console.log(
		String(number)
			.split('')
			.map((digit) => +digit)
			.reduce((acc, digit) => acc + Number(digit))
	);
}

sumDigitOfUmber(12345);
sumDigitOfUmber1(12345);
