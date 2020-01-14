class Goods {
   constructor(a, b, d, f, g) {
      this.name = a;
      this.amount = b;
      this.image = d;
      this.count = f;
      this.out = g;
   }

   showConsole() {
      console.log(goods);
   }
   draw() {
      document.querySelector(this.out).innerHTML = `<div class="cart"><img src="img/${this.image}.png"><p>${this.name}</p><p>Цена - ${this.amount} грн.</p>
      </div>`;
   }

}