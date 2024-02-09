// Заполните массив случайными числами из промежутка от 1 до 100.

function fillRandomArray(arrLength) {
	const newArr = [];
	for (let index = 0; index < arrLength; index++) {
		newArr.push((Math.random() * (100 - 1 + 1)).toFixed());
	}
	console.log(newArr);
}

fillRandomArray(100);
