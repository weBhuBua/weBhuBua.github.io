// Task 1 --------------------
// Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль. 

document.querySelector('.btn-1').onclick = () => {

   let a1 = new Set();
   a1.add(2);
   a1.add('set'); 
   a1.add(675);
   a1.add('Hi'); 
   a1.add(273); 
   console.log(a1);

}


// Task 2 --------------------
// Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.

let a2 = new Set();
let in2 = document.querySelector('.in-2');

document.querySelector('.btn-2').onclick = () => {

   
   // let in2 = document.querySelector('.in-2');

   if (in2.value.length != 0) {
      a2.add(in2.value);
      in2.value = '';
      console.log(a2);
   }
   else {
      alert('Введите значение!');
   }
   

}



// Task 3 --------------------
// Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).

document.querySelector('.btn-3').onclick = () => {

   if (in2.value.length != 0) {
      a2.delete(in2.value);
      in2.value = '';
      console.log(a2);
   }
   else {
      alert('Введите значение!');
   }

}

// Task 4 --------------------
// Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 

function t4() {

   if (in2.value.length != 0) {
      if (a2.has(in2.value) == true) {
         in2.value = '';
         return true;
      }
      else {
         in2.value = '';
         return false;
      }
   }
   else {
      alert('Введите значение!');
   }
   console.log(a2);
}

document.querySelector('.btn-4').onclick = () => {
   console.log(t4());
}


// Task 5 --------------------
// Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции. Действия должны запускаться при вызове функции t5.

function t5() {
   return a2.size;
}

document.querySelector('.btn-5').onclick = () => {

   document.querySelector('.dv-5').innerHTML = t5();

}


// Task 6 --------------------
// Есть массив a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set. Действия должны запускаться при вызове функции t6. 

let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

function t6() {

   let a66 = new Set(a6);
   return `${a66.size} элементов`;
}

document.querySelector('.btn-6').onclick = () => {

   document.querySelector('.dv-6').innerHTML = t6();

}


// Task 7 --------------------
// Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split(')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set.


let a7 = [];

function t7() {
   let in7 = document.querySelector('.in-7').value;
   a7 = in7.split('');
   let a7Leng = a7.length;
   let a77 = new Set(a7);

   if (a7Leng == a77.size) {
      alert('Ok');
   }
   else {
      alert('Введите не повторяющиеся символы');
   }

}

document.querySelector('.btn-7').onclick = () => {
   t7();
}


// Task 8 --------------------
// Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. 

let a8 = new Set();
a8 = [1, 2, 44, 4, 45, 29, 'set', 88, 'res', 99];

function t8(s) {

   let a8_res = [];
   let a88 = Array.from(s);

   for (let i = 0; i < a88.length; i++) {
      if ([i] % 2 == 0) {
         a8_res.push(a88[i])
      }
   }
   return a8_res;
}

document.querySelector('.btn-8').onclick = () => {
   document.querySelector('.dv-8').innerHTML = t8(a8);
}

// Task 9 --------------------
// Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.

let a9 = new Set();
a9 = [23, 59, 5, 99, 24, 'Hi', 38, 'func'];

function t9(k) {

   let a9_res = Array.from(k);
   a9_res.reverse();
   return a9_res;
}

document.querySelector('.btn-9').onclick = () => {
   document.querySelector('.dv-9').innerHTML = t9(a9);
}

// Task 10 --------------------
// Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res. Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик. a10_res = { "3" : 5, "1" : 1, } 

function rand(min = 0) {
   let num10 = document.querySelector('.in-10').value; // макс значение элемента в массиве
   let rand10 = min - 0.5 + Math.random() * (num10 - min + 1);
   return Math.round(rand10);

}
rand();

let a10 = [];
let a101 = [];

document.querySelector('.btn-99').onclick = function arrayRandom() { 

   let a10 = [];
   let n10 = +document.querySelector('.in-101').value; // кол-во элементов
   
   for (let i = 0; i < n10; i++) {
      a10.push(rand());
   }
   document.querySelector('.dv-101').innerHTML = a10;
   a101 = a10;

}


function t10(z) {
   let aS10 = new Set(z);
   let a10_res = {};
   
   for (let item of aS10) {
      let it = 0;
      for (let i = 0; i < z.length; i++) {
         if (item == z[i]) {
            it++;
            a10_res[item] = it;
         }
      }
   }

   let out10 = '';

   for (let key in a10_res) {
      out10 += `${key} : ${a10_res[key]}<br>`;
   }

   return out10;

}

document.querySelector('.btn-10').onclick = () => {
   document.querySelector('.dv-10').innerHTML = t10(a101);
}

// Task 11 --------------------
// Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу. 

let a11_res = [];

function t11() {
   
   let in11 = document.querySelector('.in-11').value;

   if (a11_res.indexOf(in11) == -1) {
      a11_res.push(in11);
   }

   return a11_res;
}

document.querySelector('.btn-11').onclick = () => {
   document.querySelector('.dv-11').innerHTML = t11();
}

// Task 12 --------------------
// Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12. 

let a12 = new Set();
a12 = [2, 4, 5, 88, 12, 'a12', 'task', 77, 'by'];

function t12(b) {

   let a12_res = Array.from(b);
   return a12_res;

}

document.querySelector('.btn-12').onclick = () => {
   document.querySelector('.dv-12').innerHTML = t12(a12);
}


// Task 13 --------------------
// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Действия должны запускаться при вызове функции t13. 

let a13 = new Set();
a13 = [2, 7, 4, 25, 88, 12, 'a12', 'task', 77, 'by'];
let dv13 = document.querySelector('.dv-13');

function t13(d, f) {

   let out13 = '';

   for (let item of d) {

      out13 += `${item}, &nbsp;`;
      f.innerHTML = out13;
   }

}

document.querySelector('.btn-13').onclick = () => {
   t13(a13, dv13);
}


// Task 14 --------------------
// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. Действия должны запускаться при вызове функции t14. Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов). 

let a14 = new Set();
a14 = [2, 7, 4, 'qwerty', 25, 88, 12, 'a12', 'task', 77, 'by'];
let dv14 = document.querySelector('.dv-14');

function t14(d, f, g) {

   let out14 = '';

   for (let item of d) {

      out14 += `${item}${g}`;
      f.innerHTML = out14;
   }

}

document.querySelector('.btn-14').onclick = () => {
   let in14 = document.querySelector('.in-14').value;
   t14(a14, dv14, in14);
}


// Task 15 --------------------
// Дан массив arr15 = [ [1,0], [1,0], [2,0] ] . Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор a15_res выведите на страницу. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res. 

let arr15 = [[1, 0], [1, 0], [2, 0]];
let a15_res = new Set();

function t15() {

   for (let i = 0; i < arr15.length; i++) {
     
      a15_res.add(arr15[i]);

   }

   out15 = '';

      for (let item of a15_res) {
         out15 += `${item} `;
      }

      return out15;
}

document.querySelector('.btn-15').onclick = () => {
   document.querySelector('.dv-15').innerHTML = t15();
}

// Task 16 --------------------
// Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор выведите в консоль. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a16_res. 

let a16 = [{ Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 }];
let a16_res = new Set();

function t16() {

   for (let i = 0; i < a16.length; i++) {
      a16_res.add(a16[i])
   }
   return a16_res;
}

document.querySelector('.btn-16').onclick = () => {
   console.log(t16());
}



// Task 17 --------------------
// Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат. Действия должны запускаться при вызове функции t17. 

let u17 = 'Primer';

function t17() {

   let a17 = new Set(u17);

   console.log(a17);

}

document.querySelector('.btn-17').onclick = () => {
   t17();
}


// Task 18 --------------------
// Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18.

let a18 = [5, 7, 9, 11, 13, 15];

function t18() {

   let k = 0;
   let a18_res = '';

   for (let item of a18) {
      a18_res += k +'-'+ item +'<br>';
      k++;
   }
   return a18_res;
}

document.querySelector('.btn-18').onclick = () => {
   document.querySelector('.dv-18').innerHTML = t18();
}


// Task 19 --------------------
// Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора. Действия должны запускаться при вызове функции t19. 

let a19 = new Set();
a19 = [33, 11, 29, 27, 338, 22, 24, 18, 20, 6, 3, 32, 36, 15, 7];

function t19() {

   let arr19 = Array.from(a19);
   let out19 = '';

   for (let i = 0; i < arr19.length; i++) {

      if (i % 2 == 0) {
         out19 += `${arr19[i]}, `;
      }
   }

   return out19;

}

document.querySelector('.btn-19').onclick = () => {
   document.querySelector('.dv-19').innerHTML = t19();
}


// Task 20 --------------------
// Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.

let a20 = [33, 11, 29, 27, 338, 22, 24, 111, 98, 55, 18, 20, 6, 3, 3, 3, 32, 36, 15, 7];

function t20() {

   let s20_res = new Set(); // четные
   let s21_res = new Set(); // нечетные

   for (let i = 0; i < a20.length; i++) {

      if (i % 2 == 0) {
         s20_res.add(a20[i]);
      }
      else {
         s21_res.add(a20[i]);
      }         
   }
   console.log(s20_res);
   console.log(s21_res);

}

document.querySelector('.btn-20').onclick = () => {
   t20();
}

//======================================================================

// На прокачку

// Task 1 --------------------
// Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в виде ключ - значение. Разделение между ключем и значением пользователь может выбирать из выпадающего списка (пробел, дефис, две точки).

let a22 = [5, 7, 9, 11, 13, 15];
let sell21 = document.querySelector('.sell-21');
let dv21 = document.querySelector('.dv-21');

function select() {

   let r = {
      "Пробел": "&nbsp;",
      "Дефис": "-",
      "Две точки": ":",
   };

   for (let key in r) {
      sell21.innerHTML += `<option value="${r[key]}">${key}</option>`;
   }

}
select();

function t21() {

   let sell21Val = sell21.value;
   let out21 = '';

   for (let i = 0; i < a22.length; i++) {
      out21 += `${i} ${sell21Val} ${a22[i]} <br>`;
   }
   return out21;

}

document.querySelector('.btn-21').onclick = () => {
   document.querySelector('.dv-21').innerHTML = t21();
}
