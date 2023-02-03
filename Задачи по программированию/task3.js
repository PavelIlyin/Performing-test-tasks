"use strict";
/*
Задача № 3
Написать метод/функцию, который/которая на вход принимает число (int), 
а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
*/

/*
Решение
Время на выполнение с комментариями - 13 мин 08 сек
*/

function getWord(int) {
    let remainsInt = int % 10;

    if (remainsInt === 0 || remainsInt > 4) {
        return `«${int} компьютеров»`;
    } else if (remainsInt === 1) {
        return `«${int} компьютер»`;
    } else if (remainsInt > 1 && remainsInt < 5) {
        return `«${int} компьютера»`;
    } else {
        return `Некорректное число`;
    }
}

console.log(getWord(25));
console.log(getWord(41));
console.log(getWord(1048));
console.log(getWord(0));
console.log(getWord(43));