// this keyword is used in JavaScript to refer to the current context or object that is executing the code. The value of this can change depending on how a function is called.

// 1.using this keyword in object to refer to the object itself
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`hello my name is ${this.name} and i am ${this.age} years old`); // here this refers to the person object itself
  },
};

person.greet; // this will print nothing as we are not calling the function, to call the function we need to add parentheses ()
console.log("-------");
person.greet(); // this will print "hello my name is John and i am 30 years old"
console.log("-------");

// 2. using this keyword in a regular function
function showThis() {
  console.log(this); // here this refers to the global object (window in browsers, global in Node.js) now it
}
showThis(); // this will print the global object in node js
// in browser it will print the window object
//  but in function this keyword do not refer to the function itself, like in object
function thisTest() {
  const name = "Alice";
  console.log(this.name); // here this refers to the global object, and global object do not have name property, so it will print undefined
  console.log(this.setInterval); // here this refers to the global object, and global object have setInterval property, so it will print the setInterval function
}
thisTest(); // this will print undefined
