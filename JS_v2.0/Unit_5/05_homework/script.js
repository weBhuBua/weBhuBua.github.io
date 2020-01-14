// Task 1 --------------------
// Выведите в консоль с помощью цикла числа от 1 до 10.
document.querySelector('.btn-1').onclick = () => {

   for ( let i = 1; i < 11; i++ ) {

      console.log(i);

   }
}

// Task 2 --------------------
// Выведите на страницу с помощью цикла числа от 1 до 10.
document.querySelector('.btn-2').onclick = () => {

   for ( let i = 1; i < 11; i++ ) {

      document.querySelector('.par').innerHTML += i + ' ';

   }
}
// Task 3 --------------------
// Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.
document.querySelector('.btn-3').onclick = () => {

   for ( let i = 10; i > -1; i-- ) {

      document.querySelector('.par-1').innerHTML += i + ' ';

   }
}

// Task 4 --------------------
// Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.
document.querySelector('.btn-4').onclick = () => {

   for ( let i = 0; i < 11; i += 2 ) {

      document.querySelector('.par-2').innerHTML += i + ' ';

   }
}

// Task 5--------------------
// Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.
document.querySelector('.btn-5').onclick = () => {

   for ( let i = 21; i > -1; i -= 3 ) {

      document.querySelector('.par-3').innerHTML += i + ' ';

   }
}


// Task 6 --------------------
// Используя строку ****** - нарисуйте квадрат 6х6 на 
document.querySelector('.btn-6').onclick = () => {

   for ( let i = 0; i < 6; i++ ) {

      document.querySelector('.par-4').innerHTML += '* * * * * *' + '<br>';

   }
}

// Task 7 --------------------
// Создайте input, button. По клику на кнопку выведите на страницу все числа, 
// начиная от введенного пользователем в input до нуля.
document.querySelector('.btn-7').onclick = () => {

   document.querySelector('.par-5').innerHTML = ' ';

   let num = +document.querySelector('.in').value;

    for ( let i = num; i > -1; i-- ) {

      document.querySelector('.par-5').innerHTML += i + ' ';

    }

}


// Task 8 --------------------
// Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. 
// Считаем что второе число всегда больше первого.
document.querySelector('.btn-8').onclick = () => {

   document.querySelector('.par-6').innerHTML = ' ';

   let num = +document.querySelector('.in-1').value;
   let num1 = +document.querySelector('.in-2').value;

   for ( let i = num; i < num1 + 1; i++ ) {

      document.querySelector('.par-6').innerHTML += i + ' ';

    }

}


// Task 9 --------------------
// Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, 
// если нет - выводим alert о ошибке.
document.querySelector('.btn-9').onclick = () => {

   let num = +document.querySelector('.in-3').value;
   let num1 = +document.querySelector('.in-4').value;

   if ( num1 > num ) {

      for ( let i = num; i < num1 + 1; i++ ) {

         document.querySelector('.par-7').innerHTML += i + ' ';
   
       }

   }
   else {
      alert('Ошибка!');
   }

}


// Task 10 --------------------
// Выведите на страницу все четные годы в промежутке от 1901 до 1950.
document.querySelector('.btn-10').onclick = () => {

   for ( let i = 1901; i < 1951; i++ ) {

      if ( i % 2 == 0 ) {
         document.querySelector('.par-8').innerHTML += i + ' ';
      }

   }

}


// Task 11 --------------------
// Создайте несколько div.one. С помощью length выведите количество div.one на странице.
document.querySelector('.btn-11').onclick = () => {

   let dv = document.querySelectorAll('.one').length;

   document.querySelector('.par-9').innerHTML = dv;
   
}


// Task 12 --------------------
// Создайте кнопку, при нажатии на которую запускается функция. 
// Функция окрашивает все div.one в оранжевый цвет.
document.querySelector('.btn-12').onclick = () => {

   let div = document.querySelectorAll('div.one');

   for ( let i = 0; i < div.length; i++ ) {
      div[i].style.background = 'orange';

   }
}


// Task 13 --------------------
// Создайте кнопку, при нажатии на которую запускается функция. 
// Функция выводит в консоль содержимое всех div.one.
document.querySelector('.btn-13').onclick = () => {

   let div = document.querySelectorAll('.one');

   for ( let i = 0; i < div.length; i++ ) {

      console.log(div[i].innerHTML);

   }

}


// Task 14 --------------------
// Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"] 
// устанавливает свойство placeholder = 'Введите данные'
document.querySelector('.btn-14').onclick = () => {

   let inp = document.querySelectorAll('input[type="text"]');

   //console.log(inp);

   for ( let i = 0; i < inp.length; i++ ) {

      inp[i].placeholder = 'Введите данные';

   }

}


// Task 15 --------------------
// Создайте кнопку, при нажатии на которую запускается функция. 
// Функция выводит в консоль количество input[type="text"]
document.querySelector('.btn-15').onclick = () => {

   console.log( document.querySelectorAll('input[type="text"]').length );

}


// Task 16 --------------------
// Создайте три связанных radiobutton[name="p1"]. Задайте им value. 
// При нажатии на кнопку выводите на страницу value выбранного.
document.querySelector('.btn-16').onclick = () => {

   let rad = document.querySelectorAll('input[name="p1"]');
   
   for ( let i = 0; i < rad.length; i++ ) {

     if ( rad[i].checked ) {
        document.querySelector('.par-10').innerHTML = rad[i].value;
     }

   }

}


// Task 17 --------------------
// Добавьте кнопку. При нажатии кнопки делайте первый из созданных 
// radiobutton в примере выше - checked.
document.querySelector('.btn-17').onclick = () => {

   let rad = document.querySelectorAll('input[name="p1"]');

   for ( let i = 0; i < rad.length; i++ ) {

      if ( i == 0 ) {
         rad[i].checked = true;
      }

   }

}


// Task 18 --------------------
// Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. 
// Первому элементу присвойте value = 0, второму value = 1 и т.д.
document.querySelector('.btn-18').onclick = () => {

   let rad = document.querySelectorAll('input[name="p1"]');

   for ( let i = 0; i < rad.length; i++ ) {

      rad[i].value = i;

   }
}


// Task 19 --------------------
// Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. 
// Добавьте кнопку при нажатии на котору проверяйте value выбранного элемента. 
// Если оно не равно 6 - выводите false, если равно - true.
document.querySelector('.btn-19').onclick = () => {

   let rad = document.querySelectorAll('input[name="p2"]');

   for ( let i = 0; i < rad.length; i++ ) {

      if ( rad[i].value == 6 && rad[i].checked == true ) {
         document.querySelector('.par-11').innerHTML = 'true';
      }
      else {
         document.querySelector('.par-11').innerHTML = 'false';
      }
 
   }
   
}


// Task 20 --------------------
// Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. 
// При изменении состояния input - выводите в консоль текст "был изменен input"

let rad = document.querySelectorAll('input[name="p3"]');

for ( let i = 0; i < rad.length; i++ ) {

   rad[i].oninput = () => {
      console.log('Был изменен input !')
   }

}



//====================================================================



