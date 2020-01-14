// Task 1 --------------------
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.
document.querySelector('.btn-1').onclick = () => {

   let m = ['Kolya', 35, true, 123, 'Ukraine'];
   console.log(m);

}




// Task 2 --------------------
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. 
// Попробуйте синтаксиc elem.innerHTML = ваш_массив.
document.querySelector('.btn-2').onclick = () => {

   document.querySelector('.dv-2').innerHTML = ['Tanya', true, 'girl', true, 35, false];

}


// Task 3 --------------------
// Создайте массив a. Выведите длину массива a. const a = [2, 'hello', 17, 34, 'privet']
document.querySelector('.btn-3').onclick = () => {

   const a = [2, 'hello', 17, 34, 'privet'];
   document.querySelector('.dv-3').innerHTML = a.length;

}


// Task 4 --------------------
// Создайте массив a. Выведите нулевой, третий, восьмой элемент массива a в консоль. 
// Сделайте вывод о 8-м элементе.  const a = [2, 'hello', 17, 34, 'privet']
document.querySelector('.btn-4').onclick = () => {

   const a = [2, 'hello', 17, 34, 'privet'];
   console.log(a[0]);
   console.log(a[3]);
   console.log(a[8]);

}


// Task 5 --------------------
// Создайте массив a. Выведите сумму нулевого, второго и третьего элементов массива.
// const a = [2, 'hello', 17, 34, 'privet']
document.querySelector('.btn-5').onclick = () => {

   const a = [2, 'hello', 17, 34, 'privet'];
   document.querySelector('.dv-5').innerHTML = a[0] + a[2] + a[3];

}


// Task 6 --------------------
// Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. 
// Выведите массив на страницу в div.
document.querySelector('.btn-6').onclick = () => {

   const a = ['Олег', 'Рыбы', 14, 03,];
   document.querySelector('.dv-6').innerHTML = a;

}


// Task 7 --------------------
// Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. 
// Вывести массив на страницу в элемент div.   let b = ['one', 1, 2, 'two'];
document.querySelector('.btn-7').onclick = () => {

   let b = ['one', 1, 2, 'two'];
   b[4] = 'hi';
   b[5] = 'foo';
   b[6] = 'bar';
   document.querySelector('.dv-7').innerHTML = b;

}


// Task 8 --------------------
// Создайте массив b. Добавьте в него третий элемент равный 3.14, 4 элемент равный 17, 6 элемент равный 5. 
// Выведите массив и в консоль и на страницу. Обратите внимание, как выводятся элементы значения которых не заданы. 
// Также выведите значение длины массива.    let b = ['one', 1, 2, 'two'];
document.querySelector('.btn-8').onclick = () => {

   let b = ['one', 1, 2, 'two'];
   b[3] = 3.14;
   b[4] = 17;
   b[6] = 5;
   console.log(b);
   document.querySelector('.dv-8').innerHTML = `${b}<br> Длина = ${b.length}`;

}


// Task 9 --------------------
// Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.
document.querySelector('.btn-9').onclick = () => {

   const m = [12, 35, false, 'Kiev', true, 87, 99, 'Task', 'JS', 65 ];
   document.querySelector('.dv-9').innerHTML = `${m[3]} <br> ${m[7]}`;                
   console.log(m);
   
}


// Task 10 --------------------
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.
document.querySelector('.btn-10').onclick = () => {

   const m = [12, , , , true, , , , , 65 ];
   console.log(m);
   document.querySelector('.dv-10').innerHTML += `${m}<br>Длина = ${m.length}`;     

}


// Task 11 --------------------
// Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. 
// Под сменой мест понимается, что данные элементы поменяют значения - 
// первый станет равный третьему, а третий - первому.   const c = [77, 88, 99, 66];

document.querySelector('.btn-11').onclick = () => {

    
      const c = [77, 88, 99, 66];
      let a = c[1];
      let a1 = c[3];
      c[1] = a1;
      c[3] = a;
      
      console.log(c);
      document.querySelector('.dv-11').innerHTML = c;
      
   

}




// Task 12 --------------------
// Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. 
// После чего выводит массив в консоль. Длина переданного массива может меняться. 
// Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length. 
document.querySelector('.btn-12').onclick = () => {
   taskArr(e);
}
let e = ['first', 1, 2, 34, 'Hi', 3, 'hello', 66, 'last'];

function taskArr(e) {
   let a = e[e.length-1];
   let a1 = e[0];
   e[e.length-1] = a1;
   e[0] = a;

   console.log(e);
}



// Task 13 --------------------
// Используя цикл выведите элемента массива d на страницу. Разделитель - пробел.  e = [1, 2, 3, 'hello', 66];
document.querySelector('.btn-13').onclick = () => {

   let e = [1, 2, 3, 'hello', 66];

   for (let i = 0; i < e.length; i++) {
      document.querySelector('.dv-13').innerHTML += `${e[i]} &nbsp;`
   }

}


// Task 14 --------------------
// Используя цикл выведите на страницу массив e в обратном порядке. Разделитель - пробел.  e = [1, 2, 3, 'hello', 66];
document.querySelector('.btn-14').onclick = () => {

   let e = [1, 2, 3, 'hello', 66];

   for (let i = e.length - 1; i >= 0; i--) {
      document.querySelector('.dv-14').innerHTML += `${e[i]} &nbsp;`
   }

}


// Task 15 --------------------
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. 
// Разделитель - пробел.   d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
document.querySelector('.btn-15').onclick = () => {

   let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

   for (let i = 0; i < d.length; i++) {

      if (d[i] > 0) {
         document.querySelector('.dv-15').innerHTML += `${d[i]} &nbsp;`;
      }
      
   }

}


// Task 16 --------------------
// Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. 
// Выведите полученные массивы a1 и a2 на страницу.
// document.querySelector('.btn-16').onclick = () => {

document.querySelector('.btn-16').onclick = () => {

   let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
  let a = [];
  let a1 = [];
   for (let i = 0; i < d.length; i++) {
      
     if (d[i] % 2 == 0) {
       
       a += d[i] + ', ';
       
     }
     else {
       a1 += d[i] + ', ';
     }
   }
  document.querySelector('.dv-16').innerHTML += `${a}<br>${a1}`;  
}


// Task 17 --------------------
// Создайте массив e. Используя цикл и переменную счетчик - 
// выведите количество элементов массива равных нулю.  let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
document.querySelector('.btn-17').onclick = () => {

   let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
   let f = 0;

   for (let i = 0; i < e.length; i++) {

      if (e[i] == 0) {
         f++;
      }
      
   }
   document.querySelector('.dv-17').innerHTML += f;
}


// Task 18 --------------------
// Используя предыдущий массив e и цикл - выведите максимальное значение из массива. 
document.querySelector('.btn-18').onclick = () => {

   let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
   let m = e[0];

   for (let i = 1; i < e.length; i++) {

      if (e[i] > m) {
         m = e[i];
      }
   }
   document.querySelector('.dv-18').innerHTML = m;
}


// Task 19 --------------------
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.
// let f = [-3, 0, 45, 22, 123, -485, 98, 34];
document.querySelector('.btn-19').onclick = () => {

   let f = [-3, 0, 45, 22, 123, -485, 98, 34];
   let m = f[0];

   for (let i = 1; i < f.length; i++) {

      if (f[i] > m) {
         m = f[i];
      }
   }
   document.querySelector('.dv-19').innerHTML = f.indexOf(m);
}


// Task 20 --------------------
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.
document.querySelector('.btn-20').onclick = () => {

   let f = [-3, 0, 45, 22, 123, -485, 98, 34];
   let s = 0;
   for (let i = 0; i < f.length; i++) {
      s = s + f[i];
   }
   document.querySelector('.dv-20').innerHTML = s;
}


