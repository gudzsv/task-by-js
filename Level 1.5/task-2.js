// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

function sumEvenIntegers() {
	let sum = 0;
	for (let i = 1; i <= 100; i += 1) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	console.log(sum);
}

sumEvenIntegers();
