
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {

   let xml1 = new XMLHttpRequest();

   xml1.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc1(this.responseText);
      }
   }

   xml1.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1', true);
   xml1.send();

   function xFunc1(data) {
      document.querySelector('.out-1').innerHTML = data;
   }
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {

   let xml2 = new XMLHttpRequest();

   xml2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc2(this.responseText);
      }
   }

   xml2.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Oleg', true);
   xml2.send();

   function xFunc2(data) {
      document.querySelector('.out-2').innerHTML = data;
   }
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {

   let xml3 = new XMLHttpRequest();
   xml3.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc3(this.responseText);
      }
   }

   xml3.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=3&num2=7", true);
   xml3.send();

   function xFunc3(data) {
      document.querySelector('.out-3').innerHTML = data;
   }

}



// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {

   let xml4 = new XMLHttpRequest();
   xml4.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc4(this.responseText);
      }
   }

   xml4.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=3&num2=17", true);
   xml4.send();

   function xFunc4(data) {
      document.querySelector('.out-4').innerHTML = data;
   }

}



// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {

   let xml5 = new XMLHttpRequest();
   xml5.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc5(this.responseText);
      }
   }

   xml5.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5", true);
   xml5.send();

   function xFunc5(data) {
      document.querySelector('.out-5').innerHTML = data;
   }

}



// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {

   let xml6 = new XMLHttpRequest();
   xml6.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc6(this.responseText);
      }
   }

   xml6.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=3&num2=7", true);
   xml6.send();

   function xFunc6(data) {
      document.querySelector('.out-6').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;



// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {

   let xml7 = new XMLHttpRequest();
   xml7.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc7(this.responseText);
      }
   }

   xml7.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7", true);
   xml7.send();

   function xFunc7(data) {
      document.querySelector('.out-7').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {

   let xml8 = new XMLHttpRequest();
   xml8.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc8(this.responseText);
      }
   }

   xml8.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1980", true);
   xml8.send();

   function xFunc8(data) {
      document.querySelector('.out-8').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {

   let xml9 = new XMLHttpRequest();
   xml9.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc9(this.responseText);
      }
   }

   xml9.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=9&m=1", true);
   xml9.send();

   function xFunc9(data) {
      document.querySelector('.out-9').innerHTML = data;
   }

}



// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {

   let xml10 = new XMLHttpRequest();
   xml10.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc10(this.responseText);
      }
   }

   xml10.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml10.send('auth=zhrgB3DxC8LoG7Gcisjc&action=1');

   function xFunc10(data) {
      document.querySelector('.out-10').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

   let xml11 = new XMLHttpRequest();
   xml11.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc11(this.responseText);
      }
   }

   xml11.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml11.send('auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Oleg');

   function xFunc11(data) {
      document.querySelector('.out-11').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;


// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {

   let xml12 = new XMLHttpRequest();
   xml12.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc12(this.responseText);
      }
   }

   xml12.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml12.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml12.send('auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=23&num2=48');

   function xFunc12(data) {
      document.querySelector('.out-12').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;


// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

   let xml13 = new XMLHttpRequest();
   xml13.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc13(this.responseText);
      }
   }

   xml13.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml13.send('auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=3&num2=33');

   function xFunc13(data) {
      document.querySelector('.out-13').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {

   let xml14 = new XMLHttpRequest();
   xml14.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc14(this.responseText);
      }
   }

   xml14.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml14.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml14.send('auth=zhrgB3DxC8LoG7Gcisjc&action=5');

   function xFunc14(data) {
      document.querySelector('.out-14').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;


// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

   let xml15 = new XMLHttpRequest();
   xml15.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc15(this.responseText);
      }
   }

   xml15.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml15.send('auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=3&num2=33');

   function xFunc15(data) {
      document.querySelector('.out-15').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;


// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

   let xml16 = new XMLHttpRequest();
   xml16.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc16(this.responseText);
      }
   }

   xml16.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml16.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml16.send('auth=zhrgB3DxC8LoG7Gcisjc&action=7');

   function xFunc16(data) {
      document.querySelector('.out-16').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

   let xml17 = new XMLHttpRequest();
   xml17.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc17(this.responseText);
      }
   }

   xml17.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml17.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml17.send('auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1989');

   function xFunc17(data) {
      document.querySelector('.out-17').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

   let xml18 = new XMLHttpRequest();
   xml18.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         xFunc18(this.responseText);
      }
   }

   xml18.open("POST", "http://getpost.itgid.info/index2.php", true);
   xml18.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xml18.send('auth=zhrgB3DxC8LoG7Gcisjc&action=9&y=1');

   function xFunc18(data) {
      document.querySelector('.out-18').innerHTML = data;
   }

}

// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;

