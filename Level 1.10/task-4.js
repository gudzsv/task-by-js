// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 1)
console.log(arr1.concat(arr2));
// 2)
console.log([...arr1, ...arr2]);
