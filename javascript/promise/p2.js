// Q2: Resolve vs. Reject
// Write a function named checkNumber that takes one argument: number.

// This function should return a new Promise.

// Inside the promise:

// If the number is greater than 10, resolve with the object { success: true, value: number }.

// If the number is 10 or less, reject with the object { success: false, error: 'Number too small' }.

// Test it by calling checkNumber(15) and checkNumber(5), using both .then() and .catch() to log the results.

// const checknumber = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number > 10) {
//       resolve({ success: true, value: number });
//     } else {
//       reject({ success: false, error: "number too small" });
//     }
//   });
// };

// Implementation using async/await and object literals for responses
// The async function implicitly returns a Promise. Returning a value resolves it;
// throwing an object rejects it.
const checkNumber = async (number) => {
  if (number > 10) {
    return { success: true, value: number }; // object literal for success
  }
  // object literal for failure — throwing causes the async function to reject
  throw { success: false, error: "Number too small" };
};

// Example usages - .then()/.catch()
checkNumber(15)
  .then((result) => {
    console.log("Then success:", result); // { success: true, value: 15 }
  })
  .catch((err) => {
    console.log("Then error:", err);
  });

checkNumber(5)
  .then((result) => {
    console.log("Then success (should not happen):", result);
  })
  .catch((err) => {
    console.log("Then catch:", err); // { success: false, error: 'Number too small' }
  });

// Example usage - async/await with try/catch
const runAsyncExamples = async () => {
  try {
    const res = await checkNumber(20);
    console.log("Await success:", res);
  } catch (err) {
    console.log("Await error:", err);
  }

  try {
    const res2 = await checkNumber(2);
    console.log("Await success (should not happen):", res2);
  } catch (err) {
    console.log("Await error:", err);
  }
};

runAsyncExamples();

// checknumber(15)
//   .then((message) => {
//     console.log(message.success);
//     console.log(message.value);
//   })
//   .catch((message) => {
//     console.log(message.success);
//     console.log(message.value);
//   });
// checknumber(5)
//   .then((message) => {
//     console.log(message.success);
//     console.log(message.value);
//   })
//   .catch((message) => {
//     console.log(message.success);
//     console.log(message.error);
//   });
