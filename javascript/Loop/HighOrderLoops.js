// syntax for a higher order loop:
// 1) for of loop
// 2) forEach loop
// 3) map loop
// 4) filter loop
// 5) reduce loop
// for in loop is not a higher order loop

// 1) for of loop
// let arr = [1, 2, 3, 4, 5];
// for (let num of arr) {
//   console.log(num);
//   console.log(arr.indexOf(num));
// }

// // for of loop with objects
// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); // ['a', 'b', 'c']
// for (let key of Object.keys(obj)) {
//   console.log(key); // a, b, c not in array
// }

// map loop
let user = new Map();
user.set("name", "John");
user.set("age", 30);
user.set("city", "New York");
// // console.log(user); // Map(3) {'name' => 'John', 'age' => 30, 'city' => 'New York'}
// for (let [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }
// let name = user.get("name"); // John
// user.has("age"); // true
// user.delete("city"); // true
// console.log(user);
// console.log(name); // undefined
// console.log(user.get("name")); // John
// console.log(user.has("age")); // false
// console.log(user.delete("city")); // false
// console.log(user.size); // 1

// for (let i of user) {
//   console.log(i); // output each entry as an array [key, value]
//   for (let j = 0; j < i.length; j++) {
//     console.log(i[j]); // output each key and value separately
//   }
// }
// ********************************************************************************************************************
// 2) forEach loop
// let arr = ["john", 2, 3, 4, 5];
// // arr.forEach((key, index) => {
// //   console.log(key, index);
// // });
// let message = "good Morining";
// let arrowfn = (message) => {
//   console.log(message);
// };
// arrowfn(message);
// console.log(arr.forEach(arrowfn));
// for each for Object
// let obj = { a: 1, b: 2, c: 3 };
// let objectkeys = Object.keys(obj);
// let objectentries = Object.entries(obj);
// console.log(objectentries);
// console.log(objectkeys);
// objectkeys.forEach((key) => {
//   console.log(key + ":" + obj[key]);
// });

// for in loop
// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj)); // ['a', 'b', 'c']
// for (let key in obj) {
//   // console.log(key + ":" + obj[key]);
//   console.log(key); // undefined undefined
// }

// ********************************************************************************************************************
let objarr = [
  { name: "john", age: 23 },
  { name: "doe", age: 25 },
];
objarr.forEach((key, index) => {
  console.log(key);
  console.log(key["name"]);
  console.log(objarr[index]["name "]); // this will give undefined why?
});

let map1 = new Map();
map1.set("name", "john");
map1.set("age", 23);
map1.set("city", "new york");
console.log(map1);
let mapentries = Object.entries(map1);
