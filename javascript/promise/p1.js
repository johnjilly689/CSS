// 💡 Question 1: The Basic Promise
// Task: Create a simple "delay" function.

// Write a function named delay that takes one argument: time (in milliseconds).

// This function should return a new Promise.

// Inside the promise, use setTimeout to resolve the promise after the given time.

// Resolve the promise with the message: "Success! Waited for ${time}ms".

// Test it: Call your function and use .then() to log the success message to the console.
//  answer
// const delay = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout((time) => {
//       //time will give undefined, remove time from setTimeout as this is closure propery
//       resolve(`success waited for ${time}ms`);
//     }, time);
//   });
// };

// delay(2000).then((message) => {
//   console.log(message);
// });

// const delay = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Success! Waited for ${time}ms`);
//     }, time);
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("i am final");
//     });
// };

const time = 2000;

// trying this by async

const delay = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Success! Waited for ${time}ms`);
    }, time);
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("i am final");
    });
};

delay(time);
