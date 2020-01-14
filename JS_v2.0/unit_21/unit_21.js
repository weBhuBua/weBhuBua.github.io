
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

let out1 = document.querySelector('.out-1');
let dv1 = document.querySelector('.div-1');

function t1() {

   out1.innerHTML += 'touch';
}

// ваше событие здесь!!!
dv1.ontouchstart = t1;

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let d = 0;

function t2() {
   d++;
   document.querySelector('.out-2').innerHTML = d;

}

// ваше событие здесь!!!
document.querySelector('.div-2').ontouchstart = t2;


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

// let o3 = document.querySelector('.out-3');
// let div332 = document.querySelector('.div-3_1');
// let div333 = document.querySelector('.div-3_2');

function t3(event) {
   if (event.target.innerHTML == '3-1') {
      document.querySelector('.out-3').innerHTML = 1;
   }
   else {
      document.querySelector('.out-3').innerHTML = 2;
   }

}

// ваше событие здесь!!!
document.querySelector('.div-3_1').onclick = t3;
document.querySelector('.div-3_2').onclick = t3;


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {

   document.querySelector('.div-4').ontouchstart = () => {
      document.querySelector('.out-4').innerHTML += 'touch ';
   }

}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {

   document.querySelector('.div-4').ontouchstart = () => { return false; }

}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {

   document.querySelector('.out-6').innerHTML = 'touchend';

}

// ваше событие здесь!!!
document.querySelector('.div-4').ontouchend = t6;


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
   document.querySelector('.div-7').style.background = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').ontouchstart = t7;


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {

   function randColor(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
   }

   document.querySelector('.div-8').style.background = a8[randColor(0, a8.length - 1)];

}

// ваше событие здесь!!!
document.querySelector('.div-8').ontouchstart = t8;

TODO:
// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {

   document.querySelector('.out-9').innerHTML = event.targetTouches.length;

}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener("touchstart", t9);

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w = document.querySelector('.div-10').offsetWidth;

function t10() {
   
   document.querySelector('.div-10').style.width = w + 'px';
   w++;
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener("touchmove", t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {

   let rad = document.querySelector('.out-11').innerHTML = event.changedTouches;


   document.querySelector('.out-11').innerHTML = 'radiusX = ' + rad[0]['radiusX'] + '<br>';
   document.querySelector('.out-11').innerHTML += 'radiusY = ' + rad[0]['radiusY'];

}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener("touchstart", t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

// let a = [['img/1.png', 'Череп'], ['img/2.png', 'Тыква'], ['img/3.png', 'Паук'], ['img/4.png', 'Бутылка'] , ['img/5.png', 'Котёл'], ['img/6.png', 'Рука'] ];
// let a1 = ['Череп', 'Тыква', 'Паук', 'Бутылка', 'Котёл', 'Рука'];


let a2 = [
   {
      'src': 'img/1.png',
      'description': 'Череп'

   },
   {
      'src': 'img/2.png',
      'description': 'Тыква'

   },
   {
      'src': 'img/3.png',
      'description': 'Паук'

   },
   {
      'src': 'img/4.png',
      'description': 'Бутылка'

   },
   {
      'src': 'img/5.png',
      'description': 'Котёл'

   },
   {
      'src': 'img/6.png',
      'description': 'Рука'

   },

];

let n = 0;
let img12Max = document.querySelector('.div-12-max');
let div12W = document.querySelector('.div-12-wrapper');
let pText = document.querySelector('.img-12-text');
// Кнопки
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let reset = document.querySelector('.reset');
makePictures();
let img12Min = document.querySelectorAll('.img-12-min');

// Добавление картинок
function makePictures() {

   for (let i = 0; i < a2.length; i++) {

      let image = document.createElement('img');

      if (i == 0) {
         image.setAttribute('class', 'active-img img-12-min');
      }
      else {
         image.setAttribute('class', 'img-12-min')
      }

      image.setAttribute('src', a2[i].src);
      image.setAttribute('data-text', a2[i].description);

      div12W.append(image);

   }
}

// добавляем текст
for (let i = 0; i < img12Min.length; i++) {
   img12Min[i].setAttribute('data-text', a2[i].description);
}

// Удаление класса - 'active-img'
function dellClass() {
   img12Min.forEach(function (elem) {
      elem.classList.remove('active-img');

   })
}


function t12() {

   img12Min.forEach(function (elem, index) {

      elem.ontouchstart = () => {
         n = index;
         dellClass();

         elem.classList.add('active-img');

         let img = elem.attributes[1].value;
         let text = elem.attributes['data-text'].value;

         img12Max.innerHTML = '<img src="' + img + '" alt="#" class="img-12-max"></img>' + '<br>';
         //  и текста
         pText.innerHTML = text;
      }
   })

}

// let n = 0;
function preV() {

   dellClass();
   n--;

   if (n < 0) {
      n = img12Min.length-1;
   }
      
   let img1 = img12Min[n].attributes[1].value;
   let text1 = img12Min[n].attributes['data-text'].value;
   img12Max.innerHTML = '<img src="' + img1 + '" alt="#" class="img-12-max"></img>' + '<br>';
   //  и текста
   pText.innerHTML = text1;
   img12Min[n].classList.add('active-img');
      
}


function nexT() {

   dellClass();

   n++;

   if (n > img12Min.length-1) {
      n = 0;
   }
   // console.log(n);
   let img2 = img12Min[n].attributes[1].value;
   let text2 = img12Min[n].attributes['data-text'].value;
   img12Max.innerHTML = '<img src="' + img2 + '" alt="#" class="img-12-max"></img>';
      //  и текста
   pText.innerHTML = text2;
   img12Min[n].classList.add('active-img');

} //nexT()

//Сброс состояния
function reseT() {

   img12Min.forEach(function (elem) {
      elem.classList.remove('active-img');
   })

   img12Min[0].classList.add('active-img');
   img12Max.innerHTML = '<img src="img/1.png" alt="#" class="img-12-max"></img>';
   //  и текста
   pText.innerHTML = a2[0].description;

}

// ваше событие здесь!!!
prev.ontouchstart = preV;
next.ontouchstart = nexT;
reset.ontouchstart = reseT;

t12();



//======================================================================



