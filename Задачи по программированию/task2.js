"use strict";
/*
Задача № 2
Написать метод/функцию, который/которая на вход принимает число (float), 
а на выходе получает число, округленное до пятерок.
Пример:
27 => 25, 27.8 => 30, 41.7 => 40.
*/

/*
Решение
Время на выполнение с комментариями - 19 мин 12 сек*/

function getNumber(num) {
    let roundNum = (Math.round(num));
    let remainsRoundNum = roundNum % 10;

    if (roundNum % 5 === 0) {
        return (roundNum)
    } else if (remainsRoundNum > 7) {
        return (roundNum + (10 - remainsRoundNum));
    } else if (2 < remainsRoundNum && remainsRoundNum < 5) {
        return (roundNum + (5 - remainsRoundNum));
    } else if (remainsRoundNum < 3) {
        return (roundNum - remainsRoundNum);
    } else if (5 < remainsRoundNum && remainsRoundNum < 8) {
        return (roundNum - (remainsRoundNum - 5));
    }
}

console.log(getNumber(27));
console.log(getNumber(27.8));
console.log(getNumber(41.7));
console.log(getNumber(43.7));
console.log(getNumber(2));
console.log(getNumber(142.4));
