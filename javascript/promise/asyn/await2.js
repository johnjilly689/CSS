// Question 5. This one is more advanced and very common in real-world applications. You'll use the data from one API call to make a second one.

// 💡 Question 5: Chained async/await (Real-World)
// Task: Fetch data, and then use that data to make a second fetch.

// Write an async function named getGithubFollowers().

// First Fetch: await a fetch request to https://api.github.com/users/hiteshchoudhary.

// Parse the JSON from the response. This data object will have a property called followers_url.

// Second Fetch: await a new fetch request using the data.followers_url as the URL.

// Parse the JSON from this second response. This will be an array of follower objects.

// Log the name (which is the login property) of the first follower in the array.

// Don't forget to wrap it all in try...catch!

// const getGithubFollowers = async () => {
//     the await fetch(...) line is outside your try...cache block. If that fetch itself fails (like a network error, or you're offline), your catch block won't catch it, and your program will crash.

// The try block should wrap all your asynchronous code, starting with the very first await.
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     if (!response.ok) {
//       throw new Error("there is error");
//     } else {
//       const data = await response.json();
//       console.log(data);
//       const followers_url = data.followers_url;
//       console.log(`this is follower list ${followers_url}`);
//       const Ffollowers_url = await fetch(followers_url);
//       if (!Ffollowers_url.ok) {
//         throw new Error("error in followers url");
//       } else {
//         const DFfollowers_url = await Ffollowers_url.json();
//         console.log(DFfollowers_url);
//         console.log(`fist follower of hitesh is ${DFfollowers_url[0].login}`);
//       }
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// getGithubFollowers();
