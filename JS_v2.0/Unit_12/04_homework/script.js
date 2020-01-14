// Task 1 --------------------
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
// const a = [
//    [1,2,3],
//    ['a','b','c'],
//    [ 4,5,6],
//    ['d','e','f'],
//    [ 7,8,9],
//  ];

const a = [
   [1,2,3],
   ['a','b','c'],
   [ 4,5,6],
   ['d','e','f'],
   [7, 8, 9],
];
document.querySelector('.btn-1').onclick = () => {

   let out1 = document.querySelector('.out-1');

   for (let i = 0; i < a.length; i++) {
      
      for (let k = 0; k < a[i].length; k++) {
         out1.innerHTML += a[i][k] + ' ';
      }
      out1.innerHTML += '<br>';
   }

}


// Task 2 --------------------
// Выведите на страницу символ 3 из массива a.

document.querySelector('.btn-2').onclick = () => {

   document.querySelector('.out-2').innerHTML = a[0][2];

}

// Task 3 --------------------
// Выведите на страницу символ e из массива a.

document.querySelector('.btn-3').onclick = () => {

   let out3 = document.querySelector('.out-3');

   out3.innerHTML = a[3][1];

}


// Task 4 --------------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

document.querySelector('.btn-4').onclick = () => {

   let out4 = document.querySelector('.out-4');

   out4.innerHTML += a[3];

}


// Task 5 --------------------
//  Выведите на страницу только первые элементы вложенных массивов массива a.

document.querySelector('.btn-5').onclick = () => {

   let out5 = document.querySelector('.out-5');

   for (let i = 0; i < a.length; i++) {
      
      for (let k = 0; k < a[i].length-2; k++) {

         
            out5.innerHTML += a[i][k] + ' ';
         
         
      }
      out5.innerHTML += '<br>';
   }

}


// Task 6 --------------------
// Выведите на страницу только четные вложенные массивы массива a.

document.querySelector('.btn-6').onclick = () => {

   let out6 = document.querySelector('.out-6');

   for (let i = 0; i < a.length; i++) {
      
      for (let k = 0; k < a[i].length; k++) {

         if (i % 2 == 0) {
            out6.innerHTML += a[i][k] + ' ';
         }
         
      }
      out6.innerHTML += '<br>';
   }

}


// Task 7 --------------------
// Выведите на страницу только числа из массива a.

document.querySelector('.btn-7').onclick = () => {

   let out7 = document.querySelector('.out-7');

   for (let i = 0; i < a.length; i++) {
      
      for (let k = 0; k < a[i].length; k++) {

         if (isFinite(a[i][k]) == true)
            out7.innerHTML += a[i][k] + ' ';
         
      }
      out7.innerHTML += '<br>';
   }

}


// Task 8 --------------------
// Выведите на страницу длины вложенных массивов в массив a.
document.querySelector('.btn-8').onclick = () => {

   let out8 = document.querySelector('.out-8');

   for (let i = 0; i < a.length; i++) {
      
      
      out8.innerHTML += a[i].length + '<br>';
   }

}


// Task 9 --------------------
// Выведите на страницу элементы массива a в обратном порядке, т.е.

document.querySelector('.btn-9').onclick = () => {

   let out9 = document.querySelector('.out-9');

   for (let i = a.length-1; i >= 0 ; i--) {
      
      for (let k = a[i].length-1; k >= 0 ; k--) {
         out9.innerHTML += a[i][k] + ' ';
      }
      out9.innerHTML += ' ';
   }

}


// Task 10 --------------------
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:

document.querySelector('.btn-10').onclick = () => {

   let out10 = document.querySelector('.out-10');

   for (let i = 0; i < a.length ; i++) {
      
      for (let k = a[i].length-1; k >= 0 ; k--) {
         out10.innerHTML += a[i][k] + ' ';
      }
      out10.innerHTML += '<br> ';
   }

}


// Task 11 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
let d1 = [

   [0, 1, 0, 1, 0, 1, 0, 1],
   [1, 0, 1, 0, 1, 0, 1, 0],
   [0, 1, 0, 1, 0, 1, 0, 1],
   [1, 0, 1, 0, 1, 0, 1, 0],
   [0, 1, 0, 1, 0, 1, 0, 1],
   [1, 0, 1, 0, 1, 0, 1, 0],
   [0, 1, 0, 1, 0, 1, 0, 1],
   [1, 0, 1, 0, 1, 0, 1, 0],

];

document.querySelector('.btn-11').onclick = () => {

   let out11 = document.querySelector('.out-11');

   for (let i = 0; i < d1.length; i++) {
      
      for (let k = 0; k < d1[i].length; k++) {
         out11.innerHTML += d1[i][k] + ' ';
      }
      out11.innerHTML += '<br>';
   }

}


// Task 12 --------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.
// document.querySelector('.btn-12').onclick = () => {

document.querySelector('.btn-12').onclick = () => {

   let out12 = document.querySelector('.out-12');

   for (let i = 0; i < d1.length; i++) {
      
      for (let k = 0; k < d1[i].length; k++) {
         if (d1[i][k] == 0) {
            out12.innerHTML += '<div class = "block"></div>';
         }
         else {
            out12.innerHTML += '<div class="block-dark"></div>';
         }
      }
      out12.innerHTML += '<br>';
   }

}


// Task 13 --------------------
// Создайте массив, который подходит под следующие условия:
//       b[0][1] == 4;
//       b[3][2] == 5

const b = [

   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [1, 1, 1, 1],
   [1, 1, 5, 1],

];

document.querySelector('.btn-13').onclick = () => {

   let out13 = document.querySelector('.out-13');

   for (let i = 0; i < b.length; i++) {
      for (let k = 0; k < b[i].length; k++) {
         out13.innerHTML += `${b[i][k]}&nbsp;`;
      }
      out13.innerHTML += '<br>';
   }
}


// Task 14 --------------------
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5

const c = [

   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [5]

];

   document.querySelector('.btn-14').onclick = () => {

      let out14 = document.querySelector('.out-14');
   
      for (let i = 0; i < c.length; i++) {
         for (let k = 0; k < c[i].length; k++) {
            out14.innerHTML += `${c[i][k]}&nbsp;`;
         }
         out14.innerHTML += '<br>';
      }
   }



// Task 15 --------------------
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

const d = [
   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [1, 1, 1, 5],
   [1, 1, 1, 1],
   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [4, 5],
];

   document.querySelector('.btn-15').onclick = () => {

      let out15 = document.querySelector('.out-15');
   
      for (let i = 0; i < d.length; i++) {
         for (let k = 0; k < d[i].length; k++) {
            out15.innerHTML += `${d[i][k]}&nbsp;`;
         }
         out15.innerHTML += '<br>';
      }
   }



// Task 16 --------------------
// Создайте массив, который подходит под следующие условия:
//       e[0][1] == 4;
//       e[2][3] == 5
//       e[6][0][1] = 6;

const e = [
   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [1, 1, 1, 5],
   [1, 1, 1, 1],
   [1, 4, 1, 1],
   [1, 1, 1, 1],
   [
      [1, 6, 1, 1],
      [1, 1, 1, 1]
   ],
];

document.querySelector('.btn-16').onclick = () => {

   let out16 = document.querySelector('.out-16');

   out16.innerHTML += e[0][1] + '<br>';
   out16.innerHTML += e[2][3] + '<br>';
   out16.innerHTML += e[6][0][1] = 6;
}


// Task 17 --------------------
// Создайте массив, который подходит под следующие условия:
//       f[0][1][3] == 4;
//       f[2][1][1] == 5
//       f[6][0][1] = 6;

const f = [
   [  [1, 1, 1, 1],
      [1, 1, 1, 4], ],
   [1, 1, 1, 1],
   [  [1, 1, 1, 1],
      [1, 5, 1, 1], ],
   [1, 1, 1, 1],
   [1, 1, 1, 1],
   [1, 1, 1, 1],
   [ [1, 6, 1, 1], ],
];

document.querySelector('.btn-17').onclick = () => {

   let out17 = document.querySelector('.out-17');
   
   // console.log(f.length);
   
      out17.innerHTML += f[0][1][3] + '<br>';
      out17.innerHTML += f[2][1][1] + '<br>';
      out17.innerHTML += f[6][0][1];
}


// Task 18 --------------------
// Создайте массив, который подходит под следующие условия:
//       g[0][1][3] == 4;
//       g[2][1][3] == 5
//       g[6][0][1] = 6;
//       g[3] == g[5];

let g = [
   [
      [1, 1, 1, 1],
      [1, 1, 1, 4],
   ],
   [1, 1],
   [
     [1, 1, 1, 1],
     [1, 1, 1, 5],
   ],
   [1, 2, 3, 4],
   [1, 1],
   [1,2,3,4],
   [
     [1, 6, 1, 1],
   ],

];

document.querySelector('.btn-18').onclick = () => {

   let out18 = document.querySelector('.out-18');

   out18.innerHTML += g[0][1][3] + '<br>';
   out18.innerHTML += g[2][1][3] + '<br>';
   out18.innerHTML += g[6][0][1];
}

// Task 19 --------------------
// Выведите на страницу сумму элементов массива a (только чисел).

document.querySelector('.btn-19').onclick = () => {

   let out19 = document.querySelector('.out-19');
   let sum = 0;

   for (let i = 0; i < a.length; i++) {
      
      for (let k = 0; k < a[i].length; k++) {
         
         if (isFinite(a[i][k]) == true)
            sum = sum + a[i][k];
            out19.innerHTML = sum;
      }
   }
   
}



// Task 20 --------------------
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, 
// т.е.a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.

let z = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
];

z[0][0], z[0][1], z[0][2]; // Первая горизонталь.
z[1][0], z[1][1], z[1][2]; // Вторая горизонталь.
z[2][0], z[0][1], z[0][2]; // Третья горизонталь.

g[0][0], g[1][0], g[2][0]; // Первая вертикаль.
g[0][1], g[1][1], g[2][1]; // Первая вертикаль.
g[0][2], g[1][2], g[2][2]; // Первая вертикаль.

g[0][0], g[1][1], g[2][2]; // Первая диагональ.
g[0][2], g[1][1], g[2][0]; // Вторая диагональ.





//=============================================================================




