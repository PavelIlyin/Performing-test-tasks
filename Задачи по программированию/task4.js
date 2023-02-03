"use strict";
/*
Задача № 4
Написать метод/функцию, который/которая на вход принимает целое число, 
а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).
*/

/*
Решение
Время на выполнение с комментариями - 14 мин 41 сек
*/

function getPrimeNumber(int) {
    let count = 0;
    if (int <= 1 && int >= 0) {
        return `${int} - Число не является простым`;
    } else if (int < 0) {
        return 'Число не должно быть отрицательным';
    }

    for (let i = 1; i <= int; i++) {
        if (int % i == 0) {
            count++;
        }
    }

    return (count === 2
        ? `${int} - Простое число`
        : `${int} - Число не является простым`);
}

console.log(getPrimeNumber(0));
console.log(getPrimeNumber(1));
console.log(getPrimeNumber(2));
console.log(getPrimeNumber(3));
console.log(getPrimeNumber(5));
console.log(getPrimeNumber(12));
console.log(getPrimeNumber(13));
console.log(getPrimeNumber(-13));