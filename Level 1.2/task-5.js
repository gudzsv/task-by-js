// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

function compareFirstDigit(number1, number2) {
	console.log(
		+String(number1)[0] === +String(number2)[0] ? `equal` : `not equal`
	);
}
compareFirstDigit(156546, 126546);
compareFirstDigit(222, 333);
