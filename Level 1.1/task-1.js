// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

function positiveOrNegative(number) {
	if (number < 0) {
		console.log('Число отрицательное');
	} else {
		console.log('Число положительное');
	}
}

positiveOrNegative(-5);
positiveOrNegative(5);
