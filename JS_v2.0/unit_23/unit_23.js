
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let a2 = [7, 6, 5];

function t2() {
    
    localStorage.setItem('a2', JSON.stringify(a2))
    
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {

    let a3 = localStorage.getItem('a2');
    a3 = JSON.parse(a3);

    let a33 = '';
    for (let i = 0; i < a3.length; i++) {
        a33 += i + ' ' + a2[i] + '<br>';
    }
    document.querySelector('.out-3').innerHTML = a33;

}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = { hello: 'world', hi: 'mahai' };

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {

    let a55 = localStorage.getItem('a4');
    
    a55 = JSON.parse(a55);
    console.log(a55);
    let a555 = '';
    for (let key in a55) {
        console.log(a55[key]);
        a555 += `${key} ${a55[key]}<br>`
    }

    document.querySelector('.out-4').innerHTML = a555;

}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];
let i7 = document.querySelector('.i-7');

function t7() {

    
    let a7Num = i7.value;
    if (isNaN(a7Num) == true) {
        a7.push(a7Num);
    }
    else {
        a7.push(parseInt(a7Num));
    }

    localStorage.setItem('a7', JSON.stringify(a7));

    i7.value = '';
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;


// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {

    let a8 = localStorage.getItem('a7');
    a8 = JSON.parse(a8);

    a8.pop();
    
    localStorage.setItem('a7', JSON.stringify(a8));

}

// ваше событие здесь!!!
document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

function t9() {

    let rad = document.querySelectorAll('input[name="rb-9"]');

    for (let i = 0; i < rad.length; i++) {
        rad[i].oninput = () => {
            if (rad[i].checked == true) {
                localStorage.setItem('bg', rad[i].value);
            }
        }
        
    }

}

// ваше событие здесь!!!
t9();


// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 0,
    'grape': 0,
    'orange': 0
}
let card1 = {};

// Запись в LS
function t10() {
    localStorage.setItem('cart', JSON.stringify(card));
    t11();
}

document.querySelector('.b-10').onclick = t10;
   

// Создание таблицы
function t11() {
    card1 = localStorage.getItem('cart');
    card1 = JSON.parse(card1);
    document.querySelector('.out-11').innerHTML = '';
    document.querySelector('.out-11').append(document.createElement('table'));
    let out11 = document.querySelector('.out-11 table');

    let k = 1;
    if (card1) {
        
        out11.innerHTML += '<tr> <th>#</th> <th>Название</th> <th>Количество</th> </tr>';
        for (let key in card1) {
            
            if (localStorage.getItem('cart') == null) {
                out11.innerHTML = `<p class="basket">Корзина пуста</p>`;
            }
            else {
                
                out11.innerHTML += `<tr> <td>${[k]}</td><td name="title">${key}</td> <td name="amount">${card1[key]}</td> <td><button class="button-primary button_pl">+</button> <button class="button-primary button_m">-</button></td> </tr>`;
            }
            k++;
        }

            // считает общее количество товара.
        let td2 = document.querySelectorAll('td[name="amount"]');
        let sum = 0;

        for (let i = 0; i < td2.length; i++) {
            sum = sum + +td2[i].innerHTML;
        }
        
        out11.innerHTML += `<tr> <td></td><td>Total</td><td name="total"> ${sum}</td> </tr>`
        document.querySelector('td[name="total"]').innerHTML = sum;
    }
    else if (localStorage.getItem('cart') == null) {
        out11.innerHTML = `<p class="basket">Корзина пуста</p>`;
    }
    
    // Добавление кнопкам атрибута data
    let tdButMin = document.querySelectorAll('.button_m');
    let tdButPl = document.querySelectorAll('.button_pl');
    let atr = 0;

    for (let key in card1) {
        tdButMin[atr].setAttribute('data', key);
        tdButPl[atr].setAttribute('data', key);
        atr++;
    }
    
} // t11

t11();


// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

// Плюс - Минус
document.querySelector('.out-11').onclick = function (event) {
    
    let d = event.target.attributes['data'].value;
    
    if (event.target.classList.contains('button_pl')) {
        card1[d]++;
        localStorage.setItem('cart', JSON.stringify(card1));
        t11();
    }
    else if (event.target.classList.contains('button_m')) {
        if (card1[d] >= 1) {
            card1[d]--;
            localStorage.setItem('cart', JSON.stringify(card1));
            t11();
        }
    }
}


// ваше событие здесь!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */


// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

// Очистка корзины
document.querySelector('.b-11').onclick = () => {
    localStorage.clear();
    t11();
    
}
