const customConsole = require('prompt-sync')();

//Переменные
let a: number;
let act: any;
let b: number;
let result: number;


//Массив
let array: string[] = ["1) Сложение", "2) Вычитание", "3) Умножение", "4) Деление"];

//Цикл
for (let i = 0; i <= array.length - 1; i++) {
    console.log ("" + array[i])
};


act = 0;
while (act > 4 || act < 1) {
    act = customConsole("Выберите операцию : 1  + , 2  - , 3  * , 4  / . ")
};

a = customConsole("Введите число : ");
b = customConsole("Еще число : ");


if (act == 1) {
    result = Сложение();
}
else if (act == 2) {
    result = Вычитание();
}
else if (act == 3) {
    result = Умножение();
}
else if (act == 4) {
    result = Деление();
}

// Функции
function Сложение() {
    return +a + +b
};
function Вычитание() {
    return a - b
};
function Умножение() {
    return a * b
};
function Деление() {
    return a / b
};


//Консоль
console.log(`Результат: ${result}`);