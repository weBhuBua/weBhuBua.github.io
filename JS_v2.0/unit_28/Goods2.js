class Goods2 extends Goods {
   constructor(a, b, d, f, g, k) {
      super(a, b, d, f, g);
      this.sale = k;
   }
   
   draw() {
      let sale = '<p>SALE -10%</p>';
      if (this.sale == true) {
         document.querySelector(this.out).innerHTML = `<div class="cart">${sale}<img src="img/${this.image}.png"><p>${this.name}</p><p>Цена - ${this.amount} грн.</p>
         </div>`;
      }
      else {
         document.querySelector(this.out).innerHTML = `<div class="cart"><img src="img/${this.image}.png"><p>${this.name}</p><p>Цена - ${this.amount} грн.</p>
         </div>`;
      }
      
   }
}