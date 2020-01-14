class Valid {
   constructor(a, b, v) {
      this.email = a;
      this.password = b;
      this.isValid = v;
   }

   validate() {
      this.isValid = false;
      if (this.password.length >= 6) {
         this.isValid = true;
      }
      console.log(this.isValid);
   }
 }