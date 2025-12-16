//this keyword in JavaScript refers to the object it belongs to.
//It has different values depending on where it is used.
//we will see use of this in functions first.
function showThis() {
  console.log(this);
}
showThis(); // In a regular function, 'this' refers to the global object (window in browsers, global in Node.js)
// lets see this in function variable
function showThisVar(uernmame, age) {
  this.name = uernmame; // here this refers to global object, and it is working as object property because this itslef is an object, so this.name creates a property name  in global object same for age, this.age creates age property in global object
  this.age = age;
  console.log(this);
  return this;
}

showThisVar("John", 30);
const user = (username, age) => {
  this.name = username;
  return this;
};
console.log(user("Doe", 25)); // In an arrow function, 'this' refers to the enclosing lexical context, which is the global object here

// Now lets see this in constructor function
const user1 = new showThisVar("Alice", 28); // When a function is called with 'new', 'this' refers to the newly created object, new is constructor call
const user2 = new showThisVar("Bob", 35);
console.log(user1);
console.log(user2);
