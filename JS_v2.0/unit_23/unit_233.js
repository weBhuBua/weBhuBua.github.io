// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */


window.addEventListener('storage', function (event) {

   if (localStorage.getItem('bg') != null) {
      let bodyBg = localStorage.getItem('bg');
      
      document.querySelector('body').style.backgroundColor = bodyBg;
   }
});




