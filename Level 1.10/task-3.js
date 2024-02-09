// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

function dropByTwoElement(arr) {
	let newArr = [];
	for (const iterator of arr) {
		newArr.push(iterator);
		if (newArr.length === 2) {
			console.log(newArr);
			newArr = [];
		}
	}
}

function dropByTwoElement1(arr, count) {
	for (let i = 0; i < arr.length; i += count) {
		console.log(arr.slice(i, i + count));
	}
}

dropByTwoElement([1, 2, 3, 4, 5, 6]);

dropByTwoElement1([1, 2, 3, 4, 5, 6], 2);
