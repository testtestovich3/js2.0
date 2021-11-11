// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;

console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;

// let task2 = document.querySelector('.out-2');
// task2.innerHTML = c / d;

document.querySelector(".out-2").textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;

// let task3 = document.querySelector('.out-3');
// task3.innerHTML = e + f;

document.querySelector(".out-3").textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = "3";
let f1 = 5;

// let task4 = document.querySelector('.out-4');
// task4.innerHTML = e1 + f1;

document.querySelector(".out-4").textContent = e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector(".out-5").textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = "Hello";

document.querySelector(".out-6").textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = "Hello";

document.querySelector(".out-7").textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let inputInTask8 = document.querySelector(".i-8");
let buttonTask8 = document.querySelector(".b-8");

function t8() {
  console.log(inputInTask8.value);
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inputInTask9 = document.querySelector(".i-9");
let buttonTask9 = document.querySelector(".b-9");
let divTask9 = document.querySelector(".out-9");

function t9() {
  let resultTask9 = +inputInTask9.value; // присваиваю значение и типизирую в число
  divTask9.innerHTML = resultTask9; // добавляю информацию из value = div
  inputInTask9.value = ""; // очищение input-a
}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inputInTask10 = document.querySelector(".i-10");
let buttonTask10 = document.querySelector(".b-10");
let divTask10 = document.querySelector(".out-10");

function t10() {
  let resultTask10 = +inputInTask10.value; // присваиваю значение и типизирую в число
  divTask10.innerHTML = resultTask10 * 10; // добавляю информацию из value = div
  inputInTask10.value = ""; // очищение input-a
}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let inputInTask11 = document.querySelector(".i-11");
let buttonTask11 = document.querySelector(".b-11");
let divTask11 = document.querySelector(".out-11");

function t11() {
  let resultTask11 = +inputInTask11.value; // присваиваю значение и типизирую в число
  divTask11.innerHTML = resultTask11 + 10; // добавляю информацию из value = div
  inputInTask11.value = ""; // очищение input-a
}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputInTask12_1 = document.querySelector(".i-12_1");
let inputInTask12_2 = document.querySelector(".i-12_2");
let buttonTask12 = document.querySelector(".b-12");
let divTask12 = document.querySelector(".out-12");

function t12() {
  let resultTask12 = inputInTask12_1.value + " " + inputInTask12_2.value; // присваиваю значение и типизирую в число
  divTask12.innerHTML = "Hello " + resultTask12; // добавляю информацию из value = div
  inputInTask12_1.value = ""; // очищение input-a
  inputInTask12_2.value = ""; // очищение input-a
}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let inputInTask13_1 = document.querySelector(".i-13_1");
let inputInTask13_2 = document.querySelector(".i-13_2");
let buttonTask13 = document.querySelector(".b-13");
let divTask13 = document.querySelector(".out-13");

function t13() {
  let resultTask13 = +inputInTask13_1.value + +inputInTask13_2.value; // присваиваю значение и типизирую в число
  divTask13.innerHTML = resultTask13; // добавляю информацию из value = div
  inputInTask13_1.value = ""; // очищение input-a
  inputInTask13_2.value = ""; // очищение input-a
}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector(".i-14").value = "Hello";

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(".i-15");
y.style.border = "2px solid red";

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inputInTask16_1 = document.querySelector(".i-16_1");
let inputInTask16_2 = document.querySelector(".i-16_2");
let buttonTask16 = document.querySelector(".b-16");
let divTask16 = document.querySelector(".out-16");

function t16() {
  let resultTask16 = +inputInTask16_1.value + +inputInTask16_2.value; // присваиваю значение и типизирую в число
  divTask16.innerHTML = resultTask16; // добавляю информацию из value = div
  inputInTask16_1.value = ""; // очищение input-a
  inputInTask16_2.value = ""; // очищение input-a
}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputInTask17 = document.querySelector(".i-17");
let buttonTask17 = document.querySelector(".b-17");
let divTask17 = document.querySelector(".out-17");

function t17() {
  let resultTask17 = inputInTask17.value;
  let t = resultTask17;
  t = parseInt(t);
  divTask17.innerHTML = t;
}

document.querySelector(".b-17").onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputInTask18 = document.querySelector(".i-18");
let buttonTask18 = document.querySelector(".b-18");
let divTask18 = document.querySelector(".out-18");

function t18() {
  let resultTask18 = inputInTask18.value;
  let t = resultTask18;
  t = parseFloat(t);
  divTask18.innerHTML = t;
}

document.querySelector(".b-18").onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let inputInTask19_1 = document.querySelector(".i-19_1");
let inputInTask19_2 = document.querySelector(".i-19_2");
let buttonTask19 = document.querySelector(".b-19");
let divTask19 = document.querySelector(".out-19");

function t19() {
  let resultTask19 = +inputInTask19_1.value + +inputInTask19_2.value; // присваиваю значение и типизирую в число
  let t = resultTask19;
  t = parseFloat(t);
  divTask19.innerHTML = t; // добавляю информацию из value = div
  inputInTask19_1.value = ""; // очищение input-a
  inputInTask19_2.value = ""; // очищение input-a
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let nameTask20 = document.querySelector(".name");
let familyTask20 = document.querySelector(".family");
let yearTask20 = document.querySelector(".year");
let textTask20 = document.querySelector(".text");
let buttonTask20 = document.querySelector(".b-20");
let divTask20 = document.querySelector(".out-20");

function t20() {
  let resultTask20 =
    "Уважаемый " +
    nameTask20.value +
    ", " +
    familyTask20.value +
    ", ваш возраст " +
    yearTask20.value +
    " года, по профессии вы " +
    textTask20.value;
  divTask20.innerHTML = resultTask20;
}

document.querySelector(".b-20").onclick = t20;
