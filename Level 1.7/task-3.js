// Дано некоторое число:
// 12345
// Переверните его:
// 54321

function reverseNumber(number) {
	const arrStr = String(number).split('');
	const reverse = [];
	for (let index = arrStr.length; index > 0; index--) {
		reverse.push(+index);
	}
	console.log(reverse);
}

function reverseNumber1(number) {
	console.log(
		String(number)
			.split('')
			.reverse()
			.map((el) => +el)
	);
}

reverseNumber(12345);
reverseNumber1(12345);
