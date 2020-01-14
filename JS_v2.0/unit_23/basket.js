// Создание таблицы
function tb() {
   document.querySelector('.out-11').append(document.createElement('table'));
   let out11 = document.querySelector('.out-11 table');
   out11.innerHTML = '';
   console.log(out11);
   // t11();
   let tabl = Object.keys(card).length;

   for (let i = 0; i <= tabl + 1; i++) {
       if (localStorage.getItem('cart') == null) {
           out11.innerHTML = `<p class="basket">Корзина пуста</p>`;
       }
       else if (i == 0) {
           out11.innerHTML += '<tr> <th>#</th> <th>Название</th> <th>Количество</th> </tr>';
       }
       else if (i == tabl + 1) {
           out11.innerHTML += `<tr> <td></td><td>Total</td><td name="total"> </td> </tr>`
       }
       else {
           out11.innerHTML += `<tr> <td>${[i]}</td><td name="title"></td> <td name="amount"></td> <td><button class="button-primary button_pl">+</button> <button class="button-primary button_m">-</button></td> </tr>`;
       }
   }
}

tb();

// Считывание из LS и запись данных в таблицу
let n = 0;
function t11() {
    
    card1 = localStorage.getItem('cart');
    card1 = JSON.parse(card1);

    let td = document.querySelectorAll('td[name="title"]');
    let td2 = document.querySelectorAll('td[name="amount"]');
    console.log(td2);

    for (let key in card1) {
        td2[n].innerHTML = card1[key];
        td[n].innerHTML = key;
        n++;
        if (n > td2.length - 1) {
            n = 0;
        }
    }

    // считает общее количество товара.
    let sum = 0;

    for (let i = 0; i < td2.length; i++) {
        sum = sum + +td2[i].innerHTML;
    }
    document.querySelector('td[name="total"]').innerHTML = sum;
    
}

// ваше событие здесь!!!
t11();