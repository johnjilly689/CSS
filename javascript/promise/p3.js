// Question 3: fetch with .then()/.catch()
// Use this URL: https://jsonplaceholder.typicode.com/todos/1

// Use fetch() to make a request to that URL.

// Use a .then() block to check if the response.ok property is true. If not, throw new Error('Network response was not ok').

// In the same .then() block, return response.json().

// Add a second .then() block to receive the final data and log just the title property.

// Add a .catch() block at the end to log any errors.

const fetchtodo = async () => {
  console.log("hello world");
  const urls = "https://jsonplaceholder.typicode.com/todos/1";
  const fetched = await fetch(urls);
  fetched
    .then((response) => {
      if (!response.ok) {
        throw new Error("network access problem");
        // throw new console.error("there is error");
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

fetchtodo();

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network respose was not ok");
//     } else {
//       return response.json();
//     }
//   })
//   .then((response) => {
//     console.log(response); //to check json data
//     console.log(response.id);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//   When you write this line:

// throw new Error('Network response was not ok');

// ...you are creating a new Error object, and the string you pass in is automatically stored in its .message property.

// When your .catch(error) block receives it, error is that object, so error.message gives you back the string "Network response was not ok".
