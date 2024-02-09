// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

function sumOfSqrtArrayElements(arr) {
	let sum = 0;
	for (const i of arr) {
		sum += Math.sqrt(i);
	}
	console.log(sum);
}

sumOfSqrtArrayElements([2, 4, 2, 4]);
