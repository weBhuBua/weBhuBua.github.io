// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

document.querySelector('.btn-1').onclick = () => func_1();



function func_1() {

   let q = 0;
   let w = 0;
   let p = document.querySelector('.par-1');

   while (q <= 100) {
      
      p.innerHTML = w = w + q + ' ';
      
      q++

   }
   return w;
}



// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает 
// строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

document.querySelector('.btn-2').onclick = () => {

   let a = +document.querySelector('.in-2').value;
   let b = +document.querySelector('.in-22').value;
   let p = document.querySelector('.par-2');
   p.innerHTML = ' ';
   p.innerHTML = func_2(a, b);

}

function func_2(a, b) {

   let q = '';

   while (a <= b) {
      
      q += a + ' ';
      a++;
   }
   return q;
}

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и 
// возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

document.querySelector('.btn-3').onclick = () => {

   let a1 = +document.querySelector('.in-3').value;
   let b1 = +document.querySelector('.in-33').value;
   let p = document.querySelector('.par-3');
   p.innerHTML = '';
   let a = Math.max(a1, b1);
   let b = Math.min(a1, b1);
   
   p.innerHTML = func_3(a, b);
}

function func_3(a, b) {

   let q = '';

   while (a >= b) {
      q += a + ' ';
      a--;
   }
   return q;
}

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и 
// возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

document.querySelector('.btn-4').onclick = () => {

   let a1 = +document.querySelector('.in-4').value;
   let b1 = +document.querySelector('.in-44').value;
   let c = +document.querySelector('.in-45').value;
   let p = document.querySelector('.par-4');
   let a = Math.max(a1, b1);
   let b = Math.min(a1, b1);

   p.innerHTML = func_4(a, b, c);
}

function func_4(a, b, c) {

   let q = '';

   while (a >= b) {
      q += `${a}&nbsp;`;
      a = a - c;
   }
   return q;
}

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

document.querySelector('.btn-5').onclick = () => {

   let p = document.querySelector('.par-5');

   p.innerHTML = func_5();
}

function func_5() {

   let s = 0;
   let sum = 0;
   // let p = document.querySelector('.par-5');

   while (s <= 20) {
      
      sum = sum + s;
      s++;
   }
   return sum;
}

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше 
//первого, то возвращает сумму чисел от первого до второго включительно. 
//Если нет - то false.Считаем, что пользователь может ввести только числа.

document.querySelector('.btn-6').onclick = () => {

   let a = +document.querySelector('.in-6').value;
   let b = +document.querySelector('.in-64').value;
   let p = document.querySelector('.par-6');

   p.innerHTML = func_6(a, b);
}

function func_6(a, b) {

   let sum = 0;
   if (b > a) {

      while (a <= b) {
         sum = sum + a;
         a++;
      }

   }
   else {
      return false;
   }
   return sum;
}

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше 
// первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.
// Считаем, что пользователь может ввести только числа.

document.querySelector('.btn-7').onclick = () => {

   let a = +document.querySelector('.in-7').value;
   let b = +document.querySelector('.in-77').value;
   let p = document.querySelector('.par-7');

   p.innerHTML = func_7(a, b);
}

function func_7(a, b) {

   let multi = 1;
   if (b > a) {

      while (a <= b) {
         multi = multi * a;
         a++;
      }
   }
   else {
      return false;
   }
   return multi;
}


// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет 
// увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет 
// станет больше или равно 1 000 000.

document.querySelector('.btn-8').onclick = () => {

   let p = document.querySelector('.par-8');

   p.innerHTML = func_8();
}

function func_8() {

   let a = 333;
   let d = 1;

   while (a <= 1000000) {
      a = a * 2;
      d++;
   }
   return d;

}

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго 
// введенного параграфа, где все четные числа заменены на символ нуля(0).
document.querySelector('.btn-9').onclick = () => {

   let a = +document.querySelector('.in-9').value;
   let b = +document.querySelector('.in-99').value;
   let p = document.querySelector('.par-9');

   p.innerHTML = func_9(a, b);
}

function func_9(a, b) {

   let q = '';

   while (a <= b) {

      if (a % 2 == 0) {
         q += '0 ';
      }
      else {
         q += `${a} &nbsp;`;
      }
      a++;
   }
   console.log(q);
   return q;

}

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *
document.querySelector('.btn-10').onclick = () => {

   let p = document.querySelector('.par-10');

   p.innerHTML = func_10();
}

function func_10() {

   let a = 0;
   let q = '';

   while (a < 6) {

      let b = 0;
      while (b < 2) {
         if (a % 2 == 0) {
            q += '*';
         }
         else if (b == 1) {
            q += '&nbsp;'
         }
         else {
            q += '*';
         }
         b++;
      }
      q += '<br>';
      a++;
   }
   return q;
}

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.
document.querySelector('.btn-11').onclick = () => {

   let p = document.querySelector('.par-11');

   p.innerHTML = func_11();
}

function func_11() {
   
   let a = 1;
   let b = 10;
   let q = '';

   while (b > 0) {
      q += `${b} &nbsp;${a} &nbsp;`;
      a++;
      b--;
   } 
   return q;
}


// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.
// Т.е.вначале идет срабатывание, а потом проверка.

document.querySelector('.btn-12').onclick = () => {

   func_12();
}

function func_12() {

   let a = 0;
   do {
      console.log('do while work');
   }
   while (a < 0);

   let b = 0;
   while (b <0) {
      console.log('while work');
   }

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.
// Используем цикл do while.
document.querySelector('.btn-13').onclick = () => {

   let p = document.querySelector('.par-13');

   p.innerHTML = func_13();
}

function func_13() {

   let a = 101;
   let q = '';

   do {
      q += a - 1 + ' ';
      a--;
   }
   while (a > 0);

   return q;

}

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от 
// предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, 
// кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.
// Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше 
// предыдущего.
document.querySelector('.btn-14').onclick = () => {

   let p = document.querySelector('.par-14');

   p.innerHTML = func_14();
}

function func_14() {

   let a = 5;
   let d = 1;

   do {
      a = a * 1.3;
      d++;
   }
   while (a <= 135) 
   
   return `на ${d}-й день`;

}

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья 
// больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых 
// котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти 
// суммарных объем сваренного зелья, а не дневной объем.Используем do while.
document.querySelector('.btn-15').onclick = () => {

   let p = document.querySelector('.par-15');

   p.innerHTML = func_15();
}

function func_15() {

   let a = 1.1;
   let d = 1;

   do {
      a = a + a * 1.3;
      d++;
   }
   while (a <= 568)

   return d;

}

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество 
// параграфов p.task-16 и если число четное - верните значение, если нет - верните false.
// Код напишите в функции func_16.
document.querySelector('.btn-16').onclick = () => {

   let p = document.querySelector('.par-16');

   p.innerHTML = func_16();
}

function func_16() {

   let t = document.querySelectorAll('.task-16');
   let i = 0;

   do {
      if (t.length % 2 == 0) {
         return t.length;
      }
      else {
         return false;
      }
      i++;
   }
   while (i < t.length)

}

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите 
// в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.
document.querySelector('.btn-17').onclick = () => {

   func_17();
}

function func_17() {

   let t = document.querySelectorAll('.task-16');
   let i = 0;
   let h = 1;

   do {
      t[i].innerHTML = h;
      i++;
      h++;
   }
   while (i < t.length)

}


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите 
// в первый p.task-18 - число равное количеству параграфов p.task - 18, 
// во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

document.querySelector('.btn-18').onclick = () => {

   func_18();
}

function func_18() {

   let t = document.querySelectorAll('.task-18');
   let a = 0;
   let h = t.length;

   do {
      t[a].innerHTML = h;
      a++;
      h--;
   }
   while (a < t.length)

}


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. 
// Решите с помощью do while.
document.querySelector('.btn-19').onclick = () => {

   let p = document.querySelector('.par-19');

   p.innerHTML = func_19();
}

function func_19() {

   let a = 0;
   let q = '';

   do {
      a++;
      if (a % 2 == 0) {
         q += '*';
      }
      else {
         q += a;
      }
   }
   while (a < 19)

   return q;

 }


// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

document.querySelector('.btn-20').onclick = () => {

   let p = document.querySelector('.par-20');

   p.innerHTML = func_20();
}

function func_20() {

   let a = 0;
   let q = '';

   do {
      let k = 0; 
      
      do {
         if (k == a) {
            q += '1 ';
         }
         else {
            q += '* ';
         }
         k++;
      }
      while(k < 4);

      q += '<br>';
      a++;
   }
   while (a < 4);

   return q;
}

//================================


// document.querySelector('.btn-20').onclick = () => {

//    let p = document.querySelector('.par-20');

//    p.innerHTML = func_20();
// }

// function func_20() {

//    let q = '';

//    for (let i = 0; i < 4; i++) {

//       for (let k = 0; k < 4; k++) {

//          if (k == i) {
//             q += '1 ';
//          }
//          else {
//             q += '* ';
//          }
//       }
//       q += '<br>';
//    }
//    return q;
// }



//==================================

