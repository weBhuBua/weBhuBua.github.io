
// Task 1
// Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. 
// Выведите сообщение в консоль.
let a = 4;
if ( a == 4 ) {
   console.log(true);
}


// Task 2
// Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, 
// какая из переменных больше.
let b = 8;
let c = 10;
if ( b > c ) {
   console.log('b');
}
else {
   console.log('c');
}


// Task 3
// Используя else if добавьте в предыдущую задачу проверку на равенство.
let b1 = 8;
let c1 = 10;
if ( b1 > c1 ) {
   console.log('b1');
}
else if ( b1 == c1 ) {
   console.log('=');
}
else {
   console.log('c1');
}


// Task 4
// Создайте на странице 2 input, куда пользователь может вводить числа. 
// Добавьте кнопку. При нажатии кнопки выполняйте функцию, 
// которая сравнит два числа и выведет большее на страницу. 
// Если числа равны - выводится строка "равны".
let put = document.querySelector('.inp');
let put1 = document.querySelector('.inp-1');

let btn = document.querySelector('.button');
let p = document.querySelector('.block');

btn.onclick = function() {

   let num = +put.value;
   let num1 = +put1.value;
   
   if ( num > num1 ) {
      p.innerHTML = num;
   }
   else if ( num == num1 ) {
      p.innerHTML ='Равны';
   }
   else {
      p.innerHTML = num1;
   }

}


// Task 5
// Создайте на странице input, куда пользователь может вводить год рождения. 
// Добавьте кнопку. При нажатии кнопки выполняйте функцию, 
// которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), 
// если год рождения больше или равен 2000 - выводит в консоль возраст пользователя. 
let put2 = document.querySelector('.inp-2');

let btn1 = document.querySelector('.button-1');
let p1 = document.querySelector('.block-1');

btn1.onclick = () => {

   let num = put2.value;

   if ( num < 2000 ) {
      p1.innerHTML = 2019 - num;
   }
   else if ( num >= 2000 ) {
      console.log('Возраст = ' + (2019 - num) + ' годиков');
   }

}


// Task 6
// Создайте input куда пользователь может ввести номер квартиры. 
// Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, 
// что квартира не существует.
let put3 = document.querySelector('.inp-3');

let btn2 = document.querySelector('.button-2');
let p2 = document.querySelector('.block-2');

btn2.onclick = () => {

   let num = +put3.value;

   if ( num >= 1 && num <= 32 ) {
      p2.innerHTML = 'Можешь заходить!';
   }
   else {
      p2.innerHTML = 'Такой квартиры здесь нет!'
   }

}


// Task 7
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно 
// выводиться сообщение - большие или меньше нуля это число. 
let put4 = document.querySelector('.inp-4');

let btn3 = document.querySelector('.button-3');
let p3 = document.querySelector('.block-3');

btn3.onclick = () => {

   let num = +put4.value;
   
   if ( num > 0 ) {
      p3.innerHTML = 'Больше нуля!'
   }
   else {
      p3.innerHTML = 'Меньше нуля!'
   }

}


// Task 8
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу 
// должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. 
// Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. 
// Если остаток от деления 0 - то число четное, если нет - не четное.
let put5 = document.querySelector('.inp-5');

let btn4 = document.querySelector('.button-4');
let p4 = document.querySelector('.block-4');

btn4.onclick = () => {

   let num = +put5.value;
   let num1 = num % 2;
   
   if ( num1 == 0 ) {
      p4.innerHTML = 'Чётное';
   }
   else {
      p4.innerHTML = 'Нечётное';
   }

}


// Task 9
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), 
// то по нажатию кнопки число из первого инпута возведите в степень из второго input. 
// Результат выведите на страницу. Как возвести в степень? Читаем!
let put6 = document.querySelector('.inp-6');
let put7 = document.querySelector('.inp-7');

let btn5 = document.querySelector('.button-5');
let p5 = document.querySelector('.block-5');

btn5.onclick = () => {

   let num11 = put6.value;
   let num12 = put7.value;

   if ( num11 === '' || num12 === '' ) {
      p5.innerHTML = 'Введите число';
   }
   else {
      p5.innerHTML = num11 ** num12;
   }

}


// Task 10
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - 
// сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. 
// Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, 
// которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello... 
let put8 = document.querySelector('.inp-8');
let btn6 = document.querySelector('.button-6');

btn6.onclick = () => {

   let num = +put8.value;

   if ( num == '' || num == ' ' ) {
      alert('Введите правильное имя!');
   }
   else {
      alert('Hello ' + num); 
   }

}

// Task 11
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. 
// Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. 
// Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - 
// это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. 
// Если она равна - выведите ошибку, если нет - сообщение с содержимым input. 
let put9 = document.querySelector('.inp-9');
let btn7 = document.querySelector('.button-7');

btn7.onclick = () => {

   let num5 = put9.value;
   num5 = num5.trim();

   if ( num5 === '' ) {
      alert('Введите правильное имя!');
   } 
   else {
      alert(num5);
   }

}


// Task 12
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. 
// Для решения используйте switch.
let put10 = document.querySelector('.inp-10');
let btn8 = document.querySelector('.button-8');

btn8.onclick = () => {

   let num11 = +put10.value;

   switch (num11) {

      case 1: 
         console.log('Один');
         break;
      case 2:
         console.log('Два');
         break;
      case 3:
         console.log('Три');

   }

}


// Task 13
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - 
// улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, 
// которая будет указывать улицу в зависимости от введенного дома.
let put11 = document.querySelector('.inp-11');
let btn9 = document.querySelector('.button-9');
let p6 = document.querySelector('.block-6')

btn9.onclick = () => {

   let num = +put11.value;

   if ( num >= 1 && num <= 5 ) {
      p6.innerHTML = 'Улица 1';
   }
   else if ( num >= 6 && num <= 11 ) {
      p6.innerHTML = 'Улица 2';
   }
   else if ( num >= 12 && num <= 20 ) {
      p6.innerHTML = 'Улица 3';
   }
   else {
      p6.innerHTML = 'Улица неизвестна';
   }

}


// Task 14
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. 
// С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов 
// до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. 
// Вывод результатов сделайте на страницу. 
let put13 = document.querySelector('.inp-13');
let btn10 = document.querySelector('.button-10');
let p7 = document.querySelector('.block-7');

btn10.onclick = () => {

   let num = +put13.value;

   if ( num >= 0 && num <= 25 ) {
      p7.innerHTML = 'Не обнаруживается';
   }
   else if ( num <= 50 ) {
      p7.innerHTML = 'Снижение числа лимфоцитов';
   }
   else if ( num <= 100 ) {
      p7.innerHTML = 'Вялость, рвота';
   }
   else if ( num <= 150 ) {
      p7.innerHTML = 'Смертность 5%';
   }
   else if ( num <= 350 ) {
      p7.innerHTML = 'Смертность 50% за 30 суток';
   }
   else if ( num <= 600 ) {
      p7.innerHTML = '90% смертность за 2 недели';
   }
   else if ( num <= 1000 ) {
      p7.innerHTML = 'Сразу труп';
   }
   else {
      p7.innerHTML = 'Не правильно введенные данные'
   }
}


// Task 15
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.
let x = 1;
let y = 0;

console.log( x && y ); // false
console.log( x || y ); // true


// Task 16
// В Казахстане, налог на объем двигателя объемом 500 куб составляет 2525 тенге, 1200 куб - 5050 тенге, 
// 1600 - 8275 тенге, 1900 куб - 9675 тенге, 2000 - 11075 тенге. Напишите программу, где пользователь 
// может ввести в input объем двигателя до 2000 куб включительно и получить налог на данный двигатель.
let put14 = document.querySelector('.inp-14');
let btn11 = document.querySelector('.button-11');
let p8 = document.querySelector('.block-8');

btn11.onclick = () => {

   let num = put14.value;

   if ( num <= 500 ) {
      p8.innerHTML = 'Ваш налог равен 2525 тенге'
   }
   else if ( num <= 1200 ) {
      p8.innerHTML = 'Ваш налог равен 5050 тенге'
   }
   else if ( num <= 1600 ) {
      p8.innerHTML = 'Ваш налог равен 8275 тенге'
   }
   else if ( num <= 1900 ) {
      p8.innerHTML = 'Ваш налог равен 9675 тенге'
   }
   else if ( num <= 2000 ) {
      p8.innerHTML = 'Ваш налог равен 11075 тенге'
   }
   else {
      p8.innerHTML = 'Не правильно введенные данные'
   }

}


// Task 17
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. 
// Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, 
// которую ввел пользователь. Коэффициенты - найдите в сети интернет.
let put15 = document.querySelector('.inp-15');
let put16 = document.querySelector('.inp-16');
let btn12 = document.querySelector('.button-12');
let p9 = document.querySelector('.block-9');

btn12.onclick = () => {

   let num = +put15.value;
   let num1 = put16.value;

   if ( num1 == 'euro' ) {
      p9.innerHTML = num / 1.103 ;
   }
   else if ( num1 == 'rub' ) {
      p9.innerHTML = num / 0.0153 ;
   }
   else if ( num1 == 'uah' ) {
      p9.innerHTML = num / 0.04 ;
   }

}


// Task 18
// Проделайте предыдущую задачу с помощью switch case.
let put17 = document.querySelector('.inp-17');
let put18 = document.querySelector('.inp-18');
let btn14 = document.querySelector('.button-14');
let p10 = document.querySelector('.block-10');

btn14.onclick = () => {

   let num = +put17.value;
   let num1 = put18.value;

   switch ( num1 ) {

      case 'euro':
         p10.innerHTML = num / 1.103 ;
         break;
      case 'rub':
         p10.innerHTML = num / 0.0153 ;
         break;
      case 'uah':
         p10.innerHTML = num / 0.04 ;

   }

}


// Task 19
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, 
// плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.
let put19 = document.querySelector('.inp-19');
let put20 = document.querySelector('.inp-20');
let put21 = document.querySelector('.inp-21');
let btn15 = document.querySelector('.button-15');
let p11 = document.querySelector('.block-11');

btn15.onclick = () => {

   let num = +put19.value;
   let num1 = +put20.value;
   let num3 = put21.value;

   if ( num3 == '+' ) {
      p11.innerHTML = num + num1;
   }
   else if ( num3 == '-' ) {
      p11.innerHTML = num - num1;
   }
   else if ( num3 == '*' ) {
      p11.innerHTML = num * num1;
   }
   else if ( num3 == '/' ) {
      p11.innerHTML = num / num1;
   }

}


// Task 20
// Проделайте предыдущую задачу с помощью switch case.
let put22 = document.querySelector('.inp-22');
let put23 = document.querySelector('.inp-23');
let put24 = document.querySelector('.inp-24');
let btn16 = document.querySelector('.button-16');
let p12 = document.querySelector('.block-12');

btn16.onclick = () => {

   let num = +put22.value;
   let num1 = +put23.value;
   let num2 = put24.value;

   switch ( num2 ) {

      case '+':
         p12.innerHTML = num + num1;
         break;
      case '-':
         p12.innerHTML = num - num1;
         break;
      case '*':
         p12.innerHTML = num * num1;
         break;
      case '/':
         p12.innerHTML = num / num1;
         break;

   }

}

//============================================================================