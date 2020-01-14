fetch('http://api.openweathermap.org/data/2.5/weather?q=Shostka,ua&appid=a4a0c2388abeacad593e1555bcce3217')
.then(function (resp) { return resp.json() })
.then(function (data) {
   console.log(data);
   document.querySelector('.package-name').innerHTML = data.name;
   document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
   document.querySelector('.disclaimer').innerHTML = data.weather[0]['description'];
   // document.querySelector('.features li').innerHTML = `${data.wind.speed} m/s`;
   document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   document.querySelector('.features') = `<li>Hello</li>`

   console.log(document.querySelector('.features'));
       

})
.catch(function () {
      // catch any errors
});

// let fs;
// let file = fs.readFileSync('city.json')

// let cityW = JSON.parse(city.json);

let cityW = city.json;

console.log(cityW);