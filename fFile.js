var customConsole = require('prompt-sync')();
//Переменные
var a;
var act;
var b;
var result;
//Массив
var array = ["1) Сложение", "2) Вычитание", "3) Умножение", "4) Деление"];
//Цикл
for (var i = 0; i <= array.length - 1; i++) {
    console.log("" + array[i]);
}
;
act = 0;
while (act > 4 || act < 1) {
    act = customConsole("Выберите операцию : 1  + , 2  - , 3  * , 4  / . ");
}
;
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
    return +a + +b;
}
;
function Вычитание() {
    return a - b;
}
;
function Умножение() {
    return a * b;
}
;
function Деление() {
    return a / b;
}
;
//Консоль
console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: " + result);
