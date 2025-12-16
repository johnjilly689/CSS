function say() {
  console.log("Hello, World!");
}

say; // This function does nothing, it is called reference
say(); // This calls the function execution

// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

// Example
// Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}
// Why Functions?
// With functions you can reuse code

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.

// The () Operator
// The () operator invokes (calls) the function:

// Example
// Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  //if you dont use return, the function will return undefined
  //return is used to return a value from the function, but return must be assigned to a variable or used in an expression to be useful
  //if you dont use return, the function will not return anything useful
  return (5 / 9) * (fahrenheit - 32);
}
toCelsius(32); // Output: 0, the function is called but the return value is not used because return is not assigned to a variable,it is just called but it is virtually ignored
let value = toCelsius(77);
console.log(value); // Output: 25
