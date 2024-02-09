// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.

function getArrayFromNumber(number) {
	console.log(
		String(number)
			.split('')
			.map((el) => +el)
	);
}

getArrayFromNumber(12345);
