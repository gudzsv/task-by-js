// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

function multiplesOfThree() {
	for (let i = 1; i <= 100; i += 1) {
		if (i % 3 === 0) {
			console.log(i);
		}
	}
}

multiplesOfThree();
