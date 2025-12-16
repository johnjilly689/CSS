// Q1Summing Numbers Given an array of numbers, use a for...of loop to calculate and log the sum of all the numbers.

// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);

// Finding the Longest Word
// Given an array of words, use a for...of loop to find and log the longest word in the array.
// const words = ["hello", "world", "javascript", "coding", "awesome"];
// let longestWord = "";
// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(longestWord);

// Challenge 7: reduce (Advanced Tally)
// // Given an array of strings, use .reduce() to create an object that counts the occurrences of each string.
// // // Hint: Your initialValue will be an empty object ({}).

// const votes = ["yes", "no", "yes", "yes", "no"];

// const tally = votes.reduce((acc, vote) => {
//   // 'acc' is our object, e.g., {} or {yes: 1}
//   // 'vote' is the current string, e.g., "yes"

//   // 1. Check if the key (e.g., 'yes') already exists in our object
//   if (acc[vote]) {
//     // 2. If it exists, increment its count
//     acc[vote] = acc[vote] + 1;
//   } else {
//     // 3. If it doesn't exist, this is the first time. Set its count to 1.
//     acc[vote] = 1;
//   }

//   // 4. MUST return the accumulator for the next loop
//   return acc;
// }, {}); // <-- 5. Start with an empty object as the initialValue

// console.log(tally);
// // Output: { yes: 3, no: 2 }

// Given an array of people, use .reduce() to create a new object that groups them by their team.
const people = [
  { name: "Alice", team: "blue" },
  { name: "Bob", team: "red" },
  { name: "Charlie", team: "blue" },
  { name: "David", team: "red" },
];

const newreduce = people.reduce((acc, person) => {
  const team = person.team;
  if (!acc[team]) {
    acc[team] = [];
  }
  acc[team].push(person);
  return acc;
}, {});
console.log(newreduce);

// Expected Output:
// {
//   blue: [
//     { name: 'Alice', team: 'blue' },
//     { name: 'Charlie', team: 'blue' }
//   ],
//   red: [
//     { name: 'Bob', team: 'red' },
//     { name: 'David', team: 'red' }
//   ]
// }
