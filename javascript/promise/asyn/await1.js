// Question 4: Refactor to async/await
// Solve Question 3 again, but this time using async/await.

// Write an async function named getTodo().

// Inside the function, use try...catch to handle errors.

// Inside the try block:

// await the fetch() call and store it in a response variable.

// Check if response.ok is true, and throw new Error() if not.

// await the response.json() and store it in a data variable.

// Log the data.title to the console.

// Inside the catch block, log the error.message.

// Call your getTodo() function to run it.

const getTodo = async () => {
  try {
    const apiurl = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!apiurl.ok) {
      //         important: fetch() and Errors
      // The fetch() promise only rejects on a network failure (e.DEGREES, you're offline).

      // It fulfills (succeeds) even if the server sends back an error like 404 Not Found or 500 Internal Server Error. This is why you must manually check response.ok or response.status in your .then() block.
      throw new Error(`${apiurl.status}`);
    } else {
      const data = await apiurl.json();
      console.log(data);
      console.log(data.id);
    }
  } catch (error) {
    console.error(error.message);
  }
};
getTodo();

// fetch() returns a Promise.

// This promise does not immediately contain your data. It resolves to a Response object as soon as the server sends back its headers.

// What This Means
// The Response object is the initial reply from the server. It contains metadata about the response, such as:

// response.status: The HTTP status code (e.g., 200, 404).

// response.ok: A boolean that is true if the status code is in the 200-299 range.

// To get the actual data (like JSON or text), you must call a second, asynchronous method on the Response object. This method also returns a promise.

// Example
// This is why fetch almost always involves a two-step process as you seen above code
