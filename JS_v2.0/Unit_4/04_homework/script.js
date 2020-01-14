// Task 1 --------------------
// Создайте button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.btn-1').onclick = () => {

   alert('Task-1');

}


// Task 2 --------------------
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.in-1').onclick = () => {
   alert('Task-2');
}


// Task 3 --------------------
// Создайте p - при нажатии на него выводите alert с номером задачи.
document.querySelector('.text').onclick = () => {
   alert('Task-3');
}

// Task 4 --------------------
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
document.querySelector('.btn-2').onclick = () => {

   let cb = document.querySelector('.in-2');

   if ( cb.checked ) {
      document.querySelector('.par').innerHTML = 'true';
   }
   else {
      document.querySelector('.par').innerHTML = 'false';
   }

}


// Task 5--------------------
// Создайте input(checkbox) и button. Добавьте value для checkbox. 
// При нажатии на него выводите value если checkbox выбран и false если нет.
document.querySelector('.btn-3').onclick = () => {

   let cb = document.querySelector('.in-3');

   if ( cb.checked ) {
      document.querySelector('.par-1').innerHTML = document.querySelector('.in-3').value;
   }
   else {
      document.querySelector('.par-1').innerHTML = 'false';
   }

}


// Task 6 --------------------
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.
document.querySelector('.btn-4').onclick = () => {
   
      alert( document.querySelector('.in-4').value );

}


// Task 7 --------------------
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. 
// Выводите в консоль предупреждение, если длина пароля меньше 6 символов.
document.querySelector('.btn-5').onclick = () => {

   let val = document.querySelector('.in-5').value;

   if ( val.length < 6 ) {
      console.log('Недостаточно символов');
   }
   else {
      alert( val );
   }

}


// Task 8 --------------------
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). 
// Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.
document.querySelector('.btn-6').onclick = () => {

   document.querySelector('.one').innerHTML = '<p><input type="text" class="in-6" value="Тут что-то написано"></p><button class="btn-7">Теперь на меня нажми</button>';

   document.querySelector('.btn-7').onclick = () => {

      console.log(document.querySelector('.btn-7'));
   
      let inp = document.querySelector('.in-6').value;
   
      alert( inp );
   
   }

}


// Task 9 --------------------
// Создайте один input(radio) . и button - при нажатии на button выводите 
// alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.
document.querySelector('.btn-8').onclick = () => {

   if ( document.querySelector('.in-7').checked ) {
      alert( document.querySelector('.in-7').value );
   }
   else {
      alert(false);
   }

}


// Task 10 --------------------
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.
document.querySelector('.btn-9').onclick = () => {

   document.querySelector( '.dv' ).style.backgroundColor = document.querySelector('.in-8').value;

}


// Task 11 --------------------
// Создайте input(color) - два элемента и button - при нажатии на кнопку 
// присвойте цвет из первого input в value второго.
document.querySelector('.btn-10').onclick = () => {

   document.querySelector('.in-10').value = document.querySelector('.in-9').value;

   console.log( document.querySelector('.in-10').value );

}


// Task 12 --------------------
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.
document.querySelector('.btn-11').onclick = () => {

   document.querySelector('.par-2').innerHTML = document.querySelector('.in-11').value;

}


// Task 13 --------------------
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. 
// Добавьте событие oninput на range и тоже выводите значение на страницу.
document.querySelector('.btn-12').onclick = () => {

   document.querySelector('.par-3').innerHTML = document.querySelector('.in-12').value;

}

document.querySelector('.in-12').oninput = () => {

   document.querySelector('.par-4').innerHTML = document.querySelector('.in-12').value;

}


// Task 14 --------------------
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
document.querySelector('.btn-14').onclick = () => {

   document.querySelector('.par-5').innerHTML = document.querySelector('.in-14').value;

}


// Task 15 --------------------
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.
document.querySelector('.btn-15').onclick = () => {

   document.querySelector('.in-16').value = document.querySelector('.in-15').value;

   document.querySelector('.par-6').innerHTML = document.querySelector('.in-15').value;

}


// Task 16 --------------------
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.
document.querySelector('.btn-16').onclick = () => {

   document.querySelector('.par-7').innerHTML = document.querySelector('#sel').value;

}


// Task 17 --------------------



// Task 18 --------------------
// Создайте select добавьте на него событие onchange. 
// По данному событию выводите value выбранного option на страницу.
document.querySelector('#sel-1').onchange = () => {

   document.querySelector('.par-8').innerHTML = document.querySelector('#sel-1').value;

}


// Task 19 --------------------
// Создайте форму. В ней input(text) и input(password) - и кнопку. 
// По нажатию кнопки выводите значение text и password в консоль!.
document.querySelector('.btn-17').onclick = () => {

   console.log( document.querySelector('.in-17').value );
   console.log( document.querySelector('.in-18').value );

}


// Task 20 --------------------
// Создайте форму. В ней input(text) и input(password) - и кнопку. 
// По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)
document.querySelector('.btn-18').onclick = (event) =>  {

   event.preventDefault();

   let form = document.querySelector('form');

   console.log( form.elements.one.value );
   console.log( form.elements.two.value );

}




// ================= The End ====================== //
