// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

function addTenPercentToArrayNumber(arr) {
	console.log(arr.map((el) => el + (el / 100) * 10));
}

addTenPercentToArrayNumber([10, 100, 1000, 121]);
