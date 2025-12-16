// the final and most advanced question, which uses Promise.all() to run requests in parallel.

// 💡 Question 6: Promise.all() with async/await
// Task: Fetch data from two different APIs at the same time.

// You have two URLs:

// User 1: https://api.github.com/users/hiteshchoudhary

// User 2: https://api.github.com/users/torvalds (Linus Torvalds)

// Write an async function named getBothUsers().

// Inside a try...catch block, use Promise.all() to start both fetch requests at the same time.

// await the Promise.all() to get an array of [response1, response2].

// Check if both responses are .ok.

// Separately, parse the JSON for both responses (you can use Promise.all() again for this part: await Promise.all([response1.json(), response2.json()])).

// Log the follower count (followers) for both users.

const getBothUsers = async () => {
  const [user1, user2] = [
    "https://api.github.com/users/hiteshchoudhary",
    " https://api.github.com/users/torvalds",
  ];
  try {
    const response = await Promise.all([fetch(user1), fetch(user2)]);
    //promise.all()return an array so we can use array method in them
    for (const res of response) {
      console.log(res);
      console.log(res.server); //Server information is usually in the headers, which you can access with res.headers.get('server')
      console.log(res.status);
      if (!res.ok) {
        throw new Error("one of error occur", res.status);
      }
    }
    // The .map() method iterates over every single element in an original array, one by one. It runs a function (that you provide) on each element and collects the return value from that function.
    // Finally, it puts all those return values into a brand new array and gives it back to you.
    // The most important part is that the original array is not changed.

    const data = await Promise.all(response.map((res) => res.json()));
    console.log(data[0]);
    console.log(data[1]);

    //     if (!response.ok) {
    //       throw new Error(`error in ${response}`);
    //     } else {
    //       const data = await response.json();
    //       console.log(data[0]);
    //       console.log(data[1]);
    //     }
    //   } catch (error) {
    //     console.error(error.message);
    //   }
  } catch (error) {
    console.error(error.message);
  }
};

getBothUsers();
