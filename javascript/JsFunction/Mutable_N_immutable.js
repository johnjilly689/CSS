var x = "john";
var y = x;
var x = "doe";
console.log(y); // Output: john
console.log(x); // Output: doe

// In JavaScript, data types are divided into two categories when it comes to mutability:

// 🔹 Immutable Data Types (Primitive Types)
// These cannot be changed once created. When you modify them, a new value is created.

// Data Type	Example
// String	"hello"
// Number	42, 3.14
// Boolean	true, false
// null	null
// undefined	undefined
// Symbol	Symbol("id")
// BigInt	12345678901234567890n

// ✅ These are immutable — you can't change part of them:

// js
// Copy
// Edit
// let str = "hello";
// str[0] = "H";  // ❌ doesn't change the string
// console.log(str); // "hello"
// 🔹 Mutable Data Types (Non-Primitive / Reference Types)
// These can be changed after they are created.

// Data Type	Example
// Object	{ name: "John" }
// Array	[1, 2, 3]
// Function	function() {}
// Date, Map, Set, etc.

// ✅ These are mutable — you can change their contents:

// js
// Copy
// Edit
// let arr = [1, 2, 3];
// arr[0] = 10;
// console.log(arr); // [10, 2, 3]

// let obj = { name: "John" };
// obj.name = "Alice";
// console.log(obj); // { name: "Alice" }
// 🔁 Summary Table:
// Data Type	Mutable?
// String	❌ No
// Number	❌ No
// Boolean	❌ No
// undefined	❌ No
// null	❌ No
// Symbol	❌ No
// BigInt	❌ No
// Object	✅ Yes
// Array	✅ Yes
// Function	✅ Yes
// Map, Set	✅ Yes
