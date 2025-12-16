// The join() method is a simple way to take an array and convert it into one single string. It "joins" all the elements together using a separator you specify.

// Syntax

// array.join(separator)
// separator (optional):A string to put between each element. If you don't provide one, the default is a comma (,).

// Examples
// 1. Default Behavior (No Separator)
// If you don't provide a separator, join() uses a comma by default.

const fruits = ["apple", "banana", "orange"];
const result = fruits.join();

console.log(result);
// // Output: "apple,banana,orange"
// 2. Joining with an Empty String ('')
// This is very common for joining single characters into a word.

const letters = ["H", "e", "l", "l", "o"];
const results = letters.join(""); // Use an empty string

console.log(results);
// Output: "Hello"
// 3. Joining with a Custom String
// You can use any string as the "glue" between elements.

// Using a space (' '):

const words = ["This", "is", "a", "sentence"];
const resultss = words.join(" "); // Use a space

console.log(resultss);
// Output: "This is a sentence"
// Using a dash (-):

const urlSlug = ["learn", "javascript", "today"];
const resultsss = urlSlug.join("-"); // Use a dash

console.log(resultsss);
// Output: "learn-javascript-today"
// 🔑 Key Points to Remember
// It returns a new string.
// The original array is not changed at all.
// If an element is undefined or null, it's converted to an empty string ("") in the result.
