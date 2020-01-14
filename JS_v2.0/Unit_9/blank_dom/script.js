// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.
// Допишите возможность присваивать высоту равную 100px;

document.querySelector('.btn-1').onclick = () => {
   func_1();
}

function func_1() {

   let a = document.querySelector('.u-1');
   a.style.width = '200px';
   document.querySelector('.btn-11').onclick = () => {
      a.style.height = '100px';
   }
}


// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. 
// Задайте данному классу через CSS зеленый цвет фона.
document.querySelector('.btn-2').onclick = () => {
   func_2();
}
2
function func_2() {

   let a2 = document.querySelector('.u-2');
   a2.classList.add('css-1');
}


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, 
// которая окрашивает элемент, на котором произошло событие в красный цвет фона.
// Для обращения внутри функции к такому элементу используйте this.

let a3 = document.querySelectorAll('.u-3');
      for (let i = 0; i < a3.length; i++) {
      a3[i].onclick = func_3;
      }

function func_3() { 

   this.style.background = 'red';

}



// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, 
// которая присваивает элементу, на котором произошло событие, класс css - 2. 
// Для обращения внутри функции к такому элементу используйте this.

let a4 = document.querySelectorAll('.u-4');
      for (let i = 0; i < a4.length; i++) {
      a4[i].onclick = func_4;
      }
function func_4() { 
    
   this.classList.add('css-2');
     
}


// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет 
// удалять класс css - 3 с элемента, на котором произошло событие.

let a5 = document.querySelectorAll('.u-5');
      for (let i = 0; i < a5.length; i++) {
      a5[i].onclick = func_5;
      }

function func_5() { 

   this.classList.remove('css-3');

}



// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

function func_6() {

   const toggle = document.querySelector('.u-6');

   toggle.onclick = function () {

      this.classList.toggle('active');

   }

}

func_6();


// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.
document.querySelector('.btn-7').onclick = function() {
   func_7();
}

function func_7() {

   let a7 = document.querySelectorAll('.css-3');

   return document.querySelector('.par-7').innerHTML = a7.length;

}


// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 
// атрибут title со значением test - data.
document.querySelector('.btn-8').onclick = function() {
   func_8();
}

function func_8() {

   let p = document.querySelector('.u-1');

   p.setAttribute('title', 'test-data');

}



// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. 
// Функция возращает data атрибут элемента, по которому кликнули.

let btn = document.querySelectorAll('.u-9');

for (let i = 0; i < btn.length; i++) {
   btn[i].onclick = func_9;
}
function func_9() {

   let q = this.getAttribute('data');
   return document.querySelector('.par-9').innerHTML = q;

}


// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты 
// data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.
// Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

let btn10 = document.querySelectorAll('.u-10__button');

for (let i = 0; i < btn10.length; i++) {
   btn10[i].onclick = func_10;
}

function func_10() {

   let q = document.querySelector('.u-10__out');
   let cur = this.getAttribute('data-currency');
   console.log(cur);

   if (cur == 'euro') {
      return q.innerHTML = 1.08;
   }
   else if (cur == 'rub') {
      return q.innerHTML = 0.016;
   }
   else {
      return q.innerHTML = 1;
   }

}


// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты 
// data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем 
// в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

let btn11 = document.querySelectorAll('.u-11__button');

for (let i = 0; i < btn11.length; i++) {
   btn11[i].onclick = func_11;
}

function func_11() {

   let q = document.querySelector('.u-11__out');
   let cur = this.getAttribute('data-currency');
   let u11 = document.querySelector('.u-11_out').value;

   if (cur == 'euro') {
      return q.innerHTML = u11 / 1.08 + ' - Euro';
   }

   else if (cur == 'rub') {
      return q.innerHTML = u11 / 0.016 + ' - Rub';
   }

   else if (cur == 'uah') {
      return q.innerHTML = u11 / 0.04 + ' - UAH';
   }
   
   else {
      return q.innerHTML = u11 / 1 + ' - $';
   }

}

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, 
// присваивает ему класс css - 4 и возвращает данный элемент

document.querySelector('.btn-12').onclick = function() {

   func_12();
}

function func_12() { 

   let dv = document.querySelector('.dv-12');
   let a = document.createElement('div');
   a.classList.add('css-4');
   a.innerHTML = 'Task 12';
   dv.appendChild(a);
   return a;

}


// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement 
// и вставляет его в p.u - 13(append).

document.querySelector('.btn-13').onclick = function() {

   func_13();
}

function func_13() {

   let pu = document.querySelector('.u-13');
   let a = document.createElement('span');
   a.classList.add('span-13');
   a.innerHTML = ' 13';
   pu.append(a);
   return a;

}


// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и 
// вставляет его в p.u - 14(prepend).

document.querySelector('.btn-14').onclick = function() {

   func_14();
}

function func_14() {

   let pu = document.querySelector('.u-14');
   let a = document.createElement('span');
   a.classList.add('span-14');
   a.innerHTML = '14 ';
   pu.prepend(a);
   return a;

}


// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и 
// вставляет его в p.u - 15(before)

document.querySelector('.btn-15').onclick = function() {

   func_15();
}

function func_15() {

   let pu = document.querySelector('.u-14');
   let a = document.createElement('span');
   a.classList.add('span-15');
   a.innerHTML = '15 ';
   pu.before(a);
   return a;

}


// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.
// Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. 
// И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

document.querySelector('.btn-16').onclick = function() {

   func_16();
}

function func_16() {

   let dv16 = document.querySelector('.u-16__out');
   let b = document.createElement('button');
   b.classList.add('u-16');
   b.innerHTML = 'Push';
   b.onclick = () => {
      console.log('u-16');
   }
   dv16.appendChild(b);

}


// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит 
// этим элементом div.u - 17

document.querySelector('.btn-17').onclick = function() {

   func_17();
}

function func_17() {

   let dv17 = document.querySelector('.u-17');
   let p = document.createElement('p');
   p.classList.add('u-177');
   p.innerHTML = 17;
   dv17.replaceWith(p);

}

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, 
// на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

let out18 = document.querySelectorAll('.out-18');

for (let i = 0; i < out18.length; i++) {
   out18[i].onclick = func_18;
}

function func_18() {

   return this.remove();

}


// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него 
// указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

document.querySelector('.btn-19').onclick = function() {

   func_19();
}

function func_19() {

   let ul = document.querySelector('.u-19');
   let li = document.createElement('li');
   li.innerHTML = 'Second';
   ul.append(li);

}
// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от 
// пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li 
// получает класс.css - 5.

document.querySelector('.btn-20').onclick = function() {

   func_20();
}

function func_20() {

   let inp = document.querySelector('.inp-20').value;
   let inp2 = document.querySelector('.inp-22');
   
   let ul = document.querySelector('.u-20');
   let li = document.createElement('li');
   li.innerHTML = inp;
   document.querySelector('.inp-20').value = '';
   ul.append(li);

   if (inp2.checked) {
      li.classList.add('css-5');
   }
   


}
// concole.log(document.querySelector('.inp-22'));


// ==========================================





