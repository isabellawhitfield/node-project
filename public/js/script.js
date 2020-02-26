console.log('nodejs');

let x=2;
const y=10; //cannot change the value when a variable is declared const because its constant
// y=25;
console.log(y);

//let has block scope - it is known only inside the structure where it is declared
for (let i = 0; i < 5; i++ ){
  console.log(i);
}

// console.log(i); i not available here
// var p,q;

// es5
// total(5,8); calls even when the definition comes later
//
// function total(p,q){
//   console.log(p+q);
// }


let name = "Yoobee";
let name = "Yoobee"


//es6
let total =(p,q) => console.log(p+q); //local scope
total(2,3); //can be called only after defining the function

// console.log(p,q);
