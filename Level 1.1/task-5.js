// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

function equalFirstChar(str1, str2) {
	console.log(
		str1[0] === str2[0]
			? `the first character "${str1[0]}" of string one "${str1}" is equal first character "${str2[0]}" of string two "${str2}"`
			: `the first character "${str1[0]}" of string one "${str1}" is NOT equal first character "${str2[0]}" of string two "${str2}"`
	);
}
equalFirstChar('first', 'first');
equalFirstChar('first', 'second');
