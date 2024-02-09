// Дано число. Выведите в консоль последнюю цифру этого числа.

function getFirstDigit(number) {
	const numToString = String(number);
	console.log(+numToString[numToString.length - 1]);
}

getFirstDigit(22254472);
