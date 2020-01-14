
// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

let url = 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc';
let url2 = 'http://getpost.itgid.info/index2.php';

function t1() {
   fetch(url + '&action=1')
      .then(data => {
         return data.text()
      })
      .then(data => {
         document.querySelector('.out-1').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
   fetch(url + '&action=2&name=Vasya')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-2').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
   fetch(url + '&action=3&num1=122&num2=233')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-3').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
   fetch(url + '&action=4&num1=22&num2=233')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-4').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
   fetch(url + '&action=5')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-5').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
   fetch(url + '&action=6&num1=122&num2=233')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-6').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
   fetch(url + '&action=7')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-7').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
   fetch(url + '&action=8&year=1992')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-8').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
   fetch(url + '&action=9&d=1')
      .then(data => {
         return data.text();
      })
      .then(data => {
         document.querySelector('.out-9').innerHTML = data;
   })
}

// ваше событие здесь!!!
document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=1', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-10').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Bond', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-11').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=46&num2=78', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-12').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-12').onclick = t12;


// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=3&num2=12', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-13').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=5', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-14').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-14').onclick = t14;


// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=2&num2=11', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-15').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-15').onclick = t15;


// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=7', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-16').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-16').onclick = t16;


// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1988', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-17').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-17').onclick = t17;


// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

   fetch(url2, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=9&d=1', 
   })
   .then(response => response.text())
      .then(response => {
         document.querySelector('.out-18').innerHTML = response;
      })

}

// ваше событие здесь!!!
document.querySelector('.b-18').onclick = t18;

