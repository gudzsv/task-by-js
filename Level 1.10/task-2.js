// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

function reverseDigit(number) {
	const srtFromNum = String(number);
	for (let i = srtFromNum.length - 1; i >= 0; i -= 1) {
		console.log(+srtFromNum[i]);
	}
}

reverseDigit(12345);
