// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

function onlyUrlArray(arr) {
	console.log(arr.filter((el) => el.trim().startsWith('http://')));
}

onlyUrlArray(['not url', 'http://www', 'http://allo', 'main']);
