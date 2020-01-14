
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

let dv1 = document.querySelector('.div-1');

function t1() {

   return document.querySelector('.out-1').innerHTML = dv1.innerHTML;
}

dv1.onclick = t1;


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

let dv2 = document.querySelector('.div-2');

function t2(event) {


   return document.querySelector('.out-2').innerHTML = event.altKey;

}

dv2.onclick = t2


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let dv3 = document.querySelector('.div-3');

function t3() {

   w3 = w3 + 5;
   document.querySelector('.out-3').innerHTML = w3;

   dv3.style.width = w3 + 'px';

}

dv3.onclick = t3


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let dv4 = document.querySelector('.div-4');

function t4() {

   return document.querySelector('.out-4').innerHTML = dv4.innerHTML;
}

dv4.ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let dv5 = document.querySelector('.div-5');

function t5() {

   if (dv5.classList.contains('active') == true) {
      dv5.classList.remove('active');
   }
   else {
      dv5.classList.add('active');
   }

}

dv5.ondblclick = t5;


// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let dv6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');

function t6() {

   if (ul6.classList.contains('hide') == true) {
      ul6.classList.remove('hide');
   }
   else {
      ul6.classList.add('hide');
   }

}

dv6.ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let dv7 = document.querySelector('.div-7');

function t7() {

   

   if (dv7.classList.contains('active') == true) {
      dv7.classList.remove('active');
   }
   else {
      dv7.classList.add('active');
   }

}

dv7.oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let ch8 = document.querySelector('.ch-8');

function t8(event) {

   if (ch8.checked == true) {
      document.oncontextmenu = () => { return false };
   }
   else {
      document.oncontextmenu = true;
   }

}

ch8.onchange = t8;


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let dv9 = document.querySelector('.div-9');

function t9() {

   dv9.innerHTML = '<img src="img/2.png" alt="#">';

}

dv9.oncontextmenu = t9;


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let dv10 = document.querySelector('.div-10');

function t10() {

   dv10.innerHTML = '<img src="img/2.png" alt="#">';
   console.log(dv10.innerHTML);

}

dv10.onmouseenter = t10;


// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let dv11 = document.querySelector('.div-11');

function t11() {

   dv11.innerHTML = '<img src="img/2.png" alt="#">';

   dv11.onmouseleave = () => {
      dv11.innerHTML = '<img src="img/1.png" alt="#">';
   }

}

dv11.onmouseenter = t11;


// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let dv12 = document.querySelector('.div-12');

dv12.onmousedown = () => {
   dv12.classList.add('active');
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let dv13 = document.querySelector('.div-13');

dv13.onmousedown = () => {
   dv13.classList.add('active');
}

dv13.onmouseup = () => {
   dv13.classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let dv14 = document.querySelector('.div-14');

function t14() {

   dv14.classList.add('active');

}

document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let dv15 = document.querySelector('.div-15');

function t15() {

   let dv15In = dv15.innerHTML;
   dv15In++;
   dv15.innerHTML = dv15In;
}

dv15.onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let dv16 = document.querySelector('.div-16');

function t16() {

   let w15 = dv16.offsetWidth;
   w15++;
   
   dv16.style.width = w15 + 'px';
}

dv16.onmousemove = t16;


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
   dv16.onmousemove = () => t16();
}

function t17Off() {
   dv16.onmousemove = () => { return false};
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let dv18 = document.querySelector('.div-18');

function t18() {
   dv18.innerHTML = dv18.offsetWidth;
}

dv18.onmouseenter = t18;


// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let dv19 = document.querySelector('.div-19');

function t19() {
   dv19.innerHTML = dv19.classList;
}

dv19.onmouseout = t19;


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let prog = document.querySelector('progress'); 

function t20() {

   let p = prog.value;
   p++;
   prog.value = p;

}

prog.onmousemove = t20;