// Scope: This concept determines where in your code you have access to certain variables. Think of it like a set of rules for visibility.
// Think of scope as a set of rules that determines where your variables "live." The curly braces {} are crucial here because they often create a new "room" or block for your variables. 🧱

// A variable declared with let or const inside a block is typically only accessible within that same block. This is called block scope.
var globals = "this var scope works globally";
let globalsLet = "this let will not work under function scope";
const globalsConst = "this const will not work under function scope";
function checkScope() {
  var local = "this var works locally";
  let globalsLet = "this works locally";
  console.log(globals);
  console.log(local);
  console.log(globalsLet); // give errorṇ
  console.log(globalsConst); // give error
}
checkScope();

console.log(globals);
console.log(globalsLet);

// curlybraces {}  they work as scope
function checkScope2() {
  let l = 5;
  function inner() {
    let k = 10;
    console.log(l);
  }
  console.log(k); // give error because k is not defined in this scope
  inner();
}
checkScope2();

if (true) {
  let a = 5;
  var b = 10;
}
console.log(b); // will work because var is function scope variable not block scope, that is why it works, so to keep confidential data use let or const
console.log(a); // give error because a is block scope variable under if block

// var
// Scope Type: Function Scope

// Boundary: A var variable is only "trapped" by the walls of a function.

// Behavior: It ignores simpler blocks like if, for, or while. If not inside a function, it becomes a global variable.

// let and const (ES6)
// Scope Type: Block Scope

// Boundary: These variables are "trapped" by any pair of curly braces {}.

// Behavior: This applies to if, for, while, and function blocks, making their behavior much more predictable.

if (true) {
  var differentSecret = "What about me?";
}

console.log(differentSecret);
// The console will successfully print: "What about me?"

// This is because var does not have block scope. Instead, it has function scope. When you declare a variable with var inside a block like an if statement, JavaScript acts as if you declared it at the top of the entire function.

// So, the simple rule is:

// let and const = Block Scope {}

// var = Function Scope function() {}

function testScope() {
  if (true) {
    var aVariable = "I'm inside the function";
  }
  console.log(aVariable); // First log
}

testScope(); // This runs the function

console.log(aVariable); // Second log
// The first console.log() will work and print "I'm inside the function", precisely because of function scope.

// However, the second console.log(), the one outside the function, will cause a ReferenceError.

// Think of the function testScope() { ... } as a box. The var aVariable is created inside that box, and it can't be seen from the outside. Once the function finishes running, the box and everything inside it is gone.
