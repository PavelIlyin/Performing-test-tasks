"use strict";
/*
Задача № 1
Написать метод/функцию, который/которая на вход принимает массив городов. 
В качестве результата возвращает строку, где города разделены запятыми,
а в конце стоит точка. 
Пример:
«Москва, Санкт-Петербург, Воронеж.» 
*/

/*
Решение
Сделал два решения в модульном стиле, чтобы избежать конфликтов переменных
Время на выполнение с комментариями - 12 мин 36 сек*/
//1 ВАРИАНТ

(function () {
    const city = ['Москва', 'Санкт-Петербург', 'Воронеж'];

    function getCity(...arr) {
        let cityList = `${arr.join(', ')}.`;
        return cityList;
    }

    console.log(getCity(...city));
})();

//2 ВАРИАНТ

(function () {
    const city = ['Москва', 'Санкт-Петербург', 'Воронеж'];

    function getCity(arr) {
        let cityList = '';
        for (let i of arr) {
            if (i === arr[arr.length - 1]) {
                cityList += `${i}.`
            } else {
                cityList += `${i}, `
            }
        }

        return cityList;
    }

    console.log(getCity(city));

})();