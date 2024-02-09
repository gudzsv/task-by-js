// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

function roundArrayNumbers(arr) {
	console.log(arr.map((number) => number.toFixed(1)));
}

roundArrayNumbers([1.456, 2.125, 3.32, 4.1, 5.34]);
