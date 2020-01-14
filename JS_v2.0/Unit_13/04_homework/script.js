// Task 1 --------------------
// Выведите массив a1 на страницу.
// a1 = {
//    3 : 'hello',
//    'one' : 'hi'
//   };

let a1 = {
   3: 'hello',
   'one': 'hi',
}

document.querySelector('.btn-1').onclick = () => {

   for (let key in a1) {
      document.querySelector('.out-1').innerHTML += key + ': ' + a1[key] + '<br>';
   }

}

// Task 2 --------------------
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
// a2 = {
//    3 : 'hello',
//    'one' : 'hi',
//    'testt' : 'vodoley',
//    'ivan' : 'ivanov'
//   };

a2 = {
   3 : 'hello',
   'one' : 'hi',
   'testt' : 'vodoley',
   'ivan' : 'ivanov'
};

document.querySelector('.btn-2').onclick = () => {

   for (let key in a2) {
      
      if (a2[key].length > 4) {
         document.querySelector('.out-2').innerHTML += a2[key] + '<br>';
      }

   }

}


// Task 3 --------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
// a3 = {
//    3 : 'hello',
//    'one' : 'hi',
//    'testt' : 'vodoley',
//    'ivan' : 'ivanov'
//   };

a3 = {
   3 : 'hello',
   'one' : 'hi',
   'testt' : 'vodoley',
   'ivan' : 'ivanov'
};

document.querySelector('.btn-3').onclick = () => {

   for (let key in a3) {
      
      if (key.length > 4) {
         document.querySelector('.out-3').innerHTML += a3[key] + '<br>';
      }

   }

}


// Task 4 --------------------
// Выведите на страницу элементы из масиива a4 у которых значение - число.
// a4 = {
//    3 : 'hello',
//    'one' : 4,
//    'testt' : 'vodoley',
//    'ivan' : 6
// };

a4 = {
   3 : 'hello',
   'one' : 4,
   'testt' : 'vodoley',
   'ivan' : 6
};

document.querySelector('.btn-4').onclick = () => {

   for (let key in a4) {
      
      if (isFinite(a4[key]) == true) {
         document.querySelector('.out-4').innerHTML += key + ': ' + a4[key] + '<br>';
      }

   }

}

// Task 5 --------------------
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
// a5 = {
//    a : 7,
//    z : 4,
//    45 : 12,
//    f : 6
// };
  
a5 = {
   a : 7,
   z : 4,
   45 : 12,
   f : 6
};
  
document.querySelector('.btn-5').onclick = () => {

   let sum = 0;

   for (let key in a5) {
      
      document.querySelector('.out-5').innerHTML = sum = sum + a5[key];

   }

}


// Task 6 --------------------
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

let a6 = {
   'name': 'Peter Parker',
   'age': 57,
   'sex': 'male',
   'weight': 76,
   'height': 175,
};

document.querySelector('.btn-6').onclick = () => {

   for (let key in a6) {
      document.querySelector('.out-6').innerHTML += key + ': ' + a6[key] + '<br>';
   }

}


// Task 7 --------------------
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. 
// При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем.
// Выводите массив на страницу.

let a7 = {};

document.querySelector('.btn-7').onclick = () => {

   let k = document.querySelector('.u7-key__input').value;
let v = document.querySelector('.u7-value__input').value;
let out7 = document.querySelector('.out-7');
let a77 = '';

   a7[k] = v;
   console.log(a7);

   for (let key in a7) {

      a77 += key + ': ' + a7[key] + '<br>';
   }
   out7.innerHTML = '';
   out7.innerHTML += a77;

   document.querySelector('.btn-8').onclick = () => {

      let k1 = document.querySelector('.u8-key__input').value;
      let out8 = document.querySelector('.out-8');
   
      let a78 = ' ';
   
      delete a7[k1];
      for (let key in a7) {

         a78 += `${key} : ${a7[key]} <br>`;
      }
   
      out8.innerHTML = a78;
   }

   document.querySelector('.btn-9').onclick = () => {

      let k2 = +document.querySelector('.u9-delete-value__input').value;
      let out9 = document.querySelector('.out-9');

      for (let key in a7) {

         if (a7[key] == k2) {
            delete a7[key];
         }
      }
      for (let key in a7) {
         out9.innerHTML += `${[key]}  : ${a7[key]} <br>`;
      }
      
   }

   document.querySelector('.btn-10').onclick = () => {

      let k3 = document.querySelector('.u10-has-key__input').value;
      let out10 = document.querySelector('.out-10');

      console.log(k3);
      console.log(a7[k3]);

      out10.innerHTML = ' ';
   
      if (a7[k3] != undefined) {
         out10.innerHTML += 'true';
      } else {
         out10.innerHTML += 'false';
      }
   
   }

}


// Task 8 --------------------
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.



// Task 9 --------------------
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.


// Task 10 --------------------
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.


// Task 11 --------------------
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
// a11 = {
// 	"red" : ['Академгородок',...],
// 	"green" : 
// }

a11 = {

   "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],

   "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],

   "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],

};

document.querySelector('.btn-11').onclick = () => {

   for (let key in a11) {
      document.querySelector('.out-11').innerHTML += key + ': ' + ' ' + a11[key] + '<br>';
   }

}


// Task 12 --------------------
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, 
// после чего на страницу будут выведены только станции данной ветки.

let branch = document.querySelector('.u12-branch');

document.querySelector('.btn-12').onclick = () => {

   
   let out12 = document.querySelector('.out-12');

   out12.innerHTML = '';

   out12.innerHTML += a11[branch.value];

}




// Task 13 --------------------
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

document.querySelector('.btn-13').onclick = () => {

   let out13 = document.querySelector('.out-13');
   let t13 = branch.value;

   out13.innerHTML = '';
   out13.innerHTML = a11[t13].reverse();

}


// Task 14 --------------------
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

let task14 = [];

let findSt = document.querySelector('.u14-find-station');
let out14 = document.querySelector('.out-14');

function f14() {

   for (let key in a11) {
      task14.push(a11[key]);
   }
   for (let i = 0; i < task14.length; i++) {

      for (let k = 0; k < task14[i].length; k++) { 

         let option14 = document.createElement('option');
         option14.setAttribute('value', task14[i][k]);
         option14.innerHTML = task14[i][k];
         findSt.append(option14);
      }
   }

   

}

f14();

document.querySelector('.btn-14').onclick = function() {

   for (let key in a11) {

      for (let i = 0; i < a11[key].length; i++) {
         
         if (a11[key][i] == findSt.value) {

            out14.innerText = key;
         }

      }
      
   }

}


// Task 15 --------------------
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то 
// по нажатию на кнопку будет показано сколько станций между ними(сами станции не включаем.Если это соседние станции - то 0).

let firstSt = document.querySelector('.u15-first-station');
let secondSt = document.querySelector('.u15-second-station');
let out15 = document.querySelector('.out-15');

function f15() {

   let option15 = '';
   let option155 = '';

   for (let key in a11) {
      for (let i = 0; i < a11[key].length; i++) {
         option15 += `<option class = "opt-15" data-branch = "${key}" value="${a11[key][i]}">${a11[key][i]}</option>`;
         option155 += `<option class = "opt-155" data-branch = "${key}" value="${a11[key][i]}">${a11[key][i]}</option>`;
      }
   }
   firstSt.innerHTML = option15;
   secondSt.innerHTML = option155;
}

f15();

let btn15 = document.querySelector('.btn-15');
let y1 = 0;
let y2 = 0;
let x11 = 0;
let x22 = 0;

btn15.onclick = ()=>{
let firstVal = firstSt.value;
let secondVal = secondSt.value;
 	for (let key in a11) {

 	  let branch15 = a11[key];
      let x1 = branch15.indexOf(firstVal);
        
 	   let x2 = branch15.indexOf(secondVal);
         if (x1 != -1) {
         x11 = x1;
         y1 = key;
  		}
         if (x2 != -1) {
         x22 = x2;
         y2 = key;
  		}
   }

   let max = Math.max(x11, x22);
   let min = Math.min(x11, x22);

      if (y1 == y2) {
         if (max - min < 2) {
            out15.innerHTML = '0';
         }
         else {
            out15.innerHTML = (max - min) - 1;
         }
         
      }
      else {
         alert('Выберите другую станцию');
      }
}

// document.querySelector('.btn-15').onclick = () => {

//    let firstVal = firstSt.value;
//    let secondVal = secondSt.value;
//    let a, b;
//    let a1, b1;

//    for (let key in a11) {
//       for (let i = 0; i < a11[key].length; i++) {
//          if (a11[key][i] == firstVal) {
//             a = key;
//             a1 = i;
//          }
//          if (a11[key][i] == secondVal) {
//             b = key;
//             b1 = i;
//          }
//       }
      
//    }

//    let max = Math.max(a1, b1);
//    let min = Math.min(a1, b1);

//    if (a == b) {
//       if (max - min < 2) {
//          out15.innerHTML = '0';
//       }
//       else {
//          out15.innerHTML = (max - min) - 1;
//       }
      
//    }
//    else {
//       alert('Выберите другую станцию');
//    }

// }




// Task 16 --------------------
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. 
// Добавьте пустой select.u16 - select.При выборе radio - программа должна в select добавлять option с названиями 
// станций метро.Т.е.выбрали radio(value = "green") то внутрь select должны быть записаны option со станциями зеленой ветки.
// Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

let select16 = document.querySelector('.u16-select');
let checkVal = '';

function f16(a) {

   let sel16 = '';

      for (let i = 0; i < a11[a].length; i++) {
         sel16 += `<option value="${a11[a][i]}">${a11[a][i]}</option>`;
   }
   select16.innerHTML = sel16;
}

document.querySelector('.btn-16').onclick = () => {

   let radio16 = document.querySelectorAll('.u16-radio');

   for (let i = 0; i < radio16.length; i++) {

      if (radio16[i].checked == true) {
         checkVal = radio16[i].value;
      }
   }
   f16(checkVal);
}


// Task 17 --------------------
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
// a17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

a17 = {

   "red": [['Академгородок', 0], ['Театральная', 1], ['Крещатик', 1], ['Лесная', 0]],
   "blue": [['Героев Днепра', 0], ['Площадь Независимости', 1], ['Площадь Льва Толстого', 1], ['Теремки', 0]],
   "green": [['Сырец', 0], ['Золотые ворота', 1], ['Дворец спорта', 1], ['Красный хутор', 0]],

};

document.querySelector('.btn-17').onclick = () => {

   let out177 = '';

   for (let key in a17) {

      out177 += `${key} :: ${a17[key]} <br>`;

   }
   document.querySelector('.out-17').innerHTML = out177;
}


// Task 18 --------------------
// Выведите на страницу только станции с переходами из массива a17.

document.querySelector('.btn-18').onclick = () => {
   let out188 = '';
   for (let key in a17) {

      for (let i = 0; i < a17[key].length; i++) {
         if (a17[key][i][1] == 1) {
            
               out188 += `Станция <b>${a17[key][i][0]}</b> <br>`;
            
         }
         
      }
      
   }
   document.querySelector('.out-18').innerHTML = out188;
}


// Task 19 --------------------
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий 
// название столицы, количество населения, площадь.Выведите его на страницу.

let country = {

   "сhina": {
      "capital": "Пекин",
      "population": 1400000000,
      "area": 9598962,
      "currency": "юань",
      "rusname": "Китай"
   },
   "vietnam": {
      "capital": "Ханой",
      "population": 92500000,
      "area":  	331210,
      "currency": "донг",
      "rusname": "Вьетнам"
   },
   "laos": {
      "capital": "Вьентьян",
      "population": 6500000,
      "area": 236800,
      "currency": "кип",
      "rusname": "Лаос"
   },
   "мalaysia": {
      "capital": "Куала-Лумпур",
      "population": 31000000,
      "area": 329758,
      "currency": "ринггит",
      "rusname": "Малазия"
   },
   "indonesia": {
      "capital": "Джакарта",
      "population": 266360000,
      "area": 1919000,
      "currency": "рупия",
      "rusname": "Индонезия"
   },
   "singapore": {
      "capital": "Сингапур",
      "population": 5800000,
      "area": 725,
      "currency": "доллар",
      "rusname": "Сингапур"
   },

};

document.querySelector('.btn-19').onclick = () => {

   let out19 = document.querySelector('.out-19');
   let out199 = '';

   for (let key in country) {
      out199 += `<b>${key}</b> <br>`;
      out199 += `Столица : &nbsp; ${country[key].capital} <br>`;
      out199 += `Население : &nbsp; ${country[key].population} чел. <br>`;
      out199 += `Площадь : &nbsp; ${country[key].area} кв.км <br>`;
      out199 += `Денежная единица :  &nbsp; ${country[key].currency} <hr>`;
      
   }
   out19.innerHTML = out199;
}


// Task 20 --------------------
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.

let s20 = document.querySelector('.s-20');

function funcCount() {

   let count = '';

   for (let key in country) {

      count += `<option value="${key}">${country[key].rusname}</option> `;

   }
   s20.innerHTML = count;

}

funcCount();

document.querySelector('.btn-20').onclick = () => {

   let out200 = '';
   let out20 = document.querySelector('.out-20');
   let option20 = s20.value;

   for (let key in country) {

      if (key == option20) {
         
         out200 += `<b>${country[key].rusname}</b> <br>`;
         out200 += `Столица : &nbsp; ${country[key].capital} <br>`;
         out200 += `Население : &nbsp; ${country[key].population} чел. <br>`;
         out200 += `Площадь : &nbsp; ${country[key].area} кв.км <br>`;
         out200 += `Денежная единица :  &nbsp; ${country[key].currency} <hr>`;

      }
   }
   out20.innerHTML = out200;
}

