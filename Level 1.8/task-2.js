// Заполните массив четными числами из промежутка от 1 до 100.

function fillArrayEvenNumbers() {
	const newArray = [];
	for (let index = 1; index <= 100; index++) {
		if (index % 2 === 0) {
			newArray.push(index);
		}
	}
	console.log(newArray);
}

fillArrayEvenNumbers();
