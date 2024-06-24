//Using "this" in object literal

/* function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
let user = makeUser();
  
alert( user.ref.name ); */


function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
// alert( user.ref().name ); // John


//Create a calculator

let calculator = {
    read (){
        this.a = Number(prompt(`A?`));
        this.b = Number(prompt(`B?`));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
  };
  
 // calculator.read();
 // alert( calculator.sum() );
 // alert( calculator.mul() );

// Chaining

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

console.log( ladder.up().up().down().showStep().down().showStep());