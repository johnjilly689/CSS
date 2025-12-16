const books = [
  {
    bookName: "To Kill a Mockingbird",
    publishDate: "1960-07-11",
    genre: "Classic",
    price: 18.99,
  },
  {
    bookName: "The Hitchhiker's Guide to the Galaxy",
    publishDate: "1979-10-12",
    genre: "Science Fiction",
    price: 12.5,
  },
  {
    bookName: "Dune",
    publishDate: "1965-08-01",
    genre: "Science Fiction",
    price: 22.75,
  },
  {
    bookName: "1984",
    publishDate: "1949-06-08",
    genre: "Dystopian",
    price: 15.0,
  },
  {
    bookName: "The Lord of the Rings",
    publishDate: "1954-07-29",
    genre: "Fantasy",
    price: 35.99,
  },
];

let summ = books
  .filter((book) => book.genre === "Science Fiction")
  .reduce((acc, cum) => acc + cum.price, 0);
console.log(summ);

// The initialValue
// This is the starting value for your accumulator.
// If you're summing numbers, your initialValue would be 0.
// If you're building a string, your initialValue would be "".
// If you're building an object, your initialValue would be {}.

const array = ["a", "b", "c", "d", "e"];
const joined = array.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, "");

const reduced = [1, 2, 3, 4, 5];
const sum = reduced.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log(sum);
