//Operators used in conditionals
// == (equal to ), === (strict equal to), != (not equal to), !== (strict not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to), && (logical and), || (logical or), ! (logical not)
// Truty and Falsy values:
// Falsy values: false, 0, "", null, undefined, NaN,-0
// Truthy values: true, {}, [], "0"  ( o is under string), "false" ( false is under string), function(){}, any other value that is not falsy

// types of conditionals:
// 1. if else
// 2. switch case
// 3. ternary operator
// 4. nested if else

// 1. Truty and Falsy values
let userfound = true;
let usernotfound = false;
if (userfound) {
  console.log("user found"); // this will run because userfound is true
}
if (usernotfound) {
  console.log("user not found"); // this will not run because usernotfound is false, but it will not give error
}

// 2. Switch case
let day = 3;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");

  case 4:
    console.log("wednesday"); // note: break is imporatant to break the case otherwise it will run all the case after the matched case,but will not print default case
  case 5:
    console.log("thursday");

  default:
    console.log("invalid day");
    break;
}

let object1 = { name: "john", age: 30 };
let object2 = { name: "john", age: 30 };

console.log(Object.keys(object1).length); // O in object.keys is capital and in object.values also, if you give small o it will give error, try it.
console.log(Object.values(object2));
