"use strict";
/*
Задача № 5
Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). 
На вход подаются два массива. На выходе массив с необходимыми совпадениями.
Пример:
[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
На выходе [1, 17]
*/

/*
Решение
Время на выполнение с комментариями - 27 мин 23 сек
Не сразу внимательно прочитал, первый раз не так реализовал
*/

const array1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const array2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function sortArray(arr) {
    let sortedArr = arr.sort();
    let resultArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] == sortedArr[i]) {
            resultArr.push(sortedArr[i]);
        }
    }
    return new Set(resultArr);
}

function getDuplicateNumbers(func1, func2) {
    let newArr = [...func1, ...func2].sort();
    let result = [...sortArray(newArr)];
    return result;
}

console.log(getDuplicateNumbers(sortArray(array1), sortArray(array2)));
