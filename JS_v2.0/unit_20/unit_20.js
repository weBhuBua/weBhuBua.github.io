
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {

    document.querySelector('.i-1').value = '';

    return document.querySelector('.out-1').innerHTML = event.key;

}

document.querySelector('.i-1').onkeypress = t1;


// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {

    return document.querySelector('.out-2').innerHTML = event.keyCode;

}

document.querySelector('.i-2').onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let out3 = document.querySelector('.out-3');

function t3(event) {

    document.querySelector('.i-3').value = '';
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        out3.innerHTML = 'false';
    } else {
        out3.innerHTML = 'true';
    }

}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let out4 = document.querySelector('.out-4');

function t4(event) {

    document.querySelector('.i-4').value = '';

    out4.innerHTML += event.key.toLowerCase();

}

document.querySelector('.i-4').onkeypress = t4;


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let i5 = document.querySelector('.i-5');

function t5(event) {

    i5.value = '';

    document.querySelector('.out-5').innerHTML += event.key.toUpperCase();

}

i5.onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let i6 = document.querySelector('.i-6');

function t6(event) {

    event.preventDefault();

    i6.value = i6.value + event.key.toLowerCase();

}

i6.onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [2, 7, 'hi', 78, 99, 'unit', 'key'];

    function randKey(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);

    }
    
    document.querySelector('.out-7').innerHTML = a7[randKey(0, a7.length-1)]

}

document.querySelector('.i-7').onkeypress = t7;


// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

let i8 = document.querySelector('.i-8');
let out8 = document.querySelector('.out-8');

function t8(event) {

    if (event.key == 'i') {
        out8.innerHTML += 1;
    }
    else if (event.key == 'o') {
        out8.innerHTML += 0;
    }
    else if (event.key == 'l') {
        out8.innerHTML += 7;
    }
    else {
        out8.innerHTML += event.key;
    }


}

i8.onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let a = 0;

function t9(event) {
    
    if (event.keyCode == 40) {
        a++;
    }

    document.querySelector('.out-9').innerHTML = a;

}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let w = document.querySelector('.div-10').offsetWidth;
let h = document.querySelector('.div-10').offsetHeight;
let dv10 = document.querySelector('.div-10');

function t10(event) {
    if (event.keyCode == 37 || event.keyCode == 39) {
        w++;
        dv10.style.width = w + 'px';

    }
    else if (event.keyCode == 38 || event.keyCode == 40) {
        h++;
        dv10.style.height = h + 'px';
    }

}

document.querySelector('.i-10').onkeydown = t10;


// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */


// Полностью не смог сделать кнопки Caps и Tab.!!!!!!!!!!!!!!!!!

let i11 = document.querySelector('.i-11');
let out11 = document.querySelector('.out-11');
let caps = document.querySelector('.caps');
i11.value = '';

function t11(event) {

    let keyCd = event.keyCode;

    i11.onkeyup = (event) => {

        document.querySelectorAll('.clava .key').forEach(function (elem) {

            if (keyCd != 20) {
                elem.classList.remove('dark');
            
                if (keyCd == 20) {
                    caps.classList.toggle('dark');
                }
            }
        });
    };
    

    if (keyCd == 16 || keyCd == 17) {
        document.querySelector('.clava .key[data="'+event.code+'"]').classList.add('dark');
    }
    else if (keyCd == 20) {
        caps.classList.toggle('dark');
    }
    else {
        document.querySelector('.clava .key[data="'+keyCd+'"]').classList.add('dark');
    }

}

i11.onkeydown = t11;


// Нажатие мышью -------------------------------
document.querySelectorAll('.clava .key').forEach(function (elem) {

    elem.onclick = function (event) {

        document.querySelectorAll('.clava .key').forEach(function (elem) {

            elem.classList.remove('dark');

        });

        caps.onclick = () => {
            caps.classList.toggle('dark');
        }
        elem.classList.add('dark');
        let k = elem.innerHTML;

        if (elem.classList.contains('special') == true) {
            i11.value += '';
        }
        else if (this.getAttribute('data') == 32) {
            i11.value += ' ';
        }
        else {
            i11.value += k;
        }
        
    }
    
}); 


//=====================================================




