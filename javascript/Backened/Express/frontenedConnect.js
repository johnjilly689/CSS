// async function getUser() {
//   try {
//     const response = await fetch("http://localhost:3000/user");

//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Success! User Data:", data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// // Call the function
// getUser();
axios
  .get("http://localhost:3000/user")
  .then((response) => {
    console.log("User Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
