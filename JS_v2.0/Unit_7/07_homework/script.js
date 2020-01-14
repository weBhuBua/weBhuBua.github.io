// Task 1 --------------------
// Создайте функцию (именнованную), которая при клике на кнопке 
// выводит в консоль ваше имя.
function myN() {
   console.log('Oleg!');
}
document.querySelector('.btn-1').onclick = myN; 
 


// Task 2 --------------------
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. 
// Запустите функцию и передайте в качестве имени Sergey.
function otherName (n = 'Ivan') {
   console.log(n);
   //return n;
}

document.querySelector('.btn-2').onclick = () => {
   otherName('Sergey');
} 


// Task 3 --------------------
// Создайте именнованную функцию, которая принимает параметр число и выводит его 
// значение умноженное на 10 в консоль. Запустите выполнение функции. Убедитесь, что она работает. 
//Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром. 
// Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), 
// то увидите, что данная функция - выполняется сразу при загрузке страницы! 
//Действительно, ведь мы поставили скобки. Как передать параметр и не запустить функцию сразу? 
// Довольно хитро: 
//       elem.onclick = function(){
//       myFunc(22);
//       }
function third (n = 7) {
   console.log(n * 10);
}
third();

document.querySelector('.btn-3').onclick = () => {
   third(23);
} 


// Task 4 --------------------
// Создайте кнопку и функцию. При нажатии кнопки, функция 
// окрашивает данную кнопку в background: red.
function colorBtn () {
   document.querySelector('.btn-4').style.backgroundColor = ('red');
}

document.querySelector('.btn-4').onclick = () => {
   colorBtn();
} 


// Task 5--------------------
// Создайте функцию, которая возвращает ваше имя. Имя вводится с input
function myName () {
   return document.querySelector('.in-5').value;
}

document.querySelector('.btn-5').onclick = () => {
   document.querySelector('.par-5').innerHTML = myName();
}
   


// Task 6 --------------------
// Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, 
// либо любое из них если они равны.

document.querySelector('.btn-6').onclick = () => {

   let a = +document.querySelector('.in-6').value;
   let b = +document.querySelector('.in-67').value;
   let p = document.querySelector('.par-6');
   
   p.innerHTML = myNumber(a, b);

}

function myNumber(a, b) {

   if (a > b) {
      return a;
   }
   else if (a == b) {
      return b;
   }
   else {
      return b;
   }

}


// Task 7 --------------------
// Создайте функцию, которая принимает год рождения и возвращает ваш возраст. 
// Текущий год задавать как 2019.
// let g = +document.querySelector('.in-7').value;
// let p = document.querySelector('.par-7');
 

document.querySelector('.btn-7').onclick = () => {
   

   let g = +document.querySelector('.in-7').value;
   let p = document.querySelector('.par-7');
   
   p.innerHTML = myAge(g);

}

function myAge(g) {
   return 2019 - g;
}


// Task 8 --------------------
// Создайте функцию, которая возвращает случайное число от 1 до 10. 
// По случайным числам читаем все здесь и задаем вопросы в чате.

document.querySelector('.btn-8').onclick = () => {

   let p = document.querySelector('.par-8');
   
   p.innerHTML = ranN();

}

function ranN(min = 1, max = 10) {
   let ran = min + Math.random() * (max + 1 - min);
   return Math.floor(ran);
}


// Task 9 --------------------
// Создайте функцию, которая возвращает случайное число в указанном диапазоне. 
// Диапазон указывает пользователь с помощью двух переменных, которые передаются функции в качестве параметров.
document.querySelector('.btn-9').onclick = () => {

   let n1 = +document.querySelector('.in-9').value;
   let n2 = +document.querySelector('.in-97').value;
   let p = document.querySelector('.par-9');

   let min = Math.min(n1, n2);
   let max = Math.max(n1, n2);

   p.innerHTML = ranN2(min, max);

}

function ranN2(min, max) {
   let ran2 = min + Math.random() * (max + 1 - min);
   return Math.floor(ran2);
}


// Task 10 --------------------
// Создайте функцию, которая возвращает случайный цвет. Напомню - 
// цвет это строка rgb(0..255, 0..255, 0..255) - которая содержит 3 числа от нуля до 255 включительно, разделенных запятыми. 
// Т.е. вам нужно три раза создать случайное число от 0 до 255.

document.querySelector('.btn-10').onclick = () => {

   let p = document.querySelector('.par-10');
   let d1 = document.querySelector('.par-101')

   for (i = 0; i < 3; i++) {
      p.innerHTML = `rgb(${ranN3()}, ${ranN3()}, ${ranN3()})`;
   }

   d1.style.backgroundColor = p.innerHTML;

}

function ranN3(min = 0, max = 255) {
   let ran3 = min + Math.random() * (max + 1 - min);
   return Math.floor(ran3);

}


// Task 11 --------------------
// Создайте функцию f11, которая возвращает число 5. 
// Создайте функцию которая принимает 2 параметра и перемножает их между собой. 
// В качестве первого параметра передайте f11().
document.querySelector('.btn-11').onclick = () => {

   let p = document.querySelector('.par-11');
   let inp = +document.querySelector('.in-11').value;
   let n = f11();

   function func11(n, inp ) {
      return n * inp;
   }

   p.innerHTML = func11(n, inp);

}

function f11() {
   return 5;
}



// Task 12 --------------------
// Создайте функцию toNum, которая принимает 1 параметр - объект input, 
// и возвращает введенное в него значение преобразованное в число.
document.querySelector('.btn-12').onclick = () => {

   let p = document.querySelector('.par-12');
   let inp = +document.querySelector('.in-12').value;

   function toNum(inp) {
      return +inp;
   }

   p.innerHTML = toNum(inp);

}


// Task 13 --------------------
// Создайте функцию emptyInput - которая принимает в качестве параметра input, 
// удаляет все пробелы введенные до и после значения (trim), и проверяет - если результат равен 
// пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.
document.querySelector('.btn-13').onclick = () => {

   let p = document.querySelector('.par-13');
   let inp = document.querySelector('.in-13').value;

   function emptyInput(inp) {
      console.log(inp);

      if (inp.trim() == '') {
         return false;
      }
      else {
         return inp.trim(); 
      }

   }

   p.innerHTML = emptyInput(inp);

}


// Task 14 --------------------
// Создайте функцию, которая принимает параметр число и возвращает 
// true если число четное и false если нечетное.
document.querySelector('.btn-14').onclick = () => {

   let p = document.querySelector('.par-14');
   let inp = +document.querySelector('.in-14').value;
   // console.log(tr);

   p.innerHTML = func14(inp);

}

function func14(inp) {

   if (inp % 2 == 0) {
      return true;
   }
   else {
      return false; 
   }

}


// Task 15 --------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. 
// Добавьте на div событие onmousemove - и стрелочную функцию срабатывающую при этом событии. 
// Стрелочная функция должна выводить move в консоль.
//let dv15 = document.querySelector('.dv-15');

document.querySelector('.dv-15').onmousemove = () => {

  console.log('move');

}


// Task 16 --------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. 
// Добавьте на div событие onmouseenter - и стрелочную функцию срабатывающую при этом событии. 
// Стрелочная функция должна выводить enter в консоль.
document.querySelector('.dv-16').onmouseenter = () => {

   console.log('enter');
 
 }


// Task 17 --------------------
// Создайте div, задайте ему ширину и высоту в CSS, границу. 
// Добавьте на div событие onmouseleave- и стрелочную функцию срабатывающую при этом событии. 
// Стрелочная функция должна выводить leave в консоль.
document.querySelector('.dv-17').onmouseleave = () => {

   console.log('leave');
 
 }


// Task 18 --------------------
// Создате div задайте ему ширину и высоту в CSS, границу. 
// Добавьте на div событие onclick и анонимную ( не стрелочную) функцию, 
// внутрь которой запишите this.style.background = 'red'; В этом случае this указывает на объект, 
//на котором приозошло событие.
document.querySelector('.dv-18').onclick = function() {

   this.style.background = 'red';
 
 }


// Task 19 --------------------
// Создате div задайте ему ширину и высоту в CSS, границу. 
// Добавьте на div событие onclick и стрелочную функцию, внутрь которой 
// запишите this.style.background = 'red'; Увы, в данном случае (особенность стрелочных функций) 
// не указывает на объект где произошло событие.
document.querySelector('.dv-19').onclick = () => {

   this.style.background = 'red';
 
 }


// Task 20 --------------------
// Создайте 5 div.go с текстом. C помощью цикла повесьте на них событие клик и анонимную 
// (не стрелочную) функцию. Внутри функции укажите this.style.background = 'red'; Кликайте по div, 
// изучите результат.

let dvGo = document.querySelectorAll('.go');

for (let i = 0; i < dvGo.length; i++) {


   dvGo[i].onclick = function() {

      this.style.background = 'red'
   
   }

}


// =========================================================