// Task 1 --------------------
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input и 
// добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.
let arr1 = [];
let out = document.querySelector('.out-1');

document.querySelector('.u-2__push').onclick = () => {
   out.innerText = '';
   let inp = document.querySelector('.u-1').value;
   if (inp == '') {
      alert (false);
   }
   else {
      arr1.push(inp);
   }
  
   document.querySelector('.u-1').value = '';
   out.innerText += arr1 + ',';

   

}

document.querySelector('.u-2__pop').onclick = () => {
   out.innerText = '';
   arr1.pop();
   out.innerText += arr1;

}

document.querySelector('.u-3__shift').onclick = () => {
   out.innerText = '';
   arr1.shift();
   out.innerText += arr1;

}

document.querySelector('.u-4__unshift').onclick = () => {
   out.innerText = '';
   let inp = document.querySelector('.u-1').value;
   if (inp == '') {
      alert (false);
   }
   else {
      arr1.unshift(inp);
   }
   
   out.innerText += arr1;

}


// Task 2 --------------------
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 
// применяется метод pop, после чего массив выводится в div.out-1



// Task 3 --------------------
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). 
// После применения shift, массив arr1 выподится в div.out-1.


// Task 4 --------------------
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за метод unshift). 
// После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед 
// применением unshift. Надеюсь, вы это сделали и в первой задаче? 


// Task 5 --------------------
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, 
// во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. 
// Результат применения выводите в div.out-5.   let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

document.querySelector('.btn-5').onclick = () => {

   let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
   let inp5 = +document.querySelector('.inp-5').value;
   let inp55 = +document.querySelector('.inp-55').value;
   let out5 = document.querySelector('.out-5');

   out5.innerHTML = arr5.splice(inp5, inp55);

}



// Task 6 --------------------
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// 1.читает содержимое input в переменную
// 2.вычисляет длину массива
// 3.присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

document.querySelector('.btn-6').onclick = () => {
   funcPush();
}

let arr6 = [2, 'hi', 98, 25, 'u6', 45, 'go'];

function funcPush() {

   let inp6 = +document.querySelector('.inp-6').value;
   let out6 = document.querySelector('.out-6');
   let l = arr6.length;
   arr6[l] = inp6;
   out6.innerHTML = arr6;
}


// Task 7 --------------------
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// 1.удаляет последний элемент массива
// Выводит массив на страницу

document.querySelector('.btn-7').onclick = function funcPop() {

   delete arr6[arr6.length-1];
   document.querySelector('.out-7').innerHTML = arr6;

}


// Task 8 --------------------
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// 1.Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу

document.querySelector('.btn-8').onclick = function funcShift() {
 let arr8 = [];
 arr8[0] = arr6[1]; 
 document.querySelector('.out-8').innerHTML = arr8;

}


// Task 9 --------------------
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// 1.читает содержимое input в переменную
// 2.создает новый массив где нулевым элементов задает считанную из input строку
// 3.дописывает остальные значения старого массива в новый
// Выводит массив на страницу

document.querySelector('.btn-9').onclick = function funcShift() {

   let inp9 = document.querySelector('.inp-9').value;
   let arr9 = [];
   arr9[0] = inp9; 
   arr9[1] = arr6;
   document.querySelector('.out-9').innerHTML = arr9;
  
}


// Task 10 --------------------
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). 
// После применения reverse, массив arr10 выподится в div.out-10.  let arr10 = [2,4, 6, 8, 10, 'hello'];

let arr10 = [2,4, 6, 8, 10, 'hello'];

document.querySelector('.btn-10').onclick = () => {

   arr10.reverse();
   document.querySelector('.out-10').innerHTML = arr10;
}


// Task 11 --------------------
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. 
// По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 
// метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. 
// Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.  let arr11 = [0, 2, 3, 7, 8, 5, 11];

let arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('.u-11__button').onclick = () => {

   let u11 = +document.querySelector('.u-11__input').value;
   
   document.querySelector('.out-11').innerHTML = arr11.indexOf(u11);

}


// Task 12 --------------------
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// 1.читает содержимое input в переменную
// 2.Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// 3.Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// 4.Если совпадения нет выводить -1.

let arr12 = [0, 2, 3, 7, 8, 3, 25, 5, 11];

document.querySelector('.u-12__button').onclick = () => {

   let u12 = +document.querySelector('.u-12__input').value;
   let out12 = document.querySelector('.out-12');

   if (u12 == '') {
      alert('Введите число');
   }
   else {
      for (let i = 0; i < arr12.length; i++) {

         if (arr12[i] == u12) {
            out12.innerHTML = i;
            break;
         }
         else {
            out12.innerHTML = -1;
         }
      }
   }

}


// Task 13 --------------------
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// 1.Создать новый пустой массив
// 2.Перебирать старый массив с конца (массив создайте сами)
// 3.По очереди по элементу присвоить значения в новый массив.
// 4.Вывести новый массив.

let arr133 = [12, 44, 73, 'new', 'eng', 98, 37];

document.querySelector('.u-13__button').onclick = function funcReverse() {

   let arr13 = [];
   let out13 = document.querySelector('.out-13');

   for (let i = arr133.length - 1; i >= 0; i--) {
      
      arr13.push(arr133[i]);
   }
   out13.innerHTML = arr13;

}


// Task 14 --------------------
// Создайте инпут, куда пользователь может ввести число элементов в массиве. 
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это 
// случайное число от 0 до 100. Массивы выведите на страницу.

document.querySelector('.u-14__button').onclick = () => {

   let inp14 = +document.querySelector('.u-14__input').value;
   let out14 = document.querySelector('.out-14');
   let arrRand = [];

   if (inp14 == '') {
      alert('Введите число');
   }
   else {
      for (let i = 0; i < inp14; i++) {
         arrRand.push(randNum());
      }
   }
   out14.innerHTML = arrRand;
}

function randNum(min = 1, max = 100) {
   let ran = min + Math.random() * (max + 1 - min);
   return Math.floor(ran);
}


// Task 15 --------------------
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы 
// массива arr15 (элементы с четным индексом). Выведите на экран.

let arr15 = [26, 62, 92, 72, 41, 58, 30, 57, 68, 85, 41, 9, 40, 91, 77, 42];

document.querySelector('.btn-15').onclick = () => {

   let arr155 = [];
   let out15 = document.querySelector('.out-15');

   for (let i = 0; i < arr15.length; i++) {

      if (i % 2 == 0) {
         arr155.push(arr15[i]);
      }

   }
   out15.innerHTML = arr155;

}


// Task 16 --------------------
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам 
// метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.
// let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

document.querySelector('.u-16__button').onclick = () => {

   document.querySelector('.out-16').innerHTML = arr16_1.concat(arr16_2);

}



// Task 17 --------------------
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
//   1.Перебирает второй массив и его элементы добавляет в первый массив.
//   2.Выводит массив на страницу.

let arr17 = [53, 91, 89, 'hi', 66, 80, 76];
let arr177 = [87, 44, 53, 62, 22];

document.querySelector('.btn-17').onclick = function funcConcat() {

   let out17 = document.querySelector('.out-17');

   for (let i = 0; i < arr177.length; i++) {
      arr17.push(arr177[i]);
   }
   out17.innerHTML = arr17;

}



// Task 18 --------------------
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к 
// массивам метод includes, который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). 
// Результат применения includes выводите на страницу в div.out-18.   let arr16_1 = [3, 5, 7, 11, 12, 13, 14 ];

let arr18 = [3, 5, 7, 11, 12, 13, 14];

document.querySelector('.u-18__button').onclick = () => {

   let u18 = +document.querySelector('.u-18__input').value;
   let out18 = document.querySelector('.out-18');
   
   if (u18 == '') {
      alert('Введите число');
   }
   else {
      out18.innerHTML = arr18.includes(u18);
   }

}


// Task 19 --------------------
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:

//      1.Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
//      2.Если совпадений нет - false.

let arr19 = [9, 77, 48, 55, 37, 13, 24, 93, 1];

document.querySelector('.btn-19').onclick = () => {
   funcIncludes();
}

function funcIncludes() {

   let u19 = +document.querySelector('.u-19__input').value;
   let out19 = document.querySelector('.out-19');

   if (u19 == '') {
      alert('Введите число');
   }
   else {
      for (let i = 0; i < arr19.length; i++) {
         if (arr19[i] == u19) {
            out19.innerHTML = true;
            break;
         }
         else {
            out19.innerHTML = false;
         }
      }
   }

   
}


// Task 20 --------------------
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). 
// Результа выведите на страницу.

let arr20 = ['Arr', 32, 'sum', 578, 98, 'Task', 55];

document.querySelector('.btn-20').onclick = () => {

   document.querySelector('.out-20').innerHTML = arr20.join('*');

}





//======================================================================
