// Arrow function
// (a, b) => a + b + 100;


// let n = (name) => {
//     return "Hi , "+name ;
// }

// const foo = () => console.log("foo function called");
// const func = () => ( {foo : 1 } );

// console.log(func().foo);

// // "use strict";

// const obj = {
//   a: 10,
// };

// Object.defineProperty(obj, "b", {
//   get: () => {
//     console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
//     return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
//   },
  
// });


// class C {
//     a = 3;
//     constructor() {
//       this.method = this.method.bind(this);
//     }
//     method() {
//       console.log(this.a);
//     }
//   }

// console.log(new C())


//diff between simple & arrow function by this keyword


function this_FUN(){
  let obj = {
    PersonName : "Shivani",
    fun(){
      console.log("fun " + this); // fun [object object]
      function print_this(){
        console.log("print_this "+this); 
        arrowFun(); //call arrow function // arrow_fun[object object]
      }
      let arrowFun = ()=>{
        console.log("arrow_fun "+this); 
      } 
      print_this(); // call print_this function // print_this [object global]
      arrowFun(); // call arrowFun print  // arrow_fun[object object]
    }
  }
  console.log(obj.fun())
}

this_FUN();

// let obj = {a:1,this_FUN};

// obj.this_FUN();