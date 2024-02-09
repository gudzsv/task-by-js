// Выведите в консоль все четные числа из промежутка от 1 до 100.

function evenNumners() {
	for (let index = 1; index <= 100; index++) {
		if (index % 2 === 0) {
			console.log(index);
		}
	}
}

evenNumners();
