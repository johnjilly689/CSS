//filesystem module
const fs = require("fs"); //fs is filesystem module, used to work with files inbuilt in nodejs
const path = require("path"); //path module to handle file paths correctly
// console.log(fs);
// try {
//   const filePath = path.join(__dirname, "..", "studyfile.txt"); //go up one level from Module to Backened folder
//   const r = fs.readFileSync(filePath, "utf-8"); //synchronous way of reading file
//   console.log(r);
// } catch (error) {
//   console.error(error);
// }
// console.log(path.dirname(fname));
try {
  const fname = "./studyfile.txt";
  // Resolve the relative path to absolute path using __dirname
  // const resolvedPath = path.resolve(__dirname, fname);
  const r = fs.readFileSync(fname, "utf-8");
  console.log(r);
} catch (error) {
  console.error(error);
}
