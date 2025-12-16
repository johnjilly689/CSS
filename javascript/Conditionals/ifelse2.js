let val = () => {
  let i = 0;
  return "10 is greater than 5";
};

let val2 = () => {
  let i = 0;
};

// null coalescing operator ??
let name = val2() ?? val();
console.log(name);

function getUser(id) {
  console.log("hello");
  //   return "wow";
}
let user = getUser(1);
console.log(user); // gives return value of function which is undefined
console.log(getUser(2));
getUser(3);
//  only give statement inside function
