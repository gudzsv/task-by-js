// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

function iterateOverString(str) {
	for (let i = 1; i <= str.length; i += 1) {
		console.log(str[str.length - i]);
	}
}

iterateOverString('hero');
