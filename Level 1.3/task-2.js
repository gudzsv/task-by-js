// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

function isFirstDevidedToSecondWithoutRemaining(number1, number2) {
	console.log(number1 % number2 === 0 ? true : false);
}

isFirstDevidedToSecondWithoutRemaining(2, 5);
isFirstDevidedToSecondWithoutRemaining(5, 5);
