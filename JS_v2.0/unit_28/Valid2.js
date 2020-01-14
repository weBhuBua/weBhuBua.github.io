class Valid2 extends Valid {
   constructor(a, b, v, e, p) {
      super(a, b, v);
      this.emaiError = e;
      this.passwordError = p;

   }

   validate() {
      this.isValid = false;
      this.emaiError = '';
      this.passwordError = '';
      
      if (this.email == '' && this.password == '') {
         this.emaiError = 'email empty';
         this.passwordError = 'min length 6';
      }
      else if (this.password == '') {
         this.passwordError = 'min length 6';
      }
      else if (this.email == '') {
         this.emaiError = 'email empty';
      }
      else if (this.password.length >= 6 && this.email != '') {
         this.isValid = true;
      }
   }
}