// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

function lastCharacter(str) {
	console.log(str.length > 1 ? str[str.length - 1] : str);
}

lastCharacter('a');
lastCharacter('abc');
