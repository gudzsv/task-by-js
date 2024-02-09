// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

function sumOfSquaresArrayElements(arr) {
	let sum = 0;
	for (const i of arr) {
		sum += i ** 2;
	}
	console.log(sum);
}

sumOfSquaresArrayElements([2, 4, 2, 4]);
