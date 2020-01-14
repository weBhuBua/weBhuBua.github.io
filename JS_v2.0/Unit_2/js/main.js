
//Task 1
//Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);


//Task 2
//Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
document.querySelector('.block').innerHTML = c / d;

//Task 3
//Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;
document.querySelector('.block-1').innerHTML = e + f;


//Task 4
//Создайте две переменные e1 = '3' и f1 = 5. 
//Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
document.querySelector('.block-2').innerHTML = e1 + f1;  // Не произошло сложения, числа просто соединились.


//Task 5
//Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 = 3;
let f2 =0;
document.querySelector('.block-3').innerHTML = e2 / f2;


//Task 6
//Создайте две переменные e3 = 3 и f3 = 'Hello'. 
//Выведите на страницу результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.block-4').innerHTML = e3 + f3;


//Task 7
//Создайте две переменные e4 = 3 и f4 = 'Hello'. 
//Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.block-5').innerHTML = e3 * f3;


//Task 8
//Создайте input и кнопку. 
//По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let put = document.querySelector('.in1');
let btn = document.querySelector('button');

btn.onclick = function() {
    console.log(put.value);
}


//Task 9
//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, 
//что пользователь ввел в input. 
//Добавьте очистку input после нажатия кнопки.
let put1 = document.querySelector('.in2');
let btn1 = document.querySelector('.button-1');

btn1.onclick = function() {

    let num = put1.value;

    console.log(num);
    put1.value = '';
    
}


//Task 10
//Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, 
//которое ввел пользователь умноженное на 10.
let put2 = document.querySelector('.in3');
let btn2 = document.querySelector('.button-2');
let p = document.querySelector('.block-6');

btn2.onclick = function() {

    let num1 = put2.value;
    p.innerHTML = num1 * 10;

}


//Task 11
//Создайте input и кнопку. По нажатию на кнопку выполняется функция, 
//которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let put3 = document.querySelector('.in4');
let btn3 = document.querySelector('.button-3');
let p1 = document.querySelector('.block-7');

btn3.onclick = function() {

    let num2 = +put3.value;
    p1.innerHTML = num2 + 10;

}


//Task 12
//Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. 
//При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', 
//где имя - имя пользователя и фамилия - введенная фамилия.
let put4 = document.querySelector('.in5');
let put5 = document.querySelector('.in6');
let btn4 = document.querySelector('.button-4');

btn4.onclick = function() {

    console.log('Hello ' + put4.value + ' ' + put5.value);

}


//Task 13
//Создайте два input и кнопку. 
//В input пользователь вводит числа. При нажатии кнопки выполняется функция, 
//которая выводит сумму данных двух чисел на страницу.
let put6 = document.querySelector('.in7');
let put7 = document.querySelector('.in8');
let btn5 = document.querySelector('.button-5');
let p2 = document.querySelector('.block-8');

btn5.onclick = function() {

    let num3 = +put6.value;
    let num4 = +put7.value;

    p2.innerHTML = num3 + num4;

}


//Task 14
//Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let put8 = document.querySelector('.in9');
let btn6 = document.querySelector('.button-6');

btn6.onclick = function() {

    put8.value = 'Hello ';

}


//Task 15
//Создайте input и получите его в переменную y. 
//В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции. 
let y = document.querySelector('.in10');
y.style.border = '2px solid red';


//Task 16
//Создайте два input type=number, куда пользователь может ввести числа. 
//Выведите на страницу сумму данных чисел.
let put9 = document.querySelector('.in11');
let put10 = document.querySelector('.in12');
let btn7 = document.querySelector('.button-7');
let p3 = document.querySelector('.block-9');

btn7.onclick = function() {

   let num5 = +put9.value;
   let num6 = +put10.value;

   p3.innerHTML = num5 + num6;

}


//Task 17
//Создайте input type="text" куда пользователь может ввести строку и число. 
//Создайте функцию, которая запускается по нажатию на кнопку. 
//Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), 
//и результат операции выведите в консоль. Прочитайте за эту операцию. 
//Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let put11 = document.querySelector('.in13');
let btn8 = document.querySelector('.button-8');

btn8.onclick = function() {

   let t = put11.value;
   t = parseInt(t);
   console.log(t);

}


//Task 18
//Создайте input type="text" куда пользователь может ввести строку и число. 
//Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. 
//А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. 
//Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let put12 = document.querySelector('.in14');
let btn9 = document.querySelector('.button-9');

btn9.onclick = function() {

   t = put12.value;
   t = parseFloat(t);
   console.log(t);

}

//Task 19
//Создайте два input type=number, куда пользователь может ввести отрицательные числа. 
//Выведите на страницу сумму данных чисел.
let put13 = document.querySelector('.in15');
let put14 = document.querySelector('.in16');
let btn10 = document.querySelector('.button-10');
let p4 = document.querySelector('.block-10');

btn10.onclick = function() {

   let num7 = +put13.value;
   let num8 = +put14.value;

   p4.innerHTML = num7 + num8;

}

//Task 20
//Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. 
//По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' 
//куда поставьте соответствующие данные из inputов.
let put15 = document.querySelector('.in17');
let put16 = document.querySelector('.in18');
let put17 = document.querySelector('.in19');
let put18 = document.querySelector('.in20');
let btn11 = document.querySelector('.button-11');
let p5 = document.querySelector('.block-11');

btn11.onclick = function() {

   let num9 = put15.value;
   let num10 = put16.value;
   let num11 = put17.value;
   let num12 = put18.value;

   p5.innerHTML = 'Уважаемый ' + num9 + ' ' + num10 + ' ваш возраст ' + num11 + ' года, по професии вы ' + num12;

}



//===============================================================