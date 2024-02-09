// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function getLastChar(str) {
	console.log(
		str[str.length - 1].toLowerCase() === 'ь'
			? str[str.length - 2]
			: str[str.length - 1]
	);
}

getLastChar('Вогонь');
getLastChar('Вода');
