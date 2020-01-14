// Task 1 --------------------
// С помощью вложенных циклов и символа * нарисуйте:  *** *** ***
document.querySelector('.btn-1').onclick = () => {

   let pr = document.querySelector('.par-1');
   
   for (let i = 0; i < 3; i++) {
      
      for (let k = 0; k < 3; k++) {
         pr.innerHTML += '*';
      }

      pr.innerHTML += ' ';
   }

}


// Task 2 --------------------
// С помощью вложенных циклов и символа * нарисуйте: 
//   *****
//   *****
//   *****
document.querySelector('.btn-2').onclick = () => {

   let p = document.querySelector('.par-2');
   
   for (let i = 0; i < 3; i++) {
      console.log(i);
      for (let k = 0; k < 5; k++) {
         p.innerHTML += '*';
      }

      p.innerHTML += '<br>';
   }

}

// Task 3 --------------------
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в 
// зависимости от того четная или нет переменная внутреннего цикла.
//         101010
//         101010
//         101010
document.querySelector('.btn-3').onclick = () => {

   let p = document.querySelector('.par-3');

   for (let i = 0; i < 3; i++) {

      for (k = 0; k < 6; k++) {

         if (k % 2 == 0) {
            p.innerHTML += 1;
         }
         else {
            p.innerHTML += 0;
         }

      }


      p.innerHTML += '<br>';
   }

}

// Task 4 --------------------
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в 
// зависимости от того четная или нет переменная внутреннего цикла. Каждый третий элемент заменяйте на x:
//          10x01x
//          10x01x
//          10x01x
document.querySelector('.btn-4').onclick = () => {

   let p = document.querySelector('.par-4');

   for (let i = 0; i < 3; i++) {

      for (let k = 0; k < 6; k++) {

         if (k == 2 || k == 5) {
            p.innerHTML += 'x';
         }
         else if (k == 0 || k == 4) {
            p.innerHTML += '1';
         }
         else {
            p.innerHTML += '0';
         }

      }

      p.innerHTML += '<br>'
   }

}   


// Task 5--------------------
// С помощью вложенных циклов и символа * нарисуйте:
//          *
//          **
//          ***
document.querySelector('.btn-5').onclick = () => {

   let p = document.querySelector('.par-5');

   let m = 1;
   
   for (let i = 0; i < 3; i++) {

      for (let k = 0; k < m; k++) {
         p.innerHTML += '* ';
      }

      p.innerHTML += '<br>';
      m++
   }

}


// Task 6 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//          *****
//          ****
//          ***
//          **
//          *
document.querySelector('.btn-6').onclick = () => {

   let p = document.querySelector('.par-6');

   let m = 5;
   
   for (let i = 0; i < 5; i++) {

      for (let k = m; k > 0; k--) {
         p.innerHTML += '* ';
      }

      p.innerHTML += '<br>';

      m = m - 1;
      console.log(m);
   }

}


// Task 7 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//            *****
//           *****
//          *****
document.querySelector('.btn-7').onclick = () => {

   let p = document.querySelector('.par-7');
   let n = 3;
   let m = 8;

   for (let i = 0; i < 3; i++) {

      for (let k = 0; k < m; k++) {

         if (k < n) {
            p.innerHTML += '&nbsp';
         }
         else {
            p.innerHTML += '* ';
         }

      }

      p.innerHTML += '<br>';
      n--;
      m--;
   }

}


// Task 8 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//          *
//          **
//          ***
//          **
//          *
document.querySelector('.btn-8').onclick = () => {

   let p = document.querySelector('.par-8');
   let n = 4;
   let m = 0;

   for (let i = 0; i < 5; i++) {


      for (k = 0; k < 3; k++) {

         if (k > n || k > m ) {
            p.innerHTML += '&nbsp;';
            console.log(k);
         }
         else {
            p.innerHTML += '* ';
         }

      }
      n--;
      m++;
      p.innerHTML += '<br>';
   }


}


// Task 9 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//          ******
//	         *    *
//	         *    *
//	         *    *
//          ******
document.querySelector('.btn-9').onclick = () => {

   let p = document.querySelector('.par-9');

   for (let i = 0; i < 5; i++) {

      for (let k = 0; k < 6; k++) {

         if (k == 0 || k == 5) {
            p.innerHTML += '*';
         }
         else if (i == 0 || i == 4) {
            p.innerHTML += '*';
         }
         else {
            p.innerHTML += '&nbsp;' + '&nbsp;';
         }

      }
      p.innerHTML += '<br>';
   }


}


// Task 10 --------------------
// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
//          ******
//	         *    *
//	         *    *
//	         *    *
//          ******
document.querySelector('.btn-10').onclick = () => {

   let p = document.querySelector('.par-10');
   let n = document.querySelector('.in');

   for (let i = 0; i < 5; i++) {

      for (let k = 0; k < 6; k++) {

         if (k == 0 || k == 5) {
            p.innerHTML += n.value;
         }
         else if (i == 0 || i == 4) {
            p.innerHTML += n.value;
         }
         else {
            p.innerHTML += '&nbsp;' + '&nbsp;';
         }

      }
      p.innerHTML += '<br>';
   }


}


// Task 11 --------------------
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.
document.querySelector('.btn-11').onclick = () => {

   let p = document.querySelector('.par-11');

   for (let i = 6; i < 8; i++) {

      for (let k = 1; k < 11; k++) {
         p.innerHTML += `${i} * ${k} = ${i * k} <br>`;
      }
      p.innerHTML += '<br>' + '<hr>';
   }
   

}


// Task 12 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       1
//       1 2
//       1 2 3
//       1 2 3 4
//       1 2 3 4 5
document.querySelector('.btn-12').onclick = () => {

   let p = document.querySelector('.par-12');

   let m = 2;
   
   for (let i = 0; i < 5; i++) {

      for (let k = 1; k < m; k++) {
         p.innerHTML += `${k}&nbsp;`;
      }

      p.innerHTML += '<br>';
      m++
   }

}


// Task 13 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       01 02 03 04 05 06 07 08 09 10
//       11 12 13 14 15 16 17 18 19 20
//       21 22 23 24 25 26 27 28 29 30
//       31 32 33 34 35 36 37 38 39 40
//       41 42 43 44 45 46 47 48 49 50
document.querySelector('.btn-13').onclick = () => {

   let p = document.querySelector('.par-13');

   //let m = 0;
   
   for (let i = 1; i < 51; i++) {

         if (i > 0 && i < 10) {
            p.innerHTML += '0' + i + '&nbsp;';
         }
         else if (i % 10 == 0) {
            p.innerHTML += i +'<br>';
         }
         else {
            p.innerHTML += i + '&nbsp;';
         }
   
   }

}


// Task 14 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       5 4 3 2 1
//       4 3 2 1
//       3 2 1
//       2 1
//       1
document.querySelector('.btn-14').onclick = () => {

   let p = document.querySelector('.par-14');

   let m = 5;
   
   for (let i = 0; i < 5; i++) {

      for (let k = m; k > 0; k--) {
         p.innerHTML += `${k} &nbsp;` ;
      }

      p.innerHTML += '<br>';

      m = m - 1;
      console.log(m);
   }

}


// Task 15 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       X X X X 1
//       X X X 2 1
//       X X 3 2 1
//       X 4 3 2 1
//       5 4 3 2 1
document.querySelector('.btn-15').onclick = () => {

   let p = document.querySelector('.par-15');

   let m = 1;
   
   for (let i = 1; i < 6; i++) {

      for (let k = 5; k > 0; k--) {

         if (k > m ) {
            p.innerHTML += 'X';
          } else {
            p.innerHTML += k + '&nbsp;';
          }
      }
      m++
      p.innerHTML += '<br>';
      
   }

}


// Task 16 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       1
//       2  2
//       3  3  3
//       4  4  4  4
//       5  5  5  5  5
document.querySelector('.btn-16').onclick = () => {

   let p = document.querySelector('.par-16');

   let m = 2;
   
   for (let i = 1; i < 6; i++) {

      for (let k = 1; k < m; k++) {
         p.innerHTML += `${i}&nbsp;&nbsp;`;
      }

      p.innerHTML += '<br>';
      m++
   }

}


// Task 17 --------------------
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//       5   
//       4  4   
//       3  3  3   
//       2  2  2  2   
//       1  1  1  1  1 
document.querySelector('.btn-17').onclick = () => {

   let p = document.querySelector('.par-17');

   let m = 2;
   
   for (let i = 5; i > 0; i--) {

      for (let k = 1; k < m; k++) {
         p.innerHTML += `${i}&nbsp;&nbsp;`;
      }

      p.innerHTML += '<br>';
      m++
   }

}


// Task 18 --------------------
// С помощью вложенных циклов нарисуйте, цифры - 
// из счетчиков цикла (четные заменены на X):
//       5
//       X  X
//       3  3  3
//       X  X  X  X
//       1  1  1  1  1
document.querySelector('.btn-18').onclick = () => {

   let p = document.querySelector('.par-18');

   let m = 2;
   
   for (let i = 5; i > 0; i--) {

      for (let k = 1; k < m; k++) {

         if (i == 2 || i == 4) {
            p.innerHTML += 'X' + '&nbsp;';
         }
         else {
            p.innerHTML += `${i}&nbsp;&nbsp;`;
         }
      }
      p.innerHTML += '<br>';
      m++
   }

}


// Task 19 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//        *****
//       *******
//      *********
document.querySelector('.btn-19').onclick = () => {

   let p = document.querySelector('.par-19');

   let m = 2;
   let m1 = 6;

   for (let i = 0; i < 3; i++) {

      for (let k = 0; k < 10; k++) {

         if (k < m || k > m1) {
            p.innerHTML += '&nbsp;' + '&nbsp;';
         }
         else {
            p.innerHTML += '*' + '&nbsp;';
         }
      }
   m--;
   m1++;
   p.innerHTML += '<br>';

   }
}


// Task 20 --------------------
// С помощью вложенных циклов и символа * нарисуйте:
//        **
//       ****
//      ******
//       ****
//        **
document.querySelector('.btn-20').onclick = () => {

   let p = document.querySelector('.par-20');

   let m = 2;
   let m1 = 3;

   for (let i = 0; i < 3; i++) {

      for (let k = 0; k < 6; k++) {

         if (k < m || k > m1) {
            p.innerHTML += '&nbsp;' + '&nbsp;';
         }
         else {
            p.innerHTML += '*' + '&nbsp;';
         }
      }
      m--;
      m1++;
      p.innerHTML += '<br>';
   }

  let n = 1;
  let n1 = 4;
  
  for (let i = 0; i < 3; i++) {

      for (let k = 0; k < 6; k++) {

         if (k < n || k > n1) {
            p.innerHTML += '&nbsp;' + '&nbsp;';
         }
         else {
            p.innerHTML += '*' + '&nbsp;';
         }
      }
      n++;
      n1--;
      p.innerHTML += '<br>';
   }
  
}





//========================================
