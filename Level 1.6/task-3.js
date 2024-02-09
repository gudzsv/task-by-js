// Дан массив с числами. Найдите сумму положительных элементов этого массива.

function sumPositiveArrayNumbers(arr) {
	let sum = 0;
	for (const i of arr) {
		if (i > 0) {
			sum += i;
		}
	}
	console.log(sum);
}

sumPositiveArrayNumbers([-2, -4, 2, 4, 1, 0]);
