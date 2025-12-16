// implicit return
// Implicit Return: In certain situations, a JavaScript function can give back a value without you needing to explicitly write the return keyword.
//implicit return: This is a feature of arrow functions (=>). It's a shortcut that lets you return a value without typing the return keyword. The choice between an explicit or implicit return all comes down to the curly braces {}.

// Explicit Return:
// If an arrow function uses curly braces {}, you must use the return keyword to get a value back.
const double = (x) => {
  return x * 2; // explicit return
};

// Implicit Return
// If the function is simple enough for one line, you can remove the curly braces {} and the return keyword. The value is returned automatically, or "implicitly."

const geGreeting = (name) => {
  return "Hello, " + name;
};

// ***************************************
const add = (a, b) => a + b;
add(5, 10); // 15
const add2 = (a, b) => {
  return a + b; // this is a syntax rulw if you use curlybraces you must use return keyword
};
add2(5, 10); // 15

const add3 = (a, b) => a + b; // this is also implicit return, if you use paranthesis you dont need to use return keyword, mostly in react this syntax is used
add3(5, 10); //15

// object retu
const addtwo = (a, b) => ({ sum: a + b }); // if you want to return object use paranthesis
addtwo(5, 10); // {sum: 15}

// Q. Now, how would you rewrite this function to use an implicit return?
const getGreeting = (name) => {
  return "Hello, " + name;
};

// Answer:
// const getGreetingImplicit = (name) => "Hello, " + name;

// In your example, they're optional, but in one specific case, they are required.

// This happensIn your example, they're optional, but in one specific case, they are required.

// This happens when you want to implicitly return an object literal. JavaScript gets confused by the object's curly braces {}, thinking they are the start of a function body.

// To fix this, you must wrap the object in parentheses.

//  Incorrect
// const makeUser = (name) => { user_name: name }; // JS thinks {} is a function body

// Correct
const makeUser = (name) => ({ user_name: name }); // The () tells JS to return the object

// Q. Now, how would you rewrite this function to use an implicit return?

const getPoint = (x, y) => {
  return {
    x: x,
    y: y,
  };
};

// Answer:: const getPoint = (x, y) => ({ x: x, y: y });
