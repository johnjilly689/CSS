let arr = [1, 2, 3, 4, 5];
let newarr = arr.map((key) => {
  return key == "2" ? key * 2 : "not a 2";
});
console.log(newarr); // [2, 4, 6, 8, 10]
// let arr1=["john",2,3,4,5];
// let newarr1=arr1.map((key)=>{
//     return key+"hello";
// });
// console.log(newarr1); // ['johnhello', '2hello', '3hello', '4hello', '5hello']
