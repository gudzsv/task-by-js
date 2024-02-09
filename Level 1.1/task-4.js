// Дано число. Проверьте, четное оно или нет.

function evenNumber(number) {
	number % 2 === 0
		? console.log(`number ${number} even`)
		: console.log(`number ${number} odd`);
}

evenNumber(8);
evenNumber(11);
