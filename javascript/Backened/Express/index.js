import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const user = [
  {
    name: "John Doe",
    age: 30,
    email: "John@gmail.com",
  },
];
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/user", (req, res) => {
  res.json(user);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
