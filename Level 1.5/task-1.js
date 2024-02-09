// Найдите сумму всех целых чисел от 1 до 100.

function sumWholeNumbers() {
	let sum = 0;
	for (let i = 1; i <= 100; i += 1) {
		sum += i;
	}
	console.log(sum);
}

sumWholeNumbers();
