const exporting = {
  name: "Exporting Module",
  type: "CommonJS Module",
};

module.exports = exporting;
console.log(exports, require, module, __dirname, __filename);

// path means in which file we are currently working
