// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

function sumArrayElements(arr) {
	let sum = 0;
	for (const item of arr) {
		if (item > 0 && item < 10) {
			sum += item;
		}
	}
	console.log(sum);
}

sumArrayElements([-1, 0, 2, 15, 4, 10]);
