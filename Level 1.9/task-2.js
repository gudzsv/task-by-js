// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

function onlyHtmlExt(arr) {
	console.log(arr.filter((el) => el.trim().endsWith('.html')));
}

onlyHtmlExt(['not url', 'index.html', 'http://allo', 'main.html']);
